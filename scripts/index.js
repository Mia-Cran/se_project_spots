const editButton = document.querySelector(".profile__edit-profile-button");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const modalCloseBtn = document.querySelector(".modal__close-btn");
const newPostModal = document.querySelector("#new-post-modal");
const closeButton = document.querySelector("#new-post-modal .modal__close-btn");
const modal = document.querySelector("#edit-profile-modal");
const newPostModalEl = document.querySelector("#new-post-modal");
const editProfileNameInput = document.querySelector("#profile-name-input");
const editProfileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const saveButton = document.querySelector(".modal__submit-btn");
const newPostButtonEl = document.querySelector(".profile__add-button");
const editProfileForm = document.querySelector(
  "#edit-profile-modal .modal__form"
);
const newPostForm = document.querySelector("#new-post-modal .modal__form");

editButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  modal.classList.add("modal_is-opened");
});
function handleprofileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  modal.classList.remove("modal_is-opened");
}
function newPostFormSubmit(evt) {
  evt.preventDefault();
  const imageLink = document.getElementById("modal__input").value;
  const caption = document.getElementById("card-caption-input").value;
  newPostModalEl.classList.remove("modal_is-opened");
  console.log(imageLink, caption);
}
editProfileForm.addEventListener("submit", handleprofileFormSubmit);
newPostForm.addEventListener("submit", newPostFormSubmit);

modalCloseBtn.addEventListener("click", function () {
  modal.classList.remove("modal_is-opened");
});

newPostButtonEl.addEventListener("click", function () {
  newPostModalEl.classList.add("modal_is-opened");
});

closeButton.addEventListener("click", function () {
  newPostModalEl.classList.remove("modal_is-opened");
});
