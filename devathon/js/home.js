import Card from "./card.js";

fetch('https://dummyjson.com/products?limit=10')
  .then(response => response.json())
  .then(data => {
    const picksElement = document.getElementById('picks');
    data.products.forEach(productData => {
      const product = Card(
        productData.thumbnail,
        productData.title,
        productData.price,
        productData.rating
      );
      picksElement.appendChild(product);
    });
  })
  .catch(error => console.error(error));