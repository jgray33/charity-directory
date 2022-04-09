
async function loginFormHandler(event) {
  console.log("clicked")
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    console.log(username, password);
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("All gravy")
    } else {
      alert(response.statusText);
      console.log(response);
    }
  }
}

document
  .querySelector("#loginBtn")
  .addEventListener("click", loginFormHandler);
