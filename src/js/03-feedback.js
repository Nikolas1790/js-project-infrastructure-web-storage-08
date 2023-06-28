


import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
let obj = {};

const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
};

refs.feedbackForm.addEventListener('submit', onSubmitForm);
refs.feedbackForm.addEventListener('input', throttle(onInputForm, 500));
localStorageHistory();

function onInputForm(event) {    
    console.log(obj[event.target.name] = event.target.value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    
 }

function onSubmitForm(event) {
    event.preventDefault();
   
    if(!refs.inputEmail.value || !refs.textarea.value){
        alert('Заполните все поля, пожалуйста) 🍀')
    } else {
        console.log('email:', refs.inputEmail.value);
        console.log('massag:', refs.textarea.value);
        
      event.target.reset();
         localStorage.removeItem(STORAGE_KEY)  
    }
    
};

function localStorageHistory() {
    const storageGetItem = localStorage.getItem(STORAGE_KEY);
    //  console.log(storageGetItem.message)
    if (storageGetItem) {
         
console.log(refs.textarea.value = JSON.parse(storageGetItem).message);
console.log(refs.inputEmail.value = JSON.parse(storageGetItem).email)

    }   
}


















// import throttle from "lodash.throttle";

// const STORAGE_KEY = "feedback-form-state";
// let obj = { email: '', message: '' };

// const refs = {
//     feedbackForm: document.querySelector('.feedback-form'),
//     inputEmail: document.querySelector('.feedback-form input'),
//     textarea: document.querySelector('.feedback-form textarea')
// };

// refs.feedbackForm.addEventListener('submit', onSubmitForm);
// refs.inputEmail.addEventListener('input', throttle(onEmailInput, 500));
// refs.textarea.addEventListener('input', throttle(onMassageInput, 500));

// localStorageHistory();

// function onEmailInput(event) {
//     const valueEmail = event.target.value;
//     console.log(obj.email = String(valueEmail));
   
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
// };

// function onMassageInput(event) {
//     const valueMassage = event.target.value;
//     console.log(obj.message = String(valueMassage));

// localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))

// };

// function onSubmitForm(event) {
//     event.preventDefault();
//     event.target.reset();
//          localStorage.removeItem(STORAGE_KEY)

// };

// function localStorageHistory() {
//     const storageGetItem = localStorage.getItem(STORAGE_KEY);
//      if (storageGetItem) {
//          console.log(storageGetItem)

//          console.log(refs.textarea.value = JSON.parse(storageGetItem).message)
//          console.log(refs.inputEmail.value = JSON.parse(storageGetItem).email)
//     }
 
  
// }