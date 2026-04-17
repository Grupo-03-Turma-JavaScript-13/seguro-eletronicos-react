import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Páginas públicas
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Páginas de autenticação
import UserLogin from "./pages/UserLogin";

// Páginas protegidas
import Dashboard from "./domains/apolice/pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ClientRegistration from "./pages/ClientRegistration";
import Signup from "./pages/Signup";
import Team from "./pages/Team";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              {/* Rotas públicas */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              
              {/* Autenticação */}
              <Route path="/user-login" element={<UserLogin />} />
              
              {/* Dashboard e páginas protegidas */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/cadastro-cliente" element={<ClientRegistration />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/team" element={<Team />} />
              
              {/* 404 */}
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
