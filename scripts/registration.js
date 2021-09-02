function idInput() {
  id = document.querySelectorAll(".union-id");
  if (id[1].value.length > 0 && id[0].value.length < 4) {
    id[0].value = id[0].value.concat(id[1].value);
    id[1].value = null;
  }
  if (id[0].value.length < 4) {
    id[1].value = null;
    id[0].focus();
  } else if (id[0].value.length > 4) {
    id[1].value = id[0].value.substr(4, 5);
    id[0].value = id[0].value.substr(0, 4);
  }
  if (id[0].value.length == 4) {
    id[1].focus();
  }

  if (id[1].value.length > 4) {
    id[1].value = id[1].value.substr(0, 4);
  }

  id[1].addEventListener("keydown", function (event) {
    unionID = document.querySelectorAll(".union-id");
    if (event.key == "Backspace" && unionID[1].value.length == 0) {
      unionID[0].focus();
    }
  });
}

function validateEMail() {
  var eMail = document.getElementById("email");
  eMail.addEventListener("invalid", function (event) {
    event.preventDefault();
  });
  if (!eMail.validity.valid || eMail.value == "") {
    eMail.nextElementSibling.classList.add("show");
    return false;
  } else {
    return true;
  }
}

function validateForm() {
  var flag = true;
  form = document.getElementById("registration-form");

  formValidation = form.querySelectorAll(".form-validation");
  for (var i = 0; i < formValidation.length; i++) {
    formValidation[i].classList.remove("show");
  }

  var yourName = form.querySelector("#name");
  if (yourName.value == "") {
    yourName.nextElementSibling.classList.add("show");
    flag = false;
  }

  var numberRegex = /^\d+$/;
  var inputID = form.querySelectorAll(".union-id");
  for (var i = 0; i < inputID.length; i++) {
    if (inputID[i].value.length < 4 || !inputID[i].value.match(numberRegex)) {
      inputID[1].nextElementSibling.classList.add("show");
      flag = false;
    }
  }
  if (flag) {
    var unionID = form.querySelector("#id");
    unionID.value = inputID[0].value.concat(inputID[1].value);
  }

  inputPhone = form.querySelectorAll(".phone-number");
  for (var i = 0; i < inputPhone.length; i++) {
    if (
      inputPhone[i].value == "" ||
      !inputPhone[i].value.match(numberRegex) ||
      inputPhone[1].value.length != 10
    ) {
      inputPhone[1].nextElementSibling.classList.add("show");
      flag = false;
    }
  }

  flag = validateEMail();

  course = form.querySelector("#course");
  if (course.value == "") {
    course.nextElementSibling.classList.add("show");
    flag = false;
  }

  return flag;
}
