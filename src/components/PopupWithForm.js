import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupElement, formSubmitCallback, elements) {
        super(popupElement);
        this._elements = elements;
        this._formSubmitCallback = formSubmitCallback;
        this._form = this._popupElement.querySelector(this._elements.formSelector);
        this._popupInputs = this._popupElement.querySelectorAll(this._elements.inputSelector);
    }

    _getInputValues() {
        const inputValues = {};
        this._popupInputs.forEach(input => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    close() {
        this._form.reset();
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmitCallback(this._getInputValues());
            this.close();
        });
    }
}