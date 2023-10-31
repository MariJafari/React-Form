import React, { useState } from "react";
import "./controlled.css";


    
        return (
            <form>
                <label>
                Input Value:
                <input type="text" value={inputValue} onChange={handleChange} />
                </label>
              <p className="controlled__text">Input Value: {inputValue}</p>
             </form>
                );