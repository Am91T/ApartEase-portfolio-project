import React, { useEffect, useState } from "react";
import { fetchFavorites } from "../api";

const Favorites = ({ token }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchFavorites(token);
      setFavorites(response.data);
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.favorite_id}>{favorite.property.address}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
