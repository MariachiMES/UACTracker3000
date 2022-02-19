const router = require("express").Router();
require("dotenv").config();
const fetch = require("node-fetch");

router.post("/address/:id", async (req, res) => {
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
  console.log("REQ PARAMS" + req.body);
  try {
    await fetch(smarty_streets_api)
      .then((res) => res.json())
      .then((data) => {
        if (data === []) {
          res.render("/", {
            street: null,
            city: null,
            state: null,
            zip: null,
          });
        } else {
          const city = data[0].components.city_name;
          const street = data[0].delivery_line_1;
          const state = data[0].components.state_abbreviation;
          const zip = data[0].components.zipcode;
          const lat = data[0].metadata.latitude;
          const lon = data[0].metadata.longitude;
          const code = data[0].analysis.dpv_footnotes;
          const type = data[0].metadata.rdi;
          const results = data.length;
          console.log(city, street, state, zip, lat, lon, code, type, results);
          console.log(req);

          res.render("address", {
            city,
            state,
            street,
            zip,
            lat,
            lon,
            code,
            type,
            results,
          });
        }
      });
  } catch (err) {
    res.render("address", {
      city: "err",
      street: "err",
      state: "err",
      zip: "err",
      lat: "err",
      lon: "err",
      code: "err",
      type: "err",
      results: "0",
    });
  }
});

module.exports = router;
