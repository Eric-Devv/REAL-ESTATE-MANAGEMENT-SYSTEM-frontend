import { useEffect, useState } from "react";
import PropertyList from "./propertyList";
import Navbar from "../components/Navbar/navbar";
import { usePropertyContext } from "../components/usePropertyContext";

function Homepage() {
  const { properties, dispatch } = usePropertyContext();
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/properties");
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const json = await response.json();
        dispatch({ type: "SET_PROPERTIES", payload: json });
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchProperties();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-icon"></div>
        <div className="loading-text">Loading properties...</div>      
      </div>
    ); // Show loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if fetch fails
  }

  return (
    <div>
      <Navbar />
      <h2 className="home-title"style={{}}>
        Regional Lands Agency
      </h2>
      <div className="property-list">
        {/* Check if properties exist before rendering */}
        {properties && properties.length > 0 ? (
          <PropertyList properties={properties} />
        ) : (
          <p>No properties available</p> // Show message if no properties are available
        )}
      </div>
    </div>
  );
}

export default Homepage;
