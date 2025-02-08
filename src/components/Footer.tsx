import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-48 py-6 bg-white dark:bg-purple shadow-t-md transition-colors duration-300 text-center">
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <button className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300">
          <Facebook className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
        <button className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300">
          <Twitter className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
        <button className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300">
          <Instagram className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
        <button className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300">
          <Linkedin className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs md:text-sm text-gray-600 dark:text-gray-300">
        <button className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300">
          About
        </button>
        <button className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300">
          Contact
        </button>
        <button className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300">
          Privacy Policy
        </button>
        <button className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300">
          Terms of Service
        </button>
      </div>

      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Cheebo. All rights reserved.
      </p>
    </footer>
  );
}
