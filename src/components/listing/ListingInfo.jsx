import HeartButton from "../HeartButton";
import Button from "../Button";
import useCountries from "../../hooks/useCountries";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import Map from "../Map"
import { amenities } from "../../utils/amenities"
import { LiaVectorSquareSolid } from "react-icons/lia";
import { TbBathFilled } from "react-icons/tb";
import { IoIosBed } from "react-icons/io";


function ListingInfo({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  amenity,
  locationValue,
}) {
    const { getByValue } = useCountries();
    // const locationObject = JSON.parse(locationValue);


   const coordinates =  [1, 38]

  return (
    <>
  <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          
   <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-full overflow-hidden">
      <img
        src={"https://res.cloudinary.com/doammcpie/image/upload/v1735803301/135111164_2800118623571205_3672319407065042766_n_jeourq.jpg"}
        alt="Agent"
        className="object-cover w-full h-full"
      />
    </div>
    <div>
      <h6 className="font-semibold text-sm">
        <a href="/team-details">
          { "Victor M."}
        </a>
      </h6>
      <small className="text-xs">Property Seller</small>
    </div>
  </div>

        </div>
 




        <ul className="flex gap-6 mt-4 text-sm text-gray-600">





  <li className="flex  items-center gap-2">
 
   <span className="flex items-center gap-2 text-lg">
  
  <IoIosBed size={24} />
</span>
     <span> {roomCount} Bedrooms</span>
  </li>



 <div className="h-10 border-l border-gray-300"></div>

  <li className="flex  items-center gap-2">
 
   <span className="flex items-center gap-2 text-lg">
  
  <TbBathFilled size={24} />
</span>
     <span>{bathroomCount } Bathrooms</span>
  </li>

 <div className="h-10 border-l border-gray-300"></div>



  <li className="flex  items-center gap-2 text-lg">
 
   <span className="flex items-center gap-2">
  
  <LiaVectorSquareSolid size={24} />
</span>
     <span>{ 3450} square ft</span>
  </li>
</ul>


      </div>
  

    <div 
          className="
        
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-4
            2xl:grid-cols-4
            gap-8
          "
        >
         {amenities.map((item) => (
              <div key={item.label} className="col-span-2">
                <ListingCategory
                  icon={item.icon} 
                  label={item?.label}
                  description={item?.description} 
                />
                </div>
            
            ))}
  
  </div>
      <hr />
      <div className="
      text-lg font-light text-neutral-500">
        {description}
      </div>
      <hr />
           <div
      className="
        pt-6
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
{amenity &&
  amenity.map((item, index) => (
    <div key={index} className="col-span-1">
      <ListingCategory
        icon={item?.icon}
        label={item?.label}
        description={item?.description}
      />
    </div>
  ))}

</div>
    
      <Map center={coordinates} />
    </div>
    </>
  )
}

export default ListingInfo
