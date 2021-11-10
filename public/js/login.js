console.log("LoginJS");
async function loginFormHandler(event) {
  console.log("submit");
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
      document.location.replace("/table");
    } else {
      alert(response.statusText);
    }
  }
}
document.querySelector("#login").addEventListener("click", loginFormHandler);
