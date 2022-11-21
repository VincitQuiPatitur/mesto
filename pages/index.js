import {
    popupEditProfileButton,
    popupAddPhotoButton,
    popupEditProfile,
    popupCreatePost,
    popupOpenImage,
    profileUserName,
    profileDescription,
    formElementProfile,
    formCreateNewPost,
    userName,
    description,
    postContainer,
    elements,
    initialCards
} from '../utils/constants.js';
import Card from '../components/Card.js'
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const formElementProfileValidation = new FormValidator(formElementProfile, elements)
const formCreateNewPostValidation = new FormValidator(formCreateNewPost, elements);

formElementProfileValidation.enableValidation();
formCreateNewPostValidation.enableValidation();

const openImage = (imageLink, postName) => {
    popupWithImage.open(imageLink, postName);
}

const generateCard = (name, link) => {
    const cardItem = new Card(name, link, '.post__template', openImage);
    return cardItem.createCard();
}

const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const cardElement = generateCard(data.name, data.link);
        cardList.addItem(cardElement);
    }
}, postContainer);

const userInfo = new UserInfo({userName: profileUserName, description: profileDescription});

const handleEditProfileInformation = (info) => {
    userInfo.setUserInfo(info);
};

const handleCreateNewPost = (cardObj) => {
    //popupAddCard.open();
    const card = generateCard(cardObj.name, cardObj.link);
    cardList.addItem(card);
    console.log(cardList);
    popupAddCard.close();
};

const popupWithImage = new PopupWithImage(popupOpenImage);
popupWithImage.setEventListeners();

const popupProfileEdit = new PopupWithForm(popupEditProfile, handleEditProfileInformation);
popupProfileEdit.setEventListeners();

const popupAddCard = new PopupWithForm(popupCreatePost, handleCreateNewPost);
popupAddCard.setEventListeners();

popupEditProfileButton.addEventListener('click', () => {
    userName.value = userInfo.getUserInfo().profileName;
    description.value = userInfo.getUserInfo().profileJob;
    popupProfileEdit.open();
});

popupAddPhotoButton.addEventListener('click', () => {
    popupAddCard.open();
});

cardList.renderItems();

/*function closePopup(currentPopup) {
    currentPopup.classList.remove(elements.popupOpenState);
    document.removeEventListener('keydown', closeWithEsc);
}*/

/*popupList.forEach((listElement) => {
    listElement.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains(elements.popupOpenState)) {
            closePopup(listElement);
        }
        if (evt.target.classList.contains(elements.closeButtonSelector)) {
            closePopup(listElement);
        }
    });
});*/

/*const closeWithEsc = (evt) => {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
};*/


/*function openPopup(popup) {
    popup.classList.add(elements.popupOpenState);
    document.addEventListener('keydown', closeWithEsc);
}*/
/*function openImage(imageLink, postName) {
    openPopup(popupOpenImage);
    popupImage.src = imageLink;
    popupImage.alt = postName;
    popupCaption.textContent = postName;
}*/

/*function handleEditProfileInformation() {
    //evt.preventDefault();
    profileUserName.textContent = userName.value;
    profileDescription.textContent = description.value;

    //closePopup(popupEditProfile);
}

function handleCreateNewPost() {
    //popupAddCard.open();
    const newPost = createCard(postName.value, imageLink.value);
    postContainer.prepend(newPost);
    formCreateNewPost.reset();
    //popupAddCard.close();
}

formElementProfile.addEventListener('submit', handleEditProfileInformation);
formCreateNewPost.addEventListener('submit', handleCreateNewPost);*/