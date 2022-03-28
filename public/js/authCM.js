async function authCMHandler(event) {
  console.log("authCM.js");
  event.preventDefault();
  const email = document.querySelector("#auth-cm-email").value;
  const response = await fetch("/api/cm", {
    method: "post",
    body: JSON.stringify({
      email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/table");
    console.log(
      `This is a new active email: ${email}, here is the response: ${response}`
    );
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector("#auth-cm-save")
  .addEventListener("click", authCMHandler);
