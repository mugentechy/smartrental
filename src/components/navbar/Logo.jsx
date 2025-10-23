import { useNavigate } from "react-router-dom";
import { FaHouseChimney } from "react-icons/fa6";

function Logo() {
  let navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/')}
      className="flex items-center gap-2 cursor-pointer group"
    >
      {/* Icon */}
      <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
        <FaHouseChimney className="w-6 h-6" />
      </div>
      
      {/* Text Logo */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          SMARTRENTAL
        </span>
        <span className="text-xs text-gray-500 -mt-1">
          Find Your Home
        </span>
      </div>
    </div>
  )
}

export default Logo;