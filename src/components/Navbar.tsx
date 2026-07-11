import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className="glass main-nav" style={{
            position: 'fixed',
            zIndex: 1000,
            display: 'flex',
            gap: '1rem',
            padding: '1rem 0.5rem',
            borderRadius: '2rem',
            // Default desktop styles (overridden in CSS for mobile)
            top: '50%',
            left: '2rem',
            transform: 'translateY(-50%)',
            flexDirection: 'column',
        }}>
            {[
                {
                    name: 'Home',
                    href: '#home',
                    color: '#3b82f6', // Blue
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                },
                {
                    name: 'Experience',
                    href: '#experience',
                    color: '#8b5cf6', // Purple
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                },
                {
                    name: 'Education',
                    href: '#education',
                    color: '#0ea5e9', // Cyan
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                },
                {
                    name: 'Skills',
                    href: '#skills',
                    color: '#10b981', // Green
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                },
                {
                    name: 'Projects',
                    href: '#projects',
                    color: '#f59e0b', // Orange
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                },
                {
                    name: 'Hobbies',
                    href: '#hobbies',
                    color: '#ec4899', // Pink
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                },
                {
                    name: 'Contact',
                    href: '#contact',
                    color: '#ef4444', // Red
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                },
                {
                    name: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
                    color: theme === 'dark' ? '#facc15' : '#4f46e5', // Yellow for light, Indigo for dark
                    icon: theme === 'dark' ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    ),
                    action: toggleTheme
                }
            ].map((item, idx) => (
                <div key={item.name} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="nav-item-wrapper">
                    <a
                        href={item.action ? undefined : item.href}
                        onClick={(e) => {
                            if (item.action) {
                                e.preventDefault();
                                item.action();
                            }
                        }}
                        className="nav-icon"
                        style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: item.color, // Always colored
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: `1px solid ${item.color}66`, // Colored border 40% opacity
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: `0 4px 10px ${item.color}1a`, // Subtle default glow
                            zIndex: 2
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = `0 10px 20px ${item.color}4d`; // 30% opacity on hover
                            e.currentTarget.style.borderColor = item.color;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = `0 4px 10px ${item.color}1a`;
                            e.currentTarget.style.borderColor = `${item.color}66`;
                        }}
                    >
                        {item.icon}
                    </a>
                    <div className="nav-tooltip" style={{
                        '--tooltip-bg': item.color,
                        boxShadow: `0 5px 15px ${item.color}66`
                    }}>
                        {item.name}
                        <div className="nav-tooltip-arrow" style={{
                            '--tooltip-bg': item.color
                        }} />
                    </div>
                </div>
            ))}
        </nav>
    );
};

export default Navbar;
