// src/pages/BookingPage.jsx
import React, { useState } from 'react'; // Importez useState
import HotelCard from '../components/HotelCard';
import hotelsData from '../data/hotels.json';
import Pagination from '../components/Pagination'; // Importez le composant Pagination

const HOTELS_PER_PAGE = 5; // Définit le nombre d'hôtels à afficher par page

function BookingPage() {
  // État pour suivre la page actuelle, initialisée à la première page (1).
  const [currentPage, setCurrentPage] = useState(1);

  // Calcule l'index du premier hôtel à afficher sur la page actuelle.
  // Si currentPage est 1, indexOfFirstHotel est 0.
  const indexOfLastHotel = currentPage * HOTELS_PER_PAGE;
  // Calcule l'index du dernier hôtel à afficher sur la page actuelle.
  const indexOfFirstHotel = indexOfLastHotel - HOTELS_PER_PAGE;

  // Extrait la tranche d'hôtels à afficher pour la page actuelle.
  // `slice` prend l'index de début (inclusif) et l'index de fin (exclusif).
  const currentHotels = hotelsData.slice(indexOfFirstHotel, indexOfLastHotel);

  // Fonction pour changer de page, elle met à jour l'état `currentPage`.
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Optionnel: remonte en haut de la page lors du changement
  };

  return (
    <div className="container">
      <h2>Réservez votre Chambre d'Hôtel</h2>
      <p>Parcourez notre sélection d'hôtels et trouvez votre séjour idéal. Page {currentPage}.</p>
      <div className="hotel-list">
        {/* Vérifie s'il y a des hôtels à afficher pour la page actuelle. */}
        {currentHotels && currentHotels.length > 0 ? (
          currentHotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          // Ce message s'afficherait si hotelsData était vide ou si currentHotels était vide
          // (ce qui ne devrait pas arriver avec une pagination correcte sauf si hotelsData est vide).
          <p>Aucun hôtel disponible pour le moment.</p>
        )}
      </div>

      {/* Ajoute le composant Pagination en bas de la liste des hôtels. */}
      {/* Il est affiché seulement s'il y a plus d'hôtels que HOTELS_PER_PAGE */}
      {hotelsData.length > HOTELS_PER_PAGE && (
        <Pagination
          totalItems={hotelsData.length} // Nombre total d'hôtels
          itemsPerPage={HOTELS_PER_PAGE}  // Hôtels par page
          currentPage={currentPage}       // Page actuelle
          onPageChange={handlePageChange} // Fonction pour changer de page
        />
      )}
    </div>
  );
}

export default BookingPage;