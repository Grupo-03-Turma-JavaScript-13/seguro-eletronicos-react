/* =============================================================
   RiverGuard Navbar — Shield Protocol Design
   Sticky navbar with blur, logo + nav links + CTA button
   ============================================================= */

import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Produto", href: "/#produto" },
    { label: "Cobertura", href: "/#cobertura" },
    { label: "Como Funciona", href: "/#como-funciona" },
    { label: "Sobre", href: "/about" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Shield
                className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors"
                fill="currentColor"
                fillOpacity={0.2}
                strokeWidth={1.5}
              />
              <Shield
                className="w-8 h-8 text-blue-500 absolute inset-0 opacity-60"
                fill="currentColor"
                fillOpacity={0.5}
                strokeWidth={0}
              />
            </div>
            <span className="font-outfit text-xl font-bold tracking-tight">
              <span className="text-white">River</span>
              <span className="text-blue-400">Guard</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/user-login"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Admin
            </a>

          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-400 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-2 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href="/user-login"
                className="block w-full text-center px-5 py-2.5 border border-white/15 hover:border-white/30 text-white text-sm font-semibold rounded-lg transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Admin
              </a>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}
