import Card from "./card.js";

fetch("https://dummyjson.com/products/category/mens-shirts")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("shirts");
    picksElement.style.gridTemplateColumns=`repeat(${data.products.length}, clamp(200px, 100%, 300px))`;
    data.products.forEach((productData) => {
      const product = Card(
        productData.thumbnail,
        productData.title,
        productData.price,
        productData.rating
      );
      picksElement.appendChild(product);
    });
  })
  .catch((error) => console.error(error));

fetch("https://dummyjson.com/products/category/mens-shoes")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("shoes");
    picksElement.style.gridTemplateColumns=`repeat(${data.products.length}, clamp(200px, 100%, 300px))`;
    data.products.forEach((productData) => {
      const product = Card(
        productData.thumbnail,
        productData.title,
        productData.price,
        productData.rating
      );
      picksElement.appendChild(product);
    });
  })
  .catch((error) => console.error(error));

fetch("https://dummyjson.com/products/category/mens-watches")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("watches");
    picksElement.style.gridTemplateColumns=`repeat(${data.products.length}, clamp(200px, 100%, 300px))`;
    data.products.forEach((productData) => {
      const product = Card(
        productData.thumbnail,
        productData.title,
        productData.price,
        productData.rating
      );
      picksElement.appendChild(product);
    });
  })
  .catch((error) => console.error(error));

fetch("https://dummyjson.com/products/category/sunglasses")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("sunglasses");
    picksElement.style.gridTemplateColumns=`repeat(${data.products.length}, clamp(200px, 100%, 300px))`;
    data.products.forEach((productData) => {
      const product = Card(
        productData.thumbnail,
        productData.title,
        productData.price,
        productData.rating
      );
      picksElement.appendChild(product);
    });
  })
  .catch((error) => console.error(error));
