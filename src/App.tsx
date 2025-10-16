import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
        </Route>
      </Routes>
    </Router>
    

  
    
  )
}

export default App
