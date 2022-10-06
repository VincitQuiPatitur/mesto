const popupEditProfileButton = document.querySelector('.profile__edit-button');
const popupAddPhotoButton = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCreatePost = document.querySelector('.popup_type_add-photo');
const popupOpenImage = document.querySelector('.popup_type_image');

const popupCloseProfileButton = popupEditProfile.querySelector('.popup__close-button_type_profile');
const popupClosePostButton = popupCreatePost.querySelector('.popup__close-button_type_post');
const popupCloseImage = popupOpenImage.querySelector('.popup__close-button_type_image');

const profileUserName = document.querySelector('.profile__user-name');
const profileDescription = document.querySelector('.profile__description');

const formElementProfile = popupEditProfile.querySelector('.popup__form_type_profile-redaction');
const formCreateNewPost = popupCreatePost.querySelector('.popup__form_type_post-creating');

const userName = popupEditProfile.querySelector('.popup__input_type_user-name');
const description = popupEditProfile.querySelector('.popup__input_type_description');

const postName = popupCreatePost.querySelector('.popup__input_type_post-name');
const imageLink = popupCreatePost.querySelector('.popup__input_type_link');

const popupImage = popupOpenImage.querySelector('.popup__image');
const popupCaption = popupOpenImage.querySelector('.popup__caption');

const postContainer = document.querySelector('.posts__container');

const postTemplate = document.querySelector('.post__template').content;

function likeThePost(evt) {
    evt.target.classList.toggle('post__like_active');
}

function deleteThePost(evt) {
    evt.target.closest('.post').remove();
}

function addNewPost(postName, imageLink) {
    const post = postTemplate.querySelector('.post').cloneNode(true);
    const image =  post.querySelector('.post__image');

    post.querySelector('.post__subscription').textContent = postName;
    image.src = imageLink;
    image.alt = postName;
    post.querySelector('.post__like').addEventListener('click', likeThePost);
    post.querySelector('.post__delete').addEventListener('click', deleteThePost);
    image.addEventListener('click', function () {
        popupOpenImage.classList.toggle('popup_opened');
        popupImage.src = imageLink;
        popupImage.alt = postName;
        popupCaption.textContent = postName;
    });

    postContainer.prepend(post);
}

initialCards.forEach((card) => {
    addNewPost(card.name, card.link);
});

function closePopup(currentPopup) {
    currentPopup.classList.remove('popup_opened');
}

popupCloseProfileButton.addEventListener('click', function () {
    closePopup(popupEditProfile)
});
popupClosePostButton.addEventListener('click', function () {
    closePopup(popupCreatePost)
});
popupCloseImage.addEventListener('click', function () {
    closePopup(popupOpenImage)
})

function createNewPost(evt) {
    evt.preventDefault();
    addNewPost(postName.value, imageLink.value);

    closePopup(popupCreatePost);
}

function openPopup(event) {
    if (event.currentTarget === popupEditProfileButton) {
        popupEditProfile.classList.add('popup_opened');
        userName.value = profileUserName.textContent;
        description.value = profileDescription.textContent;
    }
    if (event.currentTarget === popupAddPhotoButton) {
        popupCreatePost.classList.add('popup_opened');
        formCreateNewPost.reset();
    }
}

popupEditProfileButton.addEventListener('click', openPopup);
popupAddPhotoButton.addEventListener('click', openPopup);

function editProfileInformation(evt) {
    evt.preventDefault();
    profileUserName.textContent = userName.value;
    profileDescription.textContent = description.value;

    closePopup(popupEditProfile);
}

formElementProfile.addEventListener('submit', editProfileInformation);
formCreateNewPost.addEventListener('submit', createNewPost);