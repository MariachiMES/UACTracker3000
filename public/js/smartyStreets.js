const formatAddress = function () {
  const street = document.querySelector("#smarty-address").value;
  let smartyStreet = street.toLowerCase().split("");
  for (let i = 0; i < smartyStreet.length; i++) {
    if (smartyStreet[i] === " ") {
      smartyStreet.splice(i, 1, "+");
    }
  }
  formattedAddress = smartyStreet.join("");
  return formattedAddress;
};
const formatCity = function () {
  const city = document.querySelector("#smarty-city").value;

  let smartyCity = city.toLowerCase().split("");
  for (let i = 0; i < smartyCity.length; i++) {
    if (smartyCity[i] === " ") {
      smartyCity.splice(i, 1, "+");
    }
  }
  formattedCity = smartyCity.join("");
  return formattedCity;
};
const formatState = function () {
  const state = document.querySelector("#smarty-state").value;
  formattedState = state.toUpperCase();
  return formattedState;
};
const formatZip = function () {
  const zip = document.querySelector("#smarty-zip").value;
  formattedZip = zip.toString();
  return formattedZip;
};

async function handleSmartyStreetSubmit(event) {
  console.log("handle smarty street submit");
  event.preventDefault();
  const response = await fetch("api/smartystreets/", {
    method: "GET",
    body: JSON.stringify({
      street: street,
      city: city,
      state: state,
      zip: zip,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    console.log(
      `smartyStreets.js on the front end responds with OK response: ${response}`
    );
  }
}
