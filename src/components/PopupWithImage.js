import Popup from "./Popup.js";
import { popupImage, popupCaption } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = popupImage;
        this._popupCaption = popupCaption;
    }

    open(imageLink, postName) {
        this._popupImage.src = imageLink;
        this._popupImage.alt = postName;
        this._popupCaption.textContent = postName;
        super.open();
    };
}