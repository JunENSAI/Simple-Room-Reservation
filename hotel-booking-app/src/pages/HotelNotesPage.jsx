// src/pages/HotelNotesPage.jsx
import React, { useState } from 'react'; // Importez useState
import HotelCard from '../components/HotelCard';
import hotelsData from '../data/hotels.json';
import Pagination from '../components/Pagination'; // Importez le composant Pagination

const HOTELS_PER_PAGE = 5; // Définit le nombre d'hôtels à afficher par page

function HotelNotesPage() {
  // État pour suivre la page actuelle, initialisée à la première page (1).
  const [currentPage, setCurrentPage] = useState(1);

  // Calcule l'index du premier hôtel à afficher sur la page actuelle.
  const indexOfLastHotel = currentPage * HOTELS_PER_PAGE;
  // Calcule l'index du dernier hôtel à afficher sur la page actuelle.
  const indexOfFirstHotel = indexOfLastHotel - HOTELS_PER_PAGE;

  // Extrait la tranche d'hôtels à afficher pour la page actuelle.
  const currentHotels = hotelsData.slice(indexOfFirstHotel, indexOfLastHotel);

  // Fonction pour changer de page, elle met à jour l'état `currentPage`.
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Optionnel: remonte en haut de la page lors du changement
  };

  return (
    <div className="container">
      <h2>Consultez les Notes des Hôtels</h2>
      <p>Découvrez ce que nos clients pensent de nos établissements. Page {currentPage}.</p>
      <div className="hotel-list">
        {/* Vérifie s'il y a des hôtels à afficher pour la page actuelle. */}
        {currentHotels && currentHotels.length > 0 ? (
          currentHotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          <p>Informations sur les hôtels non disponibles.</p>
        )}
      </div>

      {/* Ajoute le composant Pagination */}
      {hotelsData.length > HOTELS_PER_PAGE && (
        <Pagination
          totalItems={hotelsData.length}
          itemsPerPage={HOTELS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default HotelNotesPage;