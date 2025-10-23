import {  useEffect } from "react";
import Navbar from  '../components/navbar/Navbar'
import Categories from  '../components/navbar/Categories'
import LoginModal from  '../components/modals/LoginModal'
import RegisterModal from '../components/modals/RegisterModal';
import RentModal from '../components/modals/RentModal';
import ToasterProvider from '../providers/ToasterProvider';
import Listing from "../components/Listing";
import SearchModal from '../components/modals/SearchModal';
import ImageModal from '../components/modals/ImageModal';
import ListingPage from "../pages/listing";
import AboutPage from "../pages/about";
import HomePage from "../pages/home";
import TripsPage from "../pages/trips";
import FavoritePage from "../pages/favorite";
import ContactPage from "../pages/contact";
import SearchResultsPage from '../pages/SearchResultsPage';
import PropertiesPage from "../pages/properties";
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUserAsync } from '../features/user/userActions'
import useAuthListener from '../hooks/use-auth-listener'
import { getListingsAsync } from "../features/listings/listingsActions";

import Footer from  '../components/footer'


function Router() {


  return (
    <>
       <BrowserRouter>
           <ToasterProvider />
    <LoginModal />
      <RegisterModal />
        <RentModal />
           <ImageModal />
         <SearchModal />
   <Navbar/>
   <div className="pb-20">
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/listings' element={ <Listing  /> } />
       <Route path='/listing/:id' element={<HomePage />} />
       <Route path='/trips' element={<TripsPage />} />
       <Route path='/favorites' element={<FavoritePage />} />
        <Route path='/properties' element={<PropertiesPage />} />
         <Route path="/search-results" element={<SearchResultsPage />} />
         <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
 
        </Routes>
        </div>

         <Footer/>
        </BrowserRouter>
        </>

  )
}

export default Router
