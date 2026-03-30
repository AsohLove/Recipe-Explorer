import { NavLink } from "react-router-dom";
import { CircleUserRound, Heart } from 'lucide-react'

export default function Navbar() {
  return (
    <div>
      <h2>Saffron & Sage</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="favorite">Favorites</NavLink>
      </nav>
      <div>
         <input type="text" placeholder="Search recipes..." />
         <Heart />
         <CircleUserRound />
      </div>


    </div>
  );
}
