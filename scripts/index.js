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

//подгрузка изображений через js
const postContainer = document.querySelector('.post__container');
 for (let i=0; i<initialCards.length; i++) {
     const postItem = document.createElement('li');
     postItem.className = 'post__item';

     const postImage = document.createElement('img');
     postImage.className = 'post__image';
     postImage.alt = initialCards[i].name;
     postImage.src = initialCards[i].link;

     const postDescription = document.createElement('div');
     postDescription.className = 'post__description';

     const postSubscription = document.createElement('p');
     postSubscription.className = 'post__subscription';
     postSubscription.textContent = initialCards[i].name;

     const postLike = document.createElement('button');
     postLike.className = 'post__like';
     postLike.type = 'button';

     postDescription.appendChild(postSubscription);
     postDescription.appendChild(postLike);

     postItem.appendChild(postImage);
     postItem.appendChild(postDescription);

     postContainer.append(postItem);
 }

//функция добавления изображения
function addImage(postSubscription, postImage) {

    const cardTemplate = document.querySelector('.post__template').content;
    const postItem = cardTemplate.querySelector('.post__item').cloneNode(true);

    postItem.querySelector('.post__subscription').textContent = postSubscription;
    postItem.querySelector('.post__image').textContent = postImage;

    postContainer.prepend(postItem);
}






