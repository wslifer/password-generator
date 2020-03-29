// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var spc = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";

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
  else {
    if (confirm('Would you like to use special characters?')) {
      chars.push(spc)
    };
    if (confirm('Would you like to use numbers?')) {
      chars.push(num)
    };
    if (confirm('Would you like to use lower case letters?')) {
      chars.push(lower)
    };
    if (confirm('Would you like to use upper case letters?')) {
      chars.push(upper)
    };
    if(chars.length === 0){
      alert('Password must contain characters')
    }
    else{

    };
  };
  return password;
}