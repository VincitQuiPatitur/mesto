export default class UserInfo {
    constructor({ userName, description }) {
        this._userName = userName;
        this._description = description;
    }

    getUserInfo() {
        return {
            profileName: this._userName.textContent,
            profileJob: this._description.textContent
        };
    }

    setUserInfo(userInfo) {
        this._userName.textContent = userInfo.name;
        this._description.textContent = userInfo.link;
    }
}