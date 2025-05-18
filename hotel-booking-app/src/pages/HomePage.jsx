// src/pages/HomePage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm'; // Importe le composant de formulaire de connexion

// La page d'accueil (HomePage) prend `onLoginSuccess` en prop pour la passer au LoginForm.
function HomePage({ onLoginSuccess }) {
  return (
    <div className="login-page container">
      <h1>Bienvenue sur HotelApp</h1>
      <p>Veuillez vous connecter pour accéder à nos services.</p>
      {/* Affiche le composant LoginForm et lui passe la fonction de callback */}
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </div>
  );
}

export default HomePage;