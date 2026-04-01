type Props = {
  active: string;
  setCategory: (category: string) => void;
};

const categories = [
  "All",
  "Seafood",
  "Dessert",
  "Vegetarian",
  "Beef",
  "Chicken",
  "Pasta",
];

export default function CategoryFilter({ active, setCategory }: Props) {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="font-semibold">Categories</h2>

        <button className="text-sm text-gray-500 cursor-pointer" onClick={() => setCategory('All')}>View All</button>
      </div>

      <div className="flex gap-3 mt-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-md text-sm cursor-pointer
            ${active === cat ? "bg-green-400 text-black" : "bg-gray-100"}
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
