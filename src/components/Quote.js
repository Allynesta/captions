// src/components/Quote.js

import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const Quote = ({ quote, likeQuote, shareQuote }) => {
    const quoteCardRef = useRef(null);

    const shareAsImage = async () => {
        const element = quoteCardRef.current;
        const canvas = await html2canvas(element);
        const image = canvas.toDataURL('image/png');

        // Construct the Instagram sharing URL
        const instagramUrl = `https://www.instagram.com/stories/iamnestally/?url=${encodeURIComponent(image)}`;

        // Open the Instagram sharing URL
        window.open(instagramUrl, '_blank');
    };

    return (
        <div className="quote-card">
            <div className="quote-content" ref={quoteCardRef}>
                <p>"{quote.text}"</p>
                <p><em>- {quote.author}</em></p>
            </div>
            <div className="quote-actions">
                <button onClick={likeQuote}>Like</button>
                <button onClick={shareQuote}>Share Text</button>
                <button onClick={shareAsImage}>Share as Image</button>
            </div>
        </div>
    );
};

export default Quote;
