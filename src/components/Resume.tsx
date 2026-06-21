import React from 'react';
import { motion } from 'framer-motion';

const resumeData = {
    name: "DHANUSH KODI",
    title: "Fullstack Developer",
    contact: "Tamil Nadu | kodidhanush1402@gmail.com | +91 9043580186",
    objective: "Fullstack Developer with over 2.5 years of industry experience, I bring a proven track record of designing and implementing visually stunning and highly functional user interfaces. Proficient in HTML, CSS, SQL, and JavaScript, React js*, Spring boot. My expertise extends to working with React's popular front-end framework, enabling me to create scalable and maintainable code.",
    experience: [
        {
            title: "Associate Software Developer",
            company: "Techriffs Info Systems",
            location: "Chennai, India",
            project: "UPPLABS (Banking Domain)",
            period: "2022 - Present",
            details: [
                "Developed banking solutions including account creation, transactions, and loan management.",
                "Optimized UI performance using lazy loading and code splitting in React.",
                "Built responsive dashboards with real-time data visualization.",
                "Collaborated with cross-functional teams using Agile/Scrum methodologies."
            ]
        }
    ],
    skills: {
        frontend: ["React JS", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
        backend: ["Node.js", "Spring Boot", "REST APIs", "MySQL", "Hibernate"],
        tools: ["Git", "GitHub", "JIRA", "Agile/Scrum"]
    },
    education: "B.E. Computer Science | Velalar College of Engineering (2018-2022)"
};

const RibbonHeader = ({ text, color, darkColor, lightColor }) => (
    <div style={{ position: 'relative', marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{
            background: `linear-gradient(135deg, ${color}, ${darkColor})`,
            color: '#fff',
            padding: '1rem 3.5rem',
            fontSize: '1.4rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            transform: 'skewX(-15deg)',
            zIndex: 2,
            position: 'relative',
            border: '2px solid rgba(255,255,255,0.1)'
        }}>
            <span style={{ transform: 'skewX(15deg)', display: 'inline-block' }}>{text}</span>
        </div>
        {/* Ribbon Fold (Left) */}
        <div style={{
            position: 'absolute',
            left: 'calc(50% - 180px)',
            bottom: '-12px',
            width: '40px',
            height: '40px',
            background: darkColor,
            transform: 'skewY(45deg)',
            zIndex: 1
        }} />
        {/* Ribbon Fold (Right) */}
        <div style={{
            position: 'absolute',
            right: 'calc(50% - 180px)',
            bottom: '-12px',
            width: '40px',
            height: '40px',
            background: darkColor,
            transform: 'skewY(-45deg)',
            zIndex: 1
        }} />
    </div>
);

const Resume = () => {
    return (
        <div className="resume-section-wrapper">
            <section id="resume-content" style={{ padding: '4rem 0', background: '#fff', color: '#000' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    {/* HEADER */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem', borderBottom: '2px solid #eee', paddingBottom: '2rem' }}>
                        <h1 style={{ fontSize: '3.5rem', margin: 0, color: '#000' }}>{resumeData.name}</h1>
                        <p style={{ fontSize: '1.5rem', color: '#666', fontWeight: 600 }}>{resumeData.title}</p>
                        <p style={{ color: '#888' }}>{resumeData.contact}</p>
                    </div>

                    {/* OBJECTIVE */}
                    <RibbonHeader text="Career Objective" color="#3b82f6" darkColor="#1e3a8a" lightColor="#60a5fa" />
                    <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', background: '#f8fafc', border: '1px solid #e2e8f0', marginBottom: '3rem' }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, fontStyle: 'italic', color: '#334155' }}>
                            "{resumeData.objective}"
                        </p>
                    </div>

                    {/* EXPERIENCE */}
                    <RibbonHeader text="Professional Experience" color="#10b981" darkColor="#065f46" lightColor="#34d399" />
                    {resumeData.experience.map((exp, idx) => (
                        <div key={idx} style={{ padding: '2rem', borderLeft: '6px solid #10b981', background: '#f0fdf4', borderRadius: '0 1rem 1rem 0', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <h3 style={{ margin: 0 }}>{exp.title}</h3>
                                <span style={{ fontWeight: 700, color: '#10b981' }}>{exp.period}</span>
                            </div>
                            <h4 style={{ color: '#666', marginBottom: '1rem' }}>{exp.company} | {exp.location}</h4>
                            <p><strong>Project: {exp.project}</strong></p>
                            <ul style={{ lineHeight: 1.8 }}>
                                {exp.details.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    ))}

                    {/* SKILLS */}
                    <RibbonHeader text="Technical Skills" color="#f59e0b" darkColor="#92400e" lightColor="#fbbf24" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        <div style={{ padding: '1.5rem', background: '#fffbeb', borderRadius: '1rem' }}>
                            <h4 style={{ color: '#b45309' }}>Frontend</h4>
                            {resumeData.skills.frontend.join(', ')}
                        </div>
                        <div style={{ padding: '1.5rem', background: '#f0f9ff', borderRadius: '1rem' }}>
                            <h4 style={{ color: '#0369a1' }}>Backend & DB</h4>
                            {resumeData.skills.backend.join(', ')}
                        </div>
                        <div style={{ padding: '1.5rem', background: '#f5f3ff', borderRadius: '1rem' }}>
                            <h4 style={{ color: '#6d28d9' }}>Tools</h4>
                            {resumeData.skills.tools.join(', ')}
                        </div>
                    </div>

                    {/* EDUCATION */}
                    <RibbonHeader text="Education" color="#6366f1" darkColor="#3730a3" lightColor="#818cf8" />
                    <div style={{ textAlign: 'center', padding: '2rem', background: '#e0e7ff', borderRadius: '1rem' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{resumeData.education}</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Resume;
