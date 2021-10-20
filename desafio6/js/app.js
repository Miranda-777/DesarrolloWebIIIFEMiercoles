let miDiv = document.querySelector("#principal")
let pokemones = []


const cargarListado =()=>{
    let url ="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    //es una promesa
    .then((objetoJson)=>{
        const pokms = objetoJson.results;
        console.log(pokms);
        pokemones= pokms;
        pokms.forEach((p)=>{
            miDiv.innerHTML+=`
            <button class="btn btn-primary"> ${p.name} </button>`

        })
    })
}

cargarListado();

