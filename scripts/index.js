const popupEditProfileButton = document.querySelector('.profile__edit-button');
const popupAddPhotoButton = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCreatePost = document.querySelector('.popup_type_add-photo');
const popupOpenImage = document.querySelector('.popup_type_image');

const profileUserName = document.querySelector('.profile__user-name');
const profileDescription = document.querySelector('.profile__description');

const formElementProfile = document.forms.redaction;
const formCreateNewPost = document.forms.creating;

const userName = formElementProfile.elements.namedItem('userName');
const description = formElementProfile.elements.namedItem('description');

const postName = formCreateNewPost.elements.namedItem('postName');
const imageLink = formCreateNewPost.elements.namedItem('imageLink');

const popupImage = popupOpenImage.querySelector('.popup__image');
const popupCaption = popupOpenImage.querySelector('.popup__caption');

const postContainer = document.querySelector('.posts__container');

const postTemplate = document.querySelector('.post__template').content;

const popupList = document.querySelectorAll('.popup');

const elements = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    fieldSelector: '.popup__fieldset',
    popupOpenState: 'popup_opened',
    closeButtonSelector: 'popup__close-button',
    postLikeState: 'post__like_active'
};

enableValidation(elements);

function closePopup(currentPopup) {
    currentPopup.classList.remove(elements.popupOpenState);
    document.removeEventListener('keydown', closeWithEsc);
}

popupList.forEach((listElement) => {
    listElement.addEventListener('mousedown',  (evt) => {
        if (evt.target.classList.contains(elements.popupOpenState)) {
            closePopup(listElement);
        }
        if (evt.target.classList.contains(elements.closeButtonSelector)) {
            closePopup(listElement);
        }
    });
});

const closeWithEsc = (evt) => {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
};

function likeThePost(evt) {
    evt.target.classList.toggle(elements.postLikeState);
}

function deleteThePost(evt) {
    evt.target.closest('.post').remove();
}

function createCard(postName, imageLink) {
    const post = postTemplate.querySelector('.post').cloneNode(true);
    const image = post.querySelector('.post__image');

    post.querySelector('.post__subscription').textContent = postName;
    image.src = imageLink;
    image.alt = postName;
    post.querySelector('.post__like').addEventListener('click', likeThePost);
    post.querySelector('.post__delete').addEventListener('click', deleteThePost);
    image.addEventListener('click', function () {
        openPopup(popupOpenImage);
        popupImage.src = imageLink;
        popupImage.alt = postName;
        popupCaption.textContent = postName;
    });

    return post;
}

initialCards.forEach((card) => {
    const newCard = createCard(card.name, card.link);
    postContainer.append(newCard);
});

function createNewPost(evt) {
    evt.preventDefault();
    const newPost = createCard(postName.value, imageLink.value);
    postContainer.prepend(newPost);
    formCreateNewPost.reset();

    closePopup(popupCreatePost);
}

function openPopup(popup) {
    popup.classList.add(elements.popupOpenState);
    document.addEventListener('keydown', closeWithEsc);
}

popupEditProfileButton.addEventListener('click', function () {
    userName.value = profileUserName.textContent;
    description.value = profileDescription.textContent;
    openPopup(popupEditProfile);
});

popupAddPhotoButton.addEventListener('click', function () {
    openPopup(popupCreatePost);
});

function editProfileInformation(evt) {
    evt.preventDefault();
    profileUserName.textContent = userName.value;
    profileDescription.textContent = description.value;

    closePopup(popupEditProfile);
}

formElementProfile.addEventListener('submit', editProfileInformation);
formCreateNewPost.addEventListener('submit', createNewPost);