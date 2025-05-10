import React from 'react';

const Navigation = () => {
    return (
        <nav className="hidden md:block">
            <ul className="flex space-x-6">
                <li><a href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How It Works</a></li>
                <li><a href="#why-choose-us" className="text-gray-600 hover:text-indigo-600">Why Choose Us</a></li>
                <li><a href="#testimonials" className="text-gray-600 hover:text-indigo-600">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
                <li><a href="#" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sell My Licenses</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;








