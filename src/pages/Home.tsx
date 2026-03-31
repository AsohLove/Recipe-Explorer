import { UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Chef from "../assets/Chef.png"


const categories = [
  "Seafood",
  "Desert",
  "Vegetarian",
  "Beef",
  "Chicken",
  "Pasta",
];

export default function Home() {
  const [selectedCategory, setSelectedCategoty] = useState("ALL");

  return (
    <div>
      <h1 className="font-bold text-green-600 text-lg">CURATED FLAVORS</h1>
      <h2 className="font-extrabold text-4xl ">
        What are we <br />
        <span className="font-extrabold text-amber-500 text-4xl">
          crafting
        </span>{" "}
        today?
      </h2>
      <div className="relative w-full max-w-md">
        <UtensilsCrossed
          className="absolute left-1 -translate-y-1/2 text-gray-500"
          size={40}
        />

        <input
          type="text"
          placeholder="Find ingredients, cuisines, or chiefs..."
          className="w-full mt-4 rounded-lg py-2 pl-10 pr-24 focus:outline-none focus:ring-orange-300 focus:ring-2 focus:bg-white"
        />

        <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-orange-400 text-white px-3 py-1 rounded-md hover:bg-orange-600 cursor-pointer">
          Explore
        </button>
      </div>

      <div>
        <h2>Categories</h2>
        <button>View All</button>
      </div>

      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="bg-orange-400 text-white px-4 py-2 rounded-md"
        >
          Hover Me
        </motion.button>
      </div>

        <div>
            <div>
                <h3>Join our culinary inner <br />
                circle.</h3>
                <p>Get exclusive recipes, seasonal guides, and chef interviews <br />
                delivered weekly.</p>
                <div>
                    <input type="email" placeholder="email@address.com" />
                    <button>Sign Me Up</button>
                </div>
            </div>
            <div>
                <img src={Chef} alt="chef" />
            </div>
        </div>
      
    </div>
  );
}
