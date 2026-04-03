import { fetchMeal, fetchMealsByArea, fetchMealsByIngredient } from "../services/api";

export async function generalSearch(query: string) {

  const byName = await fetchMeal(query);

  if (byName.length) return byName;

  const byIngredient = await fetchMealsByIngredient(query);

  if (byIngredient.length) return byIngredient;

  const byArea = await fetchMealsByArea(query);

  if (byArea.length) return byArea;

  return [];
}