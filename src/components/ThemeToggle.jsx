import React, { useState, useEffect } from 'react';

const ThemeToggleNavbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // থিম ইনিশিয়ালাইজ করার জন্য
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    // থিম টগল ফাংশন
    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-all duration-500`}>
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800">
                <h1 className="text-2xl font-bold">My App</h1>
                <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"
                >
                    {isDarkMode ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6 text-yellow-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v2m6.364-1.636l-1.414 1.414M21 12h-2m-1.636 6.364l-1.414-1.414M12 21v-2m-6.364 1.636l1.414-1.414M3 12h2M4.636 4.636l1.414 1.414M19.364 19.364l-1.414-1.414"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-900"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3c4.866 0 9 4.134 9 9s-4.134 9-9 9c-4.866 0-9-4.134-9-9s4.134-9 9-9z"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Page Content */}
            <main className="p-6">
                <h2 className="text-4xl font-bold">Welcome to the {isDarkMode ? 'Dark' : 'Light'} Side!</h2>
                <p className="mt-4 text-lg">
                    This is an example of implementing a dark/light theme toggle with a navbar button.
                </p>
            </main>
        </div>
    );
};

export default ThemeToggleNavbar;
