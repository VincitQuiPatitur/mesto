export default class Popup {
    constructor(popupElement, elements) {
        console.log(popupElement);
        this._popupElement = popupElement;
        this._elements = elements;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.classList.add(this._elements.popupOpenState);
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove(this._elements.popupOpenState);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners(){
        this._popupElement.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains(this._elements.popupOpenState)) {
                this.close();
            }
            if (evt.target.classList.contains(this._elements.closeButtonSelector)) {
                this.close();
            }
        });
    }
}