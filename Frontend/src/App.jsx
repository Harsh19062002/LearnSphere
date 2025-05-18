import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <Link to="/" className="text-2xl font-bold text-indigo-700">
          LearnSphere
        </Link>
        <nav>
          <button
            className="md:hidden text-indigo-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
          <ul
            className={`md:flex md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-y-0" : "-translate-y-[200%]"
            } md:translate-y-0`}
          >
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 hover:text-indigo-700 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 hover:text-indigo-700 font-semibold"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 hover:text-indigo-700 font-semibold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="min-h-screen bg-indigo-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-indigo-800 py-6 px-6 text-white flex flex-col md:flex-row items-center justify-between">
        <p>© 2025 LearnSphere. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-indigo-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-indigo-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-indigo-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </footer>
    </Router>
  );
}
