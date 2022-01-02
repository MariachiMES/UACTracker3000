async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  if (username && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("res", response);
    if (response.ok) {
      document.location.replace("/");
    } else {
      res.redirect("/blocked");
    }
  }
}
document
  .querySelector("#new-user")
  .addEventListener("click", signupFormHandler);
