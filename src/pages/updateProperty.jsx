import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { usePropertyContext } from "../components/usePropertyContext";
import Navbar from "../components/Navbar/navbar";

function UpdateProperty() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { dispatch } = usePropertyContext();

  const [title, setTitle] = useState(state.property.title);
  const [description, setDescription] = useState(state.property.description);
  const [price, setPrice] = useState(state.property.price);
  const [image, setImage] = useState(state.property.image);
  const [contact, setContact] = useState(state.property.contact);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProperty = {
      ...state.property,
      title,
      description,
      price,
      image,
      contact,
    };

    const response = await fetch(`http://localhost:5000/api/properties/` + state.property._id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProperty),
    });

    if (response.ok) {
      const json = await response.json();
      dispatch({ type: "UPDATE_PROPERTY", payload: json });

      // Navigate back to the homepage or properties list
      navigate("/");
    }
  };

  return (
    <>
    <Navbar />
    <h2 style={{ color: '#242424', justifyContent: 'center', display: 'flex' }}>Update Property</h2>
     <form onSubmit={handleSubmit} className="form-container">
      
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Description</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

      <label>Price</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

      <label>Image_URl</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />


      <label>Contact</label>
      <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />

      <button type="submit" style={{ backgroundColor: 'grey' }}>Update Property</button>
    </form>
    
    
    
    
    
    
    </>
   
  );
}

export default UpdateProperty;
