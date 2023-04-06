import Card from "./card.js";

fetch("https://dummyjson.com/products/category/tops")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("tops");
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

fetch("https://dummyjson.com/products/category/womens-dresses")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("dresses");
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

fetch("https://dummyjson.com/products/category/womens-shoes")
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

fetch("https://dummyjson.com/products/category/womens-watches")
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
fetch("https://dummyjson.com/products/category/womens-bags")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("bags");
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

fetch("https://dummyjson.com/products/category/womens-jewellery")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("jewellery");
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
