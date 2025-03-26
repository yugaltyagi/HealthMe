document.addEventListener("DOMContentLoaded", function () { 
    const form = document.getElementById("signupForm");

    // BMI Calculation
    document.getElementById("height").addEventListener("input", calculateBMI);
    document.getElementById("weight").addEventListener("input", calculateBMI);

    function calculateBMI() {
        let height = document.getElementById("height").value;
        let weight = document.getElementById("weight").value;
        if (height > 0 && weight > 0) {
            let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
            document.getElementById("bmi").value = bmi;
        }
    }

    // Form Submission
    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent form from reloading page

        console.log("Form Submitted!");

        const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value.trim(),
            age: document.getElementById("age").value.trim(),
            gender: document.getElementById("gender").value,
            height: document.getElementById("height").value.trim(),
            weight: document.getElementById("weight").value.trim(),
            bmi: document.getElementById("bmi").value.trim(),
            blood_group: document.getElementById("blood_group").value,
            location: document.getElementById("location").value.trim()
        };

        console.log("Form Data:", formData);
        for (let key in formData) {
            if (!formData[key]) {
                alert(`Error: ${key} field is empty!`);
                return; // Stop execution
            }
        }

        try {
            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message); // Display success message from the server
                window.location.href = "/home";  // Redirect to home page after registration
            } else {
                alert("Error: " + result.error);
            }
        } catch (error) {
            alert("Something went wrong! " + error);
        }
    });
});
