export default function Card(imgSrc, prodTitle, price, rating) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
  
    const img = document.createElement('img');
    img.src = imgSrc;
    img.className = 'product-img';
    img.alt = '';
  
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'details';
  
    const h3 = document.createElement('h3');
    h3.className = 'prod-title';
    h3.textContent = prodTitle;
  
    const infoDiv = document.createElement('div');
    infoDiv.className = 'info';
  
    const priceDiv = document.createElement('div');
    priceDiv.className = 'price';
    priceDiv.textContent = `$${price}`;
  
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'rating';
  
    const starImg = document.createElement('img');
    starImg.src = './assets/star.svg';
    starImg.alt = '';
  
    const ratingValue = document.createElement('span');
    ratingValue.textContent = rating;
  
    ratingDiv.appendChild(starImg);
    ratingDiv.appendChild(ratingValue);
  
    infoDiv.appendChild(priceDiv);
    infoDiv.appendChild(ratingDiv);
  
    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(infoDiv);
  
    productDiv.appendChild(img);
    productDiv.appendChild(detailsDiv);
  
    return productDiv;
  }
  