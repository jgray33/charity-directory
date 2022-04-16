const title = document.querySelector("#title-dash");
const contents = document.querySelector("#contents-dash");
const dashBtn = document.querySelector("#dashboard-btn");
const deleteBtn = document.querySelector(".delete-btn")

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
    const response = await fetch("api/post", {
      method: "POST",
      body: JSON.stringify({
        postTitle,
        postContents
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/newsfeed")
      console.table(response);
    } else {
      console.log(response.statusText);
      console.log(response);
    }
  }
}

async function deletePost(e) {
  console.log(e.target.id)
  const id = e.target.id
  const response = await fetch(`/api/post/${id}`, {
    method: "DELETE",
  })
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete project');
  }
}


deleteBtn.addEventListener("click", deletePost)

dashBtn.addEventListener("click", dashboardBtn);