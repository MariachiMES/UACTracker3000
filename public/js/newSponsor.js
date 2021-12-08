// async function newSponsorHandler(event) {
//   console.log("clicked");
//   event.preventDefault();
//   const sponsor_name = document.querySelector("#sponsor-name").value.trim();
//   const address1 = document.querySelector("#sponsor-address1").value;
//   const address2 = document.querySelector("#sponsor-address2").value.trim();
//   const relationship = document
//     .querySelector("#sponsor-relationship")
//     .value.trim();
//   const age = document.querySelector("#sponsor-age").value.trim();
//   const city = document.querySelector("#city").value;
//   const state = document.querySelector("#state").value.trim();
//   const zip = document.querySelector("#zip").value;
//   //   const category = document.querySelector("#category").value.trim();
//   const gender = document.querySelector("#sponsor-gender").value.trim();

//   const editSponsor = document.querySelector("#edit-sponsor-modal");

//   const response = await fetch("/api/sponsor", {
//     method: "post",
//     body: JSON.stringify({
//       sponsor_name,
//       address1,
//       address2,
//       city,
//       state,
//       zip,
//       gender,
//       age,
//       relationship,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     editSponsor.classList.remove("is-active");
//     document.location.replace("/dashboard/");
//     console.log(response);
//   } else {
//     alert(response.statusText);
//   }
// }
// document
//   .querySelector("#save-sponsor-info")
//   .addEventListener("click", newSponsorHandler);
