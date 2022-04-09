
console.log("connected to home js")

const searchBar = document.getElementById("searchBar")
const searchBtn = document.getElementById("searchBtn")

async function searchCharity(event) {
    const searchValue = searchBar.value.trim()
    event.preventDefault()
    console.log("clicked", searchValue)

    const response = await fetch("/api/charity/:charity_name", {
        method: "GET",
        body: JSON.stringify({
            searchValue
        }),
        headers: { "Content-Type": "application/json" },
        })
                if (response.ok) {
                    
                console.log("That worked")
            } else {
                console.log("That did not work ")
                console.log(err)
            }}
    
   

  

searchBtn.addEventListener("click", searchCharity)