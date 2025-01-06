/* eslint-disable react/prop-types */
//import React from "react"
//import axios from "axios";
import { Link } from "react-router-dom";
import {usePropertyContext} from "../components/usePropertyContext"

function Property ( {property} ){

const {dispatch} = usePropertyContext()

    const handleUpdate = async() => {
       
        
    }

    const handleDelete = async() => {
      

        const response = await fetch("http://localhost:5000/api/properties/" + property._id,{
            method: "DELETE"
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type:"DELETE_PROPERTY", payload:json})
           
        }

    }



    return(
        <>
            <div className="property-card">
            <img src={property.image} alt={property.label}/>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>Ksh:{property.price}</p>
            <p>contact: {property.contact}</p>
            <button onClick={handleDelete}><Link to="">Delete</Link></button>
            <button onClick={handleUpdate}><Link to="/update-property">Update</Link></button>


            </div>
        
        
        </>
    )

}

export default Property