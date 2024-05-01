function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
   
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



// function handleFormSubmit(event) {
//     event.preventDefault();
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var emailRegex = /^ [^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(username)) {
//         console.error("Please enter a valid email address.");
//         return; 
//     }
//     if (password.length < 6) {
//         console.error("Password must be at least 6 characters long.");
//         return;
//     }
//     console.log("Username (Email): " + username);
//     console.log("Password: " + password);
// }
// document.getElementById("loginForm").addEventListener("submit", handleFormSubmit);
