let cityEl = document.getElementById("city");
let streetEl = document.getElementById("street");
let stateEl = docuement.getElementById("state");
let street;
var formatStreet = function (streetEl) {
  let streetArray = streetEl.split(" ");

  for (let i = 0; i < streetArray.length; i++) {
    if (i % 2 === 1) {
      streetArray.splice(i, 0, "+");
    }
    let street = streetArray.join("").toLowerCase();
  }
  return street;
};

var fetchWeather = function (street, city, state) {
  formatStreet();
  fetch(
    `${process.env.ADRESS_AUTH_TOKEN}&${street}&${city}&${state}&canditates=10`
  )
    .then((response) => response.json())
    .then((data) => initMap(data));
};

let map;

var initMap = function (data) {
  let latitude = data[1].metadata.latitude;
  let longitude = data[1].metadata.longtitude;

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 10,
  });
};
