//Begin adding pseudocomments

var generateBtn = document.querySelector("#generate");

// list of characters
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "~", "`", "{", "}", "[", "]", "|", "\\", ";", ":", "\"", "'", ",", ".", "<", ">", "?", "/"];

var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
 
  //Password is between 8 and 128 characters 
  var passwordLength = parseInt(prompt("Please choose between 8 and 128 characters"));
 
  if (passwordLength > 7 && passwordLength < 129) {
    alert("Accepted")
  } else {
    alert("Declined - Must be between 8 and 128 characters with at least one upper and lower case letter, one number, and one special character")
    generatePassword();

  }

  //questions that should be asked in prompt
  var lower = confirmLowerLenth("Have you included lowercase characters?");
  var upper = confirmUpperLength("Have you included uppercase characters?");
  var number = confirmNumberLength("Have you included numerical characters?");
  var special = confirmSpecialLength("Have you included special characters?");

   //questions that should be asked in prompt
  if (password < 8) {
      alert("Please enter at least 8 characters");

  }

   //statement that should be asked in prompt
  if (lower) {
    console.log("Selected a lower case character");
  } else {
    console.log("Please select a lower case character");
  }

  //statement that should be asked in prompt
  if (upper) {
    console.log("Selected an upper case character");
  } else {
    console.log("Please select an upper case character");
    
  }

  //statement that should be asked in prompt
  if (number) {
    console.log("Selected a numerical character");
  } else {
    console.log("Please select a numerical character");
    
  }

   //statement that should be asked in prompt
  if (special) {
    console.log("Selected a spcial character");
  } else {
    console.log("Please select a special character");
    
  }
    
  
  for (var index = 0; index < passwordLength; i++) {
    let random = possibles[Math.floor(Math.random() * passwordLength)]
    let random_characters = random_math[Math.floor(Math.random() * random_math.length)]
    outputPassword += random_characters
  } 

  return document.getElementById("password").value = outputPassword;
}

function newFunction() {
  console.log(empty);
}

generateBtn.addEventListener("click", writePassword);