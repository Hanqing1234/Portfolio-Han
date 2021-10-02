"use strict";
(function () {
    function validateForm() {
        let contactForm = document.forms[0];
        if (contactForm) {
            contactForm.noValidate = true;
            let errorMessage = document.getElementById("errorMessage");
            let firstName = document.getElementById("firstName");
            firstName.addEventListener("blur", (event) => {
                if (firstName.value.length < 2) {
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid First Name with a length of 2 or more characters";
                }
                else {
                    errorMessage.hidden = true;
                }
            });
            let lastName = document.getElementById("lastName");
            lastName.addEventListener("blur", (event) => {
                if (lastName.value.length < 2) {
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid Last Name with a length of 2 or more characters";
                }
                else {
                    errorMessage.hidden = true;
                }
            });
            let contactNumber = document.getElementById("contactNumber");
            contactNumber.addEventListener("blur", (event) => {
                let number = /^([0-9]){10}$/;
                if (!number.test(contactNumber.value)) {
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid contact number";
                }
                else {
                    errorMessage.hidden = true;
                }
            });
            let emailAddress = document.getElementById("emailAddress");
            emailAddress.addEventListener("blur", (event) => {
                let email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                if (!email.test(emailAddress.value)) {
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid email address";
                }
                else {
                    errorMessage.hidden = true;
                }
            });
            let shortMessage = document.getElementById("shortMessage");
            let submitButton = document.getElementById("submitButton");
            submitButton.addEventListener("click", (event) => {
                event.preventDefault();
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
    function Start() {
        let formValidated = validateForm();
        if (formValidated) {
            console.log("successfully validated form");
        }
        else {
            console.warn("form not validated - does not exist");
        }
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map