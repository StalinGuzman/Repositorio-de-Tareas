
const urlApiCatRandom = 'https://api.thecatapi.com/v1/images/search?limit=3';


const getCatsRandom = async () => {
    const response = await fetch(urlApiCatRandom);
    const data = await response.json();
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const img3 = document.querySelector('#img3');
    img1.src = data[0].url
    img1.width = 200;
    img1.height = 200;

    img2.src = data[1].url
    img2.width = 200;
    img2.height = 200;

    img3.src = data[2].url
    img3.width = 200;
    img3.height = 200;

    console.log(data);

}
getCatsRandom();