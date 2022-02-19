const router = require("express").Router();
require("dotenv").config();
const fetch = require("node-fetch");

router.post("/", async (req, res) => {
  const street = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  let formattedAddress;
  let formattedCity;
  let formattedState;

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
  formatCity();
  formatAddress();
  formatState();
  formatZip();
  console.log(formattedAddress, formattedCity, formattedState, formattedZip);
  console.log(
    `address: ${street}, city: ${city}, state: ${state}, zip: ${zip}`
  );
  const authID = process.env.SMARTY_API_KEY;
  const authToken = process.env.AUTH_TOKEN;
  const smarty_streets_api = `https://us-street.api.smartystreets.com/street-address?auth-id=${authID}&auth-token=${authToken}&street=${formattedAddress}+${formattedCity}+${formattedState}+${formattedZip}`;
  try {
    await fetch(smarty_streets_api)
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (err) {}
});
// const authID = process.env.SMARTY_API_KEY;
// const authToken = process.env.AUTH_TOKEN;

// const fetchSmartyStreets = function () {
//   let fetchAddress = `https://us-street.api.smartystreets.com/street-address?auth-id=${authID}&auth-token=${authToken}&street=${formattedAddress}+${formattedCity}+${formattedState}+${formattedZip}`;
//   console.log(fetchAddress);
//   fetch(fetchAddress)
//     .then((response) => response.json())
//     .then((data) => displayValidation(data));
// };

module.exports = router;
