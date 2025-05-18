// src/components/StarRating.jsx
import React from 'react';

// Le composant StarRating prend `rating` (la note sur 5) et `maxStars` (le nombre total d'étoiles, par défaut 5).
function StarRating({ rating, maxStars = 5 }) {
  const fullStars = Math.floor(rating); // Nombre d'étoiles pleines
  const halfStar = rating % 1 !== 0;    // Y a-t-il une demi-étoile ? (non géré visuellement ici, simplifié)
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0); // Nombre d'étoiles vides

  return (
    <div className="star-rating">
      {/* Crée un tableau de `fullStars` éléments et affiche une étoile pleine pour chacun */}
      {Array(fullStars).fill(null).map((_, index) => (
        <span key={`full-${index}`} className="star">★</span>
      ))}
      {/* Pour la simplicité, on ne gère pas les demi-étoiles visuellement,
          on arrondit à l'inférieur. On pourrait ajouter un '☆' si `halfStar` est vrai. */}
      {/* Crée un tableau de `emptyStars` (ajusté) éléments et affiche une étoile vide */}
      {Array(maxStars - fullStars).fill(null).map((_, index) => (
        <span key={`empty-${index}`} className="star empty">☆</span>
      ))}
    </div>
  );
}

export default StarRating;