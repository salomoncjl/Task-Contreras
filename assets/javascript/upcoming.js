const tarjeta = document.getElementById ("cards");
const dataEventos = data.events;

crearCards(dataEventos);
function crearCards( dataEventos ) {
    let card = "";
    for (let evento of dataEventos) {
        if(evento.date > data.currentDate){
    card += `<div class="card" style="width: 18rem;">
    <img src="${evento.image}" class="imgdetails"" alt="...">
    <div class="card-body">
    <h5> ${evento.name} </h5>
    <p class="card-text" id="textoParrafo"> ${evento.description} </p>
    <div id="boton1">
    <p> Price: $ ${evento.price} </p>
    <a href="./details.html?id=${evento._id}&name=${evento.name}" class="btn btn-primary" id="move">Details</a>
    </div>
    </div>
</div>`
    }
}
    tarjeta.innerHTML = card;
}

const check = document.getElementById("searchcheck");

const filtrarCategorias  = [ ... new Set ( dataEventos.map( categoria => categoria.category)) ];

// console.log(filtrarCategorias)

function crearCheck ( filtrarCategorias , elemento) { 
    let aux = "";
    filtrarCategorias.forEach(element =>  {
        aux += ` <div class="contenedorCheack">
        <div class="form-check-inline">
        <input class="form-check-input" type="checkbox" value="${element}" id="${element}">
        <label class="form-check-label" for="${element}">
        ${element}
        </label>
        </div> `
    });
    elemento.innerHTML = aux;
}
crearCheck( filtrarCategorias, check);

function filtroCheck (evento) {
    let marcarCheck = [...document.querySelectorAll("input[type='checkbox']:checked"),].map((check) => check.value);
    if (marcarCheck.length === 0) {
        return evento;
    }
    return evento.filter((filterCheck) => marcarCheck.includes(filterCheck.category));
    }
    

check.addEventListener( "change" ,  () => {
    let aux = filtroCheck(dataEventos);
    crearCards(aux);
} );

const buscador = document.getElementById("lookFor");

function filtradoDeBuscador(buscar, dataEventos){
    let buscadorFiltrado = dataEventos.filter(buscadorInterno => buscadorInterno.name.toLowerCase().includes(buscar))
    if(buscadorFiltrado.length === 0){
        
    }
    return buscadorFiltrado;
}


buscador.addEventListener('keyup', (e)=>{
    e.preventDefault()
    let buscar = buscador.value.toLowerCase();
    let funcionFiltrado = filtradoDeBuscador(buscar, dataEventos);
    let checkCardFiltro = filtroCheck(funcionFiltrado);
    crearCards(checkCardFiltro)
});
