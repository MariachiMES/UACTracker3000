async function deleteUAChandler(event) {
  console.log("delete ONE UAC");
  event.preventDefault();
  const uac = document.querySelector("#delete-uac").value;
  const response = await fetch("/api/delete/" + uac, {
    method: "DELETE",
    body: JSON.stringify({
      uac_id: uac,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/table");
    console.log(response);
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector("#delete-uac")
  .addEventListener("click", deleteUAChandler);
