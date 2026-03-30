import { UtensilsCrossed } from "lucide-react";

export default function Home(){
    return (
        <div>
            <h1 className="font-bold text-green-600 text-lg">CURATED FLAVORS</h1>
            <h2 className="font-extrabold text-4xl ">What are we <br />
            <span className="font-extrabold text-amber-500 text-4xl">crafting</span> today?
            </h2>
            <div className="relative w-full max-w-md">
                <UtensilsCrossed className="absolute left-1 -translate-y-1/2 text-gray-500" 
                size={40}/>

                <input 
                type="text"
                placeholder="Find ingredients, cuisines, or chiefs..."
                className="w-full mt-4 rounded-lg py-2 pl-10 pr-24 focus:outline-none focus:ring-orange-300 focus:ring-2 focus:bg-white"
                />

                <button 
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-orange-400 text-white px-3 py-1 rounded-md hover:bg-orange-600 cursor-pointer"
                >
                    Explore
                </button>
            </div>
            
        </div>
    )
}