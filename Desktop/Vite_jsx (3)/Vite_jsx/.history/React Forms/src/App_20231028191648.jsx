import Validate from "./components/Validate/Validate";
import Dropdown from "./components/Dropdown/Dropdown.jsx";
import Checkbox from "./components/Checkbox/Checkbox.jsx";
import Multiple from "./components/Multiple/Multiple.jsx";
import Uncontrolled from "./components/Uncontrolled/Uncontrolled";
import Controlled from "./components/Controlled/Controlled";
import ReactHookForm from "./components/ReactHookForm/Example";

import Validate


const App = () => {
 return (
 <div>
{<Controlled />}
 {<Dropdown />}
{ <Checkbox /> }
{ <Multiple /> }
{ <Validate /> }
 {<Uncontrolled />}
<ReactHookForm />
 </div>
 );
};
export default App;