import RecipeCard from "./RecipeCard";
import type { MealTypes } from "../types/MealTypes"

type Props = {
  meals?: MealTypes[];
}

export default function TrendingRecipes({ meals }: Props){
    return (
        <section className="mt-10">
            <h2 className="font-bold mb-6 text-2xl">Trending Recipes</h2>
            <p className="text-gray-600 mb-6">
                Discover the most popular recipes loved by our community.
            </p>
            <p className="text-gray-600 font-semibold">Found {meals?.length} recipes for {meals?.[0]?.strCategory || "Unknown"}</p>
            <div
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            >
                {meals?.map((meal) => (
                    <RecipeCard key={meal.idMeal} meal={meal}/>
                ))}
            </div>
        </section>
    )
}