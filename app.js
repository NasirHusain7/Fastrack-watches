document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('product-cards');
  
    // Fetch product data
    fetch('./data.json')
      .then(response => response.json())
      .then(products => createProductCards(products))
      .catch(error => console.error('Error fetching products:', error));
  
    // Function to create product cards
    function createProductCards(products) {
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${product.urlImg}" alt="${product.Name}">
          <h3>${product.Name}</h3>
          <p>Price: ₹${product.offerPrice}</p>
          <p>${product.availability}</p>
        `;
        card.addEventListener('click', () => {
          window.location.href = `./Details.html?id=${product.id}`;
        });
        cardsContainer.appendChild(card);
      });
    }
  });
  