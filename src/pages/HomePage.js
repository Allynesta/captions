// src/pages/HomePage.js

import React from 'react';
import QuoteGenerator from '../components/QuoteGenerator';

const HomePage = () => {
    return (
        <div>
            <h1>Random Quote Generator</h1>
            <QuoteGenerator />
        </div>
    );
};

export default HomePage;
