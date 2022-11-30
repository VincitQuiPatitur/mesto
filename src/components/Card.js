export default class Card {
    constructor(name, link, like, templateSelector, openImage) {
        this._cardName = name;
        this._imageLink = link;
        this._like = like;
        this._templateSelector = templateSelector;
        this._openImage = openImage;
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
        this._card.closest('.post').remove();
    }

    _handleOpenImage() {
        this._openImage(this._imageLink, this._cardName);
    }

    _setEventListeners() {
        this._card.querySelector('.post__like').addEventListener('click', () => {
            this._handleLikeThePost();
        });

        this._card.querySelector('.post__delete').addEventListener('click', () => {
            this._handleDeleteThePost();
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

        this._card.querySelector('.post__subscription').textContent = this._cardName;

        this._setEventListeners();

        return this._card;
    }
}
