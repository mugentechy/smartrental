import { Range } from "react-date-range";

import Button from "../Button";
import Calendar from "../inputs/Calendar";

function ListingReservation({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates
}) {


  return (
    <>
<div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
  {/* Luxury Header */}
  <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white relative overflow-hidden">
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-center mb-2">Exclusive Reservation</h3>
      <p className="text-gray-300 text-center text-sm">Luxury awaits your arrival</p>
    </div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-yellow-500 to-transparent opacity-20 rounded-full -translate-y-16 translate-x-16"></div>
  </div>

  {/* Price Display */}
  <div className="p-6 border-b border-gray-100">
    <div className="text-center">
      <span className="text-4xl font-light text-gray-900">${price}</span>
      <span className="text-gray-600 ml-2">/ night</span>
      {totalPrice && (
        <div className="mt-2">
          <p className="text-sm text-gray-600">Total amount</p>
          <p className="text-xl font-semibold text-gray-900">${totalPrice}</p>
        </div>
      )}
    </div>
  </div>

  {/* Calendar */}
  <div className="p-6">
    <Calendar
      value={dateRange}
      disabledDates={disabledDates}
      onChange={(value) => onChangeDate(value.selection)}
      className="luxury-calendar"
    />
  </div>

  {/* Action */}
  <div className="p-6 bg-gray-50 border-t border-gray-200">
    <Button 
      disabled={disabled} 
      label={disabled ? "Select Dates" : "Reserve This Property"} 
      onClick={onSubmit}
      className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-black transition-colors border border-gray-900 hover:shadow-lg"
    />
    <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-600">
      <span>🏆</span>
      <span>Premium booking experience</span>
    </div>
  </div>
</div>
    </>
  )
}

export default ListingReservation
