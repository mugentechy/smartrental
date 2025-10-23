import { useLocation } from 'react-router-dom';
import { listings as allListings } from "../utils/data"; // Adjust path if necessary
import ListingCard from "../components/listing/ListingCard";

function SearchResultsPage() {
  const location = useLocation();
  const { locationFilter, statusFilter, typeFilter } = location.state || {}; // Get search filters from the state

  // Filter listings based on the search filters
  const filteredListings = allListings.filter((listing) => {
    const locationMatch = locationFilter ? listing.location === locationFilter : true;
    const statusMatch = statusFilter ? listing.status === statusFilter : true;
    const typeMatch = typeFilter ? listing.type === typeFilter : true;
    
    return locationMatch && statusMatch && typeMatch;
  });

  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-24">
        <h2 className="text-4xl font-semibold pb-5">Search Results</h2>

        {/* Listings Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredListings.map((listing) => (
            <ListingCard
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SearchResultsPage;
