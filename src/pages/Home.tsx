import Chef from "../assets/Chef.png";

import CategoryFilter from "../components/CategoryFilters";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import TrendingRecipes from "../components/TrendingRecipes";
import { useQuery } from "@tanstack/react-query";
import { fetchMealsByCategory } from "../services/api";
import Loader from "../components/Loader";
// import { useDebounce } from "use-debounce";
import { useOutletContext } from "react-router-dom";
import { generalSearch } from "../utils/generalSearch";

type ContextType = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Home() {
  const { search : navbarSearch } = useOutletContext<ContextType>();

  const [heroSearch, setHeroSearch] = useState<string>('');

  const [category, setCategory] = useState("All");

//   const [debounceSearch] = useDebounce(search, 500);

  const { data, isLoading } = useQuery({
    queryKey: ["recipe", heroSearch || navbarSearch, category],
    queryFn: () => {
      if (heroSearch) return generalSearch(heroSearch);
      if (navbarSearch)  return generalSearch(navbarSearch);

      return fetchMealsByCategory(category);
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <HeroSection
        setSearch={setHeroSearch}
      />
      <CategoryFilter active={category} setCategory={setCategory} />
      {/* <App /> */}

      <TrendingRecipes meals={data || []} />

      <div className="mt-4 flex items-center justify-center rounded-[1.75rem] border border-stone-800/10 bg-white/50 p-6 shadow-sm">
        <div>
          <h3>
            Join our culinary inner <br />
            circle.
          </h3>
          <p>
            Get exclusive recipes, seasonal guides, and chef interviews <br />
            delivered weekly.
          </p>
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
