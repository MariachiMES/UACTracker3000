const uacModalEl = document.querySelector("#new-uac-modal");
const uacModalBtnEl = document.querySelector("#uacModalBtn");
const xCloseEl = document.querySelector("#close-x");
const cancelModalEl = document.querySelector("#cancel-modal");
const modalBgEl = document.querySelector(".modal-background");
const newCMBtnEl = document.querySelector("#cmModalBtn");
const cmModalEl = document.querySelector("#cm-modal");
const cancelCmModalEl = document.querySelector("#cancel-cm-modal");
const cmBgModalEl = document.querySelector("#cm-BG");
const cmXcloseEl = document.querySelector("#cm-close-x");

uacModalBtnEl.addEventListener("click", function () {
  uacModalEl.classList.add("is-active");
});

// const toggleModal = function () {};
xCloseEl.addEventListener("click", function () {
  uacModalEl.classList.remove("is-active");
});

cancelModalEl.addEventListener("click", function () {
  uacModalEl.classList.remove("is-active");
});

modalBgEl.addEventListener("click", function () {
  uacModalEl.classList.remove("is-active");
});

newCMBtnEl.addEventListener("click", function () {
  cmModalEl.classList.add("is-active");
});

cancelCmModalEl.addEventListener("click", function () {
  cmModalEl.classList.remove("is-active");
});

cmBgModalEl.addEventListener("click", function () {
  cmModalEl.classList.remove("is-active");
});
cmXcloseEl.addEventListener("click", function () {
  cmModalEl.classList.remove("is-active");
});

var dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("is-active");
});
