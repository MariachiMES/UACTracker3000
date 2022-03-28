async function loginFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector("#user-email").value.trim();
  const password = document.querySelector("#user-password").value.trim();
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log(response.body);
      document.location.replace("/caseload");
    } else {
      document.location.replace("/unauthorized");
    }
  }
}
document.querySelector("#login").addEventListener("click", loginFormHandler);

const loginModal = document.getElementById("login-modal");
const loginModalBG = document.getElementById("login-modal-bg");
const loginBtn = document.getElementById("login-btn");

openLoginModal = function () {
  loginModal.classList.add("is-active");
};

closeLoginModal = function () {
  loginModal.classList.remove("is-active");
};

loginBtn.addEventListener("click", openLoginModal);
loginModalBG.addEventListener("click", closeLoginModal);

const menu = document.getElementById("mobile-menu");
const mobileLoginBtn = document.getElementById("mobile-login-btn");

mobileLoginBtn.addEventListener("click", openLoginModal);

const hamburgerMenu = document.getElementById("hamburger-btn");

openHamburgerMenu = function () {
  console.log("fired");
  menu.classList.toggle("menu-active");
};

hamburgerMenu.addEventListener("click", openHamburgerMenu);
