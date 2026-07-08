// src/data/featuredMeals.js

// LIVE RELIABLE CDN IMAGES (Koi local path ya case-sensitivity ka error nahi aayega)
const avocadoToastImg = "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=500";
const buddhaBowlImg = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500";
const fruitBowlImg = "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=500";
const greenSmoothieImg = "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500";

export const featuredMeals = [
  {
    id: 1,
    name: "Avocado Toast",
    image: avocadoToastImg,
    price: 299,
    rating: 4.9,
    calories: "280 Cal",
  },
  {
    id: 2,
    name: "Buddha Bowl",
    image: buddhaBowlImg,
    price: 399,
    rating: 4.8,
    calories: "350 Cal",
  },
  {
    id: 3,
    name: "Fruit Bowl",
    image: fruitBowlImg,
    price: 249,
    rating: 5.0,
    calories: "210 Cal",
  },
  {
    id: 4,
    name: "Green Smoothie",
    image: greenSmoothieImg,
    price: 199,
    rating: 4.7,
    calories: "180 Cal",
  },
];