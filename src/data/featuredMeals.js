// src/data/featuredMeals.js

const avocadoToastImg = "/food-images/AvocadoGreensaladcard-1.jpg";
const buddhaBowlImg    = "/food-images/Quinoa&BroccoliBowlcard-1.jpg";
const fruitBowlImg      = "/food-images/fruitbowlscard-1.webp";
const greenSmoothieImg  = "/food-images/DetoxGreenSmoothiecard-1.jpg";

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