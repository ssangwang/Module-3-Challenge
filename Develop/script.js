// Assignment code here
function generatePassword() {
var passCharacter = "123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm!@#$%^&*()";
var passLength = 16;
var password = "";
for (var i = 0; i <= passLength; ++i){
  var randomNumber = Math.floor(Math.random() * passCharacter.length);
  password += passCharacter.substring(randomNumber, randomNumber + 1);
}
return password;
}

// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




