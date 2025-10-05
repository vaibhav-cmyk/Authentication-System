function showLogin() {
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("form-title").innerText = "Login";
}

function showRegister() {
  document.getElementById("register-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("form-title").innerText = "Register";
}

function register() {
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value.trim();
  const confirm = document.getElementById("reg-confirm").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  if (!emailRegex.test(email)) {
    alert("Invalid email format!");
    return;
  }

  if (!passRegex.test(password)) {
    alert("Password must contain at least 8 characters, one uppercase letter, one number, and one special character.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  alert("Registration successful! Please login now.");
  showLogin();
}

function login() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const storedEmail = localStorage.getItem("email");
  const storedPass = localStorage.getItem("password");

  if (email === storedEmail && password === storedPass) {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("form-title").innerText = "Welcome!";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("welcome-msg").innerText = `You are logged in as ${email}`;
  } else {
    alert("Invalid credentials!");
  }
}

function logout() {
  document.getElementById("welcome").style.display = "none";
  showLogin();
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
}
