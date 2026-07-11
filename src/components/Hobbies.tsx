import React from 'react';
import SectionHeading from './SectionHeading';

const hobbiesData = [
    {
        id: 'projects',
        title: 'New Development Projects',
        description: 'Constantly building and experimenting with new tech.',
        image: './assets/hobbies/projects.png',
        span: 'span-large'
    },
    {
        id: 'music',
        title: 'Listening to Music',
        description: 'Enjoying immersive and curated soundscapes.',
        image: './assets/hobbies/music.png',
        span: 'span-wide'
    },
    {
        id: 'skating',
        title: 'Skating',
        description: 'Riding the streets and mastering new tricks.',
        image: './assets/hobbies/skating.png',
        span: 'span-wide'
    },
    {
        id: 'travel',
        title: 'Travelling & Tourism',
        description: 'Discovering new places, cultures, and landscapes.',
        image: './assets/hobbies/travel.png',
        span: 'span-tall'
    },
    {
        id: 'cricket',
        title: 'Cricket',
        description: 'Enjoying the strategic and dynamic game of cricket.',
        image: './assets/hobbies/cricket.png',
        span: 'span-large'
    },
    {
        id: 'pets',
        title: 'Pets',
        description: 'Spending quality time with furry companions.',
        image: './assets/hobbies/pets.png',
        span: 'span-small'
    },
    {
        id: 'books',
        title: 'Reading Historic Books',
        description: 'Exploring the depths of history through literature.',
        image: './assets/hobbies/books.png',
        span: 'span-small'
    },
    {
        id: 'horse_riding',
        title: 'Horse Riding',
        description: 'Connecting with nature on horseback.',
        image: './assets/hobbies/horse_riding.png',
        span: 'span-large'
    },
    {
        id: 'agriculture',
        title: 'Agriculture & Farming',
        description: 'Connecting with nature through sustainable farming.',
        image: './assets/hobbies/agriculture.png',
        span: 'span-wide'
    },
    {
        id: 'handball',
        title: 'Handball',
        description: 'Staying active with fast-paced handball matches.',
        image: './assets/hobbies/handball.png',
        span: 'span-wide'
    }
];

const Hobbies = () => {
    return (
        <section id="hobbies" className="section" style={{ padding: '0', margin: '0', position: 'relative' }}>
            <div className="container hobbies-bento-container" style={{ position: 'relative', zIndex: 10 }}>
                <SectionHeading title="Passions & Interests" subtitle="hobbies" />

                <div className="hobbies-grid">
                    {hobbiesData.map((hobby) => (
                        <div key={hobby.id} className={`hobby-card glass ${hobby.span}`}>
                            <div className="hobby-image-container">
                                <img src={hobby.image} alt={hobby.title} className="hobby-image" loading="lazy" />
                                <div className="hobby-overlay">
                                    <h3 className="hobby-title">{hobby.title}</h3>
                                    <p className="hobby-desc">{hobby.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
