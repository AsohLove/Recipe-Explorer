// import { motion } from "framer-motion";
import Chef from "../assets/Chef.png"
// import { useQuery } from "@tanstack/react-query";
// import type { MealTypes } from "../types/MealTypes";
// import { fetchMeal } from "../services/api";
// import App from "../App";
import CategoryFilter from "../components/CategoryFilters";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import TrendingRecipes from "../components/TrendingRecipes";
import { useQuery } from "@tanstack/react-query";
import { fetchMealsByCategory } from "../services/api";
import Loader from "../components/Loader";




export default function Home() {
 const [category, setCategory] = useState('All')
 const {data, isLoading} = useQuery({
  queryKey: ["recipe"],
  queryFn: () => fetchMealsByCategory('Seafood'),
 });

 if (isLoading) return <Loader />

  return (
    <div>
        
      <HeroSection />
      <CategoryFilter active={category} setCategory={setCategory}/>
      {/* <App /> */}

      <TrendingRecipes meals={data || []}/>

        <div className="mt-4 flex items-center justify-center rounded-[1.75rem] border border-stone-800/10 bg-white/50 p-6 shadow-sm">
            <div>
                <h3>Join our culinary inner <br />
                circle.</h3>
                <p>Get exclusive recipes, seasonal guides, and chef interviews <br />
                delivered weekly.</p>
                <div>
                    <input type="email" placeholder="email@address.com" />
                    <button>Sign Me Up</button>
                </div>
            </div>
            <div>
                <img src={Chef} alt="chef" />
            </div>
        </div>
      
    </div>
  );
}
