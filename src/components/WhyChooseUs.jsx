import React from 'react';
import HandshakeIcon from '../assets/icons/handshake.jpeg';
import PiggyBankIcon from '../assets/icons/piggy-bank.jpeg';
import ClockIcon from '../assets/icons/clock.jpeg';
import UsersIcon from '../assets/icons/users.jpeg';

const WhyChooseUs = () => {
    const reasons = [
        { icon: HandshakeIcon, title: 'Trusted Platform', description: 'A secure and reliable marketplace for seamless software license transactions.' },
        { icon: PiggyBankIcon, title: 'Maximize Returns', description: 'Our expert valuation ensures you get the best possible price for your licenses.' },
        { icon: ClockIcon, title: 'Effortless Process', description: 'A streamlined and user-friendly process from listing to payment.' },
        { icon: UsersIcon, title: 'Dedicated Support', description: 'Our support team is always ready to assist you with any inquiries.' },
    ];

    return (
        <section id="why-choose-us" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Why Choose SoftSell?</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                        <li key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl mr-4">
                                <img src={reason.icon} alt={reason.title} className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-700 mb-1">{reason.title}</h4>
                                <p className="text-gray-600">{reason.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default WhyChooseUs;