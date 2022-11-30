import './index.css';
import {
    popupEditProfileButton,
    popupAddPhotoButton,
    popupEditProfile,
    popupCreatePost,
    popupOpenImage,
    profileUserName,
    profileDescription,
    profileAvatar,
    formElementProfile,
    formCreateNewPost,
    userName,
    description,
    postContainer,
    elements
    } from '../utils/constants.js';
import Card from '../components/Card.js'
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const formElementProfileValidation = new FormValidator(formElementProfile, elements)
const formCreateNewPostValidation = new FormValidator(formCreateNewPost, elements);

formElementProfileValidation.enableValidation();
formCreateNewPostValidation.enableValidation();

const openImage = (imageLink, postName) => {
    popupWithImage.open(imageLink, postName);
}

const generateCard = (name, link, like) => {
    const cardItem = new Card(name, link, like,'.post__template', openImage);
    return cardItem.createCard();
}

const cardList = new Section({
    renderer: (data) => {
        const cardElement = generateCard(data.name, data.link, data.like);
        cardList.addItem(cardElement);
    }
}, postContainer);

const userInfo = new UserInfo({userName: profileUserName, description: profileDescription, avatar: profileAvatar});

const handleEditProfileInformation = (info) => {
    userInfo.setUserInfo(info);
    api.setUserInfo(info)
        .then(result => {
            console.log(result);
        })
};

const handleCreateNewPost = (cardObj) => {
    const card = api.addNewCard(cardObj)
        .then(card => {
            cardList.addItem(generateCard(card.name, card.link, card.like));
        });
    popupAddCard.close();
};

const popupWithImage = new PopupWithImage(popupOpenImage, elements);
popupWithImage.setEventListeners();

const popupProfileEdit = new PopupWithForm(popupEditProfile, handleEditProfileInformation, elements);
popupProfileEdit.setEventListeners();

const popupAddCard = new PopupWithForm(popupCreatePost, handleCreateNewPost, elements);
popupAddCard.setEventListeners();

popupEditProfileButton.addEventListener('click', () => {
    userName.value = userInfo.getUserInfo().profileName;
    description.value = userInfo.getUserInfo().profileJob;
    profileAvatar.src = userInfo.getUserInfo().avatar;

    formElementProfileValidation.hideErrors();
    popupProfileEdit.open();
});

popupAddPhotoButton.addEventListener('click', () => {
    formCreateNewPostValidation.hideErrors();
    popupAddCard.open();
});

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-55',
    headers: {
        authorization: '5edfebd6-970d-4762-80ff-378f56c29b55',
        'Content-Type': 'application/json'
    }
});

api.getInitialCards()
    .then((result) =>{
        cardList.renderItems(result);
    })
    .catch(error => {
        console.log(error);
    });
api.getUserInfo()
    .then(result => {
        userInfo.setUserInfo(result);
    })
    .catch(error => {
        console.log(error);
    });

