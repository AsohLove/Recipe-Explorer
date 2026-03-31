import { useQuery } from "@tanstack/react-query"
import { fetchMeal } from "./services/api"


function App() {
  const {data } = useQuery({
    queryKey: ["meal"],
    queryFn: () => fetchMeal("Arrabiata"),
  });

  console.log(data)

  return (
    <div> 
      {data?.map((meal) => (
        <p key={meal.idMeal}>{meal.strMeal}</p>
      ))}
    </div>
    
  )
}

export default App
