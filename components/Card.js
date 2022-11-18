export class Card {
    constructor(name, link, templateSelector, openImage) {
        this._postName = name;
        this._imageLink = link;
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
        this._post.querySelector('.post__like').classList.toggle('post__like_active');
    }

    _handleDeleteThePost() {
        this._post.closest('.post').remove();
    }

    _handleOpenImage() {
        this._openImage(this._imageLink, this._postName);
    }

    _setEventListeners() {
        this._post.querySelector('.post__like').addEventListener('click', () => {
            this._handleLikeThePost();
        });

        this._post.querySelector('.post__delete').addEventListener('click', () => {
            this._handleDeleteThePost();
        });
        this._post.querySelector('.post__image').addEventListener('click', () => {
            this._handleOpenImage();
        });
    }

    createCard() {
        this._post = this._getPostTemplate();

        this._postImage = this._post.querySelector('.post__image');
        this._postImage.src = this._imageLink;
        this._postImage.alt = this._postName;

        this._post.querySelector('.post__subscription').textContent = this._postName;

        this._setEventListeners();

        return this._post;
    }
}
