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

function likeThePost(evt) {
    evt.target.classList.toggle('post__like_active');
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
    const newPost = createCard(postName.value, imageLink.value);
    postContainer.prepend(newPost);

    closePopup(popupCreatePost);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

popupEditProfileButton.addEventListener('click', function () {
    openPopup(popupEditProfile);
    userName.value = profileUserName.textContent;
    description.value = profileDescription.textContent;
});
popupAddPhotoButton.addEventListener('click', function () {
    openPopup(popupCreatePost);
    formCreateNewPost.reset();
});

function editProfileInformation(evt) {
    evt.preventDefault();
    profileUserName.textContent = userName.value;
    profileDescription.textContent = description.value;

    closePopup(popupEditProfile);
}

formElementProfile.addEventListener('submit', editProfileInformation);
formCreateNewPost.addEventListener('submit', createNewPost);