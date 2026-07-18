const Username = document.getElementById("Username");
const Password = document.getElementById("Password");
const LoginButton = document.getElementById("Login");

LoginButton.addEventListener('click', function() {
    const username = Username.value.trim();
    const password = Password.value.trim();

    if (!username && !password) {
        alert("Username and Password are missing.");
        return;
    }

    if (!username) {
        alert("Username is missing.");
        return;
    }

    if (!password) {
        alert("Password is missing.");
        return;
    }

    if (username === "TaranveerSingh" && password === "password") {
        alert("Login successful!");
        window.location.href = "BetterBank2.html";
    } else {
        alert("Invalid username or password.");
    }
});