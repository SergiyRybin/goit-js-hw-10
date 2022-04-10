export function fetchUser(name){
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response =>{
        if (!response.ok) throw Error(response.statusText)
        // { return Promise.reject(response)}
          return response.json()
        // if(response.status===404){
        //     Promise.reject()
        // }
        // return response.json()
        }
        )
    }