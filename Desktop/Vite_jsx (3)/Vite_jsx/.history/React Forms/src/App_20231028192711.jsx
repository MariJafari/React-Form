import Validate from "./components/Validate/Validate";
import Dropdown from "./components/Dropdown/Dropdown";
import Checkbox from "./components/Checkbox/Checkbox;
import Multiple from "./components/Multiple/Multiple.jsx";
import Uncontrolled from "./components/Uncontrolled/Uncontrolled.jsx";
import Controlled from "./components/Controlled/Controlled.jsx";
import ReactHookForm from "./components/ReactHookForm/Example.jsx";




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