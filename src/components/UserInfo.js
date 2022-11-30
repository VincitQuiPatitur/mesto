export default class UserInfo {
    constructor({ userName, description, avatar }) {
        this._userName = userName;
        this._description = description;
        this._avatar = avatar;
    }

    getUserInfo() {
        return {
            profileName: this._userName.textContent,
            profileJob: this._description.textContent,
            avatar: this._avatar.src
        };
    }

    setUserInfo(userInfo) {
        this._userName.textContent = userInfo.name;
        this._description.textContent = userInfo.about;
        console.log(userInfo.avatar);
        this._avatar.src = userInfo.avatar;
        this._avatar.alt = userInfo.name;
    }
}