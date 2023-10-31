// eslint-disable-next-line no-unused-vars
import React from "react";


import CategoryForm from './components/CategoryForm/CategoryForm';
import ProductForm from './components/ProductForm/ProductForm';





const App = () => {
 return (
 <div>
 
 {/*  <p>****Controlled Test****</p>
   {<Controlled />}
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
  {<ReactHookForm /> }
  <br />
 
 {<RegisterForm />} */}
<p>****Category Form****</p>
{<CategoryForm />}
<br />
<p>****Product Form****</p>
{<ProductForm />}


 </div>
 );
};
export default App;