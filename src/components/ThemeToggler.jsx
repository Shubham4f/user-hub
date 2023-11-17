import { FaRegSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { useState } from "react";

function ThemeToggler() {
  // State to manage the current theme (light or dark)
  const [dark, setDark] = useState(false);

  // Function to toggle between light and dark themes
  const themeToggle = () => {
    setDark(!dark);
    document.querySelector("html").classList.toggle("dark");
  };

  return (
    // Theme toggler container
    <div
      onClick={themeToggle}
      className="h-12 w-12 fixed right-5 bottom-5 z-10 p-1 rounded-full flex justify-center items-center shadow-md cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.05] bg-white dark:bg-sky-900"
    >
      {/* Toggle icon based on the current theme */}
      {dark ? (
        <FaRegMoon className="text-3xl text-white" />
      ) : (
        <FaRegSun className="text-3xl text-yellow-500" />
      )}
    </div>
  );
}

export default ThemeToggler;
