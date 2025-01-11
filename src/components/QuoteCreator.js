// src/components/QuoteCreator.js

import React, { useState } from 'react';
import axios from 'axios';

const QuoteCreator = () => {
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');
    const [word3, setWord3] = useState('');
    const [name, setName] = useState('');
    const [quote, setQuote] = useState('');
    const [error, setError] = useState('');

    const fetchAndModifyQuote = async () => {
        try {
            // Fetch a quote from the API Ninjas endpoint
            const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
                headers: {
                    'X-Api-Key': 'eHlJJqpatC/Yu8+a0fmIXQ==GFjaPTsVoZXwnLL9', // Replace with your actual API key
                },
            });

            // Extract the first quote from the response
            const fetchedQuote = response.data[0].quote;

            // Modify the quote by replacing the first few words
            const modifiedQuote = fetchedQuote.replace(/\b\w+\b/g, (match, index) => {
                switch (index) {
                    case 0:
                        return word1;
                    case 1:
                        return word2;
                    case 2:
                        return word3;
                    default:
                        return match;
                }
            });

            // Set the modified quote with the name appended
            setQuote(`${modifiedQuote} - ${name}`);
            setError('');
        } catch (err) {
            // Handle errors
            setError('Failed to fetch quote');
            console.error('Error Details:', err.message, err.response, err.request);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchAndModifyQuote();
    };

    return (
        <div className="quote-creator">
            <h1>Create Your Unique Quote</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Word"
                    value={word1}
                    onChange={(e) => setWord1(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Second Word"
                    value={word2}
                    onChange={(e) => setWord2(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Third Word"
                    value={word3}
                    onChange={(e) => setWord3(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit">Create Quote</button>
            </form>
            {quote && (
                <div className="generated-quote">
                    <p>{quote}</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default QuoteCreator;
