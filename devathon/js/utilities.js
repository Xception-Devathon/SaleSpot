import renderProducts from "./utils/renderProduct.js";

const items = [
  {
    url: "https://dummyjson.com/products/category/smartphones",
    id: "smartphones",
  },
  {
    url: "https://dummyjson.com/products/category/laptops",
    id: "laptops",
  },
  {
    url: "https://dummyjson.com/products/category/fragrances",
    id: "fragrances",
  },
  {
    url: "https://dummyjson.com/products/category/skincare",
    id: "skincare",
  },
  {
    url: "https://dummyjson.com/products/category/groceries",
    id: "groceries",
  },
  {
    url: "https://dummyjson.com/products/category/home-decoration",
    id: "decor",
  },
  {
    url: "https://dummyjson.com/products/category/furniture",
    id: "furniture"
  },{
    url: "https://dummyjson.com/products/category/automotive",
    id: "automotive"
  },{
    url: "https://dummyjson.com/products/category/motorcycle",
    id: "motorcycle"
  },{
    url: "https://dummyjson.com/products/category/lighting",
    id: "lighting"
  }];

items.forEach(renderProducts);