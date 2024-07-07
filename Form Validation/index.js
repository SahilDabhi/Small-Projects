const formData = document.querySelector(".form");
const submitButton = document.querySelector(".button");
const errorMessages = document.querySelectorAll(".error-message");
const emptyFields = document.querySelectorAll(".empty-field");
const showPassword = document.querySelector(".btn");

let firstName, lastName, email, password;
let fnTarget, lnTarget, emailTarget, passTarget;
let fnFlag, lnFlag, emailFlag, passFlag;
let whichField;

const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for (let errorMessage of errorMessages) {
  errorMessage.classList.add("d-none");
}

for (let emptyField of emptyFields) {
  emptyField.classList.add("d-none");
}

formData.addEventListener("keyup", (event) => {
  event.preventDefault();
  // console.log(event.target.dataset.key);
  whichField = event.target.dataset.key;
  switch (whichField) {
    case "firstName":
      firstName = event.target.value;
      fnTarget = event.target;
      break;
    case "lastName":
      lastName = event.target.value;
      lnTarget = event.target;
      break;
    case "email":
      email = event.target.value;
      emailTarget = event.target;
      break;
    case "password":
      password = event.target.value;
      passTarget = event.target;
      break;
    default:
      firstName = lastName = email = password = "";
      break;
  }
});

showPassword.addEventListener("click", (event) => {
  event.preventDefault();
  if (passTarget.getAttribute("type") === "text") {
    passTarget.setAttribute("type", "password");
  } else {
    passTarget.setAttribute("type", "text");
  }
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(firstName, lastName, email, password);

  if (firstName) {
    emptyFields[0].classList.add("d-none");
    if (!nameRegex.test(firstName)) {
      fnTarget.classList.add("error");
      errorMessages[0].classList.remove("d-none");
      // console.log("name only alphabets");
      fnFlag = false;
    } else {
      fnTarget.classList.remove("error");
      errorMessages[0].classList.add("d-none");
      fnFlag = true;
      // console.log("good to go");
    }
  } else {
    emptyFields[0].classList.remove("d-none");
    // console.log("Please fill the field");
  }

  if (lastName) {
    emptyFields[1].classList.add("d-none");
    if (!nameRegex.test(lastName)) {
      lnTarget.classList.add("error");
      errorMessages[1].classList.remove("d-none");
      lnFlag = false;
      // console.log("name only alphabets");
    } else {
      lnTarget.classList.remove("error");
      errorMessages[1].classList.add("d-none");
      lnFlag = true;
      // console.log("good to go");
    }
  } else {
    emptyFields[1].classList.remove("d-none");
    // console.log("Please fill the field");
  }

  if (email) {
    emptyFields[2].classList.add("d-none");
    if (!emailRegex.test(email)) {
      emailTarget.classList.add("error");
      errorMessages[2].classList.remove("d-none");
      emailFlag = false;
      // console.log("Enter Valid email");
    } else {
      emailTarget.classList.remove("error");
      errorMessages[2].classList.add("d-none");
      emailFlag = true;
      // console.log("good to go");
    }
  } else {
    emptyFields[2].classList.remove("d-none");
    // console.log("Please fill the field");
  }

  if (password) {
    emptyFields[3].classList.add("d-none");
    if (!pwdRegex.test(password)) {
      passTarget.classList.add("error");
      errorMessages[3].classList.remove("d-none");
      passFlag = false;
      // console.log("Enter the password");
    } else {
      passTarget.classList.remove("error");
      errorMessages[3].classList.add("d-none");
      passFlag = true;
      // console.log("good to go");
    }
  } else {
    emptyFields[3].classList.remove("d-none");
    // console.log("Please fill the field");
  }
});

if (fnFlag && lnFlag && passFlag && emailFlag) {
  window.location.href = "/success.html";
}
