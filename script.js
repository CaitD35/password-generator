// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("hello");
  var passwordLength = prompt("Choose a number between 8-128");
  console.log(passwordLength);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
