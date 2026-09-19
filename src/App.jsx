import { NavLink, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="page">
      <header>
        <span className="brand">UQBITZ</span>
        <nav>
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/rota-interna">Rota interna</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer>example-react-vite · Vite + React 19 · MIT</footer>
    </div>
  );
}
