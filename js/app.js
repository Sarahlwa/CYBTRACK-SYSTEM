function login() {
  let email = document.querySelector('input[type="email"]').value;

  let password = document.querySelector('input[type="password"]').value;

  if (email === "admin@gmail.com" && password === "12345") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Login");
  }
}
