// Assignment Code
var generateBtn = document.querySelector("#generate");
var nPasswordLength = 0;
var bAllowLowerCase = false;
var bAllowUpperCase = false;
var bAllowNumeric = false;
var bAllowSpecialChars = false;
var lowerCaseValues = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseValues = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericValues = ['0','1','2','3','4','5','6','7','8','9'];
var specialValues = [' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
var typesSelected = [];

// Write password to the #password input
function writePassword() {
  nPasswordLength = 0;
  bAllowLowerCase = false;
  bAllowUpperCase = false;
  bAllowNumeric = false;
  bAllowSpecialChars = false;
  typesSelected = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = '';

  getPasswordLength();
  
  do {
    alert("You must select at least one character type")
    allowLowerCase();
    allowUpperCase();
    allowNumeric();
    allowSpecialChars();
  } 
  while(typesSelected.length === 0)

  var numberOfSelectedTypes = typesSelected.length;
  // Generate the password
  for(var i = 0; i < nPasswordLength; i++) {
    var whichType = Math.floor(Math.random() * numberOfSelectedTypes); 
    password += typesSelected[whichType]();
  }
  return password;
}

function getLowerCaseValue() {
  var length = lowerCaseValues.length;
  var value = Math.floor(Math.random() * length);
  return lowerCaseValues[value];
}

function getUpperCaseValue() {
  var length = upperCaseValues.length;
  var value = Math.floor(Math.random() * length);
  return upperCaseValues[value];
}

function getNumericValue() {
  var length = numericValues.length;
  var value = Math.floor(Math.random() * length);
  return numericValues[value];
}

function getSpecialValue() {
  var length = specialValues.length;
  var value = Math.floor(Math.random() * length);
  return specialValues[value];
}

function getPasswordLength() {
  var passwordLength = window.prompt("Length of Password (8 - 128)", 8);
  if (passwordLength >= 8 && passwordLength <= 128) {
    nPasswordLength = passwordLength;
  }
  else {
    getPasswordLength();
  }
}

function allowLowerCase() {
  bAllowLowerCase = window.confirm("Allow lower case values");
  if (bAllowLowerCase) {
    typesSelected.push(getLowerCaseValue);
  }
}

function allowUpperCase() {
  bAllowUpperCase = window.confirm("Allow upper case values");
  if (bAllowUpperCase) {
    typesSelected.push(getUpperCaseValue);
  }
}

function allowNumeric() {
  bAllowNumeric = window.confirm("Allow numeric values");
  if (bAllowNumeric) {
    typesSelected.push(getNumericValue);
  }
}

function allowSpecialChars() {
  bAllowSpecialChars = window.confirm("Allow special character values");
  if (bAllowSpecialChars) {
    typesSelected.push(getSpecialValue);
  }
}