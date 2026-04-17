import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./pages/about/About";
import AdminDashboard from "./pages/admindashboard/AdminDashboard";
import UserLogin from "./pages/userlogin/UserLogin";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
        <Routes>

          {/* Rotas COM Navbar/Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>

          {/* Rotas SEM Navbar/Footer */}
          <Route path="/login" element={<UserLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App