const charityName = document.querySelector("#charity-register");
const description = document.querySelector("#charity-description")
const address = document.querySelector("#address-register");
const website = document.querySelector("#charity-website");
const phoneNumber = document.querySelector("#phone-register");
const facebook = document.querySelector("#facebook-register");
const openingHours = document.querySelector("#hour-register");
const donationPage = document.querySelector("#donation-page");
const btn = document.querySelector("#btn-register");

function charity() {
  console.log(
    charityName.value,
    address.value,
    phoneNumber.value,
    facebook.value,
    openingHours.value
  );
}

async function registerBtn(event) {
  event.preventDefault();
  const charName = charityName.value;
  const addr = address.value;
  const number = phoneNumber.value;
  const fb = facebook.value;
  const hours = openingHours.value;
  const charDesc = description.value
  const charWebsite = website.value
  const charDon = donationPage.value


  if (charityName && address && phoneNumber && facebook && openingHours) {
    console.log("working");
      
    const response = await fetch("/api/charity", {
      method: "POST",
      body: JSON.stringify({
        charName,
        charDesc,
        addr,
        charWebsite,
        number,
        fb,
        hours,
        charDon,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/all")
      console.table(response);
    } else {
      console.log(response.statusText);
      console.log(response);
    }
  }
}

btn.addEventListener("click", registerBtn);
