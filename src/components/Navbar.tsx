import { NavLink } from "react-router-dom";
import { ChefHat, CircleUserRound, Heart, Search } from "lucide-react";

type Props = {
  searchQuery: string;
  setSearchQuery: (query: string) => void
}

export default function Navbar({ searchQuery, setSearchQuery}: Props) {

  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      
      <h2 className="text-xl font-bold"><ChefHat size={28} /> Saffron & Sage</h2>

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
          value={searchQuery}
          placeholder="Search recipes..."
          className="outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
          
        />
        <Heart className="w-6 h-6 text-black cursor-pointer" />
        <CircleUserRound className="w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
}
