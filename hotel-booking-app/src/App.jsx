// src/App.jsx
import React, { useState, useEffect } from 'react';
// BrowserRouter: composant racine pour le routage.
// Routes: conteneur pour plusieurs Route.
// Route: définit un chemin et le composant à afficher.
// Navigate: pour rediriger l'utilisateur.
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import HotelNotesPage from './pages/HotelNotesPage';
import AboutPage from './pages/AboutPage';
import ComplaintPage from './pages/ComplaintPage';
import './App.css'; // Importe les styles globaux

function App() {
  // État pour savoir si l'utilisateur est connecté.
  // On essaie de lire la valeur depuis localStorage au chargement.
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedInHotelApp') === 'true';
  });

  // useEffect pour sauvegarder l'état de connexion dans localStorage
  // à chaque fois que `isLoggedIn` change.
  useEffect(() => {
    localStorage.setItem('isLoggedInHotelApp', isLoggedIn);
  }, [isLoggedIn]);

  // Fonction appelée lorsque la connexion réussit (passée à HomePage -> LoginForm).
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Fonction pour gérer la déconnexion.
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Optionnel: rediriger vers la page de login après déconnexion
    // Cela se fera automatiquement si les routes sont protégées.
  };

  return (
    // BrowserRouter enveloppe toute l'application pour activer le routage.
    <BrowserRouter>
      {/* Le Header est affiché sur toutes les pages et reçoit l'état de connexion. */}
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      {/* Routes définit les différentes "pages" de l'application. */}
      <Routes>
        {/* Route pour la page d'accueil/login.
            Si l'utilisateur est déjà connecté, le redirige vers /booking.
            Sinon, affiche HomePage. */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/booking" /> : <HomePage onLoginSuccess={handleLogin} />}
        />

        {/* Routes protégées : accessibles uniquement si l'utilisateur est connecté.
            Si non connecté, redirige vers la page de login (/). */}
        <Route
          path="/booking"
          element={isLoggedIn ? <BookingPage /> : <Navigate to="/" />}
        />
        <Route
          path="/notes"
          element={isLoggedIn ? <HotelNotesPage /> : <Navigate to="/" />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <AboutPage /> : <Navigate to="/" />}
        />
        <Route
          path="/complaint"
          element={isLoggedIn ? <ComplaintPage /> : <Navigate to="/" />}
        />

        {/* Route par défaut pour les chemins inconnus (optionnel, pourrait être une page 404).
            Ici, on redirige vers la page d'accueil si le chemin est inconnu. */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;