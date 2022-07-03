import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import CreateBand from "./pages/Dashboard/CreateBand";
import Profile from "./pages/Dashboard/Profile";
import SeeBands from "./pages/Dashboard/SeeBands";
import SharedLayout from "./pages/Dashboard/SharedLayout";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllMusicians from "./pages/AllMusicians";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./pages/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard/see-bands" element={<SeeBands />} />
          <Route index="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/create-band" element={<CreateBand />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/all-musicians" element={<AllMusicians />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={1000} />
    </BrowserRouter>
  );
}

export default App;
