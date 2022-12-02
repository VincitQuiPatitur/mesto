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
            avatar: this._avatar.src,
            id: this._id,
        };
    }

    setUserInfo(userInfo) {
        this._userName.textContent = userInfo.name;
        this._description.textContent = userInfo.about;
        this._avatar.src = userInfo.avatar;
        this._avatar.alt = userInfo.name;
        this._id = userInfo._id;
    }
}