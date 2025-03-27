document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let responseMessage = document.getElementById("responseMessage");

    if (name === "" || email === "" || message === "") {
      responseMessage.style.color = "red";
      responseMessage.textContent = "Please fill in all fields!";
      return;
    }

    if (!validateEmail(email)) {
      responseMessage.style.color = "red";
      responseMessage.textContent = "Please enter a valid email!";
      return;
    }

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        responseMessage.style.color = "green";
        responseMessage.textContent = result.message;
        setTimeout(() => {
          document.getElementById("contactForm").reset();
          responseMessage.textContent = "";
        }, 2000);
      } else {
        responseMessage.style.color = "red";
        responseMessage.textContent = result.error || "Something went wrong!";
      }
    } catch (error) {
      responseMessage.style.color = "red";
      responseMessage.textContent = "Error: Unable to send message!";
      console.error("Error:", error);
    }
  });

// Function to validate email format
function validateEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}