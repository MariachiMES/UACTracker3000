const searchInput = document.querySelector("#searchbar");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(value);
});
