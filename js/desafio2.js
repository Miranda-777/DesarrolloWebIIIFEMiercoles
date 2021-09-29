let elemento = document.getElementById("root"); /*capturamos el elemento div */

const nombreCompleto = (nombre="", apellido="") => {
    nc=`<h2>Mi nombre es: ${nombre} ${apellido}</h2>`;
    return nc; 
}; /*creamos una arrow function que por defecto tiene un string vacío */

elemento.innerHTML+=nombreCompleto("Luis");
elemento.innerHTML+=nombreCompleto("Luis", "Naves");
elemento.innerHTML+=nombreCompleto("Ivana");
elemento.innerHTML+=nombreCompleto("Ivana", "Pelayes");







