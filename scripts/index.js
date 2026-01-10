const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];
initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});

const editButton = document.querySelector(".profile__edit-profile-button");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const profileCloseButton = document.querySelector(".modal__close-btn");
const newPostCloseButton = document.querySelector(
  "#new-post-modal .modal__close-btn"
);
const profileModal = document.querySelector("#edit-profile-modal");
const newPostModalEl = document.querySelector("#new-post-modal");
const editProfileNameInput = document.querySelector("#profile-name-input");
const editProfileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const newPostButtonEl = document.querySelector(".profile__add-button");
const editProfileForm = document.querySelector(
  "#edit-profile-modal .modal__form"
);
const newPostForm = document.querySelector("#new-post-modal .modal__form");

function openModal(modal) {
  console.log("Opening modal:", modal);
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(profileModal);
});
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(profileModal);
}
function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  const imageLink = document.getElementById("card-image-input").value;
  const caption = document.getElementById("card-caption-input").value;
  closeModal(newPostModalEl);
  console.log(imageLink, caption);
}
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
newPostForm.addEventListener("submit", handleNewPostFormSubmit);

profileCloseButton.addEventListener("click", function () {
  closeModal(profileModal);
});

newPostButtonEl.addEventListener("click", function () {
  openModal(newPostModalEl);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModalEl);
});
