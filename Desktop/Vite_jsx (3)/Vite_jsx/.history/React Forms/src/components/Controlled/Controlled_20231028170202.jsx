import React, { useState } from "react";
import "./controlled.css";
export default function ControlledComponent() 
{
        const [inputValue, setInputValue] = useState("");
        const handleChange = (event) => {setInputValue(event.target.value); };
    