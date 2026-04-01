import RecipeCard from "./RecipeCard";
import type { MealTypes } from "../types/MealTypes"

type Props = {
  meals?: MealTypes[];
}


export default function TrendingRecipes({ meals }: Props){
    return (
        <section className="mt-10">
            <h2 className="font-semibold mb-6">Trending Recipes</h2>

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