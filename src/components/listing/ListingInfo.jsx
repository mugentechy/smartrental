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
 <div className="col-span-4 space-y-8">
  {/* Agent Profile with Stats */}
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
    <div className="flex items-center gap-4 mb-4">
      <div className="relative">
        <img
          src={"https://res.cloudinary.com/doammcpie/image/upload/v1735803301/135111164_2800118623571205_3672319407065042766_n_jeourq.jpg"}
          alt="Agent"
          className="w-14 h-14 rounded-full object-cover border-2 border-white"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg">Victor M.</h3>
        <p className="text-blue-100">Property Specialist</p>
      </div>
    </div>
    <div className="flex gap-6 text-center">
      <div>
        <p className="font-bold text-xl">50+</p>
        <p className="text-blue-100 text-sm">Properties</p>
      </div>
      <div>
        <p className="font-bold text-xl">4.9★</p>
        <p className="text-blue-100 text-sm">Rating</p>
      </div>
      <div>
        <p className="font-bold text-xl">98%</p>
        <p className="text-blue-100 text-sm">Response Rate</p>
      </div>
    </div>
  </div>

  {/* Property Highlights */}
  <div className="grid grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
        <IoIosBed className="w-6 h-6 text-blue-600" />
      </div>
      <p className="font-bold text-gray-900 text-lg">{roomCount}</p>
      <p className="text-gray-600 text-sm">Bedrooms</p>
    </div>
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
        <TbBathFilled className="w-6 h-6 text-green-600" />
      </div>
      <p className="font-bold text-gray-900 text-lg">{bathroomCount}</p>
      <p className="text-gray-600 text-sm">Bathrooms</p>
    </div>
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
        <LiaVectorSquareSolid className="w-6 h-6 text-purple-600" />
      </div>
      <p className="font-bold text-gray-900 text-lg">3,450</p>
      <p className="text-gray-600 text-sm">Square Feet</p>
    </div>
  </div>

  {/* Description */}
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
      <span>🏠</span> About This Home
    </h3>
    <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
  </div>

  {/* Amenities */}
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h3 className="text-xl font-bold mb-6 text-gray-900">✨ Amenities & Features</h3>
    <div className="grid grid-cols-2 gap-4">
      {amenity && amenity.map((item, index) => (
        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            {item?.icon && React.cloneElement(item.icon, { className: "w-5 h-5 text-blue-600" })}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{item?.label}</p>
            <p className="text-sm text-gray-600">{item?.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>


</div>
    </>
  )
}

export default ListingInfo
