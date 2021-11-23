/*
    Password Validator
    -Welcome the user to the password validator tool
    -Prompt the user for a password to validate
    -Check if the user's password is at least 10 characters long
    -If the user's password meets the constraint, show a success message to the user
    -IF the user's password fails the constraint, show a failure message to the user
*/

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Welcome to the password validator. Please input your password. ", function(password){
	
    passwordLength = [...password].length
    let lengthReq = (passwordLength > 9) ?  true : false;
    let lowerCaseReq = /[a-z]/.test(password);
    let upperCaseReq = /[A-Z]/.test(password);
    let numReq = /\d/.test(password);
    let specialCharReq = /[!@#$%^&*]/.test(password);

    if(lengthReq && lowerCaseReq && upperCaseReq && numReq && specialCharReq)
    {
        console.log(`
        #   ____ _  _  ___ ___ ____ ____ ____    _   
        #  / ___/ )( \\/ __/ __(  __/ ___/ ___)  / \\  
        #  \\___ ) \\/ ( (_( (__ ) _)\\___ \\___ \\  \\_/  
        #  (____\\____/\\___\\___(____(____(____/  (_)  `);
    } else {
        console.log(`
        #   ____ ____ ____  __ ____ 
        #  (  __(  _ (  _ \\/  (  _ \\
        #   ) _) )   /)   (  O )   /
        #  (____(__\\_(__\\_)\\__(__\\_)       
        
        Your password must meet all requirements listed below. 
        - At least 10 characters long
        - Contain at least one lower case character
        - Contain at least one upper case character
        - Contain one number (0-9)
        - Contain one of these special characters (!,@,#,$,%,^,&,*)`);
    }

	// This line closes the connection to the command line interface.
	reader.close()

});