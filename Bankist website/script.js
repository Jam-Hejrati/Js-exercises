"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

<<<<<<< HEAD
const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
=======
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
>>>>>>> 1f47b60ed4149dabfa9b7a2883a8588bc84f7a75
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

<<<<<<< HEAD
btnsOpenModal.forEach(btn => btn.addEventListener('click' , openModal))
=======
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);
>>>>>>> 1f47b60ed4149dabfa9b7a2883a8588bc84f7a75

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
