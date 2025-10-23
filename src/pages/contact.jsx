import ListingCategory from "../components/listing/ListingCategory";
import { categories } from '../components/navbar/Categories';
import Button from "../components/Button";
import ListingCard from "../components/listing/ListingCard";
import { useDispatch, useSelector } from 'react-redux'
import { amenities } from "../utils/amenities"
import Loader from "../components/Loader"
import Search from "../components/navbar/Search";
import { BiBadgeCheck, BiBeenHere } from 'react-icons/bi';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import Map from "../components/Map"
import Select from 'react-select'
import Input from "../components/inputs/Input";
import { toast } from "react-hot-toast";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTiktok, BiEnvelope, BiPhone, BiMap } from "react-icons/bi";
import { contactAsync } from '../features/user/userActions'
import { useForm } from 'react-hook-form'
import { FaHouseChimney, FaHeadset, FaClock } from "react-icons/fa6";

function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const addContact = async (data) => {
    try {
      await dispatch(contactAsync(data));
      console.log("Form submitted successfully:", data);
      toast.success("Your message has been sent successfully! We'll get back to you within 24 hours.");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your message. Please try again.");
    } 
  };

  const contactMethods = [
    {
      icon: <BiEnvelope className="text-2xl" />,
      title: "Email Us",
      details: "hello@smartrental.com",
      description: "Send us an email anytime"
    },
    {
      icon: <BiPhone className="text-2xl" />,
      title: "Call Us",
      details: "+254 725 832454",
      description: "Mon to Fri from 8am to 5pm"
    },
    {
      icon: <BiMap className="text-2xl" />,
      title: "Visit Us",
      details: "Nairobi, Kenya",
      description: "Come say hello at our office"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24">
        <div className="w-full h-[40vh] overflow-hidden relative">
          <img
            src="/images/contact-hero.jpg"
            className="object-cover w-full h-full"
            alt="Contact SMARTRENTAL"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
            <div className="flex items-center justify-center mb-4">
              <FaHouseChimney className="text-4xl mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">Contact SMARTRENTAL</h1>
            </div>
            <p className="text-lg md:text-xl max-w-2xl">
              Get in touch with our team for any questions about rentals or listing your property
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Contact Methods */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{method.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{method.details}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <FaHeadset className="text-2xl text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit(addContact)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      id="first_name"
                      type="text"
                      placeholder="Your first name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      {...register("fname", { required: "First name is required" })}
                    />
                    {errors.fname && (
                      <p className="text-red-500 text-sm mt-1">{errors.fname.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      id="last_name"
                      type="text"
                      placeholder="Your last name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      {...register("lname", { required: "Last name is required" })}
                    />
                    {errors.lname && (
                      <p className="text-red-500 text-sm mt-1">{errors.lname.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      placeholder="+254 700 000000"
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      {...register("phone", { required: "Phone number is required" })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help you? *
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your rental needs, property listing inquiry, or any questions you have..."
                    {...register("message", { required: "Message is required" })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows="5"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Map & Social Media */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <BiMap className="text-2xl text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
                </div>
                <div className="h-64 rounded-lg overflow-hidden">
                  <Map center={[-1.2921, 36.8219]} /> {/* Nairobi coordinates */}
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  Visit our office in Nairobi for personalized rental assistance and property consultations.
                </p>
              </div>

              {/* Social Media & Support Hours */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                
                <div className="mb-6">
                  <p className="text-gray-600 mb-3">Follow SMARTRENTAL for the latest property updates:</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/vicmugenya" 
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLogoFacebook className="text-xl" />
                    </a>
                    <a 
                      href="https://www.instagram.com/dianibeachrealty/profilecard/?igsh=MWhxY3FtaXc2Y2Fpeg==" 
                      className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLogoInstagram className="text-xl" />
                    </a>
                    <a 
                      href="https://www.tiktok.com/@b.mugen?_t=ZM-8siA6DSitC2&_r=1" 
                      className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLogoTiktok className="text-xl" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                  <FaClock className="text-blue-600 mt-1 text-lg" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Support Hours</h4>
                    <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Help Section */}
        <section className="py-12 bg-blue-50 rounded-lg mb-16">
          <div className="text-center px-8">
            <BiBadgeCheck className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Need Immediate Help?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For urgent rental inquiries or property emergencies, call our dedicated support line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+254725832454" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Call Now: +254 725 832454
              </a>
              <p className="text-gray-600 text-sm">Available during support hours</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactPage;