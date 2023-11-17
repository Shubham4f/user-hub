import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ allUsers, setUsers }) {
  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Handler for input changes
  const handleInput = (e) => {
    setSearchTerm(e.target.value);
    // Reset the user list if the search term is empty
    if (e.target.value === "") {
      setUsers(allUsers);
    }
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter users based on the search term
    // Not sending query to the backend as proper query handling is not available in the placeholder database
    setUsers(
      allUsers.filter(
        (user) =>
          user.id.toString().includes(searchTerm) ||
          user.username.includes(searchTerm) ||
          user.email.includes(searchTerm) ||
          user.phone.includes(searchTerm)
      )
    );
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="ml-auto my-4 p-1 md:p-2 w-fit shadow-md bg-white font-poppins text-jacarta text-center dark:bg-sky-900 dark:text-white rounded-lg"
    >
      <input
        id="search"
        name="serach"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInput}
        className="bg-transparent w-52 sm:w-64 focus:outline-none"
      />
      <button type="submit" name="submit_search">
        <FaSearch className="cursor-pointer" />
      </button>
    </form>
  );
}

export default SearchBar;
