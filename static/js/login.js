document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const body = document.body;

    // Check Local Storage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Go Dark";
    }

    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            darkModeToggle.textContent = "Go Dark";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            darkModeToggle.textContent = "Go Light";
        }
    });
});
