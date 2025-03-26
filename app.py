from flask import Flask, request, jsonify, render_template, redirect, url_for, flash
import mysql.connector
import os

app = Flask(__name__, template_folder="templates")
app.secret_key = "your_secret_key"  

# Home Route (Home Page)
@app.route('/home')
def home_page():
    return render_template("Home.html") 

@app.route('/')
def register1():
    return render_template("Home.html")

@app.route('/aboutus')
def about_us():
    return render_template("AboutUs.html")

@app.route('/bot')
def chatbot():
    return render_template("bot.html")

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

        return jsonify({"message": "Registration successful! Redirecting to home."})

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
            return redirect(url_for('home_page'))  
        else:
            flash("Invalid credentials. Please try again.", "danger")
            return render_template('login.html')  

    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
