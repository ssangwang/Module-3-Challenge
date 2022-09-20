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
    if (confirm("Use lowercase letters?")) {
      allChar1 = allChar.concat(lowercaseChar);
      if (confirm("Use uppercase?")) {
        allChar1 = allChar.concat(uppercaseChar, lowercaseChar);
        if (confirm("use numeric?")) {
          allChar1 = allChar.concat(numericChar, uppercaseChar, lowercaseChar);
          if (confirm("use special?")) {
            allChar1 = allChar.concat(specialChar, numericChar, uppercaseChar, lowercaseChar);
          } else {
            allChar1 = allChar.concat(numericChar, lowercaseChar, uppercaseChar);
          }
        } else {
          allChar1 = allChar.concat(lowercaseChar, uppercaseChar);
        }
      } else {
        allChar1 = allChar.concat(lowercaseChar);
      }
    } else {
      allChar1 = ""
    }
  } else {
    window.alert("please say something")
  }
  console.log(allChar1)
  return allChar1
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