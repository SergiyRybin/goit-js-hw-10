import './css/styles.css';
import { fetchUser } from './fetchCountries';
import debounce from 'lodash.throttle';

const DEBOUNCE_DELAY = 300;
const listCountry = document.querySelector(".country-list")
console.log()

let nameCountry = {};


const searchBox = document.querySelector("#search-box")

searchBox.addEventListener("input", debounce(onText, DEBOUNCE_DELAY))

function onText(event){
  nameCountry = event.target.value
  fetchUser(nameCountry).then(renderCountry).catch(error=>console.log(error))
}


function renderCountry(countrys){
let langua = countrys[0].languages
console.log(langua)

if(countrys.length===1){
const markup = countrys.map(({name, flags, capital, population, languages})=>{

  return `<li style="display: flex;align-items: center;"><img src="${flags.svg}" alt="${name.official}" width='25px'>${name.official}</li><p>Capital: ${capital}</p><p>Population: ${population}</p><p>Languages: ${languages}</p>`
}).join("");
listCountry.innerHTML=markup
}else{const markup = countrys.map(({name, flags})=>{
  return `<li style="display: flex;align-items: center;"><img src="${flags.svg}" alt="${name.official}" width='25px'>${name.official}</li>`
}).join("");

listCountry.innerHTML=markup
  }
}




