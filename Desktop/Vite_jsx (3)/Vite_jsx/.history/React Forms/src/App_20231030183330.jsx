// eslint-disable-next-line no-unused-vars
import React from "react";

import Validate from "./components/Validate/Validate";
import Dropdown from "./components/Dropdown/Dropdown";
import Checkbox from "./components/Checkbox/Checkbox";
import Multiple from "./components/Multiple/Multiple";
import Uncontrolled from "./components/Uncontrolled/Uncontrolled";
import LoginForm from "./components/ReactHookForm/Example";
//import LoginForm from "./components/ReactHookForm/Example";
// import Controlled from "./components/Controlled/Controlled";
 //import ReactHookForm from "./components/ReactHookForm/Example";
//eslint-disable-next-line no-unused-vars
import ControlledComponent from "./components/Controlled/Controlled";
import RegisterComponent from "./components/RegisterForm/Register";





const App = () => {
 return (
 <div>
   <p>****Controlled Test****</p>
   {<ControlledComponent />}
  <br />
   <p>****Dropdown Test****</p>
   {<Dropdown />}
   <br />
   <p>****Checkbox Test****</p>
   {<Checkbox /> }
   <br />
   <p>****Multiple Test****</p>
   { <Multiple /> }
   <br />
   <p>****Validate Test****</p>
   { <Validate /> }
   <p>****Uncontrolled Test****</p>
   {<Uncontrolled />}
   <br />
   <p>****ReactHookForm Test****</p>
  {<LoginForm /> }
  {<RegisterComponent />}

 </div>
 );
};
export default App;