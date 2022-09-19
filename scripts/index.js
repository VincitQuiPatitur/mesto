const popupEditButton = document.querySelector('.profile__open-popup');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const profileUserName = document.querySelector('.profile__user-name');
const profileDescription = document.querySelector('.profile__description');

let formElement = popup.querySelector('.popup__form');

let userName = popup.querySelector('.popup__input_type_user-name');
let description = popup.querySelector('.popup__input_type_description');


popupEditButton.addEventListener('click', function openPopup(){
    popup.classList.toggle('popup__opened');
    userName.value = profileUserName.textContent;
    description.value = profileDescription.textContent;
});

function closePopup() {
    popup.classList.toggle('popup__opened');
}

popupCloseButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileUserName.textContent = userName.value;
    profileDescription.textContent = description.value;

    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);









