import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recepies from "./pages/recepies";
import Settings from "./pages/Settings";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
function App() {
return (
  <Router>
    <Navbar/>
    <div className="container main">
      <Routes>
        <Route path="/" element={<Home/>}/>
      <  Route path="/recipes" element={<Recepies/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </div>
  </Router>
)
}

export default App
