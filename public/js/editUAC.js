async function editUAChandler(event) {
  console.log("clicked to see");
  event.preventDefault();
  const a_number = document.querySelector("#a-number").value.trim();
  //   const uacname = document.querySelector("#uac-edit-name").value.trim();
  const dob = document.querySelector("#uac-dob").value.trim();
  const coo = document.querySelector("#uac-coo").value.trim();
  //   const intake = document.querySelector("#intake").value.trim();
  const gender = document.querySelector("#gender").value.trim();
  const age = document.querySelector("#uac-age").value.trim();
  const category = document.querySelector("#category").value.trim();
  //   const FRP = document.querySelector("#FRP").value.trim();
  const ARI = document.querySelector("#ARI").value;
  const POR = document.querySelector("#POR").value;
  //   const list_of_bcs = document.querySelector("#list-of-bcs").value.trim();
  //   const sponsor_bgc = document.querySelector("#sponsor-bgc").value;
  //   const sponsor_id = document.querySelector("#sponsor-id").value.trim();
  //   const sponsor_fp = document.querySelector("#sponsor-fp").value.trim();
  //   const hhm_id = document.querySelector("#hhm-id").value.trim();
  //   const hhm_checks = document.querySelector("#hhm-checks").value.trim();
  //   const SIR = document.querySelector("#SIR").value.trim();
  //   const sex_offender_check = document
  //     .querySelector("#sex-offender-check")
  //     .value.trim();

  const editUACModal = document.querySelector("#edit-uac-modal");

  const response = await fetch("/edit/:id", {
    method: "PUT",
    body: JSON.stringify({
      a_number,
      //   uacname,
      dob,
      coo,
      //   intake,
      gender,
      age,
      category,
      //   FRP,
      // ARI,
      // POR,
      //   list_of_bcs,
      //   sponsor_bgc,
      //   sponsor_id,
      //   sponsor_fp,
      //   hhm_id,
      //   hhm_checks,
      //   SIR,
      //   sex_offender_check,
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
document
  .querySelector("#edit-uac-btn")
  .addEventListener("click", editUAChandler);
