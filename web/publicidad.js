document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname; 
    let productId = 1; // Uso el producto con id=1 por defecto
  
    // Para cambiar de producto según la página
    if (currentPage.endsWith('pagina1.html')) {
      productId = 2;
    } else if (currentPage.endsWith('pagina2.html')) {
      productId = 3;
    } else if (currentPage.endsWith('pagina3.html')) {
      productId = 4;
    }
  
    // Llamo a la API con la búsqueda de "watch" para que publiciten cosas de mi web
    fetch('https://dummyjson.com/products/search?q=watch')
      .then(response => response.json())
      .then(data => {
        // data es un array de los objetos 
        const products = data.products;

        const randomIndex = Math.floor(Math.random() * products.length);
        const product = products[randomIndex]; //para sacar anuncios aleatorios

  
        // Buscamos la sección de publicidad en la página
        const adContainer = document.getElementById('publicidad');
        if (!adContainer) return; 
  
        
        adContainer.innerHTML = `
  <div class="shadow-sm p-3 mb-3" style="background-color:rgb(105, 107, 132); border: 1px solid #ccc; border-radius: 5px;">
    <h5 class="fw-bold">Publicidad</h5>
    <h5 class="mb-2">${product.title}</h5>
    <p>${product.description}</p>
    <img 
      src="${product.thumbnail}" 
      alt="${product.title}" 
      class="img-fluid mb-3"
      style="max-width: 200px;"
    />
    <p class="text-muted">Precio: ${product.price}€</p>
  </div>
`;

      })
      .catch(error => {
        console.error('Error al cargar el producto:', error);
      });
  });
  