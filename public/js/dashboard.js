const title = document.querySelector("#title-dash");
const contents = document.querySelector("#contents-dash");
const dashBtn = document.querySelector("#dashboard-btn");

function dashboard(event) {
    event.preventDefault();
  console.log(
    title.value,
    contents.value
  );
}


dashBtn.addEventListener("click", dashboard);