export default class FormValidator {
    constructor(formElement, elements) {
        this._form = formElement;
        this._elements = elements;
        this._inputList = Array.from(this._form.querySelectorAll(this._elements.inputSelector));
        this._button = this._form.querySelector(this._elements.submitButtonSelector);
    }

    _showInputError(inputListElement) {
        this._error = this._form.querySelector(`.${inputListElement.id}-error`);
        inputListElement.classList.add(this._elements.inputErrorClass);
        this._error.textContent = inputListElement.validationMessage;
        this._error.classList.add(this._elements.errorClass);
    }

    _hideInputError(inputListElement) {
        this._error = this._form.querySelector(`.${inputListElement.id}-error`);
        inputListElement.classList.remove(this._elements.inputErrorClass);
        this._error.classList.remove(this._elements.errorClass);
        this._error.textContent = '';
    }

    _checkInputValidity(inputListElement) {
        if (!inputListElement.validity.valid) this._showInputError(inputListElement)
        else this._hideInputError(inputListElement);
    }

    _hasInvalidInput() {
        return this._inputList.some((inputListElement) => {
            return !inputListElement.validity.valid;
        });
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._button.classList.add(this._elements.inactiveButtonClass);
            this._button.disabled = true;
        } else {
            this._button.classList.remove(this._elements.inactiveButtonClass);
            this._button.disabled = false;
        }
    }

    _setEventListeners() {
        this._form.addEventListener('reset', () => {
            setTimeout(() => {
                this._toggleButtonState();
            }, 0);
        });

        this._inputList.forEach((inputListElement) => {
            inputListElement.addEventListener('input', () => {
                this._checkInputValidity(inputListElement);
                this._toggleButtonState();
            });
        });
        this._toggleButtonState();
    }

    enableValidation() {
        this._setEventListeners();
    }

    hideErrors() {
        this._inputList.forEach(input => {
            this._hideInputError(input);
        });
    }
}