import { useState, useEffect } from "react";
import PropertyList from "./propertyList";
import Navbar from "../components/Navbar/navbar";
import axios from "axios";

function Homepage(){

    const [properties, setProperties] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/properties")
			.then((response) => setProperties(response.data))
			.catch((error) => console.error(error));
	}, []); // Empty dependency array to fetch properties once on mount


	const handleAddProperty = (newProperty) => {
		setProperties((prevProperties) => [...prevProperties, newProperty]);
	};

	const handleContactOwner = (contact) => {
		alert(`Contacting the owner of property is ${contact}`);
	};

	const handleDeleteProperty = (propertyId) => {
		axios
			.delete(`http://localhost:5000/api/properties/${propertyId}`)
      
			.then(() => {
				// Filter out the deleted property from the state
				setProperties((prevProperties) =>
					prevProperties.filter(
						(property) => property._id !== propertyId
					)
				);
			})
			.catch((error) => console.error(error));
	};
return(
    <div style={{}}>
			<Navbar />
			<h2 style={{ marginTop: "10px" }}><u>Regional Lands Agency</u></h2>
			<div className="property-list">
			
				<PropertyList
					onAddProperty={handleAddProperty}
					onDeleteProperty={handleDeleteProperty}
					properties={properties}
					onContactOwner={handleContactOwner}
				/>
			</div>
		</div>
)
}

export default Homepage
