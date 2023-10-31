import { useState } from "react";
export default function Validate() {
 const [inputValue, setInputValue] = useState("");
 const [inputError, setInputError] = useState(null);
 function handleInputChange(event) {
 const value = event.target.value;
 setInputValue(value);
 if (value.length < 5) {
 setInputError("Input must be at least 5 characters");
 } else {
 setInputError(null);
 }
 }

 return (
 <form onSubmit={handleSubmit}>
<label>
 <p>Fruit:</p>
 <input type="text" value={inputValue} onChange={handleInputChange} />
 </label>
 {inputError && <div style={{ color: "red" }}>{inputError}</div>}
 <button type="submit">Submit</button>
 </form>
 );
}