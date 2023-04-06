import Card from "./utils/card.js";

fetch("https://dummyjson.com/products?limit=0")
  .then((response) => response.json())
  .then((data) => {
    const picksElement = document.getElementById("picks");
    data.products
      .sort(() => Math.random() - 0.5)
      .slice(0, 10)
      .forEach((productData) => {
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
