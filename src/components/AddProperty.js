import "../styles/add-property.css";
import React, { useState } from "react";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    // eslint-disable-next-line
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Property Name:
          <input
            id="title"
            name="title"
            value={fields.title}
            placeholder="Ruby Rose House"
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="city">
          Property City:
          <select
            id="city"
            name="city"
            value={fields.city}
            placeholder="Manchester"
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="type">
          Property Type:
          <select
            id="type"
            name="type"
            value={fields.type}
            placeholder="Detached"
            onChange={handleFieldChange}
          >
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          Number of Bedrooms:
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            value={fields.bedrooms}
            placeholder="2"
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="bathrooms">
          Number of Bathrooms:
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            value={fields.bathrooms}
            placeholder="1"
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="price">
          Price $:
          <input
            id="price"
            name="price"
            type="number"
            value={fields.price}
            placeholder="100000"
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            placeholder="your-email@email.com"
            onChange={handleFieldChange}
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
