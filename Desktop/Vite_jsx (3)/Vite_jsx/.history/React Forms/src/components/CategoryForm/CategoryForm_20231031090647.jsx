/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import "./CategoryForm.css";

export default function RegisterComponent() 
{
    const [formData, setFormData] = useState({
        name: "",
        description: "",
       
    });

    
        
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    
     const handleSubmit = (event) => {
     event.preventDefault();
     alert(`Name: ${formData.name}, Description: ${formData.description}` );
    };
     

    const handleCancel = () => {
        event.preventDefault();
        setFormData({ name: "", description: "" });
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

        
            <button className="multiple__button" type="submit">
             Submit
            </button>
            <button className="multiple__button" type="cancel" onClick={handleCancel}>
             Cancel
            </button>
          
         </form>
        );
}
