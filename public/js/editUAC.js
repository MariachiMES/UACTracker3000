async function editUAChandler(event) {
  console.log("clicked, cause alvin said so");
  event.preventDefault();
  const a_number = document.querySelector("#a-number").value.trim();
  const uacname = document.querySelector("#uac-name").value;
  const dob = document.querySelector("#uac-dob").value.trim();
  const coo = document.querySelector("#uac-coo").value;
  const intake = document.querySelector("#intake").value;
  const gender = document.querySelector("#uac-gender").value.trim();
  const age = document.querySelector("#uac-age").value.trim();
  const category = document.querySelector("#uac-gender").value.trim();
  const FRP = document.querySelector("#FRP").value.trim();
  const ARI = document.querySelector("#ARI").value.trim();
  const POR = document.querySelector("#POR").value.trim();
  const list_of_bcs = document.querySelector("#list-of-bcs").value.trim();
  const sponsor_bgc = document.querySelector("#sponsor-bgc").value.trim();
  const sponsor_id = document.querySelector("#sponsor-id").value.trim();
  const sponsor_fp = document.querySelector("#sponsor-fp").value.trim();
  const hhm_id = document.querySelector("#hhm-id").value.trim();
  const hhm_checks = document.querySelector("#hhm-checks").value.trim();
  const SIR = document.querySelector("#SIR").value.trim();
  const sex_offender_check = document
    .querySelector("#sex-offender-check")
    .value.trim();

  const editUACModal = document.querySelector("#edit-uac-modal");

  const response = await fetch("/api/uac", {
    method: "put",
    body: JSON.stringify({
      a_number,
      uacname,
      dob,
      coo,
      intake,
      gender,
      age,
      category,
      FRP,
      ARI,
      POR,
      list_of_bcs,
      sponsor_bgc,
      sponsor_id,
      sponsor_fp,
      hhm_id,
      hhm_checks,
      SIR,
      sex_offender_check,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    editUACModal.classList.remove("is-active");
    document.location.replace();
    console.log(response);
  } else {
    alert(response.statusText);
  }
}
document.querySelector("#edit-uac").addEventListener("click", editUAChandler);
