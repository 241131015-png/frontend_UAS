// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";

export default function Header() {
  const { darkMode } = useTheme();

  return (
    <header className="main-header">
      <h1>Do Something, Be Better</h1>

      <nav className="navbar">
        <Link to="/">
          <button className="nav-btn">Beranda</button>
        </Link>

        <Link to="/tentang">
          <button className="nav-btn">Tentang</button>
        </Link>

        <Link to="/pengaturan">
          <button className="nav-btn">
            Pengaturan {darkMode ? "🌙" : "☀️"}
          </button>
        </Link>
      </nav>
    </header>
  );
}
