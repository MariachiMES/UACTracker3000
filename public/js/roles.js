let items = document.querySelectorAll(".user-name");
let numbers = document.querySelectorAll(".user-id");
let users = [];
let userId = [];

const rolesModal = document.getElementById("edit-roles-modal");
const rolesX = document.getElementById("edit-roles-x");
const rolesBG = document.getElementById("edit-roles-BG");
const rolesCancel = document.getElementById("edit-roles-cancel");
const rolesModalBtn = document.getElementById("edit-role-btn");

const teamLeadModal = document.getElementById("edit-team-lead-modal");
const teamLeadX = document.getElementById("edit-team-lead-x");
const teamLeadBG = document.getElementById("edit-team-lead-BG");
const teamLeadCancel = document.getElementById("edit-team-lead-cancel");
const teamLeadModalBtn = document.getElementById("edit-team-lead-btn");

let openTeamLeadModal = function () {
  teamLeadModal.classList.add("is-active");
};

let closeTeamLeadModal = function () {
  teamLeadModal.classList.remove("is-active");
};

teamLeadModalBtn.addEventListener("click", openTeamLeadModal);
teamLeadX.addEventListener("click", closeTeamLeadModal);
teamLeadBG.addEventListener("click", closeTeamLeadModal);
teamLeadCancel.addEventListener("click", closeTeamLeadModal);

let openRolesModal = function () {
  rolesModal.classList.add("is-active");
};

let closeRolesModal = function () {
  rolesModal.classList.remove("is-active");
};
rolesModalBtn.addEventListener("click", openRolesModal);
rolesX.addEventListener("click", closeRolesModal);
rolesBG.addEventListener("click", closeRolesModal);
rolesCancel.addEventListener("click", closeRolesModal);
let casemanager_user_id = document.querySelector("#team-lead").innerText;

var dropdown = document.getElementById("team-lead-dropdown");
var newTeamLead = document.querySelector("#selected-team-lead");
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("is-active");
  newTeamLead.innerHTML = event.target.innerText;
  casemanager_user_id = event.target.id;
});

let cmToUpdate = document.getElementById("cm-id").innerText;

async function editTeamLead(event) {
  // let casemanager_user_id = document.querySelector("#team-lead").innerText;
  event.preventDefault();
  const response = await fetch("/api/edit/teamlead/" + cmToUpdate, {
    method: "PUT",
    body: JSON.stringify({
      casemanager_user_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    teamLeadModal.classList.remove("is-active");
    document.location.replace(`/casemanager/${cmToUpdate}`);
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector("#edit-team-lead-save")
  .addEventListener("click", editTeamLead);
