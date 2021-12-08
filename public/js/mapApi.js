// var cityEl = document.getElementById("#city");
// var streetEl = document.getElementById("#street");
// var stateEl = document.getElementById("#state");
// let addressButton = document.querySelector("#addressButton");

// console.log(cityEl, streetEl, stateEl);
let streetEl = "West 34th Street on the right";
var formatStreet = function () {
  let streetArray = [];
  streetArray = streetEl.split(" ");
  let street;
  for (let i = 0; i < streetArray.length; i++) {
    if (i % 2 === 1) {
      streetArray.splice(i, 0, "+");
    }
    street = streetArray.join("").toLowerCase();
  }
  console.log(street);
  return street;
};
formatStreet();

let cityEl = "San Antonio";
var formatCity = function () {
  let cityArray = [];
  cityArray = cityEl.split(" ");
  let city;
  for (let i = 0; i < cityArray.length; i++) {
    if (i % 2 === 1) {
      cityArray.splice(i, 0, "+");
    }
    city = cityArray.join("").toLowerCase();
  }
  console.log(city);
  return city;
};
formatCity();

// var formatCity = function (cityEl) {
//   let cityArray = cityEl.split(" ");

//   for (let i = 0; i < cityArray.length; i++) {
//     if (i % 2 === 1) {
//       cityArray.splice(i, 0, "+");
//     }
//     let city = streetArray.join("").toLowerCase();
//   }
//   return city;
// };

// var fetchSmartyStreets = function (street, city, state) {
//   console.log("hi there");
//   fetch(
//     `${process.env.ADRESS_AUTH_TOKEN}&${street}&${city}&${state}&canditates=10`
//   )
//     .then((response) => response.json())
//     .then((data) => initMap(data));
// };

// let map;

// var initMap = function (data) {
//   let latitude = data[1].metadata.latitude;
//   let longitude = data[1].metadata.longtitude;

//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: latitude, lng: longitude },
//     zoom: 20,
//   });
// };

// addressButton.addEventListener("click", fetchSmartyStreets);
