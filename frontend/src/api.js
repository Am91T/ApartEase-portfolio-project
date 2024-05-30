import axios from "axios";

const API_URL = "http://localhost:5000";

export const registerUser = (user) => axios.post(`${API_URL}/users`, user);
export const loginUser = (user) => axios.post(`${API_URL}/login`, user);
export const fetchProperties = () => axios.get(`${API_URL}/properties`);
export const fetchProperty = (id) => axios.get(`${API_URL}/properties/${id}`);
export const addFavorite = (propertyId, token) =>
  axios.post(
    `${API_URL}/favorites`,
    { property_id: propertyId },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
export const deleteFavorite = (propertyId, token) =>
  axios.delete(`${API_URL}/favorites/${propertyId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
