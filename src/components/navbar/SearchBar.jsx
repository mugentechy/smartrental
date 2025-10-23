import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const location = ["Diani", "Watamu", "Nyali", "Msambweni"];
  const propertyStatuses = ["Rent", "Sale", "Sold"];
  const subject = ["Apartment", "House", "Guest House", "Hotel"];

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedType, setSelectedType] = useState('');
  
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Navigate to the search results page with the filters as state
    navigate('/search-results', {
      state: {
        locationFilter: selectedLocation,
        statusFilter: selectedStatus,
        typeFilter: selectedType
      }
    });
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Choose Area */}
          <select
            className="w-full border p-2 rounded-lg"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Choose Area</option>
            {location.map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </select>

          {/* Property Status */}
          <select
            className="w-full border p-2 rounded-lg"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Property Status</option>
            {propertyStatuses.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>

          {/* Property Type */}
          <select
            className="w-full border p-2 rounded-lg"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Property Type</option>
            {subject.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
