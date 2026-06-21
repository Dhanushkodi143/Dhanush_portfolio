import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';

function App() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="app">
            <div className="bg-glow"></div>

            <div className="open-to-work">
                <span className="status-dot"></span>
                <span>Open to Work</span>
            </div>

            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero theme={theme} />
                <Experience />
                <Skills />
                <Projects />
                <Hobbies />
                <Contact />
            </main>
            <footer className="footer-to-hide" style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
                <p style={{ fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                    &copy; {new Date().getFullYear()} Dhanushkodi. Made with React & Passion.
                </p>
            </footer>
        </div>
    );
}

export default App;
