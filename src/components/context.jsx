/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const PropertyContext = createContext()
export const propertyReducer = (state, action) => {
    switch(action.type){
        case "SET_PROPERTIES":
            return{
                properties: action.payload
            }

        case "CREATE_PROPERTY":
            return{
                properties:[action.payload, ...state.properties]
            }

        case "DELETE_PROPERTY":
            return{
                properties: state.properties.filter((p) => p._id !== action.payload._id)
            }

        case "UPDATE_PROPERTY":
            return {
                properties: state.properties.map((p) =>
                  p._id === action.payload._id ? action.payload : p // Replace the matching property
                ),
              };
        default:
            return state
        
    }
}
export const PropertyContextProvider = ({ children }) => {
    const[state, dispatch] = useReducer(propertyReducer, {
        properties: null
    }) 

   // dispatch({type:"SET_PROPERTY", payload:[{},{}]})

    return(
       <PropertyContext.Provider value={{...state, dispatch}}>
        {children}
       </PropertyContext.Provider> 
    )
}