//Tarea 2.1 Stalin Guzmán

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api';

const getAllData = async () => {
    try {
        const characters = await fetch ('${API}/character')
        const character = await fetch ('${API}/character/${characters.data[1].name}')
        const dimension = await fetch ('{API}/location/${character.data[1].dimension}')
        const count = await fetch ('{API}/location/${character.data[1].dimension}')
        console.log(count.data.name)
        console.log(character.data.name)
        console.log(dimension.data.name)
    } catch (error) {
        console.error(error)        
    }
}


