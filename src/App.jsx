import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
    return (
        <div className="main-container">
            <Navbar />
            <Home />
        </div>
    );
}

export default App;
