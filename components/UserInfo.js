export default class UserInfo {
    constructor({ userName, description }) {
        this._userName = userName;
        this._description = description;
    }

    getUserInfo() {
        const userInfo = {
            profileName: this._userName.textContent,
            profileJob: this._description.textContent
        };
        return userInfo;
    }

    setUserInfo(userInfo) {
        this._userName.textContent = userInfo.profileName;
        this._description.textContent = userInfo.profileJob;
    }
}