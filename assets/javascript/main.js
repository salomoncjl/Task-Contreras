import{crearCards, crearCheck, filtroCheck, filtradoDeBuscador} from "../module/function.js"
const buscador = document.getElementById("lookFor");
const check = document.getElementById("searchcheck");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) =>{
        const dataEventos = data.events;
        const filtrarCategorias  = [ ... new Set ( dataEventos.map( categoria => categoria.category)) ];
        crearCards(dataEventos);
        crearCheck( filtrarCategorias, check); 
        check.addEventListener( "change" ,  () => {
            let buscar = buscador.value.toLowerCase();
            let funcionFiltrado = filtradoDeBuscador(buscar, dataEventos);
            let aux = filtroCheck(funcionFiltrado);
            crearCards(aux);
        } );
        buscador.addEventListener('keyup', (e)=>{
            let aux = filtroCheck(dataEventos);
            let buscar = buscador.value.toLowerCase();
            let funcionFiltrado = filtradoDeBuscador(buscar, aux);
            let checkCardFiltro = filtroCheck(funcionFiltrado);
            crearCards(checkCardFiltro)
        });
    })












