//Tarea 2.2 Stalin Guzmán

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api';

fetch('${API}/character')
    .then(response =>{
        return fetch('${API}/character/${response.data[1].name}')
    })
    .then(response =>{
        console.log(response.formData.name)
        return fetch ('${API}/location/${response.data.planet}')
    })
    .then(response =>{
        console.log(response.formData.name)
    })
    .catch(error => console.error(error))
