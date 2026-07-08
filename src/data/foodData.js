// src/data/foodData.js

// --- SALAD IMAGES IMPORTS ---
import salad1 from "../assets/AvocadoGreensaladcard-1.jpg";
import salad2 from "../assets/AvocadoGreensaladcard-2.jpg";
import salad3 from "../assets/AvocadoGreensaladcard-3.jpg";
import salad4 from "../assets/AvocadoGreensaladcard-4.jpg";
import salad5 from "../assets/AvocadoGreensaladcard-5.jpg";
import salad6 from "../assets/AvocadoGreensaladcard-6.jpg";
import salad7 from "../assets/AvocadoGreensaladcard-7.jpg";
import salad8 from "../assets/AvocadoGreensaladcard-8.jpg";
import salad9 from "../assets/AvocadoGreensaladcard-9.jpg";

// --- BOWL IMAGES IMPORTS ---
import bowl1 from "../assets/Quinoa&BroccoliBowlcard-1.jpg";
import bowl2 from "../assets/Quinoa&BroccoliBowlcard-2.jpg";
import bowl3 from "../assets/Quinoa&BroccoliBowlcard-3.jpg";
import bowl4 from "../assets/Quinoa&BroccoliBowlcard-4.jpg";
import bowl5 from "../assets/Quinoa&BroccoliBowlcard-5.jpg";
import bowl6 from "../assets/Quinoa&BroccoliBowlcard-6.jpg";
import bowl7 from "../assets/Quinoa&BroccoliBowlcard-7.avif";
import bowl8 from "../assets/Quinoa&BroccoliBowlcard-8.jpg";
import bowl9 from "../assets/Quinoa&BroccoliBowlcard-9.jpg";
import bowl10 from "../assets/Quinoa&BroccoliBowlcard-10.jpg";
import bowl11 from "../assets/Quinoa&BroccoliBowlcard-11.jpg";
import bowl12 from "../assets/Quinoa&BroccoliBowlcard-12.jpg";
import bowl13 from "../assets/Quinoa&BroccoliBowlcard-13.jpg";

// --- DRINK IMAGES IMPORTS ---
import drink1 from "../assets/DetoxGreenSmoothiecard-1.jpg";
import drink2 from "../assets/DetoxGreenSmoothiecard-2.webp";
import drink3 from "../assets/DetoxGreenSmoothiecard-3.jpg";
import drink4 from "../assets/DetoxGreenSmoothiecard-4.jpg";
import drink5 from "../assets/DetoxGreenSmoothiecard-5.jpg";
import drink6 from "../assets/DetoxGreenSmoothiecard-6.jpg";
import drink7 from "../assets/DetoxGreenSmoothiecard-7.jpg";
import drink8 from "../assets/DetoxGreenSmoothiecard-8.jpg";
import drink9 from "../assets/DetoxGreenSmoothiecard-9.jpg";

// --- SOUP IMAGES IMPORTS ---
import soup1 from "../assets/ClearVegetableBrothcard-1.webp";
import soup2 from "../assets/ClearVegetableBrothcard-2.webp";
import soup3 from "../assets/CreamySpinachSoupcard-1.jpg";
import soup4 from "../assets/CreamySpinachSoupcard-2.jpg";
import soup5 from "../assets/CreamySpinachSoupcard-3.jpg";
import soup6 from "../assets/CreamySpinachSoupcard-4.jpg";
import soup7 from "../assets/CreamySpinachSoupcard-5.jpg";
import soup8 from "../assets/CreamySpinachSoupcard-6.jpg";
import soup9 from "../assets/CreamySpinachSoupcard-7.jpg";
import soup10 from "../assets/CreamySpinachSoupcard-8.jpg";
import soup11 from "../assets/CreamySpinachSoupcard-9.jpg";
import soup12 from "../assets/CreamySpinachSoupcard-10.avif";
import soup13 from "../assets/CreamySpinachSoupcard-11.jpg";
import soup14 from "../assets/CreamySpinachSoupcard-12.jpg";

// --- WRAP IMAGES IMPORTS ---
import wrap1 from "../assets/Wrapcard-1.jpg";
import wrap2 from "../assets/Wrapcard-2.jpg";
import wrap3 from "../assets/Wrapcard-3.jpg";
import wrap4 from "../assets/Wrapcard-4.jpg";
import wrap5 from "../assets/Wrapcard-5.jpg";
import wrap6 from "../assets/Wrapcard-6.jpg";
import wrap7 from "../assets/Wrapcard-7.jpg";
import wrap8 from "../assets/Wrapcard-8.jpg";

