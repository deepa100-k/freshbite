// src/data/restaurantsData.js
import bistroImg from "../assets/the-green-bistrores.webp";
import dietImg from "../assets/nutrifit-dietres.avif";
import avocadoImg from "../assets/cafe-avocado-kannur-0st8czvyggres.avif";
import leafyImg from "../assets/Leafy Greens Expressres.avif"; 

export const restaurantsData = [
  {
    id: "R1",
    name: "The Green Bistro",
    cuisine: "Salads, Organic Bowls, Juices",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    costForTwo: 400,
    tag: "Top Rated",
    image: bistroImg, 
    isVeg: true
  },
  {
    id: "R2",
    name: "NutriFit Kitchen",
    cuisine: "Keto Wraps, Protein Shakes, Soups",
    rating: 4.2,
    deliveryTime: "30-35 mins",
    costForTwo: 500,
    tag: "Trending",
    image: dietImg,
    isVeg: false
  },
  {
    id: "R3",
    name: "Avocado & Co.",
    cuisine: "Vegan Bowls, Smoothies, Breakfast",
    rating: 4.7,
    deliveryTime: "15-20 mins",
    costForTwo: 600,
    tag: "Super Fast",
    image: avocadoImg,
    isVeg: true
  },
  {
    id: "R4",
    name: "Leafy Greens Express",
    cuisine: "Mediterranean Salads, Clear Soups",
    rating: 3.9,
    deliveryTime: "25-30 mins",
    costForTwo: 350,
    tag: "Budget Friendly",
    image: leafyImg,
    isVeg: true
  }
];