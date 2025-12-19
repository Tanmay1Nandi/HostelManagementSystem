import { useTheme } from "../context/ThemeContext";
import { MdDarkMode, MdLightMode} from "react-icons/md"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-2 rounded-md
                  text-black bg-transparent
                  dark:text-white 
                 transition-all my-2 mr-3
                 cursor-pointer"
    >
      {theme === "dark" ? <MdDarkMode size={24} className="text-gray-700" /> : <MdLightMode size={24} className="text-white"/>}
    </button>
  );
};

export default ThemeToggle;
