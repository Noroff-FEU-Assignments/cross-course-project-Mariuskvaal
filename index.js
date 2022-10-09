const form = document.querySelector("form");
const namee = document.getElementById("username");
const phone = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const message = document.getElementById("message");

    form.addEventListener("submit", e => {
        e.preventDefault();

        checkInputs();

    });

    function checkInputs(){
        const nameeValue = namee.value.trim();
        const phoneValue = phone.value.trim();
        const emailValue = email.value.trim();
        const messageValue = message.value.trim();
    }

    if(nameeValue === "") {
        setErrorFor(namee, "Name cannot be blank");
    } else {
        setSuccessFor(namee);
    }

    if(emailValue === "") {
        setErrorFor(email, "email cannot be blank");
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "not a valid email");
    } else {
        setSuccessFor(email);
    }



























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
}
*/