//IIFE
/*
* Author         : Hanqing Liu
* Student Number : 301153641
* Date           : Sep 20, 2021
* Description    : Assignment 1 for COMP229
*/
"use strict";

(function(){

    function validateForm()
    {
        let contactForm = document.forms[0];

        if(contactForm)
        {
            contactForm.noValidate = true;

            let errorMessage = <HTMLInputElement>document.getElementById("errorMessage");

            //Validate first name
            let firstName = <HTMLInputElement>document.getElementById("firstName");
            firstName.addEventListener("blur", (event) => 
            {
                if(firstName.value.length < 1)
                {                  
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid First Name with a length of 2 or more characters"; 
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });

            //Validate last name
            let lastName = <HTMLInputElement>document.getElementById("lastName");
            lastName.addEventListener("blur", (event) => 
            {
                if(lastName.value.length < 1)
                {                  
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid Last Name with a length of 2 or more characters"; 
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });

            //Validate contact number
            let contactNumber = <HTMLInputElement>document.getElementById("contactNumber");
            contactNumber.addEventListener("blur", (event) => 
            {
                let number = /^([0-9]){10}$/; //Regular expression for contact number
                
                if(!number.test(contactNumber.value))
                {
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid contact number"; 
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });

            //Validate email address
            let emailAddress = <HTMLInputElement>document.getElementById("emailAddress");
            emailAddress.addEventListener("blur", (event) => 
            {
                let email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; // Regular expression for email address
                
                if(!email.test(emailAddress.value))
                {
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid email address"; 
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });

            let shortMessage = <HTMLInputElement>document.getElementById("shortMessage");
            
            // creates a "hook" or reference to the button element with an id of "submitButton"
            let submitButton = document.getElementById("submitButton");

            submitButton.addEventListener("click", (event) =>
            {
                event.preventDefault();
                //Require input information 
                console.log("Submit Button Clicked");
                console.log("First name input: " + firstName.value);
                console.log("Last name input: " + lastName.value);
                console.log("Contact number input: " + contactNumber.value);
                console.log("Email address input: " + emailAddress.value);
                console.log("Message input: " + shortMessage.value);
            });
        }
        return false;
    }


    // named function
    function Start()
    { 

       let formValidated = validateForm();
       
       if(formValidated)
       {
        console.log("successfully validated form");
        
       }
       else
       {
        console.warn("form not validated - does not exist");
       }

    } 

    window.addEventListener("load", Start);

})();