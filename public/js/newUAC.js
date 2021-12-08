async function newUAChandler(event) {
  console.log("NewUAC.js");
  event.preventDefault();
  const a_number = document.querySelector("#a-number").value;
  const uacname = document.querySelector("#uac-name").value;
  const dob = document.querySelector("#dob").value;
  const coo = document.querySelector("#coo").value;
  const intake = document.querySelector("#date-admitted").value;
  const gender = document.querySelector("#gender").value;
  const newUACModal = document.querySelector("#new-uac-modal");
  const user_id = document.querySelector("#user-id").innerText;
  const response = await fetch("/api/uac", {
    method: "post",
    body: JSON.stringify({
      a_number,
      uacname,
      dob,
      coo,
      intake,
      gender,
      user_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    newUACModal.classList.remove("is-active");
    document.location.replace("/table");
    console.log(user_id, "hello bullshit", response);
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector("#save-new-uac")
  .addEventListener("click", newUAChandler);

var dropdown = document.querySelector(".dropdown");
var newCm = document.querySelector("#selected-cm");
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("is-active");
  newCm.innerHTML = event.target.innerText;
  document.querySelector("#user-id").innerText = event.target.id;
});
