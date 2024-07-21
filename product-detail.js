document.addEventListener('DOMContentLoaded', () => {
    const productDetailContainer = document.getElementById('product-detail');
    const backButton = document.getElementById('back-button');
  
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    // Fetch product data
    fetch('./data.json')
      .then(response => response.json())
      .then(products => {
        const product = products.find(p => p.id == productId);
        if (product) {
          showProductDetail(product);
        } else {
          productDetailContainer.innerHTML = '<p>Product not found.</p>';
        }
      })
      .catch(error => console.error('Error fetching product:', error));
  
    // Function to show product details
    function showProductDetail(product) {
      productDetailContainer.innerHTML = `
        <img src="${product.urlImg}" alt="${product.Name}">
        <h2>${product.Name}</h2>
        <p>Price: ₹${product.offerPrice}</p>
        <p>Discount: ${product.discount}%</p>
        <p>Material: ${product.material}</p>
        <p>Color: ${product.color}</p>
        <p>Function: ${product.function}</p>
        <p>Availability: ${product.availability}</p>
        <p>Gender: ${product.gender}</p>
        <p>Description: ${product.description.para}</p>
        <div class="description-images">
          ${product.description.descriptionImg.map(img => `<img src="${img}" alt="${product.Name}">`).join('')}
        </div>
      `;
    }
  
    // Back button click event
    backButton.addEventListener('click', () => {
      window.location.href = './index.html';
    });
  });
  