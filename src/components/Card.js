export default class Card {
    constructor({name, link, likes, _id, owner}, templateSelector, openImage, deleteCard, likeCard, dislikeCard, userId, elements) {
        this._cardName = name;
        this._imageLink = link;
        this._likes = likes;
        this._id = _id;
        this._ownerId = owner._id;
        this._userId = userId;
        this._templateSelector = templateSelector;
        this._openImage = openImage;
        this._deleteCard = deleteCard.bind(this);
        this._likeCard = likeCard.bind(this);
        this._dislikeCard = dislikeCard.bind(this);
        this._elements = elements;
    }

    _getCardTemplate() {
        return document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.post')
            .cloneNode(true);
    }

    _handleLikeCard() {
        if (this._likeButton.classList.contains(this._elements.activeLikeButtonSelector)) this._dislikeCard(this)
        else this._likeCard(this);
    }

    _handleDeleteCard() {
        this._deleteCard(this);
    }

    _handleOpenImage() {
        this._openImage(this._imageLink, this._cardName);
    }

    _setEventListeners() {
        this._card.querySelector('.post__like').addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._card.querySelector('.post__delete').addEventListener('click', () => {
            this._handleDeleteCard(this);
        });
        this._card.querySelector('.post__image').addEventListener('click', () => {
            this._handleOpenImage();
        });
    }

    createCard() {
        this._card = this._getCardTemplate();

        this._cardImage = this._card.querySelector('.post__image');
        this._cardImage.src = this._imageLink;
        this._cardImage.alt = this._cardName;
        this._deleteButton = this._card.querySelector(this._elements.deleteButtonSelector);
        this._likeButton = this._card.querySelector(this._elements.likeButtonSelector)
        this._likeCounter = this._card.querySelector(this._elements.likeCounterSelector);


        this._card.querySelector('.post__subscription').textContent = this._cardName;
        this._likeCounter.textContent = this._likes.length;

        if (this._ownerId !== this._userId) {
            this._deleteButton.style.display = 'none';
        }

        this._likes.forEach(user => {
            if (this._userId === user._id) this.like()
            else this.dislike();
        });

        this._setEventListeners();

        return this._card;
    }

    deleteElement() {
        this._card.remove();
        this._card = null;
    }

    like() {
        this._likeButton.classList.add(this._elements.activeLikeButtonSelector);
    }

    dislike() {
        this._likeButton.classList.remove(this._elements.activeLikeButtonSelector);
    }

    countLikesNumber(result) {
        this._likeCounter.textContent = result.likes.length;
    }
}
