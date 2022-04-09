
console.log("connected to home js")

const searchBar = document.getElementById("searchBar")
const searchBtn = document.getElementById("searchBtn")

function searchCharity(event) {
    const searchValue = searchBar.value.trim()
    event.preventDefault()
    console.log("clicked", searchValue)
    const requestUrl = `/charity/${searchValue}`
    console.log(requestUrl)

    const response = await fetch(requestUrl)
    let data = await response.json()
    console.log(data)
}

searchBtn.addEventListener("click", searchCharity)