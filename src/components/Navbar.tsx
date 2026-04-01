import { NavLink } from "react-router-dom";
import { ChefHat, CircleUserRound, Heart, Search } from "lucide-react";
import { useState } from "react";

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

export default function Navbar({ setSearch }: Props) {

const [input , setInput] = useState<string>("");

  const handleSearch = () => {
    setSearch(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-xl font-bold">
        <ChefHat size={28} />
        Saffron & Sage
      </h2>

      <nav className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold underline" : "text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold underline" : "text-gray-700"
          }
        >
          Favorites
        </NavLink>
      </nav>

      <div className="flex items-center gap-2 border rounded px-2 py-1">
        <Search size={18} />
        <input
          type="text"
          value={input}
          placeholder="Search recipes..."
          className="outline-none"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          className="text-sm bg-orange-500 text-white px-3 py-1 rounded cursor-pointer"
        >
          Search
        </button>
        <Heart className="w-6 h-6 text-black cursor-pointer" />
        <CircleUserRound className="w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
}
