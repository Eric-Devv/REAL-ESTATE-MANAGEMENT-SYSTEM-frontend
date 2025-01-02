import { useEffect, useState } from "react";
import Property from "../components/PropertyCard";
import axios from "axios";
import "../App.css";

const PropertyList = () => {

	const[property_list, setProperty_list] = useState([])


	useEffect(() => {
		axios
			.get("http://localhost:5000/api/properties")
			.then((response) => setProperty_list(response.data))
			.catch((error) => console.error(error));
	}, []); // Empty dependency array to fetch properties once on mount




	
	return (
		<>  
	

		<ul className="item-card">
				{property_list.map((property) => (
					<Property key={property._id} property={property} />
				))}
			</ul>
		
		
		</>
			
			
		
	);
};

export default PropertyList;