import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupElement, elements) {
        super(popupElement);
        this._popupImage = this._popupElement.querySelector('.popup__image');
        this._popupCaption = this._popupElement.querySelector('.popup__caption');
        this._elements = elements;
    }

    open(imageLink, postName) {
        this._popupImage.src = imageLink;
        this._popupImage.alt = postName;
        this._popupCaption.textContent = postName;
        super.open();
    };
}