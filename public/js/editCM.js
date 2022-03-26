const editRoleModal = document.querySelector("#edit-roles-modal");
let splitter = [];
let is_team_lead;
let casemanagerId = splitter.push(window.location.toString().split("/"));
console.log(casemanagerId);
const teamLead = document.getElementById("selected-cm").innerHTML;
async function editRole(event) {
  console.log(cmRole.innerText);
  event.preventDefault();
  if (cmRole.innerText == "YES") {
    is_team_lead = true;
  } else {
    is_team_lead = false;
  }
  console.log(is_team_lead);

  const response = await fetch("/api/edit/roles/" + casemanagerId, {
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
    document.location.replace(`/casemanager/${casemanagerId}`);
  } else {
    alert(response.statusText);
  }
}
document.querySelector("#edit-roles-save").addEventListener("click", editRole);

var dropdown = document.querySelector(".dropdown");
var cmRole = document.querySelector("#selected-cm");
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("is-active");
  cmRole.innerHTML = event.target.innerText;
});
