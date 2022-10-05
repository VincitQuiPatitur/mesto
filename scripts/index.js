const popupEditProfileButton = document.querySelector('.profile__edit-button');
const popupAddPhotoButton = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCreatePost = document.querySelector('.popup_type_add-photo');

const popupCloseProfileButton = document.querySelector('.popup__close-button_type_profile');
const popupClosePostButton = document.querySelector('.popup__close-button_type_post');

const profileUserName = document.querySelector('.profile__user-name');
const profileDescription = document.querySelector('.profile__description');

const formElementProfile = popupEditProfile.querySelector('.popup__form_type_profile-reaction');

const userName = popupEditProfile.querySelector('.popup__input_type_user-name');
const description = popupEditProfile.querySelector('.popup__input_type_description');

const postName = popupCreatePost.querySelector('.popup__input_type_post-name');
const imageLink = popupCreatePost.querySelector('.popup__input_type_link');

const savePhotoButton = document.querySelector('.popup__save-button_type_create-new-post');

const postContainer = document.querySelector('.posts__container');
const postTemplate = document.querySelector('.post__template').content;

for (let i=0; i<initialCards.length; i++) {

    const post = postTemplate.querySelector('.post').cloneNode(true);

    post.querySelector('.post__image').src = initialCards[i].link;
    post.querySelector('.post__image').alt = initialCards[i].name;
    post.querySelector('.post__subscription').textContent = initialCards[i].name;

    postContainer.append(post);
}

function openPopup(event) {
    if (event.currentTarget === popupEditProfileButton) {
        popupEditProfile.classList.toggle('popup_opened');
        userName.value = profileUserName.textContent;
        description.value = profileDescription.textContent;
    }
    if (event.currentTarget === popupAddPhotoButton) {
        popupCreatePost.classList.toggle('popup_opened');
        postName.value = '';
        imageLink.value = '';
    }
}

popupEditProfileButton.addEventListener('click', openPopup);
popupAddPhotoButton.addEventListener('click', openPopup);

function closePopup(currentPopup) {
    currentPopup.classList.remove('popup_opened');
}

popupCloseProfileButton.addEventListener('click',function () {closePopup(popupEditProfile)});
popupClosePostButton.addEventListener('click',function () {closePopup(popupCreatePost)});

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileUserName.textContent = userName.value;
    profileDescription.textContent = description.value;

    closePopup(popupEditProfile);
}

formElementProfile.addEventListener('submit', formSubmitHandler);

function addNewPost(postName, imageLink) {
    const post = postTemplate.querySelector('.post').cloneNode(true);

    post.querySelector('.post__subscription').textContent = postName;
    post.querySelector('.post__image').src = imageLink;
    post.querySelector('.post__image').alt = postName;

    postContainer.prepend(post);
}

savePhotoButton.addEventListener('click', function(){
    addNewPost(postName.value, imageLink.value);

    postName.value = '';
    imageLink.value = '';

    closePopup(popupCreatePost);
});



