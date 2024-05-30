import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProperty } from "../api";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProperty(id);
      setProperty(response.data);
    };
    fetchData();
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <h1>{property.address}</h1>
      <p>{property.description}</p>
      <p>{property.price}</p>
      <img src={property.image_url} alt={property.address} />
    </div>
  );
};

export default PropertyDetails;
