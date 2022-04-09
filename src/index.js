import './css/styles.css';
import { fetchUser } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const listCountry = document.querySelector(".country-list")
console.log()

let nameCountry = null


const searchBox = document.querySelector("#search-box")
searchBox.addEventListener("input", (event)=>{
  nameCountry = event.currentTarget.value.trim()
  fetchUser(nameCountry).then(renderCountry)
  // searchBox.reset()

  function renderCountry(countrys){
    console.log(countrys[0].languages)



if(countrys.length===1){

  const markup = countrys.map(({name, flags, capital, population, languages})=>{

    return `<li style="display: flex;align-items: center;"><img src="${flags.svg}" alt="${name.official}" width='25px'>${name.official}</li><p>Capital: ${capital}</p><p>Population: ${population}</p><p>Languages: ${languages}</p>`
  }).join("");
  listCountry.innerHTML=markup
}else{

// const lang = countrys.languages.map(({languages})=>{
// return console.log(languages)
// }).join("")
// console.log(lang)

  const markup = countrys.map(({name, flags})=>{
    return `<li style="display: flex;align-items: center;"><img src="${flags.svg}" alt="${name.official}" width='25px'>${name.official}</li>`
  }).join("");
con
  listCountry.innerHTML=markup
    }
}


})



