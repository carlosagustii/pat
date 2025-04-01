document.addEventListener("DOMContentLoaded", () => {
  const urlAPI = "http://localhost:8080/api/marcas";

  fetch(urlAPI, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(respuesta => {
    if (respuesta.ok) {
      return respuesta.json();
    } else {
      throw respuesta.status;
    }
  })
  .then(json => {
    console.log("Respuesta OK:", json);
    if (Array.isArray(json)) {
      actualizarTablaMarcas(json);
      actualizarDescripciones(json);
    }
  })
  .catch(error => {
    console.error("Error inesperado:", error);
  });
});

function actualizarTablaMarcas(marcas) {
  const tabla = document.querySelector("table tbody");
  if (!tabla) return;

  tabla.innerHTML = "";

  marcas.forEach(marca => {
    tabla.innerHTML += `
      <tr>
        <td>${marca.id}</td>
        <td>${marca.tipo}</td>
        <td>${marca.precioAprox}€</td>
      </tr>
    `;
  });
}

function actualizarDescripciones(marcas) {
  const cards = document.querySelectorAll(".card-body");
  cards.forEach(card => {
    const titulo = card.querySelector(".card-title")?.textContent.trim();
    const marcaAPI = marcas.find(m => titulo?.toLowerCase().includes(m.id.toLowerCase())); //he hecho el includes porque mi id y nombre de la card eran distintos

    if (marcaAPI) {
      const p = card.querySelector(".card-text");
      if (p) p.textContent = marcaAPI.descripcion;
    }
  });
}
