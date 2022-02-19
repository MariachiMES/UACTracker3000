const code = document.querySelector("#address-code").innerText;
console.log(code);

var displayValidation = function (code) {
  console.log(code);
  if (code === null) {
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

window.addEventListener("load", displayValidation);
