import './css/styles.css';

const DEBOUNCE_DELAY = 300;
// let name = "peru"

fetch("https://restcountries.com/v3.1/name/{name}")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));