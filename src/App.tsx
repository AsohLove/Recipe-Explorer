import { useQuery } from "@tanstack/react-query"
import { fetchMeal } from "./services/api"
import type { MealTypes } from "./types/MealTypes"
import { useEffect } from "react"

function App() {
  const { data, isLoading, isError } = useQuery<MealTypes[]>({
    queryKey: ["meal"],
    queryFn: () => fetchMeal("chicken"),
  })

  useEffect(() => {
    if (data) {
      console.log("REACT QUERY DATA:", data)
    }
  }, [data])

  if (isLoading) return <p>Loading meals...</p>

  if (isError) return <p>Error fetching meals</p>

  return (
    <div className="p-6 grid grid-cols-3">
      {data?.map((meal) => (
        <div key={meal.idMeal} >
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strMeal}</p>
          <p>{meal.strArea}</p>
          <p>{meal.strCategory}</p>

        </div>
      ))}
    </div>
  )
}

export default App