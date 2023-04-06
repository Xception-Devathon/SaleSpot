import Card from "./card.js";

fetch('https://dummyjson.com/products/category/mens-shirts?limit=10')
  .then(response => response.json())
  .then(data => {
    const picksElement = document.getElementById('shirts');
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
  
    fetch('https://dummyjson.com/products/category/mens-shoes?limit=10')
  .then(response => response.json())
  .then(data => {
    const picksElement = document.getElementById('shoes');
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
  
    fetch('https://dummyjson.com/products/category/mens-watches?limit=10')
  .then(response => response.json())
  .then(data => {
    const picksElement = document.getElementById('watches');
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
  
    fetch('https://dummyjson.com/products/category/sunglasses?limit=10')
  .then(response => response.json())
  .then(data => {
    const picksElement = document.getElementById('sunglasses');
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