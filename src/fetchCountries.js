export function fetchUser(name){
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response =>{
        if (response.ok) 
        { return response.json()}
        throw new Error(response.status)
        }
        )
        
    }