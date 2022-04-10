import './css/styles.css';
import { fetchUser } from './fetchCountries';
import debounce from 'lodash.throttle';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const listCountry = document.querySelector(".country-list")
console.log()

let nameCountry = {};


const searchBox = document.querySelector("#search-box")

searchBox.addEventListener("input", debounce(onText, DEBOUNCE_DELAY))

function onText(event){
  nameCountry = event.target.value
  fetchUser(nameCountry).then(renderCountry).catch(renderEror)
}


function renderCountry(countrys){

if(countrys.length===1){
const markup = countrys.map(({name, flags, capital, population, languages})=>{

  return `<li style="display: flex;align-items: center;"><img src="${flags.svg}" alt="${name.official}" width='25px'>${name.official}</li><p>Capital: ${capital}</p><p>Population: ${population}</p><p>Languages: ${Object.values(languages)}</p>`
}).join("");
listCountry.innerHTML=markup}
else{const markup = countrys.map(({name, flags})=>{
  return `<li style="display: flex;align-items: center;"><img src="${flags.svg}" alt="${name.official}" width='25px'>${name.official}</li>`
}).join("");
listCountry.innerHTML=markup
Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
}}

function renderEror(){
  Notiflix.Notify.failure('Oops, there is no country with that name')
}


