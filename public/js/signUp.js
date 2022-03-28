async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  if (username && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("This is the Response", response);
    if (response.ok) {
      console.log("THERE WAS OK");
      document.location.replace("/");
    } else {
      console.log("THERE WAS AN ERROR");
      document.location.replace("/unauthorized");
    }
  }
}
document
  .querySelector("#new-user")
  .addEventListener("click", signupFormHandler);

const signupModal = document.getElementById("signup-modal");
const signupBG = document.getElementById("signup-BG");
const signupBtn = document.getElementById("sign-up-btn");

openSignupModal = function () {
  signupModal.classList.add("is-active");
};

closeSignupModal = function () {
  signupModal.classList.remove("is-active");
};

signupBtn.addEventListener("click", openSignupModal);
signupBG.addEventListener("click", closeSignupModal);

const mobileSignupBtn = document.getElementById("mobile-sign-up-btn");
mobileSignupBtn.addEventListener("click", openSignupModal);
