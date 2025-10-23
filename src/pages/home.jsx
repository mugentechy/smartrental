import HomeTags from "../components/listing/HomeTags";
import { categories } from '../components/navbar/Categories';
import Button from "../components/Button";
import ListingCard from "../components/listing/ListingCard";
import { useDispatch, useSelector } from 'react-redux'
import { amenities } from "../utils/amenities"
import Loader from "../components/Loader"
import SearchBar from "../components/navbar/SearchBar";
import { useState } from 'react';
import { listings } from "../utils/data";
import { Link } from 'react-router-dom';
import { BiBadgeCheck  } from 'react-icons/bi';

function HomePage() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;
  const { currentUser } = useSelector((state) => state.currentUser)

  const features = [
    {
      icon: <BiBadgeCheck className="text-2xl" />,
      title: "Easy Search",
      description: "Find your perfect home with advanced filters"
    },
    {
      icon: <BiBadgeCheck className="text-2xl" />,
      title: "Verified Listings",
      description: "All properties are verified by our team"
    },
    {
      icon: <BiBadgeCheck className="text-2xl" />,
      title: "Secure Payments",
      description: "Safe and transparent payment process"
    },
    {
      icon: <BiBadgeCheck className="text-2xl" />,
      title: "Location Based",
      description: "Search properties in your preferred areas"
    }
  ];

  const handleNext = () => {
    if (startIndex + itemsPerPage < listings?.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <BiBadgeCheck className="text-4xl mr-3" />
              <h1 className="text-3xl font-bold">SMARTRENTAL</h1>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect 
              <span className="text-yellow-300"> Rental Home</span>
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover verified rental properties. Simple, secure, and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar Overlap */}
      <div className="relative -mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <SearchBar />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Featured Properties */}
        <section className="pt-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">Featured Rentals</h2>
              <p className="text-gray-600 mt-2">Handpicked properties with great locations</p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={handlePrevious} 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition-colors" 
                disabled={startIndex === 0}
              >
                Previous
              </button>
              <button 
                onClick={handleNext} 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition-colors" 
                disabled={startIndex + itemsPerPage >= listings?.length}
              >
                Next
              </button>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {listings
              .slice(startIndex, startIndex + itemsPerPage)
              .map((listing) => (
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              ))}
          </div>

          <div className="text-center">
            <Link 
              to="/properties"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Properties
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              How SMARTRENTAL Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to find and secure your perfect rental home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Amenities Section */}

      </main>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 text-center">
          <BiBadgeCheck className="text-4xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your New Home?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of happy tenants who found their perfect rental through SMARTRENTAL
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Sign Up Free
            </Link>
            <Link 
              to="/list-property" 
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors inline-block"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </section>

    <main className="max-w-7xl mx-auto px-8 sm:px-16">
              <section className="py-16">
          <h3 className="text-3xl font-semibold pb-8 text-center text-gray-800">Available Amenities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {amenities.slice(0, 8).map((item) => (
              <div key={item.label} className="col-span-1">
                <HomeTags
                  icon={item.icon} 
                  label={item?.label}
                  description={item?.description} 
                />
              </div>
            ))}
          </div>
        </section>
        </main>
    </div>
  )
}

export default HomePage