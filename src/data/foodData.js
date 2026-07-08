// src/data/foodData.js

// Vite dynamic asset handling ke liye helper function
const getAssetUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

export const foodData = [
  // --- SALADS (9 Items) --- Har item ko uski unique numbered image de di hai
  { id: 1, name: "Avocado Classic Green Salad", category: "Salads", price: 199, image: getAssetUrl("AvocadoGreenSaladcard-1.jpg") },
  { id: 2, name: "Crunchy Cucumber Avocado Salad", category: "Salads", price: 179, image: getAssetUrl("AvocadoGreenSaladcard-2.jpg") },
  { id: 3, name: "Green Apple Kale Salad", category: "Salads", price: 189, image: getAssetUrl("AvocadoGreenSaladcard-3.jpg") },
  { id: 4, name: "Greek Style Olive Salad", category: "Salads", price: 209, image: getAssetUrl("AvocadoGreenSaladcard-4.jpg") },
  { id: 5, name: "Zesty Lime Avocado Mix", category: "Salads", price: 195, image: getAssetUrl("AvocadoGreenSaladcard-5.jpg") },
  { id: 6, name: "Mediterranean Herb Salad", category: "Salads", price: 185, image: getAssetUrl("AvocadoGreenSaladcard-6.jpg") },
  { id: 7, name: "Nutty Spinach Green Salad", category: "Salads", price: 219, image: getAssetUrl("AvocadoGreenSaladcard-7.jpg") },
  { id: 8, name: "Fiber-Rich Broccoli Salad", category: "Salads", price: 169, image: getAssetUrl("AvocadoGreenSaladcard-8.jpg") },
  { id: 9, name: "Premium Avocado Feta Mix", category: "Salads", price: 249, image: getAssetUrl("AvocadoGreenSaladcard-9.jpg") },

  // --- BOWLS (13 Items) --- Idhar bhi unique numbers sequential laga diye hain
  { id: 10, name: "Quinoa Broccoli Power Bowl", category: "Bowls", price: 249, image: getAssetUrl("Quinoa&BroccoliBowlcard-1.jpg") },
  { id: 11, name: "Tofu Protein Grain Bowl", category: "Bowls", price: 269, image: getAssetUrl("Quinoa&BroccoliBowlcard-2.jpg") },
  { id: 12, name: "Spiced Lentil Buddha Bowl", category: "Bowls", price: 229, image: getAssetUrl("Quinoa&BroccoliBowlcard-3.jpg") },
  { id: 13, name: "Sweet Potato Quinoa Bowl", category: "Bowls", price: 259, image: getAssetUrl("Quinoa&BroccoliBowlcard-4.jpg") },
  { id: 14, name: "Roasted Chickpea Green Bowl", category: "Bowls", price: 239, image: getAssetUrl("Quinoa&BroccoliBowlcard-5.jpg") },
  { id: 15, name: "High Fiber Veggie Bowl", category: "Bowls", price: 219, image: getAssetUrl("Quinoa&BroccoliBowlcard-6.jpg") },
  { id: 16, name: "Avocado Brown Rice Bowl", category: "Bowls", price: 279, image: getAssetUrl("Quinoa&BroccoliBowlcard-7.avif") },
  { id: 17, name: "Edamame & Sesame Bowl", category: "Bowls", price: 289, image: getAssetUrl("Quinoa&BroccoliBowlcard-8.jpg") },
  { id: 18, name: "Garden Fresh Crunch Bowl", category: "Bowls", price: 209, image: getAssetUrl("Quinoa&BroccoliBowlcard-9.jpg") },
  { id: 19, name: "Chili Garlic Tofu Bowl", category: "Bowls", price: 255, image: getAssetUrl("Quinoa&BroccoliBowlcard-10.jpg") },
  { id: 20, name: "Superfood Flaxseed Bowl", category: "Bowls", price: 299, image: getAssetUrl("Quinoa&BroccoliBowlcard-11.jpg") },
  { id: 21, name: "Mushroom Rice Protein Bowl", category: "Bowls", price: 245, image: getAssetUrl("Quinoa&BroccoliBowlcard-12.jpg") },
  { id: 22, name: "Ultimate Green Detox Bowl", category: "Bowls", price: 265, image: getAssetUrl("Quinoa&BroccoliBowlcard-13.jpg") },

  // --- DRINKS (9 Items) ---
  { id: 23, name: "Detox Green Smoothie", category: "Drinks", price: 149, image: getAssetUrl("DetoxGreenSmoothiecard-1.jpg") },
  { id: 24, name: "Spinach Matcha Shake", category: "Drinks", price: 159, image: getAssetUrl("DetoxGreenSmoothiecard-2.webp") },
  { id: 25, name: "Cucumber Mint Cooler", category: "Drinks", price: 119, image: getAssetUrl("DetoxGreenSmoothiecard-3.jpg") },
  { id: 26, name: "Celery Ginger Super Juice", category: "Drinks", price: 139, image: getAssetUrl("DetoxGreenSmoothiecard-4.jpg") },
  { id: 27, name: "Kiwi Green Apple Fizz", category: "Drinks", price: 169, image: getAssetUrl("DetoxGreenSmoothiecard-5.jpg") },
  { id: 28, name: "Aloe Vera Mint Hydrator", category: "Drinks", price: 129, image: getAssetUrl("DetoxGreenSmoothiecard-6.jpg") },
  { id: 29, name: "Immunity Booster Green Tea", category: "Drinks", price: 99, image: getAssetUrl("DetoxGreenSmoothiecard-7.jpg") },
  { id: 30, name: "Cold Pressed Kale Juice", category: "Drinks", price: 179, image: getAssetUrl("DetoxGreenSmoothiecard-8.jpg") },
  { id: 31, name: "Avocado Cream Smoothie", category: "Drinks", price: 189, image: getAssetUrl("DetoxGreenSmoothiecard-9.jpg") },

  // --- SOUPS (14 Items) ---
  { id: 32, name: "Clear Vegetable Broth-1", category: "Soups", price: 119, image: getAssetUrl("ClearVegetableBrothcard-1.webp") },
  { id: 33, name: "Clear Vegetable Broth-2", category: "Soups", price: 125, image: getAssetUrl("ClearVegetableBrothcard-2.webp") },
  { id: 34, name: "Creamy Spinach Soup Classic", category: "Soups", price: 129, image: getAssetUrl("CreamySpinachSoupcard-1.jpg") },
  { id: 35, name: "Spinach & Sweet Corn Soup", category: "Soups", price: 135, image: getAssetUrl("CreamySpinachSoupcard-2.jpg") },
  { id: 36, name: "Garlic Roasted Spinach Soup", category: "Soups", price: 139, image: getAssetUrl("CreamySpinachSoupcard-3.jpg") },
  { id: 37, name: "Spiced Green Herbs Broth", category: "Soups", price: 129, image: getAssetUrl("CreamySpinachSoupcard-4.jpg") },
  { id: 38, name: "Spinach Tofu Clear Soup", category: "Soups", price: 145, image: getAssetUrl("CreamySpinachSoupcard-5.jpg") },
  { id: 39, name: "Thick Spinach Cream Chowder", category: "Soups", price: 149, image: getAssetUrl("CreamySpinachSoupcard-6.jpg") },
  { id: 40, name: "Herbal Detox Spinach Soup", category: "Soups", price: 139, image: getAssetUrl("CreamySpinachSoupcard-7.jpg") },
  { id: 41, name: "Almond Spinach Protein Soup", category: "Soups", price: 159, image: getAssetUrl("CreamySpinachSoupcard-8.jpg") },
  { id: 42, name: "Wild Mushroom Spinach Soup", category: "Soups", price: 169, image: getAssetUrl("CreamySpinachSoupcard-9.jpg") },
  { id: 43, name: "Premium Velouté Spinach Soup", category: "Soups", price: 179, image: getAssetUrl("CreamySpinachSoupcard-10.avif") },
  { id: 44, name: "Broccoli Spinach Dual Soup", category: "Soups", price: 155, image: getAssetUrl("CreamySpinachSoupcard-11.jpg") },
  { id: 45, name: "Diet-Friendly Low Sodium Soup", category: "Soups", price: 129, image: getAssetUrl("CreamySpinachSoupcard-12.jpg") },

  // --- WRAPS (8 Items) --- Sequential numbers map kar diye hain
  { id: 46, name: "Paneer Avocado Whole Wheat Wrap", category: "Wraps", price: 189, image: getAssetUrl("Wrapcard-1.jpg") },
  { id: 47, name: "Hummus Veggie Crunch Wrap", category: "Wraps", price: 159, image: getAssetUrl("Wrapcard-2.jpg") },
  { id: 48, name: "Spiced Chickpea Lettuce Wrap", category: "Wraps", price: 169, image: getAssetUrl("Wrapcard-3.jpg") },
  { id: 49, name: "Baked Sweet Tofu Tortilla", category: "Wraps", price: 199, image: getAssetUrl("Wrapcard-4.jpg") },
  { id: 50, name: "Grilled Mushroom Spinach Wrap", category: "Wraps", price: 179, image: getAssetUrl("Wrapcard-5.jpg") },
  { id: 51, name: "Keto Friendly Green Wrap", category: "Wraps", price: 219, image: getAssetUrl("Wrapcard-6.jpg") },
  { id: 52, name: "Sprouted Bean Protein Wrap", category: "Wraps", price: 149, image: getAssetUrl("Wrapcard-7.jpg") },
  { id: 53, name: "Feta & Roasted Pepper Wrap", category: "Wraps", price: 195, image: getAssetUrl("Wrapcard-8.jpg") },

  // --- FRUITS (11 Items) ---
  { id: 54, name: "Classic Organic Fruit Medley", category: "Fruits", price: 159, image: getAssetUrl("fruitbowlscard-1.webp") },
  { id: 55, name: "Antioxidant Rich Berry Bowl", category: "Fruits", price: 189, image: getAssetUrl("fruitbowlscard-2.jpg") },
  { id: 56, name: "Tropical Sunshine Fruit Mix", category: "Fruits", price: 169, image: getAssetUrl("fruitbowlscard-3.jpg") },
  { id: 57, name: "Zesty Citrus Fruit Crunch", category: "Fruits", price: 149, image: getAssetUrl("fruitbowlscard-4.webp") },
  { id: 58, name: "Hydrating Melon Magic Salad", category: "Fruits", price: 139, image: getAssetUrl("fruitbowlscard-5.jpg") },
  { id: 59, name: "Premium Exotic Fruit Platter", category: "Fruits", price: 229, image: getAssetUrl("fruitbowlscard-6.avif") },
  { id: 60, name: "Summer Special Mango Salad", category: "Fruits", price: 179, image: getAssetUrl("fruitbowlscard-7.jpg") },
  { id: 61, name: "Sweet Kiwi Grape Fiesta", category: "Fruits", price: 199, image: getAssetUrl("fruitbowlscard-8.jpg") },
  { id: 62, name: "Fiber Booster Apple Pear Mix", category: "Fruits", price: 129, image: getAssetUrl("fruitbowlscard-9.jpg") },
  { id: 63, name: "Superfood Chia Seed Fruit Bowl", category: "Fruits", price: 219, image: getAssetUrl("fruitbowlscard-10.jpg") },
  { id: 64, name: "Mint Infused Fresh Fruit Bowl", category: "Fruits", price: 155, image: getAssetUrl("fruitbowlscard-11.jpg") }
];

export const MENU_CATEGORIES = ["All", "Salads", "Bowls", "Drinks", "Soups", "Wraps", "Fruits"];