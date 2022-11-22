export const popupEditProfileButton = document.querySelector('.profile__edit-button');
export const popupAddPhotoButton = document.querySelector('.profile__add-button');

export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupCreatePost = document.querySelector('.popup_type_add-photo');
export const popupOpenImage = document.querySelector('.popup_type_image');

export const profileUserName = document.querySelector('.profile__user-name');
export const profileDescription = document.querySelector('.profile__description');

export const formElementProfile = document.forms.redaction;
export const formCreateNewPost = document.forms.creating;

export const userName = formElementProfile.elements.namedItem('userName');
export const description = formElementProfile.elements.namedItem('description');

export const popupImage = popupOpenImage.querySelector('.popup__image');
export const popupCaption = popupOpenImage.querySelector('.popup__caption');

export const postContainer = document.querySelector('.posts__container');


export const elements = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    fieldSelector: '.popup__fieldset',
    popupOpenState: 'popup_opened',
    closeButtonSelector: 'popup__close-button'
};

export const initialCards = [
    {
        name: 'Барселона',
        link: 'https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80'
    },
    {
        name: 'Венеция',
        link: 'https://images.unsplash.com/photo-1597410010355-cbb0accd8b3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80'
    },
    {
        name: 'Порто',
        link: 'https://images.unsplash.com/photo-1588505910760-a8e9a240dc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        name: 'Вена',
        link: 'https://images.unsplash.com/photo-1599268878004-6493e0c85cb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
    },
    {
        name: 'Будапешт',
        link: 'https://images.unsplash.com/photo-1541343672885-9be56236302a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        name: 'Лугано',
        link: 'https://images.unsplash.com/photo-1616443777130-e5a5528cb308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=372&q=80'
    }
];
