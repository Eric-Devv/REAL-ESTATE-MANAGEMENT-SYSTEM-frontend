import {  useEffect, useState } from "react";
import PropertyList from "./propertyList";
import Navbar from "../components/Navbar/navbar";
import axios from "axios";
//import { usePropertyContext } from "../components/usePropertyContext"
import {usePropertyContext} from "../components/usePropertyContext"

function Homepage(){
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



	


return(
    <div style={{}}>
			<Navbar />
			<h2 style={{ marginTop: "10px" }}><u>Regional Lands Agency</u></h2>
			<div className="property-list">
			
			<PropertyList
			
			properties={properties}
			/>
					
				
			</div>
		</div>
)
}

export default Homepage
