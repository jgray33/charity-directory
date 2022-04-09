const charityName = document.querySelector("#charity-register");
const address = document.querySelector("#address-register");
const phoneNumber = document.querySelector("#phone-register");
const facebook = document.querySelector("#facebook-register");
const openingHours = document.querySelector("#hour-register");
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

  if (charityName && address && phoneNumber && facebook && openingHours) {
    console.log("working");
      
    const response = await fetch("/charity", {
      method: "POST",
      body: JSON.stringify({
        charName,
        addr,
        number,
        fb,
        hours,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.table(response);
    } else {
      console.log(response.statusText);
      console.log(response);
    }
  }
}

btn.addEventListener("click", registerBtn);
