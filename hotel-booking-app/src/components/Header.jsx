// src/components/Header.jsx
import React from 'react';
// NavLink est utilisé pour les liens de navigation, il ajoute une classe 'active' au lien courant.
// Link est un lien simple.
import { NavLink, Link } from 'react-router-dom';

// Le Header prend `isLoggedIn` (booléen) et `onLogout` (fonction) en props.
function Header({ isLoggedIn, onLogout }) {
  return (
    <header className="app-header">
      {/* Logo ou titre du site, lien vers la page d'accueil (ou page de réservation si connecté) */}
      <Link to={isLoggedIn ? "/booking" : "/"} className="logo">HotelApp</Link>
      <nav>
        <ul>
          {/* Si l'utilisateur est connecté, affiche les onglets de navigation principaux */}
          {isLoggedIn && (
            <>
              <li>
                {/* NavLink permet de styliser le lien actif */}
                <NavLink to="/booking" className={({ isActive }) => isActive ? "active" : ""}>
                  Réserver Chambre
                </NavLink>
              </li>
              <li>
                <NavLink to="/notes" className={({ isActive }) => isActive ? "active" : ""}>
                  Notes Hôtels
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                  À Propos
                </NavLink>
              </li>
              <li>
                <NavLink to="/complaint" className={({ isActive }) => isActive ? "active" : ""}>
                  Réclamation
                </NavLink>
              </li>
              <li>
                {/* Bouton de déconnexion qui appelle la fonction `onLogout` */}
                <button onClick={onLogout}>Déconnexion</button>
              </li>
            </>
          )}
          {/* Si l'utilisateur n'est pas connecté, on pourrait afficher un lien "Login",
               mais ici, la page d'accueil est la page de login. */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;