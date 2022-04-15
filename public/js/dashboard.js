const title = document.querySelector("#title-dash");
const contents = document.querySelector("#contents-dash");
const dashBtn = document.querySelector("#dashboard-btn");

function dashboard() {
  console.log(
    title.value,
    contents.value
  );
}

async function dashboardBtn(event) {
    event.preventDefault();
    const postTitle = title.value;
    const postContents = contents.value;

if (postTitle && postContents) {    
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        postTitle,
        postContents
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert('Registered!!')
      console.table(response);
    } else {
      console.log(response.statusText);
      console.log(response);
    }
  }
}



dashBtn.addEventListener("click", dashboardBtn);