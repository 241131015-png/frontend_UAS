// src/pages/Pengaturan.jsx (DIPERBAIKI)
import React from 'react';
import { useTheme } from '../contexts/ThemeContext.jsx'; 

export default function Pengaturan() {
    // Ambil kedua nilai yang dibutuhkan
    const { darkMode, toggleTheme } = useTheme();

    return (
        <div className="page-container">
            <h2>Pengaturan Aplikasi</h2>
            <div className="setting-item">
                <label>Mode Tampilan:</label>
                <button onClick={toggleTheme} className="btn-toggle-theme">
                    {/* Tampilkan status yang benar */}
                    {darkMode ? 'Mode Gelap 🌙' : 'Mode Terang ☀️'}
                </button>
            </div>
            <p className="theme-status">
                Saat ini mode: <strong>{darkMode ? 'Gelap' : 'Terang'}</strong>
            </p>
        </div>
    );
}