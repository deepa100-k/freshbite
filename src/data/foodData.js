// src/data/foodData.js
import saladImg from "../assets/Salad-Bowl.jpg";
import bowlImg from "../assets/Buddha-Bowl.jpg";
import drinkImg from "../assets/Green-Smoothie.jpg";
import soupImg from "../assets/CreamySpinachSoupcard-10.avif";
import wrapImg from "../assets/Avocado-Toast.jpg";
import fruitImg from "../assets/Fruit-Bowl.webp";

export const foodData = [
  // --- SALADS (9 Items) ---
  { id: 1, name: "Avocado Classic Green Salad", category: "Salads", price: 199, image: saladImg },
  { id: 2, name: "Crunchy Cucumber Avocado Salad", category: "Salads", price: 179, image: saladImg },
  { id: 3, name: "Green Apple Kale Salad", category: "Salads", price: 189, image: saladImg },
  { id: 4, name: "Greek Style Olive Salad", category: "Salads", price: 209, image: saladImg },
  { id: 5, name: "Zesty Lime Avocado Mix", category: "Salads", price: 195, image: saladImg },
  { id: 6, name: "Mediterranean Herb Salad", category: "Salads", price: 185, image: saladImg },
  { id: 7, name: "Nutty Spinach Green Salad", category: "Salads", price: 219, image: saladImg },
  { id: 8, name: "Fiber-Rich Broccoli Salad", category: "Salads", price: 169, image: saladImg },
  { id: 9, name: "Premium Avocado Feta Mix", category: "Salads", price: 249, image: saladImg },

  // --- BOWLS (13 Items) ---
  { id: 10, name: "Quinoa Broccoli Power Bowl", category: "Bowls", price: 249, image: bowlImg },
  { id: 11, name: "Tofu Protein Grain Bowl", category: "Bowls", price: 269, image: bowlImg },
  { id: 12, name: "Spiced Lentil Buddha Bowl", category: "Bowls", price: 229, image: bowlImg },
  { id: 13, name: "Sweet Potato Quinoa Bowl", category: "Bowls", price: 259, image: bowlImg },
  { id: 14, name: "Roasted Chickpea Green Bowl", category: "Bowls", price: 239, image: bowlImg },
  { id: 15, name: "High Fiber Veggie Bowl", category: "Bowls", price: 219, image: bowlImg },
  { id: 16, name: "Avocado Brown Rice Bowl", category: "Bowls", price: 279, image: bowlImg },
  { id: 17, name: "Edamame & Sesame Bowl", category: "Bowls", price: 289, image: bowlImg },
  { id: 18, name: "Garden Fresh Crunch Bowl", category: "Bowls", price: 209, image: bowlImg },
  { id: 19, name: "Chili Garlic Tofu Bowl", category: "Bowls", price: 255, image: bowlImg },
  { id: 20, name: "Superfood Flaxseed Bowl", category: "Bowls", price: 299, image: bowlImg },
  { id: 21, name: "Mushroom Rice Protein Bowl", category: "Bowls", price: 245, image: bowlImg },
  { id: 22, name: "Ultimate Green Detox Bowl", category: "Bowls", price: 265, image: bowlImg },

  // --- DRINKS (9 Items) ---
  { id: 23, name: "Detox Green Smoothie", category: "Drinks", price: 149, image: drinkImg },
  { id: 24, name: "Spinach Matcha Shake", category: "Drinks", price: 159, image: drinkImg },
  { id: 25, name: "Cucumber Mint Cooler", category: "Drinks", price: 119, image: drinkImg },
  { id: 26, name: "Celery Ginger Super Juice", category: "Drinks", price: 139, image: drinkImg },
  { id: 27, name: "Kiwi Green Apple Fizz", category: "Drinks", price: 169, image: drinkImg },
  { id: 28, name: "Aloe Vera Mint Hydrator", category: "Drinks", price: 129, image: drinkImg },
  { id: 29, name: "Immunity Booster Green Tea", category: "Drinks", price: 99, image: drinkImg },
  { id: 30, name: "Cold Pressed Kale Juice", category: "Drinks", price: 179, image: drinkImg },
  { id: 31, name: "Avocado Cream Smoothie", category: "Drinks", price: 189, image: drinkImg },

  // --- SOUPS (14 Items) ---
  { id: 32, name: "Clear Vegetable Broth-1", category: "Soups", price: 119, image: soupImg },
  { id: 33, name: "Clear Vegetable Broth-2", category: "Soups", price: 125, image: soupImg },
  { id: 34, name: "Creamy Spinach Soup Classic", category: "Soups", price: 129, image: soupImg },
  { id: 35, name: "Spinach & Sweet Corn Soup", category: "Soups", price: 135, image: soupImg },
  { id: 36, name: "Garlic Roasted Spinach Soup", category: "Soups", price: 139, image: soupImg },
  { id: 37, name: "Spiced Green Herbs Broth", category: "Soups", price: 129, image: soupImg },
  { id: 38, name: "Spinach Tofu Clear Soup", category: "Soups", price: 145, image: soupImg },
  { id: 39, name: "Thick Spinach Cream Chowder", category: "Soups", price: 149, image: soupImg },
  { id: 40, name: "Herbal Detox Spinach Soup", category: "Soups", price: 139, image: soupImg },
  { id: 41, name: "Almond Spinach Protein Soup", category: "Soups", price: 159, image: soupImg },
  { id: 42, name: "Wild Mushroom Spinach Soup", category: "Soups", price: 169, image: soupImg },
  { id: 43, name: "Premium Velouté Spinach Soup", category: "Soups", price: 179, image: soupImg },
  { id: 44, name: "Broccoli Spinach Dual Soup", category: "Soups", price: 155, image: soupImg },
  { id: 45, name: "Diet-Friendly Low Sodium Soup", category: "Soups", price: 129, image: soupImg },

  // --- WRAPS (8 Items) ---
  { id: 46, name: "Paneer Avocado Whole Wheat Wrap", category: "Wraps", price: 189, image: wrapImg },
  { id: 47, name: "Hummus Veggie Crunch Wrap", category: "Wraps", price: 159, image: wrapImg },
  { id: 48, name: "Spiced Chickpea Lettuce Wrap", category: "Wraps", price: 169, image: wrapImg },
  { id: 49, name: "Baked Sweet Tofu Tortilla", category: "Wraps", price: 199, image: wrapImg },
  { id: 50, name: "Grilled Mushroom Spinach Wrap", category: "Wraps", price: 179, image: wrapImg },
  { id: 51, name: "Keto Friendly Green Wrap", category: "Wraps", price: 219, image: wrapImg },
  { id: 52, name: "Sprouted Bean Protein Wrap", category: "Wraps", price: 149, image: wrapImg },
  { id: 53, name: "Feta & Roasted Pepper Wrap", category: "Wraps", price: 195, image: wrapImg },

  // --- FRUITS (11 Items Added) ---
  { id: 54, name: "Classic Organic Fruit Medley", category: "Fruits", price: 159, image: fruitImg },
  { id: 55, name: "Antioxidant Rich Berry Bowl", category: "Fruits", price: 189, image: fruitImg },
  { id: 56, name: "Tropical Sunshine Fruit Mix", category: "Fruits", price: 169, image: fruitImg },
  { id: 57, name: "Zesty Citrus Fruit Crunch", category: "Fruits", price: 149, image: fruitImg },
  { id: 58, name: "Hydrating Melon Magic Salad", category: "Fruits", price: 139, image: fruitImg },
  { id: 59, name: "Premium Exotic Fruit Platter", category: "Fruits", price: 229, image: fruitImg },
  { id: 60, name: "Summer Special Mango Salad", category: "Fruits", price: 179, image: fruitImg },
  { id: 61, name: "Sweet Kiwi Grape Fiesta", category: "Fruits", price: 199, image: fruitImg },
  { id: 62, name: "Fiber Booster Apple Pear Mix", category: "Fruits", price: 129, image: fruitImg },
  { id: 63, name: "Superfood Chia Seed Fruit Bowl", category: "Fruits", price: 219, image: fruitImg },
  { id: 64, name: "Mint Infused Fresh Fruit Bowl", category: "Fruits", price: 155, image: fruitImg }
];

export const MENU_CATEGORIES = ["All", "Salads", "Bowls", "Drinks", "Soups", "Wraps", "Fruits"];