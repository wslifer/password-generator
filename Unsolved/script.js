// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passLength = parseInt(prompt('How many characters would you like your password to be? (min 8)'));

  if (passLength > 8) {
    var useChar = confirm('Would you like special characters?');
  }
  return password;
}