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
  var lowercaseChar = ("qwertyuiopasdfghjklzxcvbnm")
  var uppercaseChar = ("QWERTYUIOPASDFGHJKLZXCVBNM")
  var numericChar = ("12345679")
  var specialChar = ("!@#$%^&*()")
  var allChar = ("")

  if (confirm("Please choose characters to use: lowercase, uppercase, numeric, special characters.")) {
    if (confirm("use lowercase?")) {
     allChar += allChar.concat(lowercaseChar)
    }

    if (confirm("use uppercase?")) {
      allChar += allChar.concat(uppercaseChar)
    }

    if (confirm("use numeric?")) {
      allChar += allChar.concat(numericChar)
    }

    if (confirm("use special?")) {
      allChar += allChar.concat(specialChar)
    }
    console.log(allChar)
    return allChar
  }
}

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