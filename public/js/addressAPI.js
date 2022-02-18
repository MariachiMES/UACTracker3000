const authID = "0b42747f-8fb5-655c-8aea-df31b60bd6b4";
const authToken = "YobajrDKGXx87VDkFJNg";
// const authID = process.env.AUTH_ID;
// const authToken = process.env.AUTH_TOKEN;
const goTime = document.querySelector("#view-results");

let formattedAddres;
let formattedCity;
let formattedState;

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

const fetchSmartyStreets = function () {
  formatAddress();
  formatCity();
  formatState();
  formatZip();

  let fetchAddress = `https://us-street.api.smartystreets.com/street-address?auth-id=${authID}&auth-token=${authToken}&street=${formattedAddress}+${formattedCity}+${formattedState}+${formattedZip}`;
  console.log(fetchAddress);
  fetch(
    fetchAddress
    // `https://us-street.api.smartystreets.com/street-address?auth-id=${authID}&auth-token=${authToken}&street=510+W+Dimmit+Crystal+city+TX+78839`
    // `https://us-street.api.smartystreets.com/street-address?auth-id=${authID}&auth-token=${authToken}&street=${formattedAddres}+${formattedCity}+${formattedState}+${zip}`
  )
    .then((response) => response.json())
    .then((data) => displayValidation(data));
};
goTime.addEventListener("click", fetchSmartyStreets);

var displayValidation = function (data) {
  console.log(data);
  if (data.length === 0) {
    console.log("fuuuuuck");
    document.querySelector("#all-good").classList.add("is-hidden");

    document
      .querySelector("#secondary-info-confirm")
      .classList.add("is-hidden");
    document.querySelector("#secondary-info").classList.add("is-hidden");
    document.querySelector("#not-good").classList.remove("is-hidden");
    document.querySelector("#google-maps").classList.add("is-hidden");
    document.querySelector("#google-earth").classList.add("is-hidden");
    document.querySelector("#address-1-result").innerHTML = "err";
    document.querySelector("#longitude-result").innerHTML = "err";
    document.querySelector("#latitude-result").innerHTML = "err";
    document.querySelector("#city-result").innerHTML = "err";
    document.querySelector("#found").classList.remove("is-hidden");
    document.querySelector("#precision-result").innerHTML = "err";
    document.querySelector("#no-of-results").innerHTML = data.length;

    return;
  }
  if (data !== [] && data[0].analysis.dpv_footnotes === "AABB") {
    console.log(data.length);
    document
      .querySelector("#secondary-info-confirm")
      .classList.add("is-hidden");
    document.querySelector("#secondary-info").classList.add("is-hidden");
    document.querySelector("#not-good").classList.add("is-hidden");
    document.querySelector("#all-good").classList.remove("is-hidden");
    document.querySelector("#found").classList.remove("is-hidden");
    document.querySelector("#no-of-results").innerHTML = data.length;
    document.querySelector("#google-maps").classList.remove("is-hidden");
    document.querySelector("#google-earth").classList.remove("is-hidden");
    document.querySelector("#address-1-result").innerHTML =
      data[0].delivery_line_1;
    document.querySelector("#longitude-result").innerHTML =
      data[0].metadata.longitude;
    document.querySelector("#latitude-result").innerHTML =
      data[0].metadata.latitude;
    document.querySelector("#city-result").innerHTML = data[0].last_line;
    document.querySelector("#precision-result").innerHTML =
      data[0].metadata.rdi;
    if (data[0].analysis.dpv_match_code === "Y") {
      console.log("entire thing matched");
    }
  }
  if (data !== [] && data[0].analysis.dpv_footnotes === "AAN1") {
    console.log(data.length);
    document
      .querySelector("#secondary-info-confirm")
      .classList.add("is-hidden");
    document.querySelector("#secondary-info").classList.remove("is-hidden");
    document.querySelector("#not-good").classList.add("is-hidden");
    document.querySelector("#all-good").classList.add("is-hidden");
    document.querySelector("#found").classList.remove("is-hidden");
    document.querySelector("#no-of-results").innerHTML = data.length;
    document.querySelector("#google-maps").classList.remove("is-hidden");
    document.querySelector("#google-earth").classList.remove("is-hidden");
    document.querySelector("#address-1-result").innerHTML =
      data[0].delivery_line_1;
    document.querySelector("#longitude-result").innerHTML =
      data[0].metadata.longitude;
    document.querySelector("#latitude-result").innerHTML =
      data[0].metadata.latitude;
    document.querySelector("#city-result").innerHTML = data[0].last_line;
    document.querySelector("#precision-result").innerHTML =
      data[0].metadata.rdi;
    if (data[0].analysis.dpv_match_code === "Y") {
      console.log("entire thing matched");
    }
  }
  if (data !== [] && data[0].analysis.dpv_footnotes === "AACC") {
    console.log(data.length);
    document
      .querySelector("#secondary-info-confirm")
      .classList.remove("is-hidden");
    document.querySelector("#secondary-info").classList.add("is-hidden");
    document.querySelector("#not-good").classList.add("is-hidden");
    document.querySelector("#all-good").classList.add("is-hidden");
    document.querySelector("#found").classList.remove("is-hidden");
    document.querySelector("#no-of-results").innerHTML = data.length;
    document.querySelector("#google-maps").classList.remove("is-hidden");
    document.querySelector("#google-earth").classList.remove("is-hidden");
    document.querySelector("#address-1-result").innerHTML =
      data[0].delivery_line_1;
    document.querySelector("#longitude-result").innerHTML =
      data[0].metadata.longitude;
    document.querySelector("#latitude-result").innerHTML =
      data[0].metadata.latitude;
    document.querySelector("#city-result").innerHTML = data[0].last_line;
    document.querySelector("#precision-result").innerHTML =
      data[0].metadata.rdi;
  }
};

