// Assignment code here
specialCharacters = ["!", "#", "$", "*", "&"];
alphabetLetters = "abcdefghijklmnopqrstuvwxyz";


// ===============================================================================================================================
// Password function

function generatePassword() {
    // First Password Alert
    window.alert("You will be asked a series of prompts to create a new password that meets requirements");
  
    createpass = window.confirm("Do you want to create a new password");

    if (createpass) {
        console.log("moving on to next question")
        //function // FIRST FUNCTION;
    } else {
        window.alert("Have a good day!");
    }
};

// PROMPT 1: Length Of Password: must be between 8 and 128 characters

// PROMPT 2: Uppercase, Lowercase, or Both

// Prompt 3: Do you want to include numbers

// Prompt 4: Do you want to include speical characters





// ===============================================================================================================================
// Password generated at this point and below is used to display 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// ===============================================================================================================================
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Starts the password generating
generateBtn.addEventListener("click", writePassword);
