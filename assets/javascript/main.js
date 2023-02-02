const padrecards = document.getElementById("cards")
let inforcards = data.events;

for (let infocard of inforcards){
    padrecards.innerHTML +=`<div class="card" style="width: 18rem;">
    <img src="${infocard.image}" class="card-img-top" style="height: -webkit-fill-available;" alt="...">
    <div class="card-body">
    <h5 class="card-title">${infocard.name}</h5>
    <p class="card-text">${infocard.description}</p>
    <div class="precio-details">
    <p class="precio"> Price: $ ${infocard.price}</p>
    <a href="details.html" class="btn btn-primary">Details</a>
    </div>
    </div>
    </div>
    `
}

//<>
