// Assignment code here
function generatePassword() {
  var specialcharacters = [',', '&', '#', '-', '/', "'", ':', '+', '$', '=', '?', '!','^', '@','%','~', '(', '}', '{', ']','*', '[', ')', '\\', '_', '.'];
  var numberharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  var lowercaseCharacters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  var acceptedcharacters = [];

  // user resposes 
  characternumber = prompt("Select between 8-128 characters. for your password.");
  if (characternumber < 8 || characternumber > 128) {
    return "wrong value of characters please chose inbetween 8-128 characters.";
  } else if (isNaN(characternumber)) {
    characternumber = prompt("Please enter a valid number.");
  }
  numeric  = confirm("Include numbers?");
  if (numeric ) {}

  lowercase = confirm("Include lowercase characters?");
  if (lowercase) {}

  iscapital = confirm("Include uppercase characters?");
  if (iscapital) {}

  hasSpecial = confirm("Include special characters?");
  if (hasSpecial) {}

  if (numeric === false && lowercase === false && iscapital === false && hasSpecial === false) {
    return "Select a proper value";
  };

  // user response outcome
  if (hasSpecial) {
    acceptedcharacters = acceptedcharacters.concat(specialcharacters);
  }  if (lowercase) {
    acceptedcharacters = acceptedcharacters.concat(lowercaseCharacters);
  }

  if (numeric ) {
    acceptedcharacters = acceptedcharacters.concat(numberharacters);
  }

  if (iscapital) {
    acceptedcharacters = acceptedcharacters.concat(uppercaseCharacters);
  }
  let Password = ""
  for (let i = 0; i < characternumber; i++) {
    let rng =[Math.floor(Math.random() * acceptedcharacters.length)];
    Password = Password + acceptedcharacters[rng];
  }
  return Password;
};
// more assignment code below
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

