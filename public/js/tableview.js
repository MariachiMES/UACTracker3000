const uacModalEl = document.querySelector("#new-uac-modal");
const uacModalBtnEl = document.querySelector("#uacModalBtn");
const xCloseEl = document.querySelector("#close-x");
const cancelModalEl = document.querySelector("#cancel-modal");
const modalBgEl = document.querySelector(".modal-background");
// const newCMBtnEl = document.querySelector("#cmModalBtn");
const cmModalEl = document.querySelector("#cm-modal");
const cancelCmModalEl = document.querySelector("#cancel-cm-modal");
const cmBgModalEl = document.querySelector("#cm-BG");
const cmXcloseEl = document.querySelector("#cm-close-x");

const authCMModal = document.querySelector("#auth-cm-modal");
const authCMModalBtn = document.querySelector("#auth-cm-btn");
const authCMCloseX = document.querySelector("#auth-cm-x");
const authCMCancel = document.querySelector("#auth-cm-modal-cancel");
const authCMBG = document.querySelector("#auth-cm-BG");

authCMModalBtn.addEventListener("click", function () {
  authCMModal.classList.add("is-active");
});

authCMBG.addEventListener("click", function () {
  authCMModal.classList.remove("is-active");
});

authCMCloseX.addEventListener("click", function () {
  authCMModal.classList.remove("is-active");
});

authCMCancel.addEventListener("click", function () {
  authCMModal.classList.remove("is-active");
});

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

// newCMBtnEl.addEventListener("click", function () {
//   cmModalEl.classList.add("is-active");
// });

// cancelCmModalEl.addEventListener("click", function () {
//   cmModalEl.classList.remove("is-active");
// });

// cmBgModalEl.addEventListener("click", function () {
//   cmModalEl.classList.remove("is-active");
// });
// cmXcloseEl.addEventListener("click", function () {
//   cmModalEl.classList.remove("is-active");
// });

// async function logout() {
//   const response = await fetch("/api/users/logout", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (response.ok) {
//     document.location.replace("/");
//   } else {
//     alert(`DUUUUUUUUUDE!!!! YOU'RE NOT EVEN LOGGED IN, SOMEHOW!!!!!`);
//   }
// }
// document.querySelector("#logout").addEventListener("click", logout);
