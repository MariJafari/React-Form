// eslint-disable-next-line no-unused-vars
import React from "react";


import CategoryForm from './components/CategoryForm/CategoryForm';
import ProductForm from './components/ProductForm/ProductForm';

const App = () => {
 return (
 <div>
 

<p>****Category Form****</p>
{<CategoryForm />}
<br />
<p>****Product Form****</p>
{<ProductForm />}


 </div>
 );
};
export default App;