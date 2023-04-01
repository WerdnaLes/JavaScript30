const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const cities = [];

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regEx = new RegExp(wordToMatch, "gi");
    return place.city.match(regEx) || place.state.match(regEx);
  });
}

function displayMatches() {
  const isNull = `<li>Filter for a city</li>
    <li>or a state</li>`;
  const noMatch = `<li>No match</li>`;
  if (!this.value) {
    return (suggestions.innerHTML = isNull);
  }
  const matchArray = findMatches(this.value, cities);
  if (matchArray.length < 1) {
    return (suggestions.innerHTML = noMatch);
  }
  const html = matchArray
    .map((place) => {
      const regEx = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regEx,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regEx,
        `<span class="hl">${this.value}</span>`
      );
      return `
    <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numbersWithCommas(place.population)}</span>
    </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}

function numbersWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
