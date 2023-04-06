import renderProducts from "./utils/renderProduct.js";

const items = [
  {
    url: "https://dummyjson.com/products/category/tops",
    id: "tops",
  },
  {
    url: "https://dummyjson.com/products/category/womens-dresses",
    id: "dresses",
  },
  {
    url: "https://dummyjson.com/products/category/womens-shoes",
    id: "shoes",
  },
  {
    url: "https://dummyjson.com/products/category/womens-watches",
    id: "watches",
  },
  {
    url: "https://dummyjson.com/products/category/womens-bags",
    id: "bags",
  },
  {
    url: "https://dummyjson.com/products/category/womens-jewellery",
    id: "jewellery",
  },];

items.forEach(renderProducts);