import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const testimonialsData = [
        {
            text: "SoftSell provided a seamless experience in selling our unused software licenses. The valuation was fair, and the payment was quick. Highly recommended!",
            name: "John Doe",
            role: "IT Manager",
            company: "Tech Solutions Inc."
        },
        {
            text: "I was impressed with the professionalism and efficiency of SoftSell. They made the process of recovering value from our surplus licenses incredibly easy.",
            name: "Jane Smith",
            role: "Finance Director",
            company: "Global Corp."
        },
    ];

    return (
        <section id="testimonials" className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">Customer Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonialsData.map((review, index) => (
                        <TestimonialCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;