import { useEffect } from "react";
import Property from "../components/PropertyCard";
//import axios from "axios";
import "../App.css";
import {usePropertyContext} from "../components/usePropertyContext"


const PropertyList = () => {

	const{properties, dispatch} = usePropertyContext()


	useEffect(() => {
		const fetchProperties = async() => {
			const response = await fetch("http://localhost:5000/api/properties")
			const json = await response.json()

			if (response.ok){
				dispatch({type:"SET_PROPERTIES", payload: json})
			}
		}
		
		
		
		fetchProperties()
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // Empty dependency array to fetch properties once on mount




	
	return (
		<>  
	

		<ul className="item-card">
				{properties && properties.map((property) => (
					<Property key={property._id} property={property} />
				))}
			</ul>
		
		
		</>
			
			
		
	);
};

export default PropertyList;