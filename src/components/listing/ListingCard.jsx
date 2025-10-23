import HeartButton from "../HeartButton";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { FaCamera, FaFilm } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { TbBathFilled } from "react-icons/tb";
import { IoIosBed } from "react-icons/io";

function ListingCard({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) {
  let navigate = useNavigate();

  // Set the label based on the status of the listing
  const statusLabel = data?.status === "sale" ? "For Sale" : "For Rent";
  const priceLabel = data?.status === "sale" ? "" : "/month";

  return (
    <div 
      onClick={() => navigate(`/listing/${data?.id}`)} 
      className="col-span-1 cursor-pointer group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          src={data?.images[0]}
          alt="Listing"
        />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {statusLabel}
          </div>
        </div>
        
        {/* Heart Button */}
        <div className="absolute top-3 right-3">
          <HeartButton 
            listingId={data?.id}
            currentUser={currentUser}
          />
        </div>

        {/* Location Badge */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm">
            <FaLocationDot className="w-4 h-4" />
            <span>{data?.location}</span>
          </div>
        </div>

        {/* Media Count Badges */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
            <FaCamera className="w-4 h-4 text-gray-700" />
            <span>{data?.images?.length || 0}</span>
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
            <FaFilm className="w-4 h-4 text-gray-700" />
            <span>1</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Price and Title */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-bold text-gray-900">
              ${data?.price}
            </span>
            {priceLabel && (
              <span className="text-gray-600 text-sm">{priceLabel}</span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 hover:text-blue-600 transition-colors">
            <a href={`/listing/${data?.id}`}>
              {data?.title}
            </a>
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {data?.description || "Modern property with great amenities and perfect location"}
          </p>
        </div>

        {/* Property Features */}
        <div className="flex justify-between items-center py-4 border-y border-gray-100">
          <div className="flex items-center gap-1 text-gray-700">
            <IoIosBed className="w-5 h-5 text-blue-600" />
            <span className="font-medium">{data?.bedroom}</span>
            <span className="text-gray-500 text-sm ml-1">Beds</span>
          </div>
          
          <div className="w-px h-6 bg-gray-200"></div>
          
          <div className="flex items-center gap-1 text-gray-700">
            <TbBathFilled className="w-5 h-5 text-blue-600" />
            <span className="font-medium">{data?.bathroom || 2}</span>
            <span className="text-gray-500 text-sm ml-1">Baths</span>
          </div>
          
          <div className="w-px h-6 bg-gray-200"></div>
          
          <div className="flex items-center gap-1 text-gray-700">
            <LiaVectorSquareSolid className="w-5 h-5 text-blue-600" />
            <span className="font-medium">{data?.squareFeet || 3450}</span>
            <span className="text-gray-500 text-sm ml-1">sqft</span>
          </div>
        </div>

   

        {/* Additional Action Button (if provided) */}
        {actionLabel && onAction && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Button
              disabled={disabled}
              small
              label={actionLabel}
              onClick={(e) => {
                e.stopPropagation();
                onAction(actionId);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ListingCard;