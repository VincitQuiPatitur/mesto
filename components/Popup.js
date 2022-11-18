import { elements } from "../utils/constants.js";

export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open(){
        this._popupSelector.classList.add(elements.popupOpenState);
        this.setEventListeners();
        document.removeEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._popupSelector.classList.remove(elements.popupOpenState);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners(){
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains(elements.popupOpenState)) {
                this.close();
            }
            if (evt.target.classList.contains(elements.closeButtonSelector)) {
                this.close();
            }
        });
    }
}