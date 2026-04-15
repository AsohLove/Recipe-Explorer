import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import { fetchMealById } from "../services/api";
import type { MealTypes } from "../types/MealTypes";
import Loader from "../components/Loader";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery<MealTypes>({
    queryKey: ["recipe", id],
    queryFn: () => fetchMealById(id!),
  });

  if (!data) return <Loader />;

  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}` as keyof MealTypes];
    const measure = data[`strMeasure${i}` as keyof MealTypes];

    if (ingredient?.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl px-4 mx-auto"
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-500 cursor-pointer"
      >
        ← Back
      </button>


      <div className="relative w-full h-[320px] rounded-2xl shadow-md">
        <img
          src={data?.strMealThumb}
          alt={data?.strMeal}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="absolute left-1/2 bottom-[-50px] md:bottom-[-60px] -translate-x-1/2 w-[90%] max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex gap-2 mb-3">
              <span className="text-xs px-2 py-1 rounded-full bg-green-100">
                Healthy
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-yellow-100">
                25 mins
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-200">
                Medium
              </span>
            </div>
            <h1 className="text-xl font-bold">{data?.strMeal}</h1>
            <p className="text-sm text-gray-500 mt-2">
              {data?.strInstructions?.slice(0, 120) + "..."}
            </p>
            <div className="mt-4 grid grid-cols-3 text-center">
              <div>
                <p className="font-bold text-lg">420</p>
                <p className="text-xs text-gray-500">Calories</p>
              </div>

              <div>
                <p className="font-bold text-lg">34g</p>
                <p className="text-xs text-gray-500">Protein</p>
              </div>

              <div>
                <p className="font-bold text-lg">12g</p>
                <p className="text-xs text-gray-500">Carbs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-semibold mb-4">Ingredients</h2>
          <div className="space-y-2">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Preparation Steps</h2>
          {data.strInstructions
            ?.split(".")
            .filter((step) => step.trim() !== "")
            .slice(0, 10)
            .map((step, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-200 text-xs font-bold">
                    {index + 1}
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
