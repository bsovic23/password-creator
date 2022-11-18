// Assignment code here
specialCharacters = ["!", "#", "$", "*", "&"];
alphabetLetters = "abcdefghijklmnopqrstuvwxyz";

function generatePassword() {
    // First Password Alert
    window.alert("You will be asked a series of prompts to create a new password that meets requirements");
  
    createpass = window.confirm("Do you want to create a new password")

    // If Yes, creating a new password  
    if (createpass) {
      function createPasswordLength() {
        // Prompted with which criteria to include
        criteriaLength = window.prompt("How many long do you want the password to be? Please enter a number no smaller than 8 and no larger than 128");
        if (criteriaLength < 8 || criteriaLength >128) {
          window.alert("That length is outside the requirement");
          createPasswordLength();
        } else 
          function createPasswordCase() {
          // Prompt for lowercase, uppercase, numeric, and/or special characters
          criteriaCharacterCase = window.prompt("Would you like lowercase characters, uppercase characters or both? Please type 'lowercase' 'uppercase' or 'both' ");
          if (criteriaCharacterCase !== "uppercase" && criteriaCharacterCase !== "lowercase" && criteriaCharacterCase !== "both") {
            window.alert("You did not correctly specify one of the three acceptable answers")
            createPasswordCase();
          } else 
            function createPasswordSpecial() {
            criteriaSpecialCharacters = window.prompt("Would you like to include special characters? Please 'yes' or 'no' ");
            if (criteriaSpecialCharacters !== 'yes' && criteriaSpecialCharacters !== "no") {
              window.alert("You did not correctly specify yes or no")
              createPasswordSpecial();
            } else
              
              // Setting up the password parameters
              // parseInt takes the string value returned by the promptm, and turns it into an integer 
              criteriaLengthInt = parseInt(criteriaLength);
              forLoopLength = criteriaLengthInt + 1;
              passwordDone = "";

                for ( i = 0; i < forLoopLength; i++) {
                passwordDone += alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)]
                };
                
                console.log(passwordDone);

                function editPassword () {
                  if (criteriaCharacterCase == "uppercase") {
                     passwordDone = passwordDone.toUpperCase();
                  } else if (criteriaCharacterCase == "both") {
                    // password every Nth spot turns to 
                    passwordSplit = passwordDone.split("");
                    console.log(passwordSplit);
                  } else passwordDone = passwordDone;
                
                }
                
                editPassword(passwordDone);

                console.log(passwordDone);

            };
          createPasswordSpecial();
          }
        createPasswordCase();     
    }
    createPasswordLength(); 

  } else window.alert("Goodbye");

  return passwordDone;
} 

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


/*
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/







// BRIT WORKING ON THE GENERATING PASSWORD CODE HERE

/*
Variables:
forLoopLength     ->     length of the password
criteriaCharacterCase     -> uppercase, lowercase, both
criteriaSpecialCharacters     ->   special characters   -> yes or no
1. Make the password completely based on letters all lowercase
2. If uppercase then function turns entire password to uppercase, if both function turns random ones to uppercase
3. same kinda thought process with the special characters yes/no
*/



/*
 passwordDone = "";
for ( i = 0; i < forLoopLength; i++) {
  // Creates the password length with random undercase letters for the specified length
  passwordDone += alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)]
              };
function editPassword (passwordDone) {
  if (criteriaCharacterCase == "uppercase") {
     toUpperCase(passwordDone)
  } else if (criteriaCharacterCase == "both") {
    // password every Nth spot turns to 
    passwordSplit = passwordDone.split("");
    console.log(passwordSplit);
    for (i = 0; i < passwordDone.length; i++) {
        if (i %2 == 0) {
          passwordDone
        }
    }
  } else passwordDone = passwordDone;
  
}
editPassword();
          
*/