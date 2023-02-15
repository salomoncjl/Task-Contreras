import { crearCardsPast, crearCheckPast, filtroCheckPast, filtradoDeBuscadorPast} from "../module/function.js"

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
            let aux = filtroCheckPast(dataEventosPast);
            crearCardsPast(aux);
        } );
        buscador.addEventListener('keyup', (e)=>{
            e.preventDefault()
            let buscar = buscador.value.toLowerCase();
            let funcionFiltrado = filtradoDeBuscadorPast(buscar, dataEventosPast);
            let checkCardFiltroPast = filtroCheckPast(funcionFiltrado);
            crearCardsPast(checkCardFiltroPast)
        });
    })
