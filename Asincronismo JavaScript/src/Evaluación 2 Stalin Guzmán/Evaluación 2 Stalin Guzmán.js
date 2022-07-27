//Utilizando XMLHttpRequest y utilizando Callback Usando la API de star Wars resolver los siguientes problemas. 

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://swapi.dev/';

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

fetchData(`${API}/people`, function(error1,data1){
    if (error1) return console.error(error1);
   console.log(data1);
})

fetchData(`${API}/planets`, function(error2,data2){
    if (error2) return console.error(error2);
   console.log(data2);
})

fetchData(`${API}/starships`, function(error3,data3){
    if (error3) return console.error(error3);
   console.log(data3);
})