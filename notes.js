
var loginAttempts = 0
var loggedIn = false;

while (!loggedIn && loginAttempts < 3) {

    var username = prompt('Username:');

    var password = prompt('Password:');

    if (username == 'samy123' && password == '12345') {

        alert('Welcome back, ' + username);

        loggedIn = true;

    } else {

        alert('Inaccurate credentials!');
        loginAttempts += 1;

    }
    
    alert("You have been locked out of your account. Reason: Too many password attempts")
}
