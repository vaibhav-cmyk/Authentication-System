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

function showMessage(elementId, text) {
  const msgEl = document.getElementById(elementId);
  if (!msgEl) return;
  msgEl.innerText = text;
  msgEl.style.opacity = "1";
  setTimeout(() => { msgEl.style.opacity = "0"; }, 2000);
}

// Live password validator
function validatePassword() {
  const pwd = document.getElementById("reg-password").value;
  
  document.getElementById("rule-length").className = pwd.length >= 8 ? "valid" : "invalid";
  document.getElementById("rule-uppercase").className = /[A-Z]/.test(pwd) ? "valid" : "invalid";
  document.getElementById("rule-lowercase").className = /[a-z]/.test(pwd) ? "valid" : "invalid";
  document.getElementById("rule-number").className = /\d/.test(pwd) ? "valid" : "invalid";
  document.getElementById("rule-special").className = /[!@#$%]/.test(pwd) ? "valid" : "invalid";
}

function register() {
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value.trim();
  const confirm = document.getElementById("reg-confirm").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    showMessage("reg-message", "Invalid email format!");
    return;
  }

  if (!password || !(/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%]/.test(password) && password.length >= 8)) {
    showMessage("reg-message", "Password does not meet all requirements!");
    return;
  }

  if (password !== confirm) {
    showMessage("reg-message", "Passwords do not match!");
    return;
  }

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  showMessage("reg-message", "Registration successful! Redirecting to login...");
  setTimeout(showLogin, 5000);
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
    showMessage("login-message", "Invalid credentials!");
  }
}

function logout() {
  document.getElementById("welcome").style.display = "none";
  showLogin();
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
}
function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    icon.innerText = "🙈"; // change icon
  } else {
    input.type = "password";
    icon.innerText = "👁️";
  }
}
