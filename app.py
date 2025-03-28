from flask import Flask, request, jsonify, render_template, redirect, url_for, flash
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import mysql.connector

app = Flask(__name__, template_folder="templates")
app.secret_key = "your_secret_key"


SMTP_SERVER = "smtp.gmail.com" 
SMTP_PORT = 587  
SENDER_EMAIL = "thecodedevtaproject@gmail.com"  
SENDER_PASSWORD = "fnvp sumt ziht wpji" 

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/register')
def register1():
    return render_template("register.html")

@app.route('/bot')
def chatbot():
    return render_template("bot.html")

@app.route('/aboutus')
def about_us():
    return render_template("About_us.html")

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()

        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        age = data.get('age')
        gender = data.get('gender')
        height = data.get('height')
        weight = data.get('weight')
        bmi = data.get('bmi')
        blood_group = data.get('blood_group')
        location = data.get('location')

        db = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",
            database="healthme"
        )
        cursor = db.cursor()

        query = "INSERT INTO users (name, email, password, age, gender, height, weight, bmi, blood_group, location) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        values = (name, email, password, age, gender, height, weight, bmi, blood_group, location)

        cursor.execute(query, values)
        db.commit()
        cursor.close()
        db.close()

        return jsonify({"message": "Registration successful!", "redirect": url_for('home')})



    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        db = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",
            database="healthme"
        )
        cursor = db.cursor()
        query = "SELECT * FROM users WHERE email = %s AND password = %s"
        cursor.execute(query, (email, password))
        user = cursor.fetchone()

        cursor.close()
        db.close()

        if user:
            return redirect(url_for('home'))
        else:
            #flash("Invalid credentials. Please try again.", "danger")
            return render_template('login.html')

    return render_template('login.html')

@app.route('/reset_password', methods=['GET', 'POST'])
def reset_password():
    if request.method == 'POST':
        try:
            data = request.get_json()
            email = data.get('email')
            new_password = data.get('new_password')

            if not email or not new_password:
                return jsonify({"error": "Email and password are required!"}), 400

            db = mysql.connector.connect(
                host="localhost",
                user="root",
                password="",
                database="healthme"
            )
            cursor = db.cursor()

            cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
            user = cursor.fetchone()

            if not user:
                return jsonify({"error": "Email not found!"}), 404

            cursor.execute("UPDATE users SET password = %s WHERE email = %s", (new_password, email))
            db.commit()
            cursor.close()
            db.close()

            return jsonify({"message": "Password reset successful! You can now login."})

        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return render_template("Reset.html")

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        try:
            name = request.form.get('name')
            email = request.form.get('email')
            message = request.form.get('message')

            if not name or not email or not message:
                return jsonify({"error": "All fields are required!"}), 400

            subject = "New Contact Form Submission"
            body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

            msg = MIMEMultipart()
            msg['From'] = SENDER_EMAIL
            msg['To'] = SENDER_EMAIL
            msg['Subject'] = subject
            msg.attach(MIMEText(body, 'plain'))

            try:
                server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
                server.starttls()
                server.login(SENDER_EMAIL, SENDER_PASSWORD)
                server.sendmail(SENDER_EMAIL, SENDER_EMAIL, msg.as_string())
                server.quit()
                return jsonify({"message": "Message sent successfully!"})

            except smtplib.SMTPException as smtp_error:
                return jsonify({"error": f"SMTP Error: {smtp_error}"}), 500

        except Exception as e:
            return jsonify({"error": f"Unexpected error: {str(e)}"}), 500

    return render_template("Contact_us.html")

if __name__ == '__main__':
    app.run(debug=True)