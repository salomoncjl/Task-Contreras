import { createDetail } from "../module/function.js"

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) =>{
        const contenedorDetails = document.getElementById("details-content")
        const params = new URLSearchParams(location.search)
        const id = params.get("id")
        const evento = data.events.find(evento => evento._id == id)

        createDetail(evento, contenedorDetails) 
        
    })
