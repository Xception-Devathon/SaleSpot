import renderProducts from "./utils/renderProduct.js";

const items = [
  {
    url: "https://dummyjson.com/products/category/mens-shirts",
    id: "shirts",
  },
  {
    url: "https://dummyjson.com/products/category/mens-shoes",
    id: "shoes",
  },
  {
    url: "https://dummyjson.com/products/category/mens-watches",
    id: "watches",
  },
  {
    url: "https://dummyjson.com/products/category/sunglasses",
    id: "sunglasses",
  },];

items.forEach(renderProducts);