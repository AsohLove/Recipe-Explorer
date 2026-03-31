import { Link } from "react-router-dom";

type Props = {
    recipe: any;
}

export default function RecipeCard({ recipe }): Props {
    return (
        <Link to={`/recipe/${recipe.idMeal}`}>
            <div className="bg-white rounded-lg shadow hover:scale-106 transition">
                <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal}
                className="rounded-t-lg"
                />

                <div>
                    <h3 className="font-semibold">{recipe.strMeal}</h3>
                    <p className="text-sm text-gray-500">{recipe.strCategory}</p>
                </div>
            </div>
        </Link>
        
    )
}