import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupElement, popupImage, popupCaption, elements) {
        super(popupElement);
        this._popupImage = popupImage;
        this._popupCaption = popupCaption;
        this._elements = elements;
    }

    open(imageLink, postName) {
        this._popupImage.src = imageLink;
        this._popupImage.alt = postName;
        this._popupCaption.textContent = postName;
        super.open();
    };
}