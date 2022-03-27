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

let getNames = function () {
  for (var i = 0; i < items.length; i++) {
    users.push(items[i].innerText);
  }
};

let getNumbers = function () {
  let test = [];
  for (var i = 0; i < numbers.length; i++) {
    test.push(numbers[i].id.split("-"));
    userId.push(numbers[i].id);
  }
  let final = [];
  for (var i = 0; i < test.length; i++) {
    final.push(test[i][2]);
  }
};

getNames();
getNumbers();

var dropdown = document.getElementById("team-lead-dropdown");
var newTeamLead = document.querySelector("#selected-team-lead");
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("is-active");
  newTeamLead.innerHTML = event.target.innerText;
  // document.querySelector("#user-id").innerText = event.target.id;
  let teamLead = document.querySelector("#team-lead");
  teamLead = event.target.id;
  console.log(teamLead);
});

// edit team lead fetch request
async function editTeamLead(event) {
  let team_lead = document.getElementById("team-lead").innerText;
  event.preventDefault();
  const response = await fetch("/api/edit/teamlead/" + casemanagerId, {
    method: "PUT",
    body: JSON.stringify({
      team_lead,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert("saved");
    teamLeadModal.classList.remove("is-active");
    document.location.replace(`/casemanager/${casemanagerId}`);
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector("#edit-team-lead-save")
  .addEventListener("click", editTeamLead);
