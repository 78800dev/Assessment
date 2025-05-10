import React from 'react';

const TestimonialCard = ({ review }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-4">{review.text}</p>
            <p className="font-semibold text-indigo-600">- {review.name}, <span className="text-gray-500 font-normal">{review.role}, {review.company}</span></p>
        </div>
    );
};

export default TestimonialCard;