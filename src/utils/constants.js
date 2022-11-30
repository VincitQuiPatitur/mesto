export const popupEditProfileButton = document.querySelector('.profile__edit-button');
export const popupAddPhotoButton = document.querySelector('.profile__add-button');

export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupCreatePost = document.querySelector('.popup_type_add-photo');
export const popupOpenImage = document.querySelector('.popup_type_image');

export const profileUserName = document.querySelector('.profile__user-name');
export const profileDescription = document.querySelector('.profile__description');

export const profileAvatar = document.querySelector('.profile__avatar');

export const formElementProfile = document.forms.redaction;
export const formCreateNewPost = document.forms.creating;

export const userName = formElementProfile.elements.namedItem('userName');
export const description = formElementProfile.elements.namedItem('description');

export const postContainer = document.querySelector('.posts__container');

export const likeCounter = document.querySelector('.post__like-count');

export const elements = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    popupOpenState: 'popup_opened',
    closeButtonSelector: 'popup__close-button'
};
