// eslint-disable-next-line no-unused-vars
import React from "react";
// import Validate from "./components/Validate/Validate";
 import Dropdown from "./components/Dropdown/Dropdown";
 import Checkbox from "./components/Checkbox/Checkbox";
// import Multiple from "./components/Multiple/Multiple";
// import Uncontrolled from "./components/Uncontrolled/Uncontrolled";
// import Controlled from "./components/Controlled/Controlled";
// import ReactHookForm from "./components/ReactHookForm/Example";
//eslint-disable-next-line no-unused-vars
import ControlledComponent from "./components/Controlled/Controlled";




const App = () => {
 return (
 <div>
   <p>Controlled Test</p>
   {<ControlledComponent />}
   <p>Dropdown Test</p>
   {<Dropdown />}
   <p>Checkbox Test</p>
   {<Checkbox /> }
 {/*{<Controlled/>}
 

{ <Multiple /> }
{ <Validate /> }
 {<Uncontrolled />}
 <ReactHookForm /> */}

 </div>
 );
};
export default App;