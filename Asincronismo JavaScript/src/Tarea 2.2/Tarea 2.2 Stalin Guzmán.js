//Tarea 2.2 Stalin Guzmán

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api';

const fetchData = (urlAPi) => {
    return new Promise((resolved, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", urlAPi, true);
        xhttp.onreadystatechange = (eve) => {
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolved(JSON.parse(xhttp.responseText));
                }else{
                    const error = new Error("Error "+urlAPi)
                    reject(error);
                }
            }
        }
        xhttp.send();
    })
}

fetchData(`${API}/character`)
    .then(response =>{
        console.log(response)
        return fetchData(`${API}/character/${response.data[1].name}`)
    })
    /*/.then(response =>{
        console.log(response.formData.name)
        return fetchData (`${API}/location/${response.data.planet`})
    })
    .then(response =>{
        console.log(response.formData.name)
    })
    .catch(error => console.error(error))/*/
