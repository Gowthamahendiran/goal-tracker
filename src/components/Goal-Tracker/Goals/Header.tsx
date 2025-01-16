import React from 'react';

export default function Header() {
    return (
        <header style={headerStyle}>
            <div style={logoStyle}>Logo</div>
            <nav style={navStyle}>
                <a href="/" style={linkStyle}>Home</a>
                <a href="/add" style={linkStyle}>Add</a>
                <a href="/history" style={linkStyle}>History</a>
                <a href="/logout" style={linkStyle}>Logout</a>
            </nav>
        </header>
    );
}

// Styles
const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f4f4f4',
    borderBottom: '1px solid #ccc',
};

const logoStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
};

const navStyle: React.CSSProperties = {
    display: 'flex',
    gap: '15px',
};

const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
};
