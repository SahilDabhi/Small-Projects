const formData = document.querySelector(".form");
const submitButton = document.querySelector(".button");
let firstName, lastName, email, password;
let whichField;

formData.addEventListener("keyup", (event) => {
  event.preventDefault();
  console.log(event.target.dataset.key);
  whichField = event.target.dataset.key;
  switch (whichField) {
    case "firstName":
      firstName = event.target.value;
      break;
    case "lastName":
      lastName = event.target.value;
      break;
    case "email":
      email = event.target.value;
      break;
    case "password":
      password = event.target.value;
      break;
    default:
      firstName = lastName = email = password = "";
      break;
  }
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(firstName, lastName, email, password);
});
