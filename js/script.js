// Get the UI Elements
let validEmail = document.querySelector(".valid-email");
let validPassword = document.querySelector(".valid-password");
let validPostCode = document.querySelector(".valid-post-code");
let validPhoneNo = document.querySelector(".valid-phone-no");

// Add Event Listeners
validEmail.addEventListener("click", checkEmailValidation);
validPassword.addEventListener("click", checkPasswordValidation);
validPostCode.addEventListener("click", checkPostCodeValidation);
validPhoneNo.addEventListener("click", checkPhoneNoValidation);

// Define Functions
// Let Check the Email is valid or not
function checkEmailValidation(e) {
    let userEmail = prompt("Your Email:");

    let expToLookFor = /^([A-Za-z0-9]\.?)+[^\.]@([A-Za-z0-9]\.?)+[^\.]$/;

    let result;
    switch (expToLookFor.test(userEmail)) {
        case true:
            result = alert("Your Email is Valid");
            break;
        case false:
            result = alert("Your Email is not Valid");
            break;
    }

    e.preventDefault();
}

// Let Check the Password is valid or not
function checkPasswordValidation(e) {
    let userPassword = prompt(
        "Your Password: (It should contain at least 1 uppercase 1 lowercase, 1 number and length should be at lease 8)"
    );

    let expToLookFor = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9]{8}$/;

    let result;
    switch (expToLookFor.test(userPassword)) {
        case true:
            result = alert("Your Password is Valid");
            break;
        case false:
            result = alert("Your Password is not Valid");
            break;
    }

    e.preventDefault();
}

// Let Check the Post Code is valid or not
function checkPostCodeValidation(e) {
    let userPostCode = prompt("Your Post Code:");

    let expToLookFor = /^\d{4}$/;

    let result;
    switch (expToLookFor.test(userPostCode)) {
        case true:
            result = alert("Your Post Code is Valid");
            break;
        case false:
            result = alert("Your Post Code is not Valid");
            break;
    }

    e.preventDefault();
}

// Let Check the Phone Number is valid or not
function checkPhoneNoValidation(e) {
    let userPhoneNo = prompt("Your Phone Number:");

    let expToLookFor = /^(\+)?(88)?01[0-9]{9}$/;

    let result;
    switch (expToLookFor.test(userPhoneNo)) {
        case true:
            result = alert("Your Phone Number is Valid");
            break;
        case false:
            result = alert("Your Phone Number is not Valid");
            break;
    }

    e.preventDefault();
}
