import React from 'react';

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <nav style={footerNavStyle}>
                <a href="/" style={linkStyle}>Home</a>
                <a href="/add" style={linkStyle}>Add</a>
                <a href="/history" style={linkStyle}>History</a>
                <a href="/logout" style={linkStyle}>Logout</a>
            </nav>
            <p style={copyrightStyle}>© 2025 Your Company. All rights reserved.</p>
        </footer>
    );
}

// Styles
const footerStyle: React.CSSProperties = {
    backgroundColor: '#f4f4f4',
    padding: '10px 20px',
    borderTop: '1px solid #ccc',
    textAlign: 'center',
};

const footerNavStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '10px',
};

const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
};

const copyrightStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#555',
};
