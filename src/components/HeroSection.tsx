import { UtensilsCrossed } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="mb-10">

      <p className="text-lg tracking-widest font-bold text-green-400">
        CURATED FLAVORS
      </p>

      <h1 className="text-5xl font-extrabold leading-tight mt-2">
        What are we <br />
        <span className="text-yellow-600 italic">crafting</span> today?
      </h1>

      <div className="mt-6 flex items-center bg-gray-100 rounded-full p-2 max-w-xl">

        <UtensilsCrossed
          className="absolute left-1 -translate-y-1/2 text-gray-500"
          size={40}
        />

        <input
          placeholder="Find ingredients, cuisines, or chefs..."
          className="bg-transparent flex-1 px-3 outline-none"
        />

        <button className="bg-yellow-600 text-white px-6 py-2 rounded-full cursor-pointer">
          Explore
        </button>

      </div>

    </section>
  )
}