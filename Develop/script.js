// Assignment code here

// Options 
function passOptions() {
  var lengthOption = prompt("Please enter desired password length: 8-128 Characters");
  if (lengthOption < 8) {
    window.alert("User cancelled entry");
    lengthOption = ("null");
  }
  else if (lengthOption > 128) {
    window.alert("User cancelled entry");
    lengthOption = ("null");
  }
  else {
  }
  console.log(lengthOption);
  return lengthOption;
}

function charOptions() {
  var characterOp = confirm("Please choose characters to use: lowercase, uppercase, numeric, special characters. [Minimum 2]");
  if (characterOp = true){
    confirm("Use Lowercase characters?");
    characterOp = ("qwertyuiopasdfghjklzxcvbnm");
    if (characterOp = ("qwertyuiopasdfghjklzxcvbnm"));
    confirm("Use Uppercase characters?");
    if (characterOp = true){
      characterOp = ("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM");
      if (characterOp = ("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"));
      confirm("Use numeric characters?");

      if ( characterOp = false){
        characterOp = ("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM")
      }

      else if (characterOp = true){
        characterOp = ("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890");
        confirm("Use special characters?");
      }

      if (characterOp = false){
      characterOp = ("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789")
      }
      
      else if( characterOp = true){
        characterOp = ("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$&*")
      }

    }

  }
console.log(characterOp);
return characterOp;
}
 /*
  if (characterOp === "LUNS") {
    window.alert("You have selcted lowercase, uppercase, numeric, and special characters");
    characterOp = ("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789!@#$%^&*");
  }
  else if (characterOp === "LUN") {
    window.alert("You have selcted lowercase, uppercase, and numeric characters");
    characterOp = ("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890");
  }
  else if (characterOp === "UNS") {
    window.alert("You have selected uppercase, numeric, and special characters");
    characterOp = ("QWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()");
  }
  else if (characterOp === "LNS") {
    window.alert("You have slected lowercase, numeric, and special characters");
    characterOp = ("qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()");
  }
  else if (characterOp != "LUNS") {
    window.alert("Please select valid character!");
    characterOp = ("undefined");
  }
  console.log(characterOp);
  return characterOp;
}
*/
// Password generator function 
function generatePassword() {
  var passLength = passOptions();
  var passCharacter = charOptions();
  var password = "";
  for (var i = 0; i <= passLength; ++i) {
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