//import React from "react"
import { Link } from "react-router-dom";

function Property ( property ){

    return(
        <>
            <div className="property-card">
            <img src={property.image} alt={property.label}/>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <button><Link to="">{property.contact}</Link></button>

            </div>
        
        
        </>
    )

}

export default Property