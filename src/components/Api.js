export default class Api {
    constructor({baseUrl, headers}) {
        this._url = baseUrl;
        this._headers = headers;
    }

    _getResult(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
        }
    }

    getUserInfo() {
        return fetch(
            `${this._url}/users/me`,
            {
                headers: this._headers
            })
            .then(this._getResult);
    }

    getInitialCards() {
        return fetch(
            `${this._url}/cards`,
            {
                headers: this._headers
            })
            .then(this._getResult);
    }

    setUserInfo(userInfo) {
        return fetch(
            `${this._url}/users/me`,
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: userInfo.name,
                    about: userInfo.about
                }),
            })
            .then(this._getResult);
    }

    addNewCard(card) {
        return fetch(
            `${this._url}/cards`,
            {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: card.name,
                    link: card.link
                })
            })
            .then(this._getResult);
    }

    deleteCard(card) {
        return fetch(
            `${this._url}/cards/${card._id}`,
            {
                method: 'DELETE',
                headers: this._headers
            })
            .then(this._getResult);
    }

    likeCard(card) {
        return fetch(
            `${this._url}/cards/${card._id}/likes`,
            {
                method: 'PUT',
                headers: this._headers
            })
            .then(this._getResult);
    }

    dislikeCard(card) {
        return fetch(
            `${this._url}/cards/${card._id}/likes`,
            {
                method: 'DELETE',
                headers: this._headers
            })
            .then(this._getResult);
    }
}