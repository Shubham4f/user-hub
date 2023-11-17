import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
function UserDetails({ user, setPopUpData }) {
  // State to manage the reporting status
  const [report, setReport] = useState(false);

  // Handler for generating a report
  const handleClick = () => {
    setReport(true);

    // Set a timeout to hide the report message after 2 seconds
    setTimeout(() => {
      setReport(false);
    }, 2000);
  };

  return (
    // Modal overlay container
    <div
      className="fixed inset-0 z-20 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      {/* Modal content container */}
      <div className="relative flex flex-col mx-auto items-center justify-center py-10 px-3 sm:px-24 mt-20 w-fit shadow-xl bg-white font-poppins text-jacarta text-center dark:bg-sky-900 dark:text-white rounded-lg">
        <FaXmark
          onClick={() => setPopUpData(null)}
          className="cursor-pointer absolute right-2 top-2"
        />
        {/* Close button */}
        <div className="my-3">
          <span className="font-semibold text-sm">ID : </span>
          <span className="text-sm">{user.id}</span>
        </div>
        {/* User details */}
        <div className="my-3">
          <span className="font-semibold text-sm">Username : </span>
          <span className="text-sm">{user.username}</span>
        </div>
        <div className="my-3">
          <span className="font-semibold text-sm">Email : </span>
          <span className="text-sm">{user.email}</span>
        </div>
        <div className="my-3">
          <span className="font-semibold text-sm">Phone :</span>
          <span className="text-sm">{user.phone}</span>
        </div>
        <div className="my-3">
          <span className="font-semibold text-sm">Creation date : </span>
          <span className="text-sm">{user.creation_date}</span>
        </div>
        {/* Button to generate a report */}
        <button
          disabled={report}
          onClick={handleClick}
          className="px-2 py-3 my-4 rounded transition-transform duration-200 ease-in-out hover:scale-[1.02] bg-jacarta text-white dark:bg-sky-950"
        >
          Genrate Report
        </button>
        {/* Report message */}
        {report && (
          <p className="absolute top-3 p-2 shadow-lg rounded-md bg-slate-100 dark:bg-sky-800">
            Report Genrated...
          </p>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
