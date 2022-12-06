import Popup from "./Popup";

export default class PopupDeleteCard extends Popup {
    constructor(popupElement, formSubmitCallback, elements) {
        super(popupElement);
        this._formSubmitCallback = formSubmitCallback;
        this._elements = elements;
        this._button = this._popupElement.querySelector(this._elements.confirmationButtonSelector);
    }

    setEventListeners(card) {
        super.setEventListeners();
        this._button.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._formSubmitCallback(card);
        });
    }
}