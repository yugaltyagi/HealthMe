document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email!");
        return;
    }

    // Simulating sending a reset email (replace with actual backend call)
    alert("A password reset link has been sent to " + email);
});