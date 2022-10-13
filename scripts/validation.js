const showInputError = (formElement, inputListElement, errorMessage) => {
    const error = formElement.querySelector(`.${inputListElement.id}-error`);
    inputListElement.classList.add('popup__input_type_error');
    error.textContent = errorMessage;
    error.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputListElement) => {
    const error = formElement.querySelector(`.${inputListElement.id}-error`);
    inputListElement.classList.remove('popup__input_type_error');
    error.classList.remove('popup__input-error_active');
    error.textContent = '';
};

const checkInputValidity = (formElement, inputListElement) => {
    if (!inputListElement.validity.valid) showInputError(formElement, inputListElement, inputListElement.validationMessage)
    else hideInputError(formElement, inputListElement);
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputListElement) => {
        return !inputListElement.validity.valid;
    });
};

const toggleButtonState = (inputList, button) => {
    if (hasInvalidInput(inputList)) button.classList.add('popup__save-button_inactive')
    else button.classList.remove('popup__save-button_inactive');
};


const setEventListeners = ((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const button = formElement.querySelector('.popup__save-button');

    toggleButtonState(inputList, button);

    inputList.forEach((inputListElement) => {
        inputListElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputListElement);
            toggleButtonState(inputList, button);
        });
    });
});

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));

    formList.forEach((formElement) => {
        const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fieldset'));
        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset);
        });
    });
};
enableValidation();