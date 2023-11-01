import React, {useState} from "react"
import { Link } from "react-router-dom"
import "./Store.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const RequestForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    shirtSize: 'Pick a Size', // Default value
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { item } = useParams();

  const data = {
      item: item,
      email: formData.email,
      first_name: formData.firstName,
      last_name: formData.lastName,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipcode: formData.zipCode,
      item_size: formData.shirtSize,
  };

  const [formErrors, setFormErrors] = useState({
    email: false,
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    state: false,
    zipCode: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset the corresponding error message when the input changes
    setFormErrors({ ...formErrors, [name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormErrors = {};
    for (const key in formData) {
        if (formData[key] === "" || formData[key] === 'Pick a Size') {
        newFormErrors[key] = true;
        }
    }
    setFormErrors(newFormErrors);

    // If there are no errors, submit the form
    if (Object.keys(newFormErrors).length === 0) {
        axios
        .post("https://lowfye50-backend-8cc0d6de62cd.herokuapp.com/submit-form", data)
        .then((response) => {
            console.log(response.data);

            setFormData({
                email: '',
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                shirtSize: 'Pick a Size',
              });
        
            setIsLoading(false);
            setIsSubmitted(true);
        })
        .catch((error) => {
            console.error(error);
        });
    }
};

  return (
    <>
    <div className="request-form-container">
    <div className="request-form">
      <h2>Request Form: {item}</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Shirt Size:</label>
          <select
            name="shirtSize"
            value={formData.shirtSize}
            onChange={handleChange}
            required
          >
            <option value="">Pick a Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
        </button>

        {isSubmitted && <div className="success-message">
            <strong>Form submitted successfully!</strong>
        </div>}

      </form>
    </div>
    </div>
    </>
  );
}
