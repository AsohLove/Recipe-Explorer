import { Link, NavLink } from "react-router-dom";
import { ChefHat, CircleUserRound, Heart, Search } from "lucide-react";
import { useState } from "react";

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

export default function Navbar({ setSearch }: Props) {
  const [input, setInput] = useState<string>("");

  const handleSearch = () => {
    setSearch(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="bg-white  px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
          <ChefHat size={32} className="text-gray-800" />
          <span>Saffron & Sage</span>
        </h2>

        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1"
                : "text-gray-600 hover:text-gray-900 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold border-b-2 border-orange-500 pb-1"
                : "text-gray-600 hover:text-gray-900 transition"
            }
          >
            Favorites
          </NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-80">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            value={input}
            placeholder="Search recipes..."
            className="bg-gray-100 outline-none w-full text-gray-700 placeholder-gray-400"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="flex items-center gap-6">
          <Link to="/favorites">
            <Heart
              size={24}
              className="fill-black  text-gray-700 cursor-pointer hover:text-orange-500 transition"
            />
          </Link>
          <CircleUserRound
            size={24}
            className=" text-gray-700 cursor-pointer hover:text-orange-500 transition"
          />
        </div>
      </div>
    </header>
  );
}
