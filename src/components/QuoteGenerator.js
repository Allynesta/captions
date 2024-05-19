// src/components/QuoteGenerator.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote';

const QuoteGenerator = () => {
    const [quote, setQuote] = useState(null);
    const [error, setError] = useState(null);

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://api.quotable.io/random');
            setQuote({
                text: response.data.content,
                author: response.data.author,
            });
            setError(null);
        } catch (err) {
            setError('Failed to fetch quote');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const likeQuote = () => {
        // Handle like functionality
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
            <button onClick={fetchQuote}>Generate New Quote</button>
        </div>
    );
};

export default QuoteGenerator;
