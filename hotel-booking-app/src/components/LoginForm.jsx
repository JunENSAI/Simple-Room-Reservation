// src/components/LoginForm.jsx
import React, { useState, useEffect } from 'react';

function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // Nouvel état pour savoir si un utilisateur a déjà été "enregistré" localement
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  // useEffect se lance une seule fois au montage du composant (tableau de dépendances vide [])
  // pour vérifier si des identifiants sont déjà stockés dans localStorage.
  useEffect(() => {
    if (localStorage.getItem('hotelAppUsername')) {
      setIsUserRegistered(true); // Un utilisateur a déjà été "enregistré"
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Réinitialise les messages d'erreur précédents

    // Vérifie que les champs ne sont pas vides
    if (!username.trim() || !password.trim()) {
      setError('Le nom d\'utilisateur et le mot de passe ne peuvent pas être vides.');
      return;
    }

    // Récupère les identifiants stockés s'ils existent
    const storedUsername = localStorage.getItem('hotelAppUsername');
    const storedPassword = localStorage.getItem('hotelAppPassword');

    if (isUserRegistered) {
      // Si un utilisateur est déjà enregistré, on vérifie les identifiants
      if (username === storedUsername && password === storedPassword) {
        onLoginSuccess(); // Connexion réussie
      } else {
        setError('Nom d\'utilisateur ou mot de passe incorrect.');
      }
    } else {
      // Si aucun utilisateur n'est enregistré, on "enregistre" le nouvel utilisateur
      // et on le connecte directement.
      localStorage.setItem('hotelAppUsername', username);
      localStorage.setItem('hotelAppPassword', password);
      setIsUserRegistered(true); // Marque qu'un utilisateur est maintenant enregistré
      onLoginSuccess(); // Connexion réussie après "enregistrement"
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {/* Le titre du formulaire change en fonction de si un utilisateur est déjà enregistré */}
      <h2>{isUserRegistered ? 'Connexion' : 'Créer un compte / Première connexion'}</h2>
      {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
      <div className="form-group">
        <label htmlFor="username">Nom d'utilisateur :</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // On retire les placeholders "user" et "password" pour que l'utilisateur
          // puisse entrer ce qu'il souhaite pour la première connexion/création.
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="login-button">
        {isUserRegistered ? 'Se connecter' : 'Créer le compte et se connecter'}
      </button>
      {!isUserRegistered && (
        <p style={{ fontSize: '0.9em', marginTop: '15px', color: '#555' }}>
          Entrez le nom d'utilisateur et le mot de passe souhaités. Ils seront sauvegardés localement pour vos prochaines connexions.
        </p>
      )}
    </form>
  );
}

export default LoginForm;