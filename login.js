function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (!username.trim() || !password.trim()) {
        console.error("Please fill in both username/email and password fields.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        console.error("Please enter a valid email address.");
        return;
    }
    if (password.length < 6) {
        console.error("Password must be at least 6 characters long.");
        return; 
    }
    console.log("Username or Email: " + username);
    console.log("Password: " + password);
}

