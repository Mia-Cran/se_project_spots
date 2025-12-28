const editButton = document.querySelector(".profile__edit-profile-button");
editButton.addEventListener("click", function () {
  const modal = document.querySelector("#edit-profile-modal");
  modal.classList.add("modal_is-opened");
});
const modalCloseBtn = document.querySelector(".modal__close-btn");
modalCloseBtn.addEventListener("click", function () {
  const modal = document.querySelector("#edit-profile-modal");
  modal.classList.remove("modal_is-opened");
});
const newPostModal = document.querySelector(".profile__add-button");
newPostModal.addEventListener("click", function () {
  const modal = document.querySelector("#new-post-modal");
  modal.classList.add("modal_is-opened");
});
const closeButton = document.querySelector("#new-post-modal .modal__close-btn");
closeButton.addEventListener("click", function () {
  const modal = document.querySelector("#new-post-modal");
  modal.classList.remove("modal_is-opened");
});
