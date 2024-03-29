import './index.css';
import {
    popupEditProfileButton,
    popupAddPhotoButton,
    popupEditProfile,
    popupCreatePost,
    popupOpenImage,
    popupDeletionConfirmation,
    popupEditAvatar,
    profileUserName,
    profileDescription,
    profileAvatar,
    formElementProfile,
    formCreateNewPost,
    formEditAvatar,
    userName,
    description,
    postContainer,
    elements,
    avatarSection
} from '../utils/constants.js';
import Card from '../components/Card.js'
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDeleteCard from "../components/PopupDeleteCard.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const formElementProfileValidation = new FormValidator(formElementProfile, elements)
const formCreateNewPostValidation = new FormValidator(formCreateNewPost, elements);
const formEditAvatarValidation = new FormValidator(formEditAvatar, elements);

formElementProfileValidation.enableValidation();
formCreateNewPostValidation.enableValidation();
formEditAvatarValidation.enableValidation();

let userId;

const openImage = (imageLink, postName) => {
    popupWithImage.open(imageLink, postName);
}

const deleteCard = (card) => {
    popupDeletion.open(card);
}

const likeCard = (card) => {
    api.likeCard(card)
        .then(result => {
            card.like();
            card.countLikesNumber(result);
        })
        .catch(error => {
            console.log(error);
        })
}

const dislikeCard = (card) => {
    api.dislikeCard(card)
        .then(result => {
            card.dislike();
            card.countLikesNumber(result);
        })
        .catch(error => {
            console.log(error);
        })
}

const generateCard = (data) => {
    const cardItem = new Card(
        data,
        elements.postTemplate,
        openImage,
        deleteCard,
        likeCard,
        dislikeCard,
        userId,
        elements);
    return cardItem.createCard();
}

const cardList = new Section({
    renderer: (data) => {
        const cardElement = generateCard(data);
        cardList.addItem(cardElement);
    }
}, postContainer);

const userInfo = new UserInfo({userName: profileUserName, description: profileDescription, avatar: profileAvatar});

const handleEditProfileInformation = (info) => {
    popupProfileEdit.renderingLoading(true, 'Сохранение...');
    api.setUserInfo(info)
        .then(result => {
            userInfo.setUserInfo(result);
            popupProfileEdit.close();
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            popupProfileEdit.renderingLoading(false, '');
        });
};

const handleCreateNewPost = (cardObj) => {
    popupAddCard.renderingLoading(true, 'Создание...');
    api.addNewCard(cardObj)
        .then((card) => {
            cardList.addItemBefore(generateCard(card));
            popupAddCard.close();
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            popupAddCard.renderingLoading(false, '');
        });
};

const handleDeleteCard = (card) => {
    api.deleteCard(card)
        .then(() => {
            card.deleteElement();
            popupDeletion.close();
        })
        .catch(err => {
            console.log(err);
        });
}

const handleEditAvatar = (data) => {
    popupAvatarEdition.renderingLoading(true, 'Сохранение...');
    api.editAvatar(data)
        .then(result => {
            userInfo.setNewAvatar(result.avatar);
            popupAvatarEdition.close();
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            popupAvatarEdition.renderingLoading(false, '');
        });
}

const popupWithImage = new PopupWithImage(popupOpenImage, elements);
popupWithImage.setEventListeners();

const popupProfileEdit = new PopupWithForm(popupEditProfile, handleEditProfileInformation, elements);
popupProfileEdit.setEventListeners();

const popupAddCard = new PopupWithForm(popupCreatePost, handleCreateNewPost, elements);
popupAddCard.setEventListeners();

const popupDeletion = new PopupDeleteCard(popupDeletionConfirmation, handleDeleteCard, elements);
popupDeletion.setEventListeners();

const popupAvatarEdition = new PopupWithForm(popupEditAvatar, handleEditAvatar, elements);
popupAvatarEdition.setEventListeners();

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

avatarSection.addEventListener('click', () => {
    formEditAvatarValidation.hideErrors();
    popupAvatarEdition.open();
})

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-55',
    headers: {
        authorization: '5edfebd6-970d-4762-80ff-378f56c29b55',
        'Content-Type': 'application/json'
    }
});

Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then(([cards, userInformation]) => {
        userId = userInformation._id;
        userInfo.setUserInfo(userInformation);
        cardList.renderItems(cards);
    })
    .catch(error => {
        console.log(error);
    });