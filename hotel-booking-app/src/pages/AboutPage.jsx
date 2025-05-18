// src/pages/AboutPage.jsx
import React from 'react';

function AboutPage() {
  return (
    <div className="container page-content">
      <h2>À Propos de HotelApp</h2>
      <p>
        Bienvenue sur HotelApp, votre plateforme privilégiée pour trouver et réserver
        des chambres d'hôtel en toute simplicité. Notre mission est de vous offrir
        une expérience utilisateur fluide et agréable.
      </p>
      <h3>Comment réserver une chambre ?</h3>
      <ol>
        <li><strong>Connectez-vous :</strong> Si vous n'avez pas de compte, utilisez les identifiants par défaut (user/password pour cette démo).</li>
        <li><strong>Naviguez :</strong> Utilisez l'onglet "Réserver Chambre" pour voir la liste des hôtels disponibles.</li>
        <li><strong>Choisissez votre hôtel :</strong> Consultez les détails, les avis et les prix.</li>
        <li><strong>Cliquez sur "Réserver" :</strong> (Fonctionnalité de réservation réelle non implémentée dans cette démo). Dans une application complète, cela vous mènerait à un formulaire de réservation détaillé.</li>
      </ol>
      <p>
        Nous nous efforçons continuellement d'améliorer notre service. N'hésitez pas à
        nous faire part de vos retours via l'onglet "Réclamation".
      </p>
    </div>
  );
}

export default AboutPage;