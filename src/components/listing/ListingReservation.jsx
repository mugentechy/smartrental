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
<div 
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
    >
      <div className="gap-1 p-4 text-center">
        <span className="text-2xl text-center font-semibold">
          Make a Reservation
        </span>
      
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => 
          onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button 
          disabled={disabled} 
          label="Reserve" 
          onClick={onSubmit}
        />
      </div>
      <hr />
    
    </div>
    </>
  )
}

export default ListingReservation
