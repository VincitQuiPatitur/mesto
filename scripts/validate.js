const showInputError = (formElement, inputListElement, errorMessage, settings) => {
    const error = formElement.querySelector(`.${inputListElement.id}-error`);
    inputListElement.classList.add(settings.inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(settings.errorClass);
};

const hideInputError = (formElement, inputListElement, settings) => {
    const error = formElement.querySelector(`.${inputListElement.id}-error`);
    inputListElement.classList.remove(settings.inputErrorClass);
    error.classList.remove(settings.errorClass);
    error.textContent = '';
};

const checkInputValidity = (formElement, inputListElement, settings) => {
    if (!inputListElement.validity.valid) showInputError(formElement, inputListElement, inputListElement.validationMessage, settings)
    else hideInputError(formElement, inputListElement, settings);
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputListElement) => {
        return !inputListElement.validity.valid;
    });
};

const toggleButtonState = (inputList, button, settings) => {
    if (hasInvalidInput(inputList)) {
        button.classList.add(settings.inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(settings.inactiveButtonClass);
        button.disabled = false;
    }
};

const setEventListeners = ((formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const button = formElement.querySelector(settings.submitButtonSelector);
    formElement.addEventListener('reset', () => {
        setTimeout(() => {
            toggleButtonState(inputList, button, settings);
        }, 0);
    });

    inputList.forEach((inputListElement) => {
        inputListElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputListElement, settings);
            toggleButtonState(inputList, button, settings);
        });
    });
    toggleButtonState(inputList, button, settings);
});

const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll(settings.fieldSelector));

        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset, settings);
        });
    });
};