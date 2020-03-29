// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ['1','2','3','4','5','6','7','8','9','0'];
var spc = ['!','@','#','$','%','^','&','*','(',')','_','-','[','{',']','}',';',':','/','.','>','<',',','`','~','=','+','*'];

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
      Array.prototype.push.apply(chars, spc);
    };
    if (confirm('Would you like to use numbers?')) {
      Array.prototype.push.apply(chars, num);
    };
    if (confirm('Would you like to use lower case letters?')) {
      Array.prototype.push.apply(chars, lower);
    };
    if (confirm('Would you like to use upper case letters?')) {
      Array.prototype.push.apply(chars, upper);
    };
    if (chars.length === 0) {
      alert('Password must contain characters');
    };
    for (var i = 0; i < passLength; i++) {
      var randPass = Math.floor(Math.random() * chars.length);
      password += chars[randPass];

    };
  };
  return password;}
