async function editUAChandler(event) {
  console.log("clicked to see");
  event.preventDefault();
  const UACID = window.location.pathname;
  const a_number = document.querySelector("#a-number").value.trim();
  const uacname = document.querySelector("#uac-edit-name").value.trim();
  const dob = document.querySelector("#uac-dob").value.trim();
  const coo = document.querySelector("#uac-coo").value.trim();
  //   const intake = document.querySelector("#intake").value.trim();
  const gender = document.querySelector("#gender").value.trim();
  const age = document.querySelector("#uac-age").value.trim();
  const category = document.querySelector("#category").value.trim();
  //   const FRP = document.querySelector("#FRP").value.trim();
  const ARI = document.querySelector("#ARI").value;
  const POR = document.querySelector("#POR").value;

  const editUACModal = document.querySelector("#edit-uac-modal");
  const editUACID = UACID.split("/")[2];

  const response = await fetch("/api/edit/uac/" + editUACID, {
    method: "PUT",
    body: JSON.stringify({
      uacname: uacname,
      a_number: a_number,
      dob: dob,
      coo: coo,
      age: age,
      category: category,
      gender: gender,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    editUACModal.classList.remove("is-active");
    document.location.replace("/table");
    console.log(response);
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector("#edit-uac-btn")
  .addEventListener("click", editUAChandler);
