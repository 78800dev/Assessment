import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;

        if (!name.trim()) {
            setNameError('Please enter your name.');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!email.trim() || !isValidEmail(email)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (isValid) {
            console.log('Form submitted:', { name, email });
            setSuccessMessage('Your enquiry has been submitted!');
            setName('');
            setEmail('');
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <section id="contact" className="py-16 bg-indigo-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center">Get a Quote or Enquire</h2>
                <form id="contactForm" onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        {nameError && <p className="text-red-500 text-xs italic mt-1">{nameError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        {emailError && <p className="text-red-500 text-xs italic mt-1">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company:</label>
                        <input type="text" id="company" name="company" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="licenseType" className="block text-gray-700 text-sm font-bold mb-2">License Type:</label>
                        <select id="licenseType" name="licenseType" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">-- Select --</option>
                            <option value="perpetual">Perpetual License</option>
                            <option value="subscription">Subscription License</option>
                            <option value="volume">Volume License</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
                        <textarea id="message" name="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <button type="submit" className="bg-indigo-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit Enquiry</button>
                    {successMessage && <p className="text-green-500 text-sm italic mt-4">{successMessage}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;