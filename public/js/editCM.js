const editRoleModal = document.querySelector("#edit-roles-modal");
let splitter = [];
let is_team_lead;
let casemanagerId = splitter.push(window.location.toString().split("/"));
let newThing = window.location.pathname;
splitter.push(newThing.split(""));
console.log(splitter);
splitter[1].splice(0, 13);
console.log(splitter[1]);
const lead_id = parseInt(splitter[1], 10);
console.log(lead_id);
//edit role fetch request
async function editRole(event) {
  console.log(cmRole.innerText);
  event.preventDefault();
  if (cmRole.innerText == "YES") {
    is_team_lead = true;
  } else {
    is_team_lead = false;
  }
  console.log(is_team_lead);

  const response = await fetch("/api/edit/roles/" + lead_id, {
    method: "PUT",
    body: JSON.stringify({
      is_team_lead,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    editRoleModal.classList.remove("is-active");
    document.location.replace(`/casemanager/${lead_id}`);
  } else {
    alert(response.statusText);
  }
}
//end edit role fetch request
//edit role save button
document.querySelector("#edit-roles-save").addEventListener("click", editRole);
//dropdown script
var dropdown = document.querySelector(".dropdown-role");
var cmRole = document.querySelector("#selected-cm");
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("is-active");
  cmRole.innerHTML = event.target.innerText;
});
//end dropdown script
