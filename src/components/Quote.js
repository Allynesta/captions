// src/components/Quote.js

import React from 'react';

const Quote = ({ quote, likeQuote, shareQuote }) => {
    return (
        <div className="quote">
            <p>"{quote.text}"</p>
            <p><em>- {quote.author}</em></p>
            <button onClick={likeQuote}>Like</button>
            <button onClick={shareQuote}>Share</button>
        </div>
    );
};

export default Quote;
