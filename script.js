// Assignment Code
var submit = document.querySelector("#submit");
var chooseUppercase = document.querySelector("#chooseUppercase");
var chooseLowercase = document.querySelector("#chooseLowercase");
var chooseNumbers = document.querySelector("#chooseNumbers");
var chooseSymbols = document.querySelector("#chooseSymbols");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers 
var symbols

function randomPassword(characters){
    var character = characters[Math.floor(Math.random() * characters.length)];
    return character; 
}
function generatePassword(){
    if (lowerCase) {
        
    }
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
submit.addEventListener("click", writePassword);
