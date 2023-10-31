// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import "./multiple.css";

export default function RegisterComponent() 
{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    
     const handleSubmit = (event) => {
     event.preventDefault();
     alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
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

            <label className="multiple__text" htmlFor="email">
            Age:
            </label>
                <input
                type="email"
                id="email"
                className="multiple__input"
                name="email"
                value={formData.Age}
                onChange={handleChange}
                />
            <label className="multiple__text" htmlFor="email">
            Email:
            </label>
                <input
                type="email"
                id="email"
                className="multiple__input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
        
            <button className="multiple__button" type="submit">
             Submit
            </button>
         </form>
        );
}
