import './css/styles.css';
import { fetchUser } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const listCountry = document.querySelector(".country-list")
console.log()

let nameCountry = null


const searchBox = document.querySelector("#search-box")
searchBox.addEventListener("input", (event)=>{
  nameCountry = event.currentTarget.value
  fetchUser(nameCountry).then(renderCountry)
  // searchBox.reset()

  function renderCountry(countrys){
console.log(countrys.length)
if(countrys.length===1){
  const markup = countrys.map(({name, flags, area })=>{
    return `<li style="display: flex;align-items: center;"><img src="${flags.png}" alt="${name.official}" width='25px'>${name.official}</li>Area: ${area}<p></p>`
  }).join("");
  listCountry.innerHTML=markup
}else{
  const markup = countrys.map(({name, flags})=>{
    return `<li style="display: flex;align-items: center;"><img src="${flags.png}" alt="${name.official}" width='25px'>${name.official}</li>`
  }).join("");
  listCountry.innerHTML=markup
    }
}


})



