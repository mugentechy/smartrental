import HomeTags from "../components/listing/HomeTags";
import { categories } from '../components/navbar/Categories';
import Button from "../components/Button";
import ListingCard from "../components/listing/ListingCard";
import { useDispatch, useSelector } from 'react-redux'
import { amenities } from "../utils/amenities"
import Loader from "../components/Loader"
import Search from "../components/navbar/Search";
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { toast } from "react-hot-toast";
import Select from 'react-select'
import Input from "../components/inputs/Input";
import { useForm } from 'react-hook-form'
import { contactAsync } from '../features/user/userActions'
import { BiBadgeCheck  } from 'react-icons/bi';

function AboutPage() {
  // Updated stats for rental platform
  const [count, setCount] = useState({ 
    propertiesListed: 0, 
    happyTenants: 0, 
    verifiedLandlords: 0, 
    citiesCovered: 0 
  });
  const hasAnimated = useRef(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const addContact = async (data) => {
    try {
      await dispatch(contactAsync(data));
      console.log("Form submitted successfully:", data);
      toast.success("Your request has been submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your request. Please try again.");
    } 
  };

  useEffect(() => {
    if (!hasAnimated.current) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount.propertiesListed < 1850) {
            return { ...prevCount, propertiesListed: Math.min(prevCount.propertiesListed + 37, 1850) };
          }
          if (prevCount.happyTenants < 1200) {
            return { ...prevCount, happyTenants: Math.min(prevCount.happyTenants + 24, 1200) };
          }
          if (prevCount.verifiedLandlords < 450) {
            return { ...prevCount, verifiedLandlords: Math.min(prevCount.verifiedLandlords + 9, 450) };
          }
          if (prevCount.citiesCovered < 12) {
            return { ...prevCount, citiesCovered: Math.min(prevCount.citiesCovered + 1, 12) };
          }
          clearInterval(interval);
          return prevCount;
        });
      }, 50);
      hasAnimated.current = true;
    }
  }, []);

  const features = [
    {
      icon: <BiBadgeCheck className="text-3xl" />,
      title: "Verified Listings",
      description: "Every property is personally verified by our team to ensure quality and accuracy"
    },
    {
      icon: <BiBadgeCheck className="text-3xl" />,
      title: "Instant Search",
      description: "Find your perfect rental in seconds with our advanced search technology"
    },
    {
      icon: <BiBadgeCheck className="text-3xl" />,
      title: "Dedicated Support",
      description: "24/7 customer support to help you throughout your rental journey"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24">
        <div className="w-full h-[60vh] overflow-hidden relative">
          <img
            src="/images/rental-hero.jpg"
            className="object-cover w-full h-full"
            alt="Modern Rental Properties"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
            <div className="flex items-center justify-center mb-4">
              <BiBadgeCheck className="text-4xl mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">About SMARTRENTAL</h1>
            </div>
            <p className="text-lg md:text-xl max-w-2xl">
              Revolutionizing the rental experience with technology, transparency, and trust
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{count.propertiesListed}+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{count.happyTenants}+</div>
              <div className="text-gray-600">Happy Tenants</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{count.verifiedLandlords}+</div>
              <div className="text-gray-600">Verified Landlords</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{count.citiesCovered}+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At <span className="font-semibold text-blue-600">SMARTRENTAL</span>, we believe finding a home should be simple, 
              transparent, and stress-free. We're transforming the rental market by connecting 
              verified tenants with trusted landlords through our innovative platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Valuation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side - Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
                List Your Property with SMARTRENTAL
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Join hundreds of landlords who trust SMARTRENTAL to find quality tenants 
                  and manage their properties efficiently.
                </p>
                <p className="flex items-center">
                  <BiBadgeCheck className="text-green-500 mr-2 text-xl" />
                  <span>Verified tenant profiles</span>
                </p>
                <p className="flex items-center">
                  <BiBadgeCheck className="text-green-500 mr-2 text-xl" />
                  <span>Secure payment processing</span>
                </p>
                <p className="flex items-center">
                  <BiBadgeCheck className="text-green-500 mr-2 text-xl" />
                  <span>Digital lease agreements</span>
                </p>
                <p className="flex items-center">
                  <BiBadgeCheck className="text-green-500 mr-2 text-xl" />
                  <span>24/7 property support</span>
                </p>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800">
                  <strong>Contact us:</strong> +254 725 832454
                </p>
                <p className="text-blue-800">
                  <strong>Email:</strong> hello@smartrental.com
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Get Your Property Valuation
              </h2>
              <form onSubmit={handleSubmit(addContact)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      id="first_name"
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      {...register("fname", { required: "First name is required" })}
                    />
                  </div>
                  <div>
                    <input
                      id="last_name"
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      {...register("lname", { required: "Last name is required" })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                  </div>
                  <div>
                    <input
                      id="phone"
                      placeholder="Phone Number"
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      {...register("phone", { required: "Phone number is required" })}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <textarea
                    id="message"
                    placeholder="Tell us about your property (location, type, features)..."
                    {...register("message", { required: "Message is required" })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Get Free Valuation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-16">
          <div className="flex items-center justify-center pb-8">
            <div className="flex-grow h-px bg-gray-300"></div>
            <BiBadgeCheck className="mx-4 text-4xl text-blue-500" />
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold pb-8 text-center text-gray-800">
            Popular Rental Amenities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>
    </>
  )
}

export default AboutPage;