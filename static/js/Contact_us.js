document
.getElementById("contactForm")
.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseMessage = document.getElementById("responseMessage");

  // Validate input fields
  if (!name || !email || !message) {
    responseMessage.style.color = "red";
    responseMessage.textContent = "Please fill in all fields!";
    return;
  }

  // Validate email format
  if (!validateEmail(email)) {
    responseMessage.style.color = "red";
    responseMessage.textContent = "Please enter a valid email!";
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  try {
    const response = await fetch("/contact", {
      method: "POST",
      body: formData,
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

// Helper function to validate email format
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}