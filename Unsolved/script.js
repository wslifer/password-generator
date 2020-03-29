// Assignment Code
var generateBtn = document.querySelector("#generate");
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var chars = [];
  var password = '';
  var passLength = parseInt(prompt('How many characters would you like your password to be? (8-128)'));

  if (passLength < 8 || passLength > 128) {
    alert('Password must be between 8 and 128 characters!')
  }
  else{
    if(confirm('Would you like special characters?')){
      
    };
  }
  return password;
}