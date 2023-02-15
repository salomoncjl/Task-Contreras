import { crearCardsUp, crearCheckUp, filtroCheckUp, filtradoDeBuscadorUp} from "../module/function.js"

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) =>{
        const dataEventosUp = data.events;
        const buscador = document.getElementById("lookFor");
        const check = document.getElementById("searchcheck");
        const filtrarCategorias  = [ ... new Set ( dataEventosUp.map( categoria => categoria.category)) ];
        crearCardsUp(dataEventosUp);
        crearCheckUp( filtrarCategorias, check);        
        check.addEventListener( "change" ,  () => {
            let aux = filtroCheckUp(dataEventosUp);
            crearCardsUp(aux);
        } );
        buscador.addEventListener('keyup', (e)=>{
            e.preventDefault()
            let buscar = buscador.value.toLowerCase();
            let funcionFiltrado = filtradoDeBuscadorUp(buscar, dataEventosUp);
            let checkCardFiltroUp = filtroCheckUp(funcionFiltrado);
            crearCardsUp(checkCardFiltroUp)
        });
    })







