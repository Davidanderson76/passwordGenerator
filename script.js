//Generate Password
function generate(){
  randomString = "";
  var specialChar = "~!@#$%&-+=_";
  var number = "0123456789"; 
  var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var lowercase = "qwertyuiopasdfghjklzxcvbnm";


  //prompt to pick password length

  var passwordLength = prompt("Please select a password length between 8 and 128 characters.");
  var pawsswordString = "";
  let randomString = "";
  let charSet =[
    {
      char: "~!@#$%&-+=_",
      name: "Special Characters",
      use: false
    },
    {
      Char: "0123456789",
      Name: "Numbers",
      Use: false
    },
    {
      Char: "QWERTYUIOPASDFGHJKLZXCVBNM",
      Name: "Uppercase Letters",
      Use: false
    },
    {
      Char: "qwertyuiopasdfghjklzxcvbnm",
      Name: "Lowercase Letters",
      Use: false
    }
  ]

  if(passwordLength) > 8 && passwordLength < 128 ) {
    var usespecialChar = (prompt("Do you want to use special characters??")).toLowerCase();

    if (usespecialChar === "yes"  || usespecialChar === "y"){
      randomString = randomString + specialChar;
      console.log(randomString);
    }

    var useNumber = (prompt("Do you want to use numbers in your password??")).toLowerCase();

    if (useNumber === "yes" || useNumber === "y"){
      randomString = randomString + number;
      console.log(randomString);
    }


    var uselowercase = (prompt("Do you want to use lowercase characters in your password?")).toLowerCase();

    
    if (condition) {
      (uselowercase === "yes"  ||  uselowercase === "y");{
        randomString = randomString + lowercase;
        console.log(randomString)
      }
    }

    const generatePassword = () => {
      let passwordLength = parseInt(prompt("Please select a password length between 8 to 128 characters!"));
      let pawsswordString = "";
    }
    
    var uppercase = (prompt("Do you want to use uppercase letters in your password??")).toLowerCase();
    if (useuppercase === "yes" || useuppercase === "y") {
      randomString = randomString + uppercase;
      console.log(randomString)
    }
  
    if (passwordLength > 8 && passwordLength < 128) {
      charSet.forEach(set => {
        const usechar = prompt("Do you want to use ${set.name}?").toLowerCase();
        if (usechar === "yes" || usechar === "y") {
          set.use = true;
        }}); console.log(JSON.stringify(charSet))
  }
    else {
        alert ("Your password does not meet the requirements. Refresh and try again!");
      }
    


  //Generating the random password

  if (randomstring !== "") {
    for ( i = 1;  i < passwordLength; i++) {
      pawsswordString = pawsswordString + randomString.charAt(Math.floor(Math.random() * Math.floor((randomString.length) - 1)));     
    }
    document.getElementById("#password").value = pawsswordString
  }




    
}









// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

//variables


//declaration
// var confirmLength = "";
// var confirmChar;
// var confirmNum;
// var confirmUpperLet;
// var confirmLowerLet;







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
