const code = document.querySelector("#address-code").innerText;
const street = document.querySelector("#smarty-street").value;
const city = document.querySelector("#smarty-city").value;
const state = document.querySelector("#smarty-state").value;
const zip = document.querySelector("#smarty-zip").value;
const submitAddress = querySelector("#address-verification");

const formatAddress = function () {
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
  formattedState = state.toUpperCase();
  return formattedState;
};
const formatZip = function () {
  formattedZip = zip.toString();
  return formattedZip;
};

var displayValidation = function () {
  if (code === null) {
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
    // document.querySelector("#no-of-results").innerHTML = data.length;

    return;
  }
  if (code !== [] && code === "AABB") {
    document
      .querySelector("#secondary-info-confirm")
      .classList.add("is-hidden");
    document.querySelector("#secondary-info").classList.add("is-hidden");
    document.querySelector("#not-good").classList.add("is-hidden");
    document.querySelector("#all-good").classList.remove("is-hidden");
    document.querySelector("#found").classList.remove("is-hidden");
    // document.querySelector("#no-of-results").innerHTML = data.length;
    document.querySelector("#google-maps").classList.remove("is-hidden");
    document.querySelector("#google-earth").classList.remove("is-hidden");
    //   document.querySelector("#address-1-result").innerHTML =
    //     data[0].delivery_line_1;
    //   document.querySelector("#longitude-result").innerHTML =
    //     data[0].metadata.longitude;
    //   document.querySelector("#latitude-result").innerHTML =
    //     data[0].metadata.latitude;
    //   document.querySelector("#city-result").innerHTML = data[0].last_line;
    //   document.querySelector("#precision-result").innerHTML =
    //     data[0].metadata.rdi;
    //   if (data[0].analysis.dpv_match_code === "Y") {
    //     console.log("entire thing matched");
    //   }
  }
  if (code !== [] && code === "AAN1") {
    console.log(`the code is ${code}`);
    document
      .querySelector("#secondary-info-confirm")
      .classList.add("is-hidden");
    document.querySelector("#secondary-info").classList.remove("is-hidden");
    document.querySelector("#not-good").classList.add("is-hidden");
    document.querySelector("#all-good").classList.add("is-hidden");
    document.querySelector("#found").classList.remove("is-hidden");
    // document.querySelector("#no-of-results").innerHTML = data.length;
    document.querySelector("#google-maps").classList.remove("is-hidden");
    document.querySelector("#google-earth").classList.remove("is-hidden");
    //   document.querySelector("#address-1-result").innerHTML =
    //     data[0].delivery_line_1;
    //   document.querySelector("#longitude-result").innerHTML =
    //     data[0].metadata.longitude;
    //   document.querySelector("#latitude-result").innerHTML =
    //     data[0].metadata.latitude;
    //   document.querySelector("#city-result").innerHTML = data[0].last_line;
    //   document.querySelector("#precision-result").innerHTML =
    //     data[0].metadata.rdi;
    //   if (data[0].analysis.dpv_match_code === "Y") {
    //     console.log("entire thing matched");
  }

  if (code !== [] && code === "AACC") {
    console.log(`the code is ${code}`);
    document
      .querySelector("#secondary-info-confirm")
      .classList.remove("is-hidden");
    document.querySelector("#secondary-info").classList.add("is-hidden");
    document.querySelector("#not-good").classList.add("is-hidden");
    document.querySelector("#all-good").classList.add("is-hidden");
    document.querySelector("#found").classList.remove("is-hidden");
    // document.querySelector("#no-of-results").innerHTML = data.length;
    document.querySelector("#google-maps").classList.remove("is-hidden");
    document.querySelector("#google-earth").classList.remove("is-hidden");
    // document.querySelector("#address-1-result").innerHTML =
    //   data[0].delivery_line_1;
    // document.querySelector("#longitude-result").innerHTML =
    //   data[0].metadata.longitude;
    // document.querySelector("#latitude-result").innerHTML =
    //   data[0].metadata.latitude;
    // document.querySelector("#city-result").innerHTML = data[0].last_line;
    // document.querySelector("#precision-result").innerHTML =
    //   data[0].metadata.rdi;
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

const form = document.querySelector("#address-verification");
window.addEventListener("load", displayValidation);
