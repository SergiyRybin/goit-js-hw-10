export function fetchUser(name){
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => 
        {
        if (!response.ok) {
            throw Error(response.statusText)            
        }
        return response.json()
    });
  }