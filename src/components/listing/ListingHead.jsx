import HeartButton from "../HeartButton";
import Button from "../Button";
import useCountries from "../../hooks/useCountries";
import Heading from "../Heading";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {  useState } from "react";
function ListingHead({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser
}) {
 


  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageChange = (selectedIndex) => {
    setSelectedImage(selectedIndex);
  };




  return (
    <>


<div className="space-y-6">
  <Heading
    title={title}
    subtitle={locationValue}
    className="text-white"
  />
  
  <div className="relative bg-gray-900 rounded-3xl p-6 shadow-2xl">
    <div className="relative h-[60vh] rounded-2xl overflow-hidden">
      <Carousel
        selectedItem={selectedImage}
        onChange={handleImageChange}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-900 p-4 rounded-full hover:scale-110 transition-all shadow-2xl"
            >
              ←
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-900 p-4 rounded-full hover:scale-110 transition-all shadow-2xl"
            >
              →
            </button>
          )
        }
      >
        {imageSrc[0].map((src, index) => (
          <div key={index} className="w-full h-[60vh]">
            <img 
              src={src} 
              alt={`Slide ${index}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
      
      {/* Dark Theme Heart Button */}
      <div className="absolute top-6 right-6">
        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-2xl p-3 border border-gray-700">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ListingHead
