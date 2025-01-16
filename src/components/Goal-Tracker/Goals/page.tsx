import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Goals() {
    return (
        <div style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
            <Header />
            <main style={mainStyle}>
                <h1>Dashboard Page</h1>
                <button>Logout!</button>
            </main>
            <Footer />
        </div>
    );
}

// Styles
const mainStyle: React.CSSProperties = {
    padding: '20px',
    textAlign: 'center',
    height: '100vh'
};
