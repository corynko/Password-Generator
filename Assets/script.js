var defaultSet = "abcdefghijklmnopqrstuvwxyz";
var capSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specKeys = ",./;'<>?:|!@#$%^&*-_=+";
var newSet = defaultSet;
var characterCount = 8;
var generateBtn = document.querySelector("#generate");
var password = "";
var passwordText = document.querySelector("#password");

//prompt method - prompt with dialogue window
function userPrompts() {
  newSet = defaultSet;
  characterCount = window.prompt(
    "How Many Characters Would You Like to Include? (8-128)"
  );
  if (characterCount > 128) {
    characterCount = window.prompt("Please Enter a Number Between 8 and 128");
  }
  if (characterCount < 8) {
    characterCount = window.prompt("Please Enter a Number Between 8 and 128");
  }
  if (characterCount > 128) {
    characterCount = 128;
  }
  if (characterCount < 8) {
    characterCount = 8;
  }
  var caps = window.confirm("Would You Like to Include Capitals?");
  var num = window.confirm("Would You Like to Include Numbers?");
  var specs = window.confirm("Would You Like to Include Special Characters?");

  if (caps === true) {
    newSet += capSet;
  } else {
    newSet += "";
  }
  if (num === true) {
    newSet += numbers;
  } else {
    newSet += "";
  }
  if (specs === true) {
    newSet += specKeys;
  } else {
    newSet += "";
  }

  generatePassword();
  // console.log(newSet);
  // console.log(characterCount);
}

//Possible HTML method(?) - show checkboxes sequentially
// var capsBox = document.querySelector("#capsBox");
// var specBox = document.querySelector("#specBox");
// var numBox = document.querySelector("#numBox");

function generatePassword() {
  password = "";
  for (var i = 0; i < characterCount; i++) {
    password += newSet.charAt(Math.floor(Math.random() * newSet.length));
  }

  writePassword();

  //test within generate function
  // console.log(newSet);
  // console.log(characterCount);
  // console.log(password);
}

// Write password to the #password input
function writePassword() {
  passwordText.textContent = password;
  //final test
  // console.log(newSet);
  // console.log(characterCount);
  // console.log(password);
}

// // Add event listener to generate button
generateBtn.addEventListener("click", userPrompts);
