const FAVORITES_KEY = "favoriteRecipes";

export function getFavorites(): string[] {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}

export function toggleFavorite(id: string) {
  const favorites = getFavorites();

  const updated = favorites.includes(id)
    ? favorites.filter((fav) => fav !== id)
    : [...favorites, id];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}

export function isFavorite(id: string) {
  const favorites = getFavorites();
  return favorites.includes(id);
}