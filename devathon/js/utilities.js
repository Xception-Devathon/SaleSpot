import Card from "./card.js";

fetch("https://dummyjson.com/products/category/smartphones?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("smartphones");
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

fetch("https://dummyjson.com/products/category/laptops?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("laptops");
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

fetch("https://dummyjson.com/products/category/fragrances?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("fragrances");
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

fetch("https://dummyjson.com/products/category/skincare?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("skincare");
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
  
    fetch("https://dummyjson.com/products/category/groceries?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("groceries");
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
  
    fetch("https://dummyjson.com/products/category/home-decoration?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("decor");
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
  
    fetch("https://dummyjson.com/products/category/furniture?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("furniture");
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
  
    fetch("https://dummyjson.com/products/category/automotive?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("automotive");
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
  
    fetch("https://dummyjson.com/products/category/motorcycle?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("motorcycle");
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
  
    fetch("https://dummyjson.com/products/category/lighting?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("lighting");
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
