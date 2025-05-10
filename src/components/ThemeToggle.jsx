// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
        >
            {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1m-9 0h-1m-2.5 5a4 4 0 11-5-5m5 5v-2.5M9 11a4 4 0 005 5m-5-5v2.5M3 9h1m18 0h-1m-2.5-5a4 4 0 115 5m-5-5v2.5M9 15a4 4 0 00-5-5m5 5v-2.5M15 9a4 4 0 005 5m-5-5v2.5M3 15h1m18 0h-1z"></path></svg>
            ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0021 12h-3.646z"></path></svg>
            )}
        </button>
    );
};

export default ThemeToggle;