// src/components/ChatWidget.jsx
import React, { useState } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (input.trim()) {
            const newMessage = { text: input, sender: 'user' };
            setMessages([...messages, newMessage]);
            setInput('');

            // Mocked LLM response
            setTimeout(() => {
                let response = '';
                if (input.toLowerCase().includes('sell')) {
                    response = "To sell your license, please visit our 'How It Works' section or contact us for a quote.";
                } else if (input.toLowerCase().includes('quote')) {
                    response = "You can get a quote by filling out the contact form on our 'Contact' page.";
                } else {
                    response = "Thank you for your message! We will get back to you shortly.";
                }
                setMessages([...messages, { text: response, sender: 'bot' }]);
            }, 1000);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen ? (
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-80 h-96 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Chat with us</h5>
                        <button onClick={toggleChat} className="focus:outline-none">
                            <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="overflow-y-auto flex-grow space-y-2">
                        {messages.map((msg, index) => (
                            <div key={index} className={`p-2 rounded-md ${msg.sender === 'user' ? 'bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-100 self-end' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 self-start'}`}>
                                <p className="text-sm">{msg.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 flex items-center">
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-900"
                            placeholder="Ask a question..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-md ml-2 focus:outline-none focus:shadow-outline"
                        >
                            Send
                        </button>
                    </div>
                </div>
            ) : (
                <button onClick={toggleChat} className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none focus:shadow-outline">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                </button>
            )}
        </div>
    );
};

export default ChatWidget;