const openGoogleMaps = function () {
  const lat = document.querySelector("#longitude-result").innerHTML;
  const lon = document.querySelector("#latitude-result").innerHTML;
  formatAddress();
  formatCity();
  formatState();
  formatZip();
  const googleMapsAddress = `https://www.google.com/maps/place/${formattedAddress},+${formattedCity},+${formattedState}+${formattedZip}/`;
  console.log(googleMapsAddress);
  window.open(googleMapsAddress);
};
document
  .querySelector("#google-maps")
  .addEventListener("click", openGoogleMaps);
const openGoogleEarth = function () {
  formatAddress();
  formatCity();
  formatState();
  formatZip();
  const googleEarthAddress = `https://earth.google.com/web/search/${formattedAddress},+${formattedCity},+${formattedState}/`;
  window.open(googleEarthAddress);
};

document
  .querySelector("#google-earth")
  .addEventListener("click", openGoogleEarth);
// fetchCityInfo(lon, lat);
// map.setCenter({ lat: lat, lng: lon });

// var weatherSearch = function () {
//   if (document.querySelector("#city-name").value != " ") {
//     fetchWeather(document.querySelector("#city-name").value);
//   }
// };

// var alternateTripApi =
//   "5ae2e3f221c38a28845f05b60ade91485de3f230f12f105b7c087b90";

// var tripApi = "5ae2e3f221c38a28845f05b627a67175ff5888a5fca032db41baf3b1";

// function fetchCityInfo(lon, lat) {
//   fetch(
//     "https://api.opentripmap.com/0.1/en/places/radius?radius=20000&lon=" +
//       lon +
//       "&lat=" +
//       lat +
//       "&format=json&apikey=" +
//       tripApi
//   )
//     .then((response) => response.json())
//     .then((data) => displayPlaces(data));
// }
// var displayPlaces = function (data) {
//   for (var i = 0; i < 10; i++) {
//     document.querySelector(`#place-${i}`).innerText = data[i].name;
//   }
// };

// document.querySelector("#go-time").addEventListener("click", weatherSearch);
// var savedTrips = [];
// displayStorage = function (savedTrips) {
//   if (savedTrips !== "") {
//     var savedTrips = localStorage.getItem("saveTrips").split(",");
//   }
//   for (var i = 0; i < 6; i++) {
//     document.getElementById(`save-${i}`).textContent = savedTrips[i];
//   }
// };

// displayStorage(savedTrips);
// console.log(savedTrips);
