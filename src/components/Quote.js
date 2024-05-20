// src/components/Quote.js

import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const Quote = ({ quote, likeQuote, shareQuote }) => {
    const quoteRef = useRef(null);

    const shareAsImage = async () => {
        const element = quoteRef.current;
        const canvas = await html2canvas(element);
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'quote.png';
        link.click();

        // If you want to directly share on social media, you would use the respective APIs or libraries
        // For example, using the Web Share API:
        if (navigator.share) {
            navigator.share({
                title: 'Quote',
                text: 'Check out this quote',
                files: [new File([image], 'quote.png', { type: 'image/png' })],
            }).catch(console.error);
        } else {
            console.log('Share not supported');
        }
    };

    return (
        <div className="quote" ref={quoteRef}>
            <p>"{quote.text}"</p>
            <p><em>- {quote.author}</em></p>
            <button onClick={likeQuote}>Like</button>
            <button onClick={shareQuote}>Share Text</button>
            <button onClick={shareAsImage}>Share as Image</button>
        </div>
    );
};

export default Quote;
