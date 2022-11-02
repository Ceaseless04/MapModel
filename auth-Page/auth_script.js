//Declaring constants
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const txtField = document.getElementById('txt_field');

//validation for authentication page (Email)
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Regex Pattern
    if (email.value.match(emailPattern)) {
        return window.location.href="/MapModel/auth-Page/auth-Form/form_index.html";
    }
    else if (email == "") {
        return error("Please enter valid email");
    }
    else {
        return alert("Please verify your email");
    }
}
//yeeeeeeeeeewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee


// Created event to trigger function checkEmail() when submit button is clicked
form.addEventListener('submit', (e) => {
    checkEmail();
})
