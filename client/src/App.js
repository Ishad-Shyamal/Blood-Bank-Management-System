import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Requests from "./pages/Requests";
import Donors from "./pages/Donors";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Footer from "./components/Footer"

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div className = "mt-[64px]">
      <Routes>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/donors" element = {<Donors />} />
        <Route path = "/inventory" element = {<Inventory />} />
        <Route path = "/requests" element = {<Requests />} />
        <Route path = "/reports" element = {<Reports />} />
      </Routes>
      </div>
      <Footer/>
    </div>
    // {/* </BrowserRouter> */}
  );
}

export default App;
