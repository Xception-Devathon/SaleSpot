import Card from "./card.js";

export default async function renderProducts({url, id}) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const picksElement = document.getElementById(id);
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
    } catch (error) {
      console.error(error);
    }
  }