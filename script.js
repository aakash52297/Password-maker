// Assignment Code
// Variables Which I have Stated
var form = document.querySelector(".form");
var chooseUppercase = document.querySelector("#chooseUppercase");
var chooseLowercase = document.querySelector("#chooseLowercase");
var chooseNumbers = document.querySelector("#chooseNumbers");
var chooseSymbols = document.querySelector("#chooseSymbols");
var characterNums = document.querySelector("#amountForCharacters");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "'", "#", "$", "%", "&", "", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\" ];

function randomPassword(characters){
    var character = characters[Math.floor(Math.random() * characters.length)];
    return character; 
}
function generatePassword(){
  var choices = []
  var password = []
    if (chooseLowercase.checked){
      password.push(randomPassword(lowerCase))
      choices.push(...lowerCase)
    }
    if (chooseUppercase.checked){
      password.push(randomPassword(upperCase))
      choices.push(...upperCase)
    }
    if (chooseNumbers.checked){
      password.push(randomPassword(numbers))
      choices.push(...numbers)
    }
    if (chooseSymbols.checked){
      password.push(randomPassword(symbols))
      choices.push(...symbols)
    }
    for(var i = password.length; i < characterNums.value; i ++){
      password.push(randomPassword(choices))
    }
    return password.join("");
}
function writePassword(e) {
  e.preventDefault()
  var oneBoxChecked = chooseUppercase.checked || chooseLowercase.checked || chooseNumbers.checked || chooseSymbols.checked;
    if (oneBoxChecked) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerText = password;
  }
  else{
    alert("atleast one checkbox must be checked")
  }
  

}

// Add event listener to generate button
form.addEventListener("submit", function(e){writePassword(e)});