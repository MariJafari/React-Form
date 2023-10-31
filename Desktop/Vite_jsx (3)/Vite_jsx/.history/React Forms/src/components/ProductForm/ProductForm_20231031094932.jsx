/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import "./productForm.css";

export default function RegisterComponent() 
{
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price:""
       
    });

    
        
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    
     const handleSubmit = (event) => {
     event.preventDefault();
     alert(`Name: ${formData.name}, Description: ${formData.description}, Category: ${formData.category}, Quantity: ${formData.quantity}, Price: ${formData.price} `);
    };
     

    const handleCancel = () => {
        event.preventDefault();
        setFormData({ name: "", description: "", category:"", quantity:"" , price:"" });
      };
  
    
    
        
    return (        
        <form onSubmit={handleSubmit} className="multiple">
            <label className="multiple__text" htmlFor="name"> 
            Name:
            </label>
                <input
                type="text"
                id="name"
                className="multiple__input"
                name="name"
                value={formData.name}
                 onChange={handleChange}
                 />

            <label className="multiple__text" htmlFor="description"> 
            Description:
            </label>
                <input
                type="text"
                id="description"
                className="multiple__input"
                name="description"
                value={formData.description}
                 onChange={handleChange}
                 />

            <label className="multiple__text" htmlFor="category"> 
            Category:
            </label>
                <input
                type="text"
                id="category"
                className="multiple__input"
                name="category"
                value={formData.category}
                 onChange={handleChange}
                 />

        <label className="multiple__text" htmlFor="quantity"> 
            Quantity:
            </label>
                <input
                type="text"
                id="quantity"
                className="multiple__input"
                name="quantity"
                value={formData.quantity}
                 onChange={handleChange}
                 />

        <label className="multiple__text" htmlFor="price"> 
            Price:
            </label>
                <input
                type="text"
                id="price"
                className="multiple__input"
                name="price"
                value={formData.price}
                 onChange={handleChange}
                 />
        
            <button className="multiple__button" type="submit">
             Submit
            </button>
            <button className="multiple__button" type="cancel" onClick={handleCancel}>
             Cancel
            </button>
          
         </form>
        );
}
