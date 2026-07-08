// src/data/featuredMeals.js

// Vite dynamic asset resolution helper
const getAssetUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

export const featuredMeals = [
  {
    id: 1,
    name: "Avocado Toast",
    image: getAssetUrl("AvocadoGreensaladcard-1.jpg"), // Aapke asset folder ka exact file name
    price: 299,
    rating: 4.9,
    calories: "280 Cal",
  },
  {
    id: 2,
    name: "Buddha Bowl",
    image: getAssetUrl("Quinoa&BroccoliBowlcard-1.jpg"),
    price: 399,
    rating: 4.8,
    calories: "350 Cal",
  },
  {
    id: 3,
    name: "Fruit Bowl",
    image: getAssetUrl("fruitbowlscard-1.webp"),
    price: 249,
    rating: 5.0,
    calories: "210 Cal",
  },
  {
    id: 4,
    name: "Green Smoothie",
    image: getAssetUrl("DetoxGreenSmoothiecard-1.jpg"),
    price: 199,
    rating: 4.7,
    calories: "180 Cal",
  },
];