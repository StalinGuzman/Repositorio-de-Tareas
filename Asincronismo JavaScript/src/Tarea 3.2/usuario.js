const aplicacion = document.querySelector('.container')
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const name = document.createElement('p')
     name.innerHTML = data.name
     const email = document.createElement('p')
     email.innerHTML = data.email
     const username = document.createElement('p')
     username.innerHTML = data.username
     aplicacion.appendChild(name)
     aplicacion.appendChild(email)
     aplicacion.appendChild(username)
 });