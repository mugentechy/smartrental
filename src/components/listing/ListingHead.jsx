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
      <Heading
        title={title}
        subtitle={locationValue}
      />
<div
  className="
    w-full
    h-[60vh]
    overflow-hidden 
    relative
  "
>
  <Carousel
    selectedItem={selectedImage}
    onChange={handleImageChange}
    showThumbs={false}
    showIndicators={false}
    infiniteLoop={true}
  >
    {imageSrc[0].map((src, index) => (
      <div key={index} className=" w-full">
        <img src={src} alt={`Slide ${index}`} className="w-full" />
      </div>
    ))}
  </Carousel>
  <div
    className="
      absolute
      top-5
      right-5
    "
  >
    <HeartButton listingId={id} currentUser={currentUser} />
  </div>
</div>


    </>
  )
}

export default ListingHead
