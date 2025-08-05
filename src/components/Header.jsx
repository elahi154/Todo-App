import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../index.css"; // Ensure correct import path

const Header = () => {
    // Load theme from localStorage (default is "light")
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        // Apply theme to <html> tag (Tailwind dark mode works with "dark" class on <html>)
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full p-4 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold text-gray-700 dark:text-white">Logo</h1>

                {/* Navigation Menu */}
                <ul className="flex space-x-6 text-gray-600 dark:text-white">
                    <li className="hover:text-blue-500 cursor-pointer">Home</li>
                    <li className="hover:text-blue-500 cursor-pointer">About</li>
                    <li
                        className="cursor-pointer transition-colors duration-300"
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? (
                            <FaMoon size={20} className="text-gray-600 hover:text-yellow-500" />
                        ) : (
                            <FaSun size={20} className="text-yellow-400 hover:text-yellow-500" />
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
