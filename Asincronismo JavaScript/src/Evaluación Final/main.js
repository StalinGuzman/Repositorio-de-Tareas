const urlApiDogRandom = 'https://api.thedogapi.com/v1/images/search?limit=4&api_key=428e4c19-9952-498f-a5fb-908197414b6a'; 
const urlApiDogFavorite = 'https://api.thedogapi.com/v1/favourites?api_key=428e4c19-9952-498f-a5fb-908197414b6a'; 
const urlAddApiDogFavorite = 'https://api.thedogapi.com/v1/favourites?api_key=428e4c19-9952-498f-a5fb-908197414b6a'; 
const urlRemoveApiDogFavorite = 'https://api.thedogapi.com/v1/favourites/';
//obtener perros random
const getDogsRandom = async () => {
    const response = await fetch(urlApiDogRandom);
    const data = await response.json();
    const div = document.querySelector('#getDogsRandom__dogs');
    const array = [];
    data.forEach(dog =>{
        div.innerHTML = '';
        //creando la imagen
        const img = document.createElement('img');
        img.src = dog.url;
        img.width = 200;
        img.height = 200;
        array.push(img);
        //creando el boton
        const button = document.createElement('button');
        button.innerHTML = "Guardar en Favoritos";
        button.onclick = () =>{
            addDogsFavorite(dog.id);
        }
        array.push(button);
    });
    div.append(...array); 
    console.log(data[0].id); 
}
//obtener perros favoritos
const getDogsFavorite = async () =>{
    const response = await fetch(urlApiDogFavorite);
    const data = await response.json();
    const div = document.querySelector('#getDogsFavorite__dogs');
    const array = [];
    data.map(dogf => {
        div.innerHTML = '';
        const img = document.createElement('img');
        img.src = dogf.image.url;
        img.alt = dogf.user_id;
        img.className = "img-favorite";
        img.width = 200;
        img.height = 200;
        array.push(img);
        //Creando el boton
        const button = document.createElement('button');
        button.innerHTML= "Eliminar de favoritos";
        button.onclick = () =>{
            removeDogsFavorite(dogf.id);
        }
        array.push(button);
    });
    div.append(...array);
}
//añadir favoritos
const addDogsFavorite = async (id) =>{
    const response = await fetch(urlAddApiDogFavorite, {
        method: "POST",
        headers:{
            "Content-Type" : 'application/json'
        },
        body:JSON.stringify({
            image_id: id,
        }),
    }); 
    getDogsFavorite();  
}
//eliminar favoritos
const removeDogsFavorite = async (id) =>{
    const response = await fetch(`${urlRemoveApiDogFavorite}${id}?api_key=428e4c19-9952-498f-a5fb-908197414b6a`,{
        method: "DELETE",

    });
    getDogsFavorite(); 
}

getDogsFavorite();
