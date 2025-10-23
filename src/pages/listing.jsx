import { useEffect } from "react";
import ListingClient from "../components/listing/ListingClient";
import { useDispatch, useSelector } from 'react-redux'
import { getListingAsync } from "../features/listing/listingActions";
import { getReservationAsync } from "../features/reservation/reservationActions";
import { useParams } from "react-router-dom";
import { listings } from "../utils/data";

function ListingPage() {

  let { id } = useParams()


 const listing = listings.find((item) => item.id === parseInt(id, 10));

 const { currentUser } = useSelector((state) => state.currentUser)


  return (
    <>
     <ListingClient
        listing={listing}
        currentUser={currentUser}
        
      />
    </>
  )
}

export default ListingPage
