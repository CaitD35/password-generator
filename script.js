// Added click function to button
var generateBtn = document.querySelector("#generate");

// variables 
var numbers = [0,1,2,3,4,5,6,7,8,9]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specCharacters = ["!","@","#","$","%","&","*"]
var selectionArray = [];
var selectedPassword = "";




function generatePassword() {
  console.log("hello");
  var passwordLength = parseInt(prompt("Choose a number between 8-128"));
   // conditionals for password criteria
   if (passwordLength < 8 || passwordLength > 128){
    alert("password length must be between 8-128")
    return null;
  }

  var hasNumbers = confirm("Do you want to include numbers?")
  var hasLower = confirm("Do you want to include lower case letters?")
  var hasUpper = confirm("Do you want to include uppercase letters?")
  var hasCharacters = confirm("Do you want to include special characters?")

  // conditional statement for users choices
  if (!hasNumbers && !hasLower && !hasUpper && !hasCharacters){
    alert("You must choose one character type")
    return null;
  }

  if (hasNumbers) {
    selectionArray = selectionArray.concat(numbers)
  }

  if (hasLower) {
    selectionArray = selectionArray.concat(lowerCase)
  }

  if (hasUpper){
    selectionArray = selectionArray.concat(upperCase)
  }

  if (hasCharacters) {
    selectionArray = selectionArray.concat(specCharacters)
  }
// To pull characters randomly and create password

  for (var i = 0; i < parseInt(passwordLength); i++) {
    var random = Math.floor(Math.random() * selectionArray.length);
    var p = selectionArray[random]
    selectedPassword = selectedPassword.concat(p);

  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = selectedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
