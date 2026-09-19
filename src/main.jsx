import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './views/Home.jsx';
import RotaInterna from './views/RotaInterna.jsx';
import Sobre from './views/Sobre.jsx';
import './app.css';

// BrowserRouter (history mode) de propósito: é o padrão que um usuário real
// escolhe, e é o que o ensaio #2022 precisa exercitar contra o servidor
// estático da plataforma.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/rota-interna" element={<RotaInterna />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
