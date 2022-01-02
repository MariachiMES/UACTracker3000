console.log("LoginJSSD:FLKSJ:DFLKSJ:DFLKSJD:FLKJ");
async function loginFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector("#user-email").value.trim();
  const password = document.querySelector("#user-password").value.trim();
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log(response.body);
      document.location.replace("/table");
    } else {
      document.location.replace("/nomatch");
    }
  }
}
document.querySelector("#login").addEventListener("click", loginFormHandler);
