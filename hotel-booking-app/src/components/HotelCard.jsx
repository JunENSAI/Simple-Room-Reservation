// src/components/HotelCard.jsx
import React from 'react';
import StarRating from './StarRating'; // Importe le composant pour afficher les étoiles

// Le composant HotelCard prend un objet `hotel` en prop.
function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      {/* Affiche l'image de l'hôtel. `alt` est important pour l'accessibilité. */}
      <img src={hotel.url_image} alt={`Photo de ${hotel.nom}`} />
      <div className="hotel-card-content">
        <h3>{hotel.nom}</h3> {/* Nom de l'hôtel */}
        <p><strong>Lieu :</strong> {hotel.lieu}</p> {/* Lieu de l'hôtel */}
        <StarRating rating={hotel.note} /> {/* Affiche la note en étoiles */}
        <p><strong>Avis principaux :</strong></p>
        {/* Affiche les avis. S'il y en a, crée une liste. Sinon, indique qu'il n'y en a pas. */}
        {hotel.avis && hotel.avis.length > 0 ? (
          <ul className="avis-list">
            {/* Limite l'affichage aux 2 premiers avis pour ne pas surcharger la carte */}
            {hotel.avis.slice(0, 2).map((avis, index) => (
              <li key={index}>{avis}</li>
            ))}
          </ul>
        ) : (
          <p>Pas encore d'avis.</p>
        )}
        {/* Affiche le prix par nuit. `toFixed(2)` pour formater en deux décimales (ex: 150.00) */}
        <p className="price"><strong>Prix :</strong> {hotel.prix_par_nuit.toFixed(2)} € / nuit</p>
        {/* Bouton de réservation (aucune action pour l'instant) */}
        <button className="submit-button" style={{marginTop: '10px'}}>Réserver</button>
      </div>
    </div>
  );
}

export default HotelCard;