// import React from 'react';

// const Hero = () => {
//     return (
//         <section id="hero" className="bg-indigo-50 py-20">
//             <div className="container mx-auto px-4 text-center">
//                 <h1 className="text-4xl font-bold text-indigo-700 mb-4">Unlock the True Value of Your Unused Software</h1>
//                 <p className="text-lg text-gray-700 mb-8">Effortlessly sell your surplus software licenses and maximize your returns with SoftSell's transparent and secure platform.</p>
//                 <a href="#contact" className="bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Get a Quote</a>
//             </div>
//         </section>
//     );
// };

// export default Hero;



// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const heroVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    return (
        <motion.section
            id="hero"
            className="bg-indigo-50 dark:bg-indigo-50 py-20"
            initial="initial"
            animate="animate"
            variants={heroVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-indigo-700 dark:text-accent mb-4">Unlock the True Value of Your Unused Software</h1>
                <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">Effortlessly sell your surplus software licenses and maximize your returns with SoftSell's transparent and secure platform.</p>
                <a href="#contact" className="bg-indigo-600 dark:bg-accent text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-indigo-700 dark:hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-400 focus:ring-offset-2">Get a Quote</a>
            </div>
        </motion.section>
    );
};

export default Hero;