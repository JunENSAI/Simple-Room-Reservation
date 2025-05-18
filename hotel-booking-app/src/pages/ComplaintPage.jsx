// src/pages/ComplaintPage.jsx
import React, { useState } from 'react';

function ComplaintPage() {
  // États pour stocker le sujet et la description de la réclamation.
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  // État pour afficher un message de succès après soumission.
  const [submittedMessage, setSubmittedMessage] = useState('');

  // Gestionnaire pour la soumission du formulaire de réclamation.
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page.

    // Logique de soumission (simplifiée : affiche en console et un message)
    // Dans une vraie application, vous enverriez ces données à un serveur.
    console.log('Réclamation Soumise:', { subject, description });
    setSubmittedMessage(`Votre réclamation concernant "${subject}" a bien été enregistrée. Nous vous contacterons bientôt.`);

    // Réinitialise les champs du formulaire après soumission.
    setSubject('');
    setDescription('');
  };

  return (
    <div className="container page-content">
      <h2>Déposer une Réclamation</h2>
      {/* Affiche le message de succès s'il y en a un */}
      {submittedMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{submittedMessage}</p>}

      {/* N'affiche le formulaire que si aucun message de succès n'est présent */}
      {!submittedMessage && (
        <form onSubmit={handleSubmit} className="complaint-form">
          <div className="form-group">
            <label htmlFor="subject">Sujet de la réclamation :</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)} // Met à jour l'état `subject`
              required // Champ obligatoire
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description détaillée :</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)} // Met à jour l'état `description`
              required // Champ obligatoire
            />
          </div>
          <button type="submit" className="submit-button">Envoyer la réclamation</button>
        </form>
      )}
    </div>
  );
}

export default ComplaintPage;