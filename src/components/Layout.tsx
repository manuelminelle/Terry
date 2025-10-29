import { PropsWithChildren } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo.svg?url';
import { DayNavigation } from './Navigation';

export function Layout({ children }: PropsWithChildren) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <img src={logoUrl} alt="" aria-hidden className="brand-logo" />
          <div>
            <p className="brand-title">Terry Training</p>
            <p className="brand-subtitle">Dashboard allenamenti by Marina</p>
          </div>
        </div>
        <nav className="primary-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
          <NavLink to="/progressi" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Progressi
          </NavLink>
        </nav>
      </header>
      <DayNavigation hiddenOnHome={isHome} />
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        <p>Allenati con costanza, celebra ogni piccolo progresso. ❤️</p>
      </footer>
    </div>
  );
}
