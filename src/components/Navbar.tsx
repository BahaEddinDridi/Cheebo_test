import { Moon, Sun, User, Home, Menu, PawPrint, Store, Stethoscope } from "lucide-react";
import { useState } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-purple shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:px-48">
        <button>
          <User className="w-6 h-6 text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300" />
        </button>

        <div className="hidden md:flex gap-8">
          <button>
            <Home className="w-6 h-6 text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300" />
          </button>
          <button>
            <PawPrint className="w-6 h-6 text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300" />
          </button>
          <button>
            <Store className="w-6 h-6 text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300" />
          </button>
          <button>
            <Stethoscope className="w-6 h-6 text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-opacity-30 bg-gray-600 hover:bg-gray-200 dark:hover:bg-purple-700 transition-colors duration-300"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" />
            ) : (
              <Moon className="w-6 h-6 text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-purple-700 transition-colors duration-300"
          >
            <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-purple shadow-md transition-colors duration-300">
          <div className="flex flex-col items-center gap-4 py-4">
            <button className="w-full text-center py-2 hover:bg-gray-200 dark:hover:bg-purple-700">
              <Home className="w-6 h-6 mx-auto text-gray-800 dark:text-white" />
            </button>
            <button className="w-full text-center py-2 hover:bg-gray-200 dark:hover:bg-purple-700">
              <PawPrint className="w-6 h-6 mx-auto text-gray-800 dark:text-white" />
            </button>
            <button className="w-full text-center py-2 hover:bg-gray-200 dark:hover:bg-purple-700">
              <Store className="w-6 h-6 mx-auto text-gray-800 dark:text-white" />
            </button>
            <button className="w-full text-center py-2 hover:bg-gray-200 dark:hover:bg-purple-700">
              <Stethoscope className="w-6 h-6 mx-auto text-gray-800 dark:text-white" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}