// import React, { useState } from 'react';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import HowItWorks from './components/HowItWorks';
// import WhyChooseUs from './components/WhyChooseUs';
// import Testimonials from './components/Testimonials';
// import ContactForm from './components/ContactForm';
// import Footer from './components/Footer';
// import './index.css';

// const App = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <div className="bg-gray-100">
//             <header className="bg-white shadow sticky top-0 z-50">
//                 <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//                     <h1 className="text-xl font-semibold text-indigo-600">SoftSell</h1>
//                     <Navigation />
//                     <div className="md:hidden">
//                         <button onClick={toggleMobileMenu} className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                             <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden bg-gray-50">
//                         <div className="px-4 py-3 space-y-3">
//                             <a href="#how-it-works" className="block py-2 text-gray-600 hover:text-indigo-600">How It Works</a>
//                             <a href="#why-choose-us" className="block py-2 text-gray-600 hover:text-indigo-600">Why Choose Us</a>
//                             <a href="#testimonials" className="block py-2 text-gray-600 hover:text-indigo-600">Testimonials</a>
//                             <a href="#contact" className="block py-2 text-gray-600 hover:text-indigo-600">Contact</a>
//                             <a href="#" className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sell My Licenses</a>
//                         </div>
//                     </div>
//                 )}
//             </header>

//             <Hero />
//             <HowItWorks />
//             <WhyChooseUs />
//             <Testimonials />
//             <ContactForm />
//             <Footer />
//         </div>
//     );
// };

// export default App;










// src/App.jsx
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './index.css';
import ChatWidget from './components/ChatWidget'; // Chatbot Component
import ThemeToggle from './components/ThemeToggle';

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            <header className="bg-white dark:bg-gray-800 shadow dark:shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-indigo-600 dark:text-accent">SoftSell</h1>
                    <Navigation />
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <div className="md:hidden">
                            <button onClick={toggleMobileMenu} className="focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-accent focus:ring-offset-2">
                                <svg className="h-6 w-6 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-gray-50 dark:bg-gray-700">
                        <div className="px-4 py-3 space-y-3">
                            <a href="#how-it-works" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-accent">How It Works</a>
                            <a href="#why-choose-us" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-accent">Why Choose Us</a>
                            <a href="#testimonials" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-accent">Testimonials</a>
                            <a href="#contact" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-accent">Contact</a>
                            <a href="#" className="block w-full text-center bg-indigo-600 dark:bg-accent text-white py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-400 focus:ring-offset-2">Sell My Licenses</a>
                        </div>
                    </div>
                )}
            </header>

            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ContactForm />
            <Footer />
            <ChatWidget /> {/* Included here */}
        </div>
    );
};

export default App;