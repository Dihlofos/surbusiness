"use strict";
(function () {
  // Modal open/close
  const modal = document.querySelector('.js-modal');
  const modalOpen = document.querySelectorAll('.js-modal-open');
  const modalOpenStep1 = document.querySelectorAll('.js-modal-open-step-1');
  const modalClose = document.querySelectorAll('.js-modal-close');
  const toStepOneButton = document.querySelector('.js-step-go-1');

  // Steps
  const steps = document.querySelectorAll('.js-step');

  // Form
  const form = document.querySelector(".js-form");
  const formSubmitButton = document.querySelector(".js-form-submit");
  const phoneField = document.querySelector('#phone');
  const phoneFieldError = document.querySelector('.js-phone-field-error');
  let formInvalid = false;

  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;

  const errorMap = ["Номер телефона неверный", "Неправильный код страны", "Номер слишком короткий", "Номер слишком длинный", "Номер телефона неверный"];

  const options = {
    reserveScrollBarGap: true,
  };

  const iti = window.intlTelInput(phoneField, {
    initialCountry: "ru",
  });

  modalOpenStep1.forEach((button)=>{
    button.addEventListener('click', ()=> {
      showStep(1);
      openModal();
    })
  })



  // Event Listeners
  modalOpen.forEach((openButton)=>{
    openButton.addEventListener('click', ()=> {
      openModal();
    })
  })

  modalClose.forEach((button) => {
    button.addEventListener('click', () => {
      closeModal();
    })

  })

  toStepOneButton.addEventListener('click', ()=> {
    showStep(1);
  })

   // Actions
  initForm();

  // Functions

  function openModal() {
    modal.style.display = 'flex'
      setTimeout(()=>{
        modal.classList.add('is-open');

        disableBodyScroll(modal, options);
      },0)
  }

  function closeModal() {
    modal.classList.remove('is-open');
      setTimeout(()=>{
        modal.style.display = 'none'
        clearSteps();
        enableBodyScroll(modal);
      },200)
  }
  function clearSteps() {
    steps.forEach((step,index)=> {
      if (index === 0) {
        step.classList.remove('visually-hidden')
      } else {
        step.classList.add('visually-hidden')
      }
    })
  }

  function showStep(stepIndex) {
    steps.forEach((step,index)=> {
      if (index === stepIndex) {
        step.classList.remove('visually-hidden')
      } else {
        step.classList.add('visually-hidden')
      }
    })
  }

  function initForm() {
    if (!form) return;

    phoneField.addEventListener('blur', function() {
      phoneFieldValidate();
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (formInvalid) return;
      formSubmitButton.classList.add('disabled');
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6LczUdEaAAAAACImrHbKWiSSutDmsNCH1sC9zXbu", {
            action: "submit",
          })
          .then(function (token) {
            let res = {};
            const formData = new FormData(form);

            for (let [key, value] of formData.entries()) {
              res[key] = value;
            }
            console.log("all correct, but not do anything further", res);
            sendEmail(res);
          })
          .catch((error) => {
            showStep(3);
          })
      });
    });
  }

  function sendEmail({ name, email, phone, message }) {
    formSubmitButton.setAttribute("disabled", true);
    Email.send({
      SecureToken : "b03e26ab-3244-4815-bd29-bd9edccd5aea",
      To : 'business@suragency.ru',
      From : "business@suragency.ru",
      Subject: `${name} отправил вам сообщение`,
      Body: `
        <p><h4>Здравствуйте, меня зовут: ${name}</h4></p>
        <p><strong>Сообщение:</strong> ${message}</p>
        <p><strong>Адрес электронной почты:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
      `,
    })
      .then((message) => {
        showStep(2);
      })
      .catch((error) => {
        showStep(3);
      })
      .finally(()=>{
        formSubmitButton.classList.remove('disabled');
        form.reset();
      })
  }

  function phoneFieldValidate() {
    if (phoneField.value.trim()) {
      if (iti.isValidNumber()) {
        phoneField.classList.remove("error");
        phoneFieldError.textContent = '';
        formInvalid = false;
      } else {
        phoneField.classList.add("error");
        var errorCode = iti.getValidationError();
        const errorMessage = errorMap[errorCode] ?? 'Введите корректный номер телефона'
        phoneFieldError.textContent = errorMessage;
        formInvalid = true;
      }
    }
  }



})();
