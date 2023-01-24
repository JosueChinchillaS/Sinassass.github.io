//Getting the data
const nameIn = document.querySelector('#name');
const emailIn = document.querySelector('#email');
const subjectIn = document.querySelector('#subject');
const messageIn = document.querySelector('#message');
const errors = document.querySelectorAll('.error');
const form = document.querySelector('#contact');

const checkName = () => {
  let valid = false;

  const username = nameIn.value.trim();

  if (!isRequired(username)) {
    showError(nameIn, 'El nombre no puede estar en blanco.');
  } else {
    showSuccess(nameIn);
    valid = true;
  }
  return valid;
};

const checkSubject = () => {
  let valid = false;

  const subject = subjectIn.value.trim();

  if (!isRequired(subject)) {
    showError(subjectIn, 'El asunto no puede estar en blanco.');
  } else {
    showSuccess(subjectIn);
    valid = true;
  }
  return valid;
};

const checkMessage = () => {
  let valid = false;

  const message = messageIn.value.trim();

  if (!isRequired(message)) {
    showError(messageIn, 'El mensaje no puede estar en blanco.');
  } else {
    showSuccess(messageIn);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailIn.value.trim();
  if (!isRequired(email)) {
    showError(emailIn, 'El correo no puede estar en blanco.');
  } else if (!isEmailValid(email)) {
    showError(emailIn, 'El correo es inválido');
  } else {
    showSuccess(emailIn);
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = (value) => (value === '' ? false : true);

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
};

form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  let isNameValid = checkName(),
    isEmailValid = checkEmail(),
    isSubjectValid = checkSubject(),
    isMessageValid = checkMessage();

  let isFormValid =
    isNameValid && isEmailValid && isSubjectValid && isMessageValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  'input',
  debounce(function (e) {
    switch (e.target.id) {
      case 'name':
        checkName();
        break;
      case 'email':
        checkEmail();
        break;
      case 'subject':
        checkSubject();
        break;
      case 'message':
        checkMessage();
        break;
    }
  })
);

// //Validate valid email

// const validEmail = (email) => {
//   const regex_pattern =
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return regex_pattern.test(email);
// };

// //Validating the data

// const validateForm = () => {
//   //Validations
//   //   clearMessages();

//   if (nameIn.value.length < 1) {
//     errors[0].innerHTML('<h1>El nombre no puede estar en blanco</h1>');
//     nameIn.classList.add('error-border');
//   }

//   if (!validEmail(email.value)) {
//     errors[0].innerHTML('<h1>El correo no es válido</h1>');
//     email.classList.add('error-border');
//   }
//   if (subject.value.length < 1) {
//     errors[0].innerHTML('<h1>El asunto no puede estar en blanco</h1>');
//     subject.classList.add('error-border');
//   }
//   if (message.value.length < 1) {
//     errors[0].innerHTML('<h1>El mensaje no puede estar en blanco</h1>');
//     message.classList.add('error-border');
//   }
// };

// // // Clear if no errors
// // const clearMessages = () => {
// //   for (let i = 0; i < errors.length; i++) {
// //     errors[i].innerHTML = '<h1> </h1>';
// //   }
// //   nameIn.classList.remove('error');
// //   email.classList.remove('error');
// //   subject.classList.remove('error');
// //   message.classList.remove('error');
// // };
