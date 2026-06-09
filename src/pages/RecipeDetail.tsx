
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import { fetchMealById } from "../services/api";
import type { MealTypes } from "../types/MealTypes";
import Loader from "../components/Loader";
import { Globe } from "lucide-react";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery<MealTypes>({
    queryKey: ["recipe", id],
    queryFn: () => fetchMealById(id as string),
    enabled: !!id,
  });

  if (isLoading) return <Loader />
  if (isError) return <p>Error: {(error as Error).message}</p>
  if (!data) return <p>No recipe found</p>;

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


      <div className="relative w-full h-[420px] md:h-[500px] rounded-2xl shadow-md">
        <img
          src={data?.strMealThumb}
          alt={data?.strMeal}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white/70 via-transparent to-transparent" />
        <div className="absolute left-1/2 bottom-[-50px] md:bottom-[-60px] -translate-x-1/2 w-[90%] max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="flex gap-2 mb-3">
              <span className="text-xs px-2 py-1 rounded-full bg-green-200 text-green-800">
                Healthy
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-yellow-300 text-yellow-900">
                25 mins
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-neutral-200 text-neutral-700">
                Medium
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">{data?.strMeal}</h1>
           <h2 className="flex gap-2 text-sm"><Globe />{data?.strArea}</h2>
            <p className="text-sm text-gray-500 mt-2">
              {data?.strInstructions?.slice(0, 120) + "..."}
            </p>
            <div className="mt-4 grid grid-cols-3 text-center">
              <div>
                <p className="font-bold text-lg">420</p>
                <p className="text-xs text-gray-500">Calories</p>
              </div>

              <div>
                <p className="font-bold text-lg">36g</p>
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
          <h2 className="text-2xl font-bold mb-6">Ingredients</h2>
          <div className="space-y-2">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white  rounded-xl px-4 py-3 shadow-sm"
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
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300 text-xs font-bold">
                    {index + 1}
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
                  
                </div>
              </div>
            ))}
            <div className="flex justify-between bg-amber-400 rounded-full p-4">
          <div>
            <h3 className="text-white font-bold">Ready to start?</h3>
            <p className="text-gray-600 text-sm">Switch to Cooking Mode for hands-free voice guidance.</p>
          </div>
          <button className=" bg-white rounded-full w-30 font-semibold text-center text-amber-600 text-sm cursor-pointer">Start cooking</button>
        </div>
        </div>
        
      </div>
    </motion.div>
  );
}
