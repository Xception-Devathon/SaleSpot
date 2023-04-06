import Card from "./card.js";

fetch("https://dummyjson.com/products/category/tops?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("tops");
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

fetch("https://dummyjson.com/products/category/womens-dresses?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("dresses");
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

fetch("https://dummyjson.com/products/category/womens-shoes?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("shoes");
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

fetch("https://dummyjson.com/products/category/womens-watches?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("watches");
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
fetch("https://dummyjson.com/products/category/womens-bags?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("bags");
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

fetch("https://dummyjson.com/products/category/womens-jewellery?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("jewellery");
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
