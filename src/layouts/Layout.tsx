// Layout.tsx
import Navbar from "../componentes/navbar/Navbar";
import Footer from "../componentes/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}