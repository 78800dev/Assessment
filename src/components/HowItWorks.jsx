import React from 'react';
import UploadIcon from '../assets/icons/upload.jpeg';
import ValuationIcon from '../assets/icons/chart-line.jpeg';
import PaymentIcon from '../assets/icons/money-bill-wave.jpeg';

const HowItWorks = () => {
    const steps = [
        { icon: UploadIcon, title: 'Upload License', description: 'Easily submit the details of the software licenses you wish to sell through our intuitive platform.' },
        { icon: ValuationIcon, title: 'Get Valuation', description: 'Our expert team provides a fair and transparent valuation based on current market conditions.' },
        { icon: PaymentIcon, title: 'Get Paid', description: 'Once your license is sold, receive secure and timely payment directly to your account.' },
    ];

    return (
        <section id="how-it-works" className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl mb-4">
                                <img src={step.icon} alt={step.title} className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;