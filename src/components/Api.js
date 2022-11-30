export default class Api {
    constructor({baseUrl, headers}) {
        this._url = baseUrl;
        this._headers = headers;
    }

    getUserInfo() {
        return fetch(
            `${this._url}/users/me`,
            {
                headers: this._headers,

            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
                }
            })
    }

    getInitialCards() {
        return fetch(
            `${this._url}/cards`,
            {
                headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
                }
            });
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
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
                }
            });
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
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
                }
            });
    }

    deleteCard() {

    }
}