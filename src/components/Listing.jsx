import { useDispatch, useSelector } from 'react-redux'
import ListingCard from "./listing/ListingCard";
import Container from "./Container";
import Categories from "./navbar/Categories";
import Loader from "./Loader"
import { listings } from "../utils/data";

function Listing() {


 const { currentUser } = useSelector((state) => state.currentUser)
 console.log(listings)

  return (
    <>
      <Container>
         <div className="pt-24">

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
  {listings.map((listing) => (
      <ListingCard
        currentUser={currentUser}
        key={listing.id}
        data={listing}
      />
    ))}




        </div>
         </div>
      </Container>

    </>
  )
}

export default Listing
