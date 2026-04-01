import type { MealTypes } from "../types/MealTypes"


const BASE_URL = "https://www.themealdb.com/api/json/v1/1"


export async function fetchMeal(meal: string): Promise<MealTypes[]> {
   const res = await fetch(`${BASE_URL}/search.php?s=${meal}`)


  if (!res.ok) {
    throw new Error("Failed to fetch meals")
  }

  const data = await res.json()
  return data.meals ?? []
}



export async function fetchMealsByLetter(letter: string): Promise<MealTypes[]> {
  const res = await fetch(`${BASE_URL}/search.php?f=${letter}`)

  if (!res.ok) throw new Error("Failed to fetch meals")

  const data = await res.json()

  return data.meals ?? []
}


export async function fetchMealById(id: string): Promise<MealTypes> {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)

  if (!res.ok) throw new Error("Failed to fetch recipe")

  const data = await res.json()

  return data.meals[0]
}

export async function fetchMealsByCategory(category: string): Promise<MealTypes[]> {
  
  if (category == "All") {
    return fetchMeal('');
  }
  
  const res = await fetch(
    `${BASE_URL}/filter.php?c=${category}`
  )

  if (!res.ok) throw new Error("Failed to fetch category")

  const data = await res.json()

  const meals = data.meals ?? [];

  const fullMeals = await Promise.all(
    meals.map((meal: { idMeal: string }) => fetchMealById(meal.idMeal))
  );

  return fullMeals;
}

export async function fetchMealsByIngredient(ingredient: string) {
  const res = await fetch(`${BASE_URL}/filter.php?i=${ingredient}`);

  if (!res.ok) throw new Error("Failed to fetch meals");

  const data = await res.json();

  return data.meals ?? [];
}

export async function fetchMealsByArea(area: string) {
  const res = await fetch(`${BASE_URL}/filter.php?a=${area}`);

  if (!res.ok) throw new Error("Failed to fetch meals");

  const data = await res.json();

  return data.meals ?? [];
}