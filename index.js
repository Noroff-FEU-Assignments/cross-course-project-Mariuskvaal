
let ProductImg = document.getElementById("ProductImg");

let smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function() {
    ProductImg.src = smallImg[0].src;

}

smallImg[1].onclick = function() {
    ProductImg.src = smallImg[1].src;

}

smallImg[2].onclick = function() {
    ProductImg.src = smallImg[2].src;
}

smallImg[3].onclick = function() {
    ProductImg.src = smallImg[3].src;
}





var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "write full name";
        return false;
    }
    nameError.innerHTML = "valid";
    return true;
};















































/*


// <!---- FORM FUNCTION -->

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");

}

const setSuccess = element=> {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector("error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

const validateInputs = () => {
    const usernameValue = username.Value.trim();
    const emailValue = email.Value.trim();
    const passwordValue = password.Value.trim();
    const password2Value = password2.Value.trim();

    if(usernameValue === "") {
        setError(username, "username is required");
    } else {
          setSuccess(username);
    }

    if(emailValue === "") {
        setError(email, "email is required");
    } else {
        setSuccess(email);
    }

    if(passwordValue === "") {
        setError(password, "password is required");
    } else if (passwordValue.length < 8 ) {
        setError(password, "password must be at least 8 character.")
    } else {
        setSuccess(password);
    }

    if(password2Value === ""){
        setError(password2, "please confirm your password");
    } else if (password2Value !== passwordValue) {
        setError(password2    )
    }
};