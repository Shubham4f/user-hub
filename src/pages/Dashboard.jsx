import { useEffect, useState } from "react";
import DashboardLoader from "../components/DashboardLoader";
import UserDetails from "../components/UserDetails";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  // State to manage all users, displayed users, pop-up data, and errors
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [popUpData, setPopUpData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch user data from the server
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const result = await res.json();
      setAllUsers(result);
      setUsers(result);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  // Use useEffect to fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle click to open user details pop-up
  const handlePoUp = (i) => {
    setPopUpData(users[i]);
  };

  return (
    <section className="mx-auto w-fit">
      {/* Search bar component */}
      <SearchBar
        allUsers={allUsers}
        setUsers={setUsers}
      />

      {/* Display loader if users are still loading */}
      {allUsers.length === 0 ? (
        <DashboardLoader />
      ) : (
        <UserTable users={users} handlePoUp={handlePoUp} />
      )}
      {/* Display error message if there's an error */}
      {error && (
        <div className="bg-red-200 rounded-lg p-3 text-center mt-5">
          {error}
        </div>
      )}
      {/* Display user details pop-up if popUpData is not null */}
      {popUpData && (
        <UserDetails user={popUpData} setPopUpData={setPopUpData} />
      )}
    </section>
  );
}

export default Dashboard;
