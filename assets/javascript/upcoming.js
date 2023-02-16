import { crearCardsUp, crearCheckUp, filtroCheckUp, filtradoDeBuscadorUp} from "../module/function.js"
const buscador = document.getElementById("lookFor");
const check = document.getElementById("searchcheck");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) =>{
        const dataEventosUp = data.events;
        const filtrarCategorias  = [ ... new Set ( dataEventosUp.map( categoria => categoria.category)) ];
        crearCardsUp(dataEventosUp);
        crearCheckUp( filtrarCategorias, check);        
        check.addEventListener( "change" ,  () => {
            let buscar = buscador.value.toLowerCase()
            let funcionFiltrado = filtradoDeBuscadorUp(buscar, dataEventosUp)
            let aux = filtroCheckUp(funcionFiltrado);
            crearCardsUp(aux);
        } );
        buscador.addEventListener('keyup', (e)=>{
            let aux = filtroCheckUp(dataEventosUp)
            let buscar = buscador.value.toLowerCase();
            let funcionFiltrado = filtradoDeBuscadorUp(buscar, aux);
            let checkCardFiltroUp = filtroCheckUp(funcionFiltrado);
            crearCardsUp(checkCardFiltroUp)
        });
    })







