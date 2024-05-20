// src/components/Quote.js

import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const Quote = ({ quote, likeQuote, shareQuote }) => {
    const quoteCardRef = useRef(null);

    const shareAsImage = async () => {
        const element = quoteCardRef.current;
        const canvas = await html2canvas(element);
        const image = canvas.toDataURL('image/png');

        if (navigator.share) {
            const file = new File([image], 'quote.png', { type: 'image/png' });
            navigator.share({
                files: [file],
                title: 'Quote',
                text: 'Check out this quote',
            })
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            console.log('Web Share API not supported');
        }
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
