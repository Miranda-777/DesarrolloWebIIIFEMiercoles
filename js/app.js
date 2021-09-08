let nombre = "Luis";
let apellido = "navas";
let edad = 48;
let llueve = true;
let participantes = [
  "Junior",
  "Luis",
  "Ivana",
  "Martin",
  "Sheila",
  "Sebastian",
];
for (let a = 0; a < participantes.length; a++) {
  console.log(participantes[a]);
}

function render() {
  let contenedor = document.getElementById("root");
  contenedor.innerHTML = nombre;
  participantes.forEach(
    (part) =>
      (contenedor.innerHTML += `<div class='card col-4' style='witdh: 18rem;'>
        <img src='...' class='card-img-top' alt='...'>
        <div class='card-body'>
            <h5 class='card-title'>${part}</h5>
            <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href='#' class='btn btn-primary'>Go somewhere</a>
        </div>
  </div>`)
  );
  /*dice que cuando yo agregue nombres, se convertirán en hijos del div el .innerHTML}*/
}

render();
/*
Ivana una pregunta, en el recreo compartiste algo de mujeres digitales, me gustaria saber cuales son los requisitos
*/