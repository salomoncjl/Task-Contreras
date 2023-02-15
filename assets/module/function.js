// HOME - HOME - HOME - HOME - HOME - HOME

export function crearCards( dataEventos ) {
    const tarjeta = document.getElementById ("cards")
    let card = "";
    for (let evento of dataEventos) {
    card += `<div class="card" style="width: 18rem;">
    <img src="${evento.image}" class="imgdetails" alt="${evento.name}.img">
    <div class="card-body">
    <h5> ${evento.name} </h5>
    <p class="card-text" id="textoParrafo"> ${evento.description} </p>
    <div id="boton1">
    <div class="precio-details">
    <p> Price: $ ${evento.price} </p>
    <a href="./details.html?id=${evento._id}&name=${evento.name}" class="btn btn-primary" id="move">Details</a>
    </div>
    </div>
    </div>
    </div>`
    }
    tarjeta.innerHTML = card;
}


export function crearCheck ( filtrarCategorias , elemento) { 
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

export function filtroCheck (evento) {
    let marcarCheck = [...document.querySelectorAll("input[type='checkbox']:checked"),].map((check) => check.value);
    if (marcarCheck.length === 0) {
        return evento;
    }
    return evento.filter((filterCheck) => marcarCheck.includes(filterCheck.category));
    }


export function filtradoDeBuscador(buscar, dataEventos){
    let buscadorFiltrado = dataEventos.filter(buscadorInterno => buscadorInterno.name.toLowerCase().includes(buscar))
    if(buscadorFiltrado.length === 0){
    
    }
    return buscadorFiltrado;
}

// PAST - PAST - PAST - PAST - PAST - PAST - PAST - PAST

export function crearCardsPast( dataEventosPast ) {
    const tarjeta = document.getElementById ("cards");
    let card = "";
    for (let evento of dataEventosPast) {
        if(evento.date < "2022-09-01"){
    card += `<div class="card" style="width: 18rem;">
    <img src="${evento.image}" class="imgdetails" alt="${evento.name}">
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

export function crearCheckPast ( filtrarCategorias , elemento) { 
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

export function filtroCheckPast (evento) {
    let marcarCheck = [...document.querySelectorAll("input[type='checkbox']:checked"),].map((check) => check.value);
    if (marcarCheck.length === 0) {
        return evento;
    }
    return evento.filter((filterCheck) => marcarCheck.includes(filterCheck.category));
}

export function filtradoDeBuscadorPast(buscar, dataEventosPast){
    let buscadorFiltrado = dataEventosPast.filter(buscadorInterno => buscadorInterno.name.toLowerCase().includes(buscar))
    if(buscadorFiltrado.length === 0){
    
    }
    return buscadorFiltrado;
}

// UPCOMING - UPCOMING - UPCOMING - UPCOMING - UPCOMING

export function crearCardsUp( dataEventosUp ) {
    const tarjeta = document.getElementById ("cards");
    let card = "";
    for (let evento of dataEventosUp) {
        if(evento.date > "2022-09-01"){
    card += `<div class="card" style="width: 18rem;">
    <img src="${evento.image}" class="imgdetails" alt="${evento.name}">
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

export function crearCheckUp ( filtrarCategorias , elemento) { 
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

export function filtroCheckUp (evento) {
    let marcarCheck = [...document.querySelectorAll("input[type='checkbox']:checked"),].map((check) => check.value);
    if (marcarCheck.length === 0) {
        return evento;
    }
    return evento.filter((filterCheck) => marcarCheck.includes(filterCheck.category));
}

export function filtradoDeBuscadorUp(buscar, dataEventosUp){
    let buscadorFiltrado = dataEventosUp.filter(buscadorInterno => buscadorInterno.name.toLowerCase().includes(buscar))
    if(buscadorFiltrado.length === 0){
    
    }
    return buscadorFiltrado;
}
  
// DETAILS DETAILS


export function createDetail(evento, container){
    container.innerHTML =`
    <img src="${evento.image}" class="imgdetails" alt="">
    <div class="detailssize">
    <h2><span class="letranegrita"> ${evento.name}</span></h2>
    <h4><span class="letranegrita">Release date:</span> ${evento.date}</h4>
    <h4><span class="letranegrita">Description:</span> ${evento.description}</h4>
    <h4><span class="letranegrita">Category:</span> ${evento.category}</h4>
    <h4><span class="letranegrita">Place:</span> ${evento.place}</h4>
    <h4><span class="letranegrita">Capacity:</span> ${evento.capacity}</h4>
    <h4><span class="letranegrita">${evento.assistance === undefined ? 'Estimate' : 'Assistance'}:</span> ${evento.assistance === undefined ? evento.estimate : evento.assistance}</h4>
    <h4><span class="letranegrita">Price:</span> ${evento.price}</h4>
</div>
`
}


// STATS - STATS - STATS - STATS - STATS - STATS - STATS

export function createTable(assistanceUp, assistanceM, capacityM) {
    return `<table>
    <thead>
    <tr class="title-stats">
    <th scope="col" colspan="3" class="title-table1">Event statistics</th>
    </tr>
    <tr>
    <th>Event with the highest persentage of attendance</th>
    <th>Event with the lowest percentage of attendance</th>
    <th>Event with larger capacity</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <th>${assistanceM.name} ${(assistanceM.assistance / assistanceM.capacity * 100).toFixed(2)}%</th>
    <th>${assistanceUp.name} ${(assistanceUp.assistance / assistanceUp.capacity * 100).toFixed(2)}%</th>
    <th>${capacityM.name} ${capacityM.capacity}</th>
    </tr>
    </tbody>
    </table>
    `
  }
  export function income(lists, noRepeat) {
    let income = [];
    for (let i = 0; i < noRepeat.length; i++) {
      let earn = 0;
      for (let list of lists) {
        if (list.category === noRepeat[i]) {
          if (list.estimate !== undefined) {
            earn += list.price * list.estimate
          } else {
            earn += list.price * list.assistance
          }
        }
      }
      income.push(earn);
    }
    return income;
  }
  export function assistanceUp(lists, noRepeat) {
    let percentage=[]
    for(let i = 0; i < noRepeat.length; i++){
        let estimateT = 0
        let capacityT = 0
        for(let list of lists){
            if (list.category === noRepeat[i]){
               estimateT += list.estimate
               capacityT += list.capacity
            }
        }
        percentage.push(estimateT / capacityT * 100 )
    }
    return percentage 
  }
  export function assistancePast(lists, noRepeat){
    let percentage=[]
    for(let i = 0; i < noRepeat.length; i++){
        let assistanceT = 0
        let capacityT = 0
        for(let list of lists){
            if (list.category === noRepeat[i]){
                capacityT += (list.capacity)
                assistanceT += (list.assistance)
            }
        }
        percentage.push(assistanceT / capacityT * 100)
    }
    return percentage
  }
  export function createTableStat(noRepeat, income, assistanceP) {
    let stat = statistics(noRepeat, income, assistanceP);
  
    return `
    <table>
    <thead>
    <tr class="title-stats">
    <th colspan="3">Upcoming events statistics by category</th>
    </tr>
    <tr>
    <th>Categories</th>
    <th>Revenues</th>
    <th>Persentage of attendance</th>
    </tr>
    </thead>
    <tbody>
    ${stat}
    </tbody
    </table>
    `
  }
  export function createTablePast(noRepeat, income, assistanceP) {
    let stat = statistics(noRepeat, income, assistanceP);
  
    return `<table>
    <thead>
    <tr class="title-stats">
      <th colspan="3">Past Events statistic by category</th>
    </tr>
    <tr>
      <th>Categories</th>
      <th>Revenues</th>
      <th>Percentage of attendance</th>
    </tr>
    </thead>
    <tbody>
    ${stat}
  </tbody>
  </table>`;
  }
  export function statistics(noRepeat, income, assistanceP) {
    let statistics = ""
    for(let i = 0; i < noRepeat.length; i++){
        statistics += `
        <tr>
        <td>${noRepeat[i]}</td>
        <td>$${income[i]}</td>
        <td>${assistanceP[i].toFixed(2)}%</td>
        </tr>
        `
    }
    return statistics
  }












