export async function fetchMeal(meal: string) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)

    if (!res.ok) {
        throw new Error('Failed to fetch meal')
    }

    return res.json();
    
}