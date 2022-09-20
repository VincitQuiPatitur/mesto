const popupEditButton = document.querySelector('.profile__open-popup');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const profileUserName = document.querySelector('.profile__user-name');
const profileDescription = document.querySelector('.profile__description');

const formElement = popup.querySelector('.popup__form');

const userName = popup.querySelector('.popup__input_type_user-name');
const description = popup.querySelector('.popup__input_type_description');

function openPopup() {
    popup.classList.toggle('popup_opened');
    userName.value = profileUserName.textContent;
    description.value = profileDescription.textContent;
}

popupEditButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.toggle('popup_opened');
}

popupCloseButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileUserName.textContent = userName.value;
    profileDescription.textContent = description.value;

    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);









