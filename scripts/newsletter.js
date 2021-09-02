function validateForm() {
  var emailCorrect = document.querySelector(
    "#form-email .form-validation .correct"
  );
  var emailWrong = document.querySelector(
    "#form-email .form-validation .wrong"
  );
  var eMail = document.getElementById("email");

  eMail.addEventListener("invalid", function (event) {
    event.preventDefault();
  });

  emailCorrect.style.opacity = 0;
  emailWrong.style.opacity = 0;
  if (eMail.validity.valid) {
    emailCorrect.style.opacity = 1;
  } else {
    emailWrong.style.opacity = 1;
  }
}

function typingValidateForm() {
  validateForm();
  var emailCorrect = document.querySelector(
    "#form-email .form-validation .correct"
  );
  var emailWrong = document.querySelector(
    "#form-email .form-validation .wrong"
  );
  var eMail = document.getElementById("email");

  if (eMail.value == "") {
    setTimeout(function () {
      emailCorrect.style.opacity = 0;
      emailWrong.style.opacity = 0;
    }, 1000);
  }
}
