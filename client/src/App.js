import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./pages/AllPlayers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/all-players" element={<AllPlayers />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={1000} />
    </BrowserRouter>
  );
}

export default App;
