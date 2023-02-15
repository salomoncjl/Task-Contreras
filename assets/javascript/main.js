import{crearCards, crearCheck, filtroCheck, filtradoDeBuscador} from "../module/function.js"

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) =>{
        const dataEventos = data.events;
        const buscador = document.getElementById("lookFor");
        const check = document.getElementById("searchcheck");
        const filtrarCategorias  = [ ... new Set ( dataEventos.map( categoria => categoria.category)) ];
        crearCards(dataEventos);
        crearCheck( filtrarCategorias, check); 
        check.addEventListener( "change" ,  () => {
            let aux = filtroCheck(dataEventos);
            crearCards(aux);
        } );
        buscador.addEventListener('keyup', (e)=>{
            e.preventDefault()
            let buscar = buscador.value.toLowerCase();
            let funcionFiltrado = filtradoDeBuscador(buscar, dataEventos);
            let checkCardFiltro = filtroCheck(funcionFiltrado);
            crearCards(checkCardFiltro)
        });
    })












