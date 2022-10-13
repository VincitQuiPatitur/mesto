const showInputError = (formElement, inputListElement, errorMessage, elt) => {
    const error = formElement.querySelector(`.${inputListElement.id}-error`);
    inputListElement.classList.add(elt.inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(elt.errorClass);
};

const hideInputError = (formElement, inputListElement, elt) => {
    const error = formElement.querySelector(`.${inputListElement.id}-error`);
    inputListElement.classList.remove(elt.inputErrorClass);
    error.classList.remove(elt.errorClass);
    error.textContent = '';
};

const checkInputValidity = (formElement, inputListElement, elt) => {
    if (!inputListElement.validity.valid) showInputError(formElement, inputListElement, inputListElement.validationMessage, elt)
    else hideInputError(formElement, inputListElement, elt);
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputListElement) => {
        return !inputListElement.validity.valid;
    });
};

const toggleButtonState = (inputList, button, elt) => {
    if (hasInvalidInput(inputList)) {
        button.classList.add(elt.inactiveButtonClass);
        button.disabled = true;
    }
    else {
        button.classList.remove(elt.inactiveButtonClass);
        button.disabled = false;
    }
};


const setEventListeners = ((formElement, elt) => {
    const inputList = Array.from(formElement.querySelectorAll(elt.inputSelector));
    const button = formElement.querySelector(elt.submitButtonSelector);

    toggleButtonState(inputList, button, elt);

    inputList.forEach((inputListElement) => {
        inputListElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputListElement, elt);
            toggleButtonState(inputList, button, elt);
        });
    });
});

const enableValidation = (elt) => {
    const formList = Array.from(document.querySelectorAll(elt.formSelector));

    formList.forEach((formElement) => {
        const fieldsetList = Array.from(formElement.querySelectorAll(elt.fieldSelector));

        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset, elt);
        });
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    fieldSelector: '.popup__fieldset'
});