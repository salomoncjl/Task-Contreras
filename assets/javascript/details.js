const dataEventos = data.events
const contenederoCartas = document.getElementById("cards")
const contenedorDetails = document.getElementById("details-content")

const params = new URLSearchParams(location.search)
console.log(params)
const id = params.get("id")
const nombres = params.get("nombre")
// document.title = Details of ${nombres}
// const aux = nombres[0].toUpperCase() + nombres.slice(1).toLowerCase

const evento = data.events.find(evento => evento._id == id)

// console.log(nombres)

contenedorDetails.innerHTML =`
<img src="${evento.image}" class="imgdetails" alt="">
<div class="detailssize">
    <h2><span class="letranegrita">${evento.name}</span></h2>
    <h4><span class="letranegrita">Release date:</span>${evento.date}</h4>
    <h4><span class="letranegrita">Description:</span>${evento.description}</h4>
    <h4><span class="letranegrita">Category:</span>${evento.category}</h4>
    <h4><span class="letranegrita">Place:</span>${evento.place}</h4>
    <h4><span class="letranegrita">Capacity:</span>${evento.capacity}</h4>
    <h4><span class="letranegrita">Estimate:</span>${evento.estimate}</h4>
    <h4><span class="letranegrita">Price:</span>${evento.price}</h4>
</div>
`