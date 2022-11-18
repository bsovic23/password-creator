// Assignment code here
specialCharacters = ["!", "#", "$", "*", "&"];
alphabetLetters = "abcdefghijklmnopqrstuvwxyz";

// Password Prompt Array
passwordPromptAnswers = {
    "promptOne": "",
    "promptTwo": "",
    "promptThree": ""
};

// ===============================================================================================================================
// Password begin function

function generatePassword() {
    // First Password Alert
    window.alert("You will be asked a series of prompts to create a new password that meets requirements");
  
    createpass = window.confirm("Do you want to create a new password");

    if (createpass) {
        promptOne();
    } else {
        window.alert("Have a good day!");
    }
};

// PROMPT 1: Length Of Password: must be between 8 and 128 characters
var promptOne = function() {

    var promptOneAnswer = window.prompt("How long do you want your password to be? Please enter a number no smaller than 8 and no larger than 128");

    if (promptOneAnswer > 7 && promptOneAnswer < 129) {
        passwordPromptAnswers.promptOne = promptOneAnswer;
        promptTwo();
    } else {
        window.alert("That is not an acceptable password length");
        promptOne();
    };
};

// PROMPT 2: Uppercase, Lowercase, or Both
var promptTwo = function() {

    var promptTwoAnswer = window.prompt("Would you like your password to be all uppercase, all lowercase, or both? Please responsd with 'uppercase' 'lowercase' or 'both'");

    if (promptTwoAnswer == 'uppercase' || promptTwoAnswer == 'lowercase' || promptTwoAnswer == 'both') {
        passwordPromptAnswers.promptTwo = promptTwoAnswer;
        promptThree();
    } else {
        window.alert("Please type uppercase, lowercase, or both");
        promptTwo();
    };

};


// Prompt 3: Do you want to include numbers
var promptThree = function() {
    console.log("function three works")
    promptFour();
};

// Prompt 4: Do you want to include speical characters
var promptFour = function() {
    console.log("Prompt Four works!");
};



// ===============================================================================================================================
// Password generated at this point and below is used to display 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Need to include the last function output to here

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// ===============================================================================================================================

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Starts the password generating
generateBtn.addEventListener("click", generatePassword);
