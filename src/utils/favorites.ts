const FAVORITES_KEY = "favoriteRecipes";

export function getFavorites(): string[] {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}

export function toggleFavorite(id: string) {
  const favorites = getFavorites();

  if (favorites.includes(id)) {
    const updated = favorites.filter((fav) => fav !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } else {
    favorites.push(id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function isFavorite(id: string) {
  const favorites = getFavorites();
  return favorites.includes(id);
}