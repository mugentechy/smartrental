import { toast } from "react-hot-toast";
import { FaPhone, FaCopy } from "react-icons/fa6";
import { LiaVectorSquareSolid } from "react-icons/lia";
import Modal from "./Modal";
import Heading from "../Heading";
import Button from "../Button";
import useLoginModal from "../../hooks/useLoginModal";

function ReservationModal() {
   const loginModal = useLoginModal();
  const handleCopyNumber = () => {
    const phoneNumber = "+254 725 832454";
    navigator.clipboard.writeText(phoneNumber);
    toast.success(`Phone number copied: ${phoneNumber}`);
  }

  const handleCall = () => {
    window.open('tel:+254725832454', '_self');
  }

  const bodyContent = (
    <div className="flex flex-col gap-6 text-center">
      {/* Icon */}
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
        <LiaVectorSquareSolid  className="text-blue-600 text-2xl" />
      </div>

      {/* Heading */}
      <Heading
        title="Make a Reservation"
        subtitle="Contact us by phone to book your rental"
        center
      />

      {/* Phone Number Display */}
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-2xl font-bold text-gray-900 mb-2">
          +254 725 832454
        </p>
        <p className="text-gray-600 text-sm">Available 7 days a week</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          label="Call Now"
          onClick={handleCall}
          icon={FaPhone}
          className="flex-1 bg-green-600 hover:bg-green-700"
        />
        <Button
          label="Copy Number"
          onClick={handleCopyNumber}
          icon={FaCopy}
          outline
          className="flex-1"
        />
      </div>

      {/* Quick Info */}
      <div className="text-xs text-gray-500 space-y-1">
        <p>• Instant booking assistance</p>
        <p>• Property tours available</p>
        <p>• Flexible payment options</p>
      </div>
    </div>
  )

  return (
    <Modal
     isOpen={loginModal.isOpen}
      title="Book by Phone"
      onClose={loginModal.onClose}
      body={bodyContent}
      hideActionButton
    />
  )
}

export default ReservationModal

  
