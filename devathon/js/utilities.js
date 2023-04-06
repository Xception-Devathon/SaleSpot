import Card from "./card.js";

fetch("https://dummyjson.com/products/category/smartphones")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("smartphones");
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

fetch("https://dummyjson.com/products/category/laptops")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("laptops");
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

fetch("https://dummyjson.com/products/category/fragrances")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("fragrances");
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

fetch("https://dummyjson.com/products/category/skincare")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("skincare");
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
  
    fetch("https://dummyjson.com/products/category/groceries")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("groceries");
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
  
    fetch("https://dummyjson.com/products/category/home-decoration")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("decor");
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
  
    fetch("https://dummyjson.com/products/category/furniture")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("furniture");
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
  
    fetch("https://dummyjson.com/products/category/automotive")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("automotive");
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
  
    fetch("https://dummyjson.com/products/category/motorcycle")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("motorcycle");
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
  
    fetch("https://dummyjson.com/products/category/lighting")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("lighting");
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
