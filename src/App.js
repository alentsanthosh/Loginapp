import Login from "./Login.js" 
import Signup from "./Signup.js"
import Home from "./Home.js"
import Otplogin from "./Otplogin.js";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/otplogin" element={<Otplogin/>}/>
    </Routes>
    </Router>
    </div>
  );
}
export default App;
