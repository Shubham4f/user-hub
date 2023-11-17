import { memo } from "react";
function UserTable({ users, handlePoUp }) {

  return (
    // Container for the user table
    <div className="mx-auto my-4 p-1 md:p-2 w-fit shadow-md bg-white font-poppins text-jacarta text-center dark:bg-sky-900 dark:text-white rounded-lg">
      {/* Header row with column names */}
      <div className="flex justify-center items-center py-4 font-semibold text-xs md:text-sm">
        <div className="mx-0.5 md:mx-2 w-4 md:w-6">ID</div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36">Username</div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-48">Email</div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36">Phone</div>
        <div className="hidden sm:block mx-0.5 md:mx-2 w-20 md:w-36">
          Creation date
        </div>
      </div>
      {/* Display user data or a message if no users are found */}
      {users.length === 0 ? (
        <div className="h-48 flex justify-center items-center font-semibold text-lg">
          {" "}
          No User Found!!!{" "}
        </div>
      ) : (
        // Map through the users and create a row for each user
        users.map((user, i) => (
          <div
            onClick={() => handlePoUp(i)}
            key={user.username}
            className="flex justify-center items-center py-4 bg-white break-words font-medium text-xs cursor-pointer transition-[transform,_shadow] duration-200 ease-in-out hover:scale-[1.02] hover:relative hover:z-10 hover:rounded hover:shadow-md dark:bg-sky-900 dark:text-white"
          >
            <div className="mx-0.5 md:mx-2 w-4 md:w-6">{user.id}</div>
            <div className="mx-0.5 md:mx-2 w-20 md:w-36">{user.username}</div>
            <div className="mx-0.5 md:mx-2 w-20 md:w-48">{user.email}</div>
            <div className="mx-0.5 md:mx-2 w-20 md:w-36">{user.phone}</div>
            <div className="hidden sm:block mx-0.5 md:mx-2 w-20 md:w-36">
              {user.creation_date}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default memo(UserTable);
