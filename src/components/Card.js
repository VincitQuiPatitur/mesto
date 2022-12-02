export default class Card {
    constructor({name, link, likes, _id, owner}, templateSelector, openImage, deleteCard, userId, elements) {
        this._cardName = name;
        this._imageLink = link;
        this._likes = likes;
        this._id = _id;
        this._ownerId = owner._id;
        //console.log(`id owner ${this._id} ${this._cardName}`);
        this._userId = userId;
        //console.log(`user id ${this._userId} ${this._cardName}`);
        this._templateSelector = templateSelector;
        this._openImage = openImage;
        this._deleteCard = deleteCard;
        this._elements = elements;
    }

    _getPostTemplate() {
        return document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.post')
            .cloneNode(true);
    }

    _handleLikeThePost() {
        this._card.querySelector('.post__like').classList.toggle('post__like_active');
    }

    _handleDeleteThePost() {
        console.log(this)
        this._deleteCard(this);
        /*this._card.closest('.post').remove();*/
    }

    _handleOpenImage() {
        this._openImage(this._imageLink, this._cardName);
    }

    _setEventListeners() {
        this._card.querySelector('.post__like').addEventListener('click', () => {
            this._handleLikeThePost();
        });

        this._card.querySelector('.post__delete').addEventListener('click', () => {
            this._handleDeleteThePost(this);
        });
        this._card.querySelector('.post__image').addEventListener('click', () => {
            this._handleOpenImage();
        });
    }

    createCard() {
        this._card = this._getPostTemplate();

        this._cardImage = this._card.querySelector('.post__image');
        this._cardImage.src = this._imageLink;
        this._cardImage.alt = this._cardName;
        this._deleteButton = this._card.querySelector(this._elements.deleteButtonSelector);

        this._card.querySelector('.post__subscription').textContent = this._cardName;

        if(this._ownerId !== this._userId) {
            //console.log(this._ownerId);
            //console.log(this._userId);
            this._deleteButton.style.display = 'none';
        }

        this._setEventListeners();

        return this._card;
    }

    deleteElement() {
        this._card.remove();
        this._card = null;
    }
}
