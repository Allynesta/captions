// src/components/QuoteGenerator.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote';

const QuoteGenerator = () => {
    const [quote, setQuote] = useState(null);
    const [error, setError] = useState(null);

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
                headers: {
                    'X-Api-Key': 'eHlJJqpatC/Yu8+a0fmIXQ==GFjaPTsVoZXwnLL9', // Replace with your actual API key
                },
            });

            const quote = response.data[0]; // API Ninja returns an array of quotes
            setQuote({
                text: quote.quote,
                author: quote.author,
            });
            setError(null);
        } catch (err) {
            setError('Failed to fetch quote');
            console.error('Error Details:', err.message, err.response, err.request);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const likeQuote = () => {
        alert('Liked!');
    };

    const shareQuote = () => {
        if (quote) {
            const shareData = {
                title: 'Quote',
                text: `${quote.text} - ${quote.author}`,
                url: window.location.href,
            };
            navigator.share(shareData)
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.log('Error sharing:', error));
        }
    };

    return (
        <div className="quote-generator">
            {quote ? (
                <Quote quote={quote} likeQuote={likeQuote} shareQuote={shareQuote} />
            ) : (
                <p>Loading...</p>
            )}
            {error && <p>{error}</p>}
            <button className="generate-button" onClick={fetchQuote}>Generate New Quote</button>
        </div>
    );
};

export default QuoteGenerator;
