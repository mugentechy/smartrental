import Container from "../Container";
import Logo from "./Logo";
import { useSelector } from 'react-redux';
import { FaHouseChimney, FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { IoCall } from "react-icons/io5";
import {  BiBeenHere } from 'react-icons/bi';

function Navbar() {
  const { currentUser } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/', icon: <FaHouseChimney className="w-4 h-4" /> },
    { label: 'Rent', path: '/listings', icon: <BiSearch className="w-4 h-4" /> },
     { label: 'About', path: '/about', icon: <BiBeenHere className="w-4 h-4" /> },
      { label: 'Contact', path: '/contact', icon: <IoCall className="w-4 h-4" /> },
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <div className="fixed w-full bg-white z-50 shadow-sm border-b border-gray-100">
        <div className="py-3">
          <Container>
            <div className="flex items-center justify-between">
              {/* Logo and Navigation */}
              <div className="flex items-center gap-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Logo />
                </div>

                {/* Navigation Items - Hidden on mobile, visible on desktop */}
                <div className="hidden md:flex items-center gap-6">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => navigate(item.path)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActivePath(item.path)
                          ? 'bg-blue-50 text-blue-600 border border-blue-100'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* User Menu and Mobile Search */}
              <div className="flex items-center gap-4">
                {/* Search Button - Mobile */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <BiSearch className="w-5 h-5" />
                </button>

                {/* List Property Button - Mobile */}
                <button
                  onClick={() => navigate('/list-property')}
                  className="md:hidden bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaPlus className="w-5 h-5" />
                </button>

              
              </div>
            </div>

            {/* Mobile Search Bar */}
            {isSearchOpen && (
              <div className="mt-3 md:hidden">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for rentals, locations..."
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>
            )}

            {/* Mobile Navigation - Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden py-2 px-4">
              <div className="flex justify-around items-center">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg text-xs transition-colors ${
                      isActivePath(item.path)
                        ? 'text-blue-600'
                        : 'text-gray-500'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      isActivePath(item.path) ? 'bg-blue-50' : ''
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Navbar;