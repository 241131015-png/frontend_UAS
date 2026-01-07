// src/contexts/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  // Ambil preferensi tema dari localStorage saat inisialisasi
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('todoApp_theme');
    // Konversi string dari localStorage menjadi boolean, default false
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Efek untuk mengatur class 'dark' pada body dan menyimpan ke localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Simpan preferensi tema
    localStorage.setItem('todoApp_theme', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const value = {
    darkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
// Baris 40 mungkin adalah baris ini: ^