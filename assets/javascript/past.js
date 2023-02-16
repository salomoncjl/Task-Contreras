import { crearCardsPast, crearCheckPast, filtroCheckPast, filtradoDeBuscadorPast, filtradoDeBuscadorUp} from "../module/function.js"

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) =>{
        const dataEventosPast = data.events;
        const buscador = document.getElementById("lookFor");
        const check = document.getElementById("searchcheck");
        const filtrarCategorias  = [ ... new Set ( dataEventosPast.map( categoria => categoria.category)) ];
        crearCardsPast(dataEventosPast);
        crearCheckPast( filtrarCategorias, check);        
        check.addEventListener( "change" ,  () => {
            let buscar = buscador.value.toLowerCase()
            let funcionFiltrado = filtradoDeBuscadorPast(buscar, dataEventosPast)
            let aux = filtroCheckPast(funcionFiltrado);
            crearCardsPast(aux);
        } );
        buscador.addEventListener('keyup', (e)=>{
            let aux = filtroCheckPast(dataEventosPast)
            let buscar = buscador.value.toLowerCase();
            let funcionFiltrado = filtradoDeBuscadorPast(buscar, aux);
            let checkCardFiltroPast = filtroCheckPast(funcionFiltrado);
            crearCardsPast(checkCardFiltroPast)
        });
    })
