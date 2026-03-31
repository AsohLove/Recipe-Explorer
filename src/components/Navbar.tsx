import { NavLink } from "react-router-dom";
import { CircleUserRound, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <h2 className="text-xl font-bold">Saffron & Sage</h2>

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

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search recipes..."
          className="border rounded px-2 py-1"
        />
        <Heart className="w-6 h-6 text-black cursor-pointer" />
        <CircleUserRound className="w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
}