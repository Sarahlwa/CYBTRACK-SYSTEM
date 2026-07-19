const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Save the mode
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

// Keep the user's choice when they refresh
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}