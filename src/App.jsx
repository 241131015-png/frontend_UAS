// src/App.jsx (Mini Todo List Project)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Tentang from './pages/Tentang';
import Pengaturan from './pages/Pengaturan';


import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header /> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/pengaturan" element={<Pengaturan />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;