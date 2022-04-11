console.log("connected to home js");

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

async function searchCharity(event) {
  
  const searchValue = searchBar.value.trim();
  event.preventDefault();
  console.log("clicked", searchValue);
  document.location.replace(`/search/${searchValue}`);
}

searchBtn.addEventListener("click", searchCharity);
