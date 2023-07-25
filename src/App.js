import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/HomePage/Homepage";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/homepage"
            element={
              <>
                <Navbar />
                <Homepage />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <Cart />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
