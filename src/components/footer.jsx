import { BiLogoFacebook, BiLogoInstagram, BiLogoTiktok } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaLocationDot, FaHouseChimney } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { getSubscribeAsync } from '../features/user/userActions'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from "react-hot-toast";

function Footer() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address");
      return;
    }

    const auth = await dispatch(getSubscribeAsync({ email }));
    const error = auth?.error?.message;

    if (!error) {
      toast.success("Thank you for subscribing to SMARTRENTAL updates!");
      setEmail("");
    } else {
      toast.error(error);
    }
  };

  return (
    <>
      {/* CTA Section */}
   

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white pt-20 pb-8">
        <div className="mx-auto max-w-7xl px-8 sm:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className='pb-5'>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <FaHouseChimney className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SMARTRENTAL</h3>
                <p className="text-sm text-gray-400">Find Your Home</p>
              </div>
            </div>

            <p className="mb-6 text-gray-300">
              Your trusted platform for finding and listing rental properties. 
              Simple, secure, and stress-free rental experiences for everyone.
            </p>

            {/* Contact Information */}
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <FaLocationDot className="mr-3 text-blue-400" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center text-gray-300">
                <IoCall className="mr-3 text-blue-400" />
                <a href="tel:+254725832454" className="hover:text-white transition-colors">+254 725 832454</a>
              </li>
              <li className="flex items-center text-gray-300">
                <MdEmail className="mr-3 text-blue-400" />
                <a href="mailto:hello@smartrental.com" className="hover:text-white transition-colors">hello@smartrental.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors block py-1">
                  Browse Rentals
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors block py-1">
                  List Your Property
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors block py-1">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* For Landlords */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">For Landlords</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors block py-1">
                  List Property
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors block py-1">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors block py-1">
                  Landlord Guide
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors block py-1">
                  Property Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="mb-4 text-gray-300">Get the latest rental insights and property updates</p>
            <form onSubmit={onSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="p-3 text-gray-900 rounded-l-lg flex-1 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Email address"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <SiMinutemailer className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-800 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <BiLogoFacebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 text-white p-2 rounded-lg hover:bg-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <BiLogoInstagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 text-white p-2 rounded-lg hover:bg-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <BiLogoTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="max-w-7xl mx-auto px-8 sm:px-16">
            <p className="text-gray-400">
              © {new Date().getFullYear()} SMARTRENTAL. All rights reserved. | 
              <Link to="/" className="hover:text-white transition-colors mx-2">Privacy Policy</Link> • 
              <Link to="/" className="hover:text-white transition-colors mx-2">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;