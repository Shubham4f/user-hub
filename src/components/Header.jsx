import { Link, NavLink } from "react-router-dom";


function Header() {
  return (
    // Navigation bar
    <header className="w-full p-3 sm:py-4 sm:px-10 flex items-center justify-between  text-jacarta shadow-md bg-white dark:text-white dark:bg-sky-900 ">
      {/* Logo/Home link */}
      <Link
        to="/"
        className="font-poppins font-semibold text-lg sm:text-3xl"
      >
        UserHub
      </Link>
      {/* Navigation links */}
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-lg mx-1 sm:mx-5 px-2 py-2 sm:py-3 text-sm sm:text-base cursor-pointer transition duration-150 ease-in-out ${
              isActive
                ? "bg-jacarta text-white dark:bg-sky-950"
                : "hover:bg-jacarta hover:text-white dark:hover:bg-sky-950"
            } `
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `rounded-lg mx-1 sm:mx-5 px-2 py-2 sm:py-3 text-sm sm:text-base cursor-pointer transition duration-150 ease-in-out ${
              isActive
                ? "bg-jacarta text-white dark:bg-sky-950"
                : "hover:bg-jacarta hover:text-white dark:hover:bg-sky-950"
            } `
          }
        >
          Register
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
