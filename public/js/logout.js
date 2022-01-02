async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    console.log("front end logout");
    alert(response.statusText);
  }
}
document.querySelector("#logout").addEventListener("click", logout);
