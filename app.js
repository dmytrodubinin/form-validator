const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  checkLength(username, 5, 15);
  checkWhitespace(username);
  checkEmail(email);
  checkMatch(password1, password2);
  checkLength(password1, 6, 20);
  checkWhitespace(password1);
});

// make first letter capitalize
function capitalizeFirstLetter(input) {
  return input.className.charAt(0).toUpperCase() + input.className.slice(1);
}

// check string in whitespace
function checkWhitespace(input) {
  const hasWhitespace = /\s/g.test(input.value);
  if (hasWhitespace) {
    showMessage(
      input,
      "error",
      `${capitalizeFirstLetter(input)} must not contain spaces`
    );
  }
}

// check length by minLength and maxLength
function checkLength(input, minLength, maxLength) {
  if (input.value.length >= minLength && input.value.length <= maxLength) {
    showMessage(input, "success");
  } else {
    showMessage(
      input,
      "error",
      `Length must be from ${minLength} to ${maxLength} characters`
    );
  }
}

// check email by regular expression
function checkEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    showMessage(email, "success");
  } else {
    showMessage(email, "error", `Please enter correct email address`);
  }
}

// check match in 2 inputs
function checkMatch(input1, input2) {
  if (input1.value === input2.value) {
    showMessage(input1, "success");
    showMessage(input2, "success");

    if (input1.value.length === 0) {
      showMessage(input2, "default");
    }
  } else {
    showMessage(input2, "error", "Passwords do not match");
  }
}

// show message in success or error
function showMessage(input, type, message = "") {
  if (type === "success") {
    input.parentNode.classList.remove("error");
    input.parentNode.classList.add("success");
  }
  if (type === "error") {
    input.parentNode.classList.add("error");
    input.parentNode.querySelector(".message").textContent = message;
  }
  if (type === "default") {
    input.parentNode.classList.remove("error");
    input.parentNode.classList.remove("success");
  }
}
