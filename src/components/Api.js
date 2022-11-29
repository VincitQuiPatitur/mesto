export default class Api {
    constructor({baseUrl, headers}) {
        this._url = baseUrl;
        this._headers = headers;
    }
    getUserInfo() {
        return fetch(
            `${this._url}/users/me`,
            {headers: this._headers
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
            { headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
                }
            });
    }

    deleteCard(){

    }

    addNewCard(){

    }

    // другие методы работы с API
}