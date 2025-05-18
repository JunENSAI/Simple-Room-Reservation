// src/components/Pagination.jsx
import React from 'react';

// Le composant Pagination prend plusieurs props :
// - totalItems: le nombre total d'éléments à paginer (nombre total d'hôtels).
// - itemsPerPage: le nombre d'éléments à afficher par page.
// - currentPage: le numéro de la page actuellement affichée.
// - onPageChange: une fonction callback qui sera appelée lorsqu'une page est cliquée.
function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  // Calcule le nombre total de pages nécessaires.
  // Math.ceil arrondit au nombre entier supérieur pour s'assurer que tous les éléments sont couverts.
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Si il n'y a qu'une seule page ou moins, il n'est pas nécessaire d'afficher la pagination.
  if (totalPages <= 1) {
    return null; // Ne rend rien
  }

  // Crée un tableau de numéros de page [1, 2, 3, ..., totalPages].
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Pagination des hôtels">
      <ul className="pagination">
        {/* Itère sur le tableau des numéros de page pour créer un bouton pour chaque page. */}
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            {/*
              Le bouton appelle `onPageChange` avec le numéro de la page cliquée.
              La classe 'active' est ajoutée si le numéro correspond à la page actuelle.
            */}
            <button onClick={() => onPageChange(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;