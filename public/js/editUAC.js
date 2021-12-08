const UACID = window.location.pathname;
//EDIT UAC INFO AND PUT ROUTE//
async function editUAChandler(event) {
  console.log("editUACHandler");
  event.preventDefault();

  const a_number = document.querySelector("#a-number").value;
  const uacname = document.querySelector("#uac-edit-name").value;
  const dob = document.querySelector("#uac-dob").value;
  const coo = document.querySelector("#uac-coo").value;
  //   const intake = document.querySelector("#intake").value.trim();
  const gender = document.querySelector("#gender").value;
  const age = document.querySelector("#uac-age").value;
  const category = document.querySelector("#category").value;
  const sir = document.querySelector("#sir").value;
  const sir_narrative = document.querySelector("#sir_narrative").value;
  //   const FRP = document.querySelector("#FRP").value.trim();

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
      sir: sir,
      sir_narrative: sir_narrative,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    editUACModal.classList.remove("is-active");
    document.location.replace("/dashboard/" + editUACID);
    console.log(response);
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector("#edit-uac-btn")
  .addEventListener("click", editUAChandler);

const taskSaveBtn = document.getElementById("save-task-info");
const editUACID = UACID.split("/")[2];
//EDIT TASKS AND PUT ROUTE
async function editTaskHandler(event) {
  console.log("editTaskHandler");
  event.preventDefault();
  const frp = document.querySelector("#frp").value;
  const ari = document.querySelector("#ari").value;
  const por = document.querySelector("#por").value;
  const poa = document.querySelector("#poa").value;
  const lod = document.querySelector("#lod").value;
  const lopc = document.querySelector("#lopc").value;
  const sponsor_bgc = document.querySelector("#sponsor_bgc").value;
  const sponsor_id = document.querySelector("#sponsor_id").value;
  const sponsor_fp = document.querySelector("#sponsor_fp").value;
  const hhm_id = document.querySelector("#hhm_id").value;
  const hhm_checks = document.querySelector("#hhm_checks").value;
  const sex_offender_check = document.querySelector(
    "#sex_offender_check"
  ).value;
  const coo_caregiver_date = document.querySelector(
    "#coo_caregiver_date"
  ).value;
  const prior_sponsorship_date = document.querySelector(
    "#prior_sponsorship_date"
  ).value;
  const previous_address_date = document.querySelector(
    "#previous_address_date"
  ).value;
  const criminal_history_date = document.querySelector(
    "#criminal_history_date"
  ).value;
  const can_check_requested_date = document.querySelector(
    "#can_check_requested_date"
  ).value;
  const sponsor_assessment = document.querySelector(
    "#sponsor_assessment"
  ).value;
  const response = await fetch("/api/edit/tasks/" + editUACID, {
    method: "PUT",
    body: JSON.stringify({
      sponsor_assessment: sponsor_assessment,
      frp: frp,
      ari: ari,
      por: por,
      poa: poa,
      lod: lod,
      lopc: lopc,
      sponsor_bgc: sponsor_bgc,
      sponsor_id: sponsor_id,
      sponsor_fp: sponsor_fp,
      hhm_checks: hhm_checks,
      hhm_id: hhm_id,
      sex_offender_check: sex_offender_check,
      coo_caregiver_date: coo_caregiver_date,
      prior_sponsorship_date: prior_sponsorship_date,
      previous_address_date: previous_address_date,
      criminal_history_date: criminal_history_date,
      can_check_requested_date: can_check_requested_date,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.getElementById("edit-tasks-modal").classList.remove("is-active");
    document.location.replace("/dashboard/" + editUACID);
    console.log(response);
  } else {
    alert(response.statusText);
  }
}
taskSaveBtn.addEventListener("click", editTaskHandler);
const sponsorSaveBtn = document.querySelector("#save-sponsor-info");
//EDIT SPONSOR TAB AND PUT ROUTE
async function editSponsorHandler(event) {
  console.log("editSponsorHandler");
  event.preventDefault();
  const sponsor_name = document.querySelector("#sponsor_name").value;
  const sponsor_address_1 = document.querySelector("#sponsor_address_1").value;
  const sponsor_address_2 = document.querySelector("#sponsor_address_2").value;
  const sponsor_city = document.querySelector("#sponsor_city").value;
  const sponsor_state = document.querySelector("#sponsor_state").value;
  const sponsor_zip = document.querySelector("#sponsor_zip").value;
  const sponsor_relationship = document.querySelector(
    "#sponsor_relationship"
  ).value;
  const sponsor_age = document.querySelector("#sponsor_age").value;
  const sponsor_gender = document.querySelector("#sponsor_gender").value;

  const response = await fetch("/api/edit/sponsor/" + editUACID, {
    method: "PUT",
    body: JSON.stringify({
      sponsor_name: sponsor_name,
      sponsor_address_1: sponsor_address_1,
      sponsor_address_2: sponsor_address_2,
      sponsor_city: sponsor_city,
      sponsor_state: sponsor_state,
      sponsor_zip: sponsor_zip,
      sponsor_relationship: sponsor_relationship,
      sponsor_age: sponsor_age,
      sponsor_gender: sponsor_gender,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.getElementById("edit-sponsor-modal").classList.remove("is-active");
    document.location.replace("/dashboard/" + editUACID);
    console.log(response);
  } else {
    alert(response.statusText);
  }
}

sponsorSaveBtn.addEventListener("click", editSponsorHandler);
//EDIT RELEASE REQUEST AND PUT ROUTE
const rrSaveBtn = document.querySelector("#save-rr-info");
async function editRRHandler(event) {
  console.log("editRRHandler");
  event.preventDefault();
  const list_of_bcs = document.querySelector("#list_of_bcs").value;
  const coo_narrative = document.querySelector("#coo_narrative").value;
  const self_disclosure = document.querySelector("#self_disclosure").value;
  const criminal_history = document.querySelector("#criminal_history").value;
  const sponsor_id_type = document.querySelector("#sponsor_id_type").value;
  const hhm_id_list = document.querySelector("#hhm_id_list").value;
  const fp_required = document.querySelector("#fp_required").value;
  const fp_results = document.querySelector("#fp_results").value;
  const can_check_required = document.querySelector(
    "#can_check_required"
  ).value;
  const can_check_received = document.querySelector(
    "#can_check_received"
  ).value;
  const poa_document = document.querySelector("#poa_document").value;
  const can_check_results = document.querySelector("#can_check_results").value;
  const coo_caregiver = document.querySelector("#coo_caregiver").value;
  const prior_sponsorship = document.querySelector("#prior_sponsorship").value;
  const previous_address = document.querySelector("#previous_address").value;
  const release_recommendation = document.querySelector(
    "#release_recommendation"
  ).value;
  const home_study_prs = document.querySelector("#home_study_prs").value;

  const response = await fetch("/api/edit/RR/" + editUACID, {
    method: "PUT",
    body: JSON.stringify({
      list_of_bcs: list_of_bcs,
      coo_narrative: coo_narrative,
      self_disclosure: self_disclosure,
      criminal_history: criminal_history,
      sponsor_id_type: sponsor_id_type,
      hhm_id_list: hhm_id_list,
      poa_document: poa_document,
      fp_required: fp_required,
      fp_results: fp_results,
      can_check_required: can_check_required,
      can_check_received: can_check_received,
      can_check_results: can_check_results,
      coo_caregiver: coo_caregiver,
      prior_sponsorship: prior_sponsorship,
      previous_address: previous_address,
      release_recommendation: release_recommendation,
      home_study_prs: home_study_prs,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.getElementById("edit-RR-modal").classList.remove("is-active");
    document.location.replace("/dashboard/" + editUACID);
    console.log(response);
  } else {
    alert(response.statusText);
  }
}
rrSaveBtn.addEventListener("click", editRRHandler);

//Color Coding
const colorCoding = function () {
  if (sponsor_assessment.value === "") {
    document
      .querySelector("#sa-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#sa-container")
    .classList.add("has-background-primary");
  if (frp.value === "") {
    document
      .querySelector("#frp-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#frp-container")
    .classList.add("has-background-primary");
  if (ari.value === "") {
    document
      .querySelector("#ari-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#ari-container")
    .classList.add("has-background-primary");
  if (poa.value === "") {
    document
      .querySelector("#poa-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#poa-container")
    .classList.add("has-background-primary");
  if (por.value === "") {
    document
      .querySelector("#por-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#por-container")
    .classList.add("has-background-primary");
  if (lod.value === "") {
    document
      .querySelector("#lod-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#lod-container")
    .classList.add("has-background-primary");
  if (lopc.value === "") {
    document
      .querySelector("#lopc-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#lopc-container")
    .classList.add("has-background-primary");
  if (sponsor_bgc.value === "") {
    document
      .querySelector("#sponsor_bgc-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#sponsor_bgc-container")
    .classList.add("has-background-primary");
  if (sponsor_id.value === "") {
    document
      .querySelector("#sponsor_id-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#sponsor_id-container")
    .classList.add("has-background-primary");
  if (sponsor_fp.value === "") {
    document
      .querySelector("#sponsor_fp-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#sponsor_fp-container")
    .classList.add("has-background-primary");
  if (hhm_checks.value === "") {
    document
      .querySelector("#hhm_checks-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#hhm_checks-container")
    .classList.add("has-background-primary");
  if (sex_offender_check.value === "") {
    document
      .querySelector("#sex_offender_check-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#sex_offender_check-container")
    .classList.add("has-background-primary");
  if (coo_caregiver_date.value === "") {
    document
      .querySelector("#coo_caregiver_date-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#coo_caregiver_date-container")
    .classList.add("has-background-primary");
  if (can_check_requested_date.value === "") {
    document
      .querySelector("#can_check_requested_date-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#can_check_requested_date-container")
    .classList.add("has-background-primary");
  if (prior_sponsorship_date.value === "") {
    document
      .querySelector("#prior_sponsorship_date-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#prior_sponsorship_date-container")
    .classList.add("has-background-primary");
  if (previous_address_date.value === "") {
    document
      .querySelector("#previous_address_date-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#previous_address_date-container")
    .classList.add("has-background-primary");
  if (criminal_history_date.value === "") {
    document
      .querySelector("#criminal_history_date-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#criminal_history_date-container")
    .classList.add("has-background-primary");
  if (hhm_id.value === "") {
    document
      .querySelector("#hhm_id-container")
      .classList.add("has-background-danger");
  }
  document;
  document
    .querySelector("#hhm_id-container")
    .classList.add("has-background-primary");
};
colorCoding();

async function editStatusHandler(event) {
  console.log("editStatusHandler");
  event.preventDefault();
  const submitted = document.querySelector("#submitted").value;
  const approved = document.querySelector("#approved").value;
  const remanded = document.querySelector("#remanded").value;

  const response = await fetch("/api/edit/status/" + editUACID, {
    method: "PUT",
    body: JSON.stringify({
      submitted: submitted,
      approved: approved,
      remanded: remanded,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.getElementById("edit-status-modal").classList.remove("is-active");
    document.location.replace("/dashboard/" + editUACID);
    console.log(response);
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#save-status-info")
  .addEventListener("click", editStatusHandler);

const statusColor = function () {
  if (document.querySelector("#remanded").value !== "") {
    document.querySelector("#edit-status").classList.remove("is-primary");
    document.querySelector("#edit-status").classList.add("is-danger");
  }
};
statusColor();
// var formatStreet = function (streetEl) {
//   let streetArray = [];
//   streetArray = streetEl.split(" ");
//   let street;
//   for (let i = 0; i < streetArray.length; i++) {
//     if (i % 2 === 1) {
//       streetArray.splice(i, 0, "+");
//     }
//     street = streetArray.join("").toLowerCase();
//   }
//   console.log(street);
//   return street;
// };
// formatStreet(sponsor_address_1);

// let cityEl = "San Antonio";
// var formatCity = function (cityEl) {
//   let cityArray = [];
//   cityArray = cityEl.split(" ");
//   let city;
//   for (let i = 0; i < cityArray.length; i++) {
//     if (i % 2 === 1) {
//       cityArray.splice(i, 0, "+");
//     }
//     city = cityArray.join("").toLowerCase();
//   }
//   console.log(city);
//   return city;
// };
// formatCity(sponsor_city);
