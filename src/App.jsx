import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home/Home.jsx";

function App() {
    return (
        <div className="main-container">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
