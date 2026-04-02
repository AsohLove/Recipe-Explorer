import { useParams, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { motion } from "framer-motion"

import { fetchMealById } from "../services/api"
import type { MealTypes } from "../types/MealTypes"
import Loader from "../components/Loader"

export default function RecipeDetail() {

  const { id } = useParams()
  const navigate = useNavigate()

  const { data } = useQuery<MealTypes>({
    queryKey: ["recipe", id],
    queryFn: () => fetchMealById(id!)
  })

  if (!data) return <Loader />
 

  const ingredients: string[] = []

  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}` as keyof MealTypes];
    const measure = data[`strMeasure${i}` as keyof MealTypes]

    if (ingredient) {
      ingredients.push(`${measure} ${ingredient}`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto"
    >

      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-500 cursor-pointer"
      >
        ← Back
      </button>

      <img
        src={data.strMealThumb}
        className="rounded-xl mb-6 h-100"
      />

      <h1 className="text-3xl font-bold mb-4">
        {data.strMeal}
      </h1>

      <h2 className="font-semibold mb-2">
        Ingredients
      </h2>

      <ul className="mb-6 list-disc list-inside">

        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}

      </ul>

      <h2 className="font-semibold mb-2">
        Instructions
      </h2>

      <p className="text-gray-700 leading-relaxed">
        {data.strInstructions}
      </p>

    </motion.div>
  )
}