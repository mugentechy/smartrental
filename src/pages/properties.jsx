import PropertiesClient from "../components/listing/PropertiesClient";
import { useSelector } from 'react-redux'
import EmptyState from "../components/EmptyState";
import { listings } from "../utils/data";


function PropertiesPage() {

  const { currentUser } = useSelector((state) => state.currentUser)
  console.log(listings)

  if (!currentUser) {
    return <EmptyState
      title="Unauthorized"
      subtitle="Please login"
    />
  }


  return (
    <>
    <div className="pt-24">
      <PropertiesClient
        currentUser={currentUser}
        listings={listings}
      />
      </div>
    </>
  )
}

export default PropertiesPage
