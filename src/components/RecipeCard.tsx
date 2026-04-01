import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
import type { MealTypes } from "../types/MealTypes"
import { useState } from "react"
import { isFavorite, toggleFavorite } from "../utils/favorites"

type Props = {
  meal: MealTypes;
}

export default function RecipeCard({ meal }: Props) {
  const [favorite, setFavorite ] = useState(isFavorite(meal.idMeal));

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(meal.idMeal);
    setFavorite(!favorite);
  }

  return (

    <Link to={`/recipe/${meal.idMeal}`}>

      <motion.div
        whileHover={{ y: -6 }}
        // whileTap={{ scale: 0.96 }}
        // initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.35 }}
        className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
      >

        <div className="relative">

          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-56 object-cover"
          />

          <button onClick={handleFavorite}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer">
            <Heart 
              size={18} 
              className={favorite ? "fill-red-500 text-red-500" : ""}
            />
          </button>

        </div>

        <div className="p-4">

          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
            {meal.strCategory || "Unknown"}
          </span>

          <h3 className="font-semibold mt-2">
            {meal.strMeal}
          </h3>

          {meal.strArea && (<p className="text-lg text-gray-400 mt-2 flex justify-end italic">
            {meal.strArea}
          </p>)}

        </div>

      </motion.div>

    </Link>

  )
}