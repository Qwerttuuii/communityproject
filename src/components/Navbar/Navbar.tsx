import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navbarData";
import comlogo from "../../assets/comlogo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f4]/95 shadow-md backdrop-blur-md"
          : "bg-[#faf8f4]"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <img
            src={comlogo}
            alt="Umuchukwu Community Logo"
            className="h-16 w-16 object-contain"
          />

          <div>
            <h2 className="text-xl font-semibold text-[#184F34]">
              Umuchukwu
            </h2>

            <p className="text-xs uppercase tracking-[4px] text-gray-500">
              Community • Obowo LGA
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.title}
                to={item.href}
                className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#184F34]"
                    : "text-gray-700 hover:text-[#184F34]"
                }`}
              >
                {item.title}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#184F34] transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    isActive ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Donate */}

        <Link
          to="/support#donation"
          className="hidden rounded-full bg-[#E8B12D] px-8 py-3 text-center font-medium transition hover:scale-105 lg:block"
        >
          Donate
        </Link>

        {/* Mobile toggle */}

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile menu */}

      {mobileOpen && (
        <div className="flex flex-col gap-1 border-t border-gray-200 bg-[#faf8f4] px-6 pb-6 pt-4 lg:hidden">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.title}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`relative w-fit py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-[#184F34]" : "text-gray-700"
                }`}
              >
                {item.title}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#184F34] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            to="/support#donation"
            onClick={() => setMobileOpen(false)}
            className="mt-3 w-fit rounded-full bg-[#E8B12D] px-8 py-3 font-medium transition hover:scale-105"
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;