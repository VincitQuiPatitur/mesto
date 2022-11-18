import Popup from "./Popup.js";
import { elements } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitCallback) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._formSubmitCallback = formSubmitCallback;
        this._form = this._popupSelector.querySelector(elements.formSelector);
        this._popupInputs = this._popupSelector.querySelectorAll(elements.inputSelector);
        console.log(this._formSubmitCallback);
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
        this._form.addEventListener( 'submit', (evt) => {
            evt.preventDefault();
            this._formSubmitCallback(this._getInputValues());
            this.close();
        });
    }
}