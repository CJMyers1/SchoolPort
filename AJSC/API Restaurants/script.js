const apiURL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";

window.onload = () => {
    buildCard();
}

// Build the Cards
const buildCard = () => {
    fetch(apiURL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        businessData(data);
    })
}

// Fetch Data for cards
businessData = (business) => {
    for (let i = 0; i < business.business.length; i++) {
        document.getElementById(
          `name${[i]}`
        ).innerText = `${business.business[i].name}`;
        document.getElementById(
          `description${[i]}`
        ).innerText = `${business.business[i].description}`;
        document.getElementById(
          `address${[i]}`
        ).innerText = `${business.business[i].address}`;
        document.getElementById(
          `image${[i]}`
        ).src = `${business.business[i].imageurl}`;
      }
    };