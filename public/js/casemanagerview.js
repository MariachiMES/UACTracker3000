const editUacBtnEl = document.querySelector("#edit-uac");
const editUACModal = document.querySelector("#edit-uac-modal");
const editSponsorEl = document.querySelector("#edit-sponsor");
const editUACxCloseEl = document.querySelector("#edit-uac-close-x");
const editUACcancelBtnEL = document.querySelector("#cancel-edit-uac-modal");
const editUACbgEl = document.querySelector("#edit-uac-BG");
const editSponsorModal = document.querySelector("#edit-sponsor-modal");
const editSponsorBgEl = document.querySelector("#edit-sponsor-BG");
const editSponsorX = document.querySelector("#edit-sponsor-close-x");
const editSponsorCancel = document.querySelector("#cancel-edit-sponsor-modal");

const newCMBtnEl = document.querySelector("#cmModalBtn");
const cmModalEl = document.querySelector("#cm-modal");
const cancelCmModalEl = document.querySelector("#cancel-cm-modal");
const cmBgModalEl = document.querySelector("#cm-BG");
const cmXcloseEl = document.querySelector("#cm-close-x");

const closeUACModal = function () {
  editUACModal.classList.remove("is-active");
};

const activateUACModal = function () {
  editUACModal.classList.add("is-active");
};

const activateSponsorModal = function () {
  editSponsorModal.classList.add("is-active");
};

const closeSponsorModal = function () {
  editSponsorModal.classList.remove("is-active");
};

editUacBtnEl.addEventListener("click", activateUACModal);

editUACxCloseEl.addEventListener("click", closeUACModal);

editUACcancelBtnEL.addEventListener("click", closeUACModal);

editUACbgEl.addEventListener("click", closeUACModal);

editSponsorEl.addEventListener("click", activateSponsorModal);

editSponsorBgEl.addEventListener("click", closeSponsorModal);

editSponsorX.addEventListener("click", closeSponsorModal);

editSponsorCancel.addEventListener("click", closeSponsorModal);
