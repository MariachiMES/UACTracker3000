var cityEl = document.getElementById("#city");
var streetEl = document.getElementById("#street");
var stateEl = document.getElementById("#state");
let addressButton = document.querySelector("#addressButton");

console.log(cityEl, streetEl, stateEl);

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

var formatCity = function (cityEl) {
  let cityArray = cityEl.split(" ");

  for (let i = 0; i < cityArray.length; i++) {
    if (i % 2 === 1) {
      cityArray.splice(i, 0, "+");
    }
    let city = streetArray.join("").toLowerCase();
  }
  return city;
};

var fetchSmartyStreets = function (street, city, state) {
  console.log("hi there");
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
    zoom: 20,
  });
};

addressButton.addEventListener("click", fetchSmartyStreets);
