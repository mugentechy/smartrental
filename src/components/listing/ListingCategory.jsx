function ListingCategory({ icon: Icon, label, description }) {
  return (
    <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-md">
      {/* Icon Section */}
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-md">
        <Icon size={24} className="text-blue-500" />
      </div>

      {/* Text Section */}
      <div>
        {/* Title */}
        <div className="text-sm font-semibold text-gray-800">{label || "Living Room"}</div>

        {/* Description */}
        <div className="text-xs text-gray-500 mt-1">
          {description || "20 x 16 sq feet"}
        </div>
      </div>
    </div>
  );
}

export default ListingCategory;
