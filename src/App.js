import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/HomePage/Homepage";
import Products from "./Components/Products/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Homepage />
                <Products />
              </>
            }
          />
          <Route path="/checkout" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
