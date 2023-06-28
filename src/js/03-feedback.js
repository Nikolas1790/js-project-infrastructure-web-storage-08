import throttle from "lodash.throttle";

const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
};


refs.inputEmail.addEventListener('input', onEmailInput);
refs.textarea.addEventListener('input', onMassageInput);

function onEmailInput(event) {
    const value = event.target.value;
    localStorage.setItem("feedback-form-state", value )
};

function onMassageInput(event) {
   console.log(event.target.value)
};


