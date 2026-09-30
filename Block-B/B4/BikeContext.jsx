import { createContext, useContext, useMemo, useState } from "react";

const BikeContext = createContext(undefined);

export function BikeProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id)
        : [...prevFavorites, id],
    );
  };

  const value = useMemo(
    () => ({
      favorites,
      toggleFavorite,
    }),
    [favorites],
  );

  return <BikeContext.Provider value={value}>{children}</BikeContext.Provider>;
}

export function useBikeContext() {
  const context = useContext(BikeContext);

  if (!context) {
    throw new Error("useBikeContext must be used inside BikeProvider");
  }

  return context;
}

export default BikeContext;