// --- FRUIT IMAGES IMPORTS ---
import fruit1 from "../assets/fruitbowlscard-1.webp";
import fruit2 from "../assets/fruitbowlscard-2.jpg";
import fruit3 from "../assets/fruitbowlscard-3.jpg";
import fruit4 from "../assets/fruitbowlscard-4.webp";
import fruit5 from "../assets/fruitbowlscard-5.jpg";
import fruit6 from "../assets/fruitbowlscard-6.avif";
import fruit7 from "../assets/fruitbowlscard-7.jpg";
import fruit8 from "../assets/fruitbowlscard-8.jpg";
import fruit9 from "../assets/fruitbowlscard-9.jpg";
import fruit10 from "../assets/fruitbowlscard-10.jpg";
import fruit11 from "../assets/fruitbowlscard-11.jpg";

export const foodData = [
  // --- SALADS (9 Items) ---
  { id: 1, name: "Avocado Classic Green Salad", category: "Salads", price: 199, image: salad1 },
  { id: 2, name: "Crunchy Cucumber Avocado Salad", category: "Salads", price: 179, image: salad2 },
  { id: 3, name: "Green Apple Kale Salad", category: "Salads", price: 189, image: salad3 },
  { id: 4, name: "Greek Style Olive Salad", category: "Salads", price: 209, image: salad4 },
  { id: 5, name: "Zesty Lime Avocado Mix", category: "Salads", price: 195, image: salad5 },
  { id: 6, name: "Mediterranean Herb Salad", category: "Salads", price: 185, image: salad6 },
  { id: 7, name: "Nutty Spinach Green Salad", category: "Salads", price: 219, image: salad7 },
  { id: 8, name: "Fiber-Rich Broccoli Salad", category: "Salads", price: 169, image: salad8 },
  { id: 9, name: "Premium Avocado Feta Mix", category: "Salads", price: 249, image: salad9 },

  // --- BOWLS (13 Items) ---
  { id: 10, name: "Quinoa Broccoli Power Bowl", category: "Bowls", price: 249, image: bowl1 },
  { id: 11, name: "Tofu Protein Grain Bowl", category: "Bowls", price: 269, image: bowl2 },
  { id: 12, name: "Spiced Lentil Buddha Bowl", category: "Bowls", price: 229, image: bowl3 },
  { id: 13, name: "Sweet Potato Quinoa Bowl", category: "Bowls", price: 259, image: bowl4 },
  { id: 14, name: "Roasted Chickpea Green Bowl", category: "Bowls", price: 239, image: bowl5 },
  { id: 15, name: "High Fiber Veggie Bowl", category: "Bowls", price: 219, image: bowl6 },
  { id: 16, name: "Avocado Brown Rice Bowl", category: "Bowls", price: 279, image: bowl7 },
  { id: 17, name: "Edamame & Sesame Bowl", category: "Bowls", price: 289, image: bowl8 },
  { id: 18, name: "Garden Fresh Crunch Bowl", category: "Bowls", price: 209, image: bowl9 },
  { id: 19, name: "Chili Garlic Tofu Bowl", category: "Bowls", price: 255, image: bowl10 },
  { id: 20, name: "Superfood Flaxseed Bowl", category: "Bowls", price: 299, image: bowl11 },
  { id: 21, name: "Mushroom Rice Protein Bowl", category: "Bowls", price: 245, image: bowl12 },
  { id: 22, name: "Ultimate Green Detox Bowl", category: "Bowls", price: 265, image: bowl13 },

  // --- DRINKS (9 Items) ---
  { id: 23, name: "Detox Green Smoothie", category: "Drinks", price: 149, image: drink1 },
  { id: 24, name: "Spinach Matcha Shake", category: "Drinks", price: 159, image: drink2 },
  { id: 25, name: "Cucumber Mint Cooler", category: "Drinks", price: 119, image: drink3 },
  { id: 26, name: "Celery Ginger Super Juice", category: "Drinks", price: 139, image: drink4 },
  { id: 27, name: "Kiwi Green Apple Fizz", category: "Drinks", price: 169, image: drink5 },
  { id: 28, name: "Aloe Vera Mint Hydrator", category: "Drinks", price: 129, image: drink6 },
  { id: 29, name: "Immunity Booster Green Tea", category: "Drinks", price: 99, image: drink7 },
  { id: 30, name: "Cold Pressed Kale Juice", category: "Drinks", price: 179, image: drink8 },
  { id: 31, name: "Avocado Cream Smoothie", category: "Drinks", price: 189, image: drink9 },

  // --- SOUPS (14 Items) ---
  { id: 32, name: "Clear Vegetable Broth-1", category: "Soups", price: 119, image: soup1 },
  { id: 33, name: "Clear Vegetable Broth-2", category: "Soups", price: 125, image: soup2 },
  { id: 34, name: "Creamy Spinach Soup Classic", category: "Soups", price: 129, image: soup3 },
  { id: 35, name: "Spinach & Sweet Corn Soup", category: "Soups", price: 135, image: soup4 },
  { id: 36, name: "Garlic Roasted Spinach Soup", category: "Soups", price: 139, image: soup5 },
  { id: 37, name: "Spiced Green Herbs Broth", category: "Soups", price: 129, image: soup6 },
  { id: 38, name: "Spinach Tofu Clear Soup", category: "Soups", price: 145, image: soup7 },
  { id: 39, name: "Thick Spinach Cream Chowder", category: "Soups", price: 149, image: soup8 },
  { id: 40, name: "Herbal Detox Spinach Soup", category: "Soups", price: 139, image: soup9 },
  { id: 41, name: "Almond Spinach Protein Soup", category: "Soups", price: 159, image: soup10 },
  { id: 42, name: "Wild Mushroom Spinach Soup", category: "Soups", price: 169, image: soup11 },
  { id: 43, name: "Premium Velouté Spinach Soup", category: "Soups", price: 179, image: soup12 },
  { id: 44, name: "Broccoli Spinach Dual Soup", category: "Soups", price: 155, image: soup13 },
  { id: 45, name: "Diet-Friendly Low Sodium Soup", category: "Soups", price: 129, image: soup14 },

  // --- WRAPS (8 Items) ---
  { id: 46, name: "Paneer Avocado Whole Wheat Wrap", category: "Wraps", price: 189, image: wrap1 },
  { id: 47, name: "Hummus Veggie Crunch Wrap", category: "Wraps", price: 159, image: wrap2 },
  { id: 48, name: "Spiced Chickpea Lettuce Wrap", category: "Wraps", price: 169, image: wrap3 },
  { id: 49, name: "Baked Sweet Tofu Tortilla", category: "Wraps", price: 199, image: wrap4 },
  { id: 50, name: "Grilled Mushroom Spinach Wrap", category: "Wraps", price: 179, image: wrap5 },
  { id: 51, name: "Keto Friendly Green Wrap", category: "Wraps", price: 219, image: wrap6 },
  { id: 52, name: "Sprouted Bean Protein Wrap", category: "Wraps", price: 149, image: wrap7 },
  { id: 53, name: "Feta & Roasted Pepper Wrap", category: "Wraps", price: 195, image: wrap8 },

  // --- FRUITS (11 Items) ---
  { id: 54, name: "Classic Organic Fruit Medley", category: "Fruits", price: 159, image: fruit1 },
  { id: 55, name: "Antioxidant Rich Berry Bowl", category: "Fruits", price: 189, image: fruit2 },
  { id: 56, name: "Tropical Sunshine Fruit Mix", category: "Fruits", price: 169, image: fruit3 },
  { id: 57, name: "Zesty Citrus Fruit Crunch", category: "Fruits", price: 149, image: fruit4 },
  { id: 58, name: "Hydrating Melon Magic Salad", category: "Fruits", price: 139, image: fruit5 },
  { id: 59, name: "Premium Exotic Fruit Platter", category: "Fruits", price: 229, image: fruit6 },
  { id: 60, name: "Summer Special Mango Salad", category: "Fruits", price: 179, image: fruit7 },
  { id: 61, name: "Sweet Kiwi Grape Fiesta", category: "Fruits", price: 199, image: fruit8 },
  { id: 62, name: "Fiber Booster Apple Pear Mix", category: "Fruits", price: 129, image: fruit9 },
  { id: 63, name: "Superfood Chia Seed Fruit Bowl", category: "Fruits", price: 219, image: fruit10 },
  { id: 64, name: "Mint Infused Fresh Fruit Bowl", category: "Fruits", price: 155, image: fruit11 }
];

export const MENU_CATEGORIES = ["All", "Salads", "Bowls", "Drinks", "Soups", "Wraps", "Fruits"];