import { UtensilsCrossed } from "lucide-react";

export default function Home(){
    return (
        <div>
            <h1>CURATED FLAVORS</h1>
            <h2>What are we <br />
            <span>crafting</span>today?
            </h2>
            <div className="relative w-full max-w-md">
                <UtensilsCrossed />

                <input 
                type="text"
                placeholder="Find ingredients, cuisines, or chiefs..."
                />

                <button 
                className=""
                >
                    Explore
                </button>
            </div>
            
        </div>
    )
}