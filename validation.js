const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  errorClass: "modal__input_type_error",
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("button_inactive");
    buttonElement.disabled = false;
  }
};
const disabledButton = (buttonElement) => {
  buttonElement.disabled = true;
};

const hideInputError = (formElement, inputElement) => {
  const errorMsgEl = formElement.querySelector(
    "#" + inputElement.id + "-error",
  );
  errorMsgEl.textContent = "";
  inputElement.classList.remove(settings.errorClass);
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMsgID = inputElement.id + "-error";
  const errorMsgEl = formElement.querySelector("#" + errorMsgID);
  errorMsgEl.textContent = errorMessage;
  errorMsgEl.classList.add("modal__error");
  inputElement.classList.add(settings.errorClass);
};

const enableValidation = (settings) => {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach((formElement) => {
    const inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector),
    );
    const buttonElement = formElement.querySelector(
      settings.submitButtonSelector,
    );

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });

    toggleButtonState(inputList, buttonElement);
  });
};
enableValidation(settings);
