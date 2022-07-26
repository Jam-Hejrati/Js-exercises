"use strict";

const modalBtns = document.querySelectorAll(".show-modal");
const modalBox = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

modalBtns.forEach((modalBtn) =>
    modalBtn.addEventListener("click", (e) => {
        modalBox.classList.toggle("hidden");
        overlay.classList.toggle("hidden");
    })
);

const closeBox = () => {
    modalBox.classList.add("hidden");
    overlay.classList.add("hidden");
};

closeModal.addEventListener("click", closeBox);
overlay.addEventListener("click", closeBox);

document.addEventListener("keydown", (e) => {
    // console.log(e.key);
    if (e.key === 'Escape' && !modalBox.classList.contains('hidden')) {
      closeBox();
    }
});
