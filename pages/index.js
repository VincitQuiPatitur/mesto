import { popupEditProfileButton, popupAddPhotoButton, popupEditProfile, popupCreatePost, popupOpenImage, profileUserName, profileDescription, formElementProfile, formCreateNewPost, userName, description, postName, imageLink, popupImage, popupCaption, postContainer, popupList, elements, initialCards } from '../utils/constants.js';
import { Card } from '../components/Card.js'
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const formElementProfileValidation = new FormValidator(formElementProfile, elements)
const formCreateNewPostValidation = new FormValidator(formCreateNewPost, elements);

formElementProfileValidation.enableValidation();
formCreateNewPostValidation.enableValidation();

const cardList = new Section({
    items: initialCards,
    renderer: (card) => {
        const cardElement = createCard(card.name, card.link);
        postContainer.append(cardElement);
        cardList.addItem(cardElement);
    }
}, postContainer);

const submitCreateNewPost = () => {

};

const handleCreateNewPost = (cardObj) => {
    //popupAddCard.open();
    const card = createCard(cardObj.name, cardObj.link);
    cardList.addItem(card);
    popupAddCard.close();
};

const popupWithImage = new PopupWithImage(popupOpenImage);
popupWithImage.setEventListeners();

const popupProfileEdit = new PopupWithForm(popupEditProfile, submitCreateNewPost);
popupProfileEdit.setEventListeners();

const popupAddCard = new PopupWithForm(popupCreatePost, handleCreateNewPost);
popupAddCard.setEventListeners();


const openImage = (imageLink, postName) => {
    popupWithImage.open(imageLink, postName);
}

const createCard = (name, link) => {
    const cardItem = new Card(name, link, '.post__template', openImage);

    return cardItem.createCard();
}



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

popupEditProfileButton.addEventListener('click', function () {
    userName.value = profileUserName.textContent;
    description.value = profileDescription.textContent;
    popupProfileEdit.open();
    //openPopup(popupEditProfile);
});

popupAddPhotoButton.addEventListener('click', function () {
    popupAddCard.open();
});

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

cardList.renderItems();