export function fetchUser(name){
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response =>{
        if (!response.ok){ return Promise.reject(response)}
           else{ return response.json()}
        // if(response.status===404){
        //     Promise.reject()
        // }
        // return response.json()
        }
        )
    }