import { useEffect, useState } from "react";
import { fetchMealById } from "../services/api";
import { getFavorites } from "../utils/favorites";
import RecipeCard from "../components/RecipeCard";
import type { MealTypes } from "../types/MealTypes";

export default function Favorites() {

  const [meals, setMeals] = useState<MealTypes[]>([]);

  useEffect(() => {

    const ids = getFavorites();

    async function loadFavorites() {
      const results = await Promise.all(
        ids.map((id) => fetchMealById(id))
      );

      setMeals(results);
    }

    loadFavorites();

  }, []);

  if (!meals.length) {
    return <p>No favorite recipes yet, <br />
     click on the Heart icon on a recipe card to add it as favorite</p>;
  }

  return (
    <section className="mt-10">

      <h4 className="text-amber-600 text-sm">CURATED COLLECTION</h4>
            <p className="font-extrabold text-4xl ">My Favorites</p>
            <div className="flex justify-end gap-3 mb-3">
                <p>{meals.length} Recipes Saved</p>
                <button className="font-bold cursor-pointer"
                onClick={() => {
                  const confirmed = window.confirm(
                  'Are you sure you want to clear all favorites? This action cannot be undone.'
                  );
                  if (confirmed){
                    setMeals([]);
                    localStorage.removeItem('favoriteRecipes');
                  }
                }}
                
                >Clear All
                </button>
            </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}

      </div>

    </section>
  );
}