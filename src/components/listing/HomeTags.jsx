

function HomeTags({
  icon: Icon,
  label,
  description
}) {
 

  return (
    <>
<div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
  {/* Icon Section */}
  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
    <Icon size={40} className="text-blue-500" />
  </div>


  {/* Title */}
  <div className="text-lg font-semibold text-gray-800">
    {label || "Parking Space"}
  </div>

  {/* Description */}
  <div className="text-gray-500 font-light text-sm mt-2">
    {description || "Enimad minim veniam quis no exercitation ullamco lab"}
  </div>
</div>

    </>
  )
}

export default HomeTags
