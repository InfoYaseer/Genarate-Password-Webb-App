const passwordbox = document.getElementById("password");
const length = 15;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+|}{][></-=.";
const allchars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(password.length < length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordbox.value = password;
}

function copyPassword(){
    passwordbox.select();
    navigator.clipboard.writeText(passwordbox.value)
        .then(() => alert("Password copied!"))
        .catch(err => alert("Failed to copy"));
}
