/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import axios from 'axios';
import '../App.css';

const AddProperty = ({ onAddProperty }) => {
  const navigate = useNavigate();
  const [newProperty, setNewProperty] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    contact: '',
  });

  const handleAddProperty = () => {
    // Submit a new property
    axios
      .post('http://localhost:5000/api/properties/add-property', newProperty)
      .then((response) => {
        // Notify the parent component about the new property
        onAddProperty(response.data);

        // Clear the newProperty state for the next entry
        setNewProperty({
          title: '',
          description: '',
          price: '',
          image: '',
          contact: '',
        });

        // Navigate to the homepage
        navigate('/');
      })
      .catch((error) => console.error('Error adding property:', error));
  };

  return (
    <div>
      <Navbar />
      <h2 style={{ color: '#242424', justifyContent: 'center', display: 'flex' }}>
        Add a new property
      </h2>

      <div className="form-container">
        <form
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddProperty();
          }}
        >
          <div className="form-row">
            <label>
              Title:
              <input
                type="text"
                value={newProperty.title}
                onChange={(e) =>
                  setNewProperty({
                    ...newProperty,
                    title: e.target.value,
                  })
                }
                required
              />
            </label>

            <label>
              Description:
              <input
                type="text"
                value={newProperty.description}
                onChange={(e) =>
                  setNewProperty({
                    ...newProperty,
                    description: e.target.value,
                  })
                }
                required
              />
            </label>

            <label>
              Price:
              <input
                type="number"
                value={newProperty.price}
                onChange={(e) =>
                  setNewProperty({
                    ...newProperty,
                    price: e.target.value,
                  })
                }
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Image URL:
              <input
                type="text"
                value={newProperty.image}
                onChange={(e) =>
                  setNewProperty({
                    ...newProperty,
                    image: e.target.value,
                  })
                }
                required
              />
            </label>

            <label>
              Contact:
              <input
                type="text"
                value={newProperty.contact}
                onChange={(e) =>
                  setNewProperty({
                    ...newProperty,
                    contact: e.target.value,
                  })
                }
                required
              />
            </label>
          </div>
          <button type="submit" style={{ backgroundColor: 'grey' }}>
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
