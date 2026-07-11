import React from 'react';
import { motion } from 'framer-motion';

// Importing official icons from react-icons
import { FaJava, FaNodeJs, FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaJs, FaAws, FaExchangeAlt, FaCloudUploadAlt, FaServer, FaGitAlt, FaGithub, FaGitlab, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { SiSpringboot, SiTypescript, SiApachekafka, SiRabbitmq, SiNx } from 'react-icons/si';
import { VscServerProcess, VscAzure } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import SectionHeading from './SectionHeading';

const Skills = () => {
    // Categorized skills data
    const skillsCategories = [
        {
            title: "Frontend",
            skills: [
                { name: 'React', experience: '4 yrs experience', level: 'Expert', progress: 95, color: '#61DAFB', tags: ['Hooks', 'Context', 'Redux'], icon: <FaReact size={32} color="#61DAFB" /> },
                { name: 'JavaScript (ES6+)', experience: '4 yrs experience', level: 'Expert', progress: 90, color: '#F7DF1E', tags: ['ES2022', 'Async', 'DOM'], icon: <FaJs size={32} color="#F7DF1E" /> },
                { name: 'TypeScript', experience: '4 yrs experience', level: 'Advanced', progress: 85, color: '#3178C6', tags: ['Types', 'Interfaces'], icon: <SiTypescript size={30} color="#3178C6" /> },
                { name: 'HTML5', experience: '4 yrs experience', level: 'Expert', progress: 95, color: '#E34F26', tags: ['Semantic', 'Accessibility'], icon: <FaHtml5 size={32} color="#E34F26" /> },
                { name: 'CSS3', experience: '4 yrs experience', level: 'Expert', progress: 90, color: '#1572B6', tags: ['Flexbox', 'Grid', 'Animations'], icon: <FaCss3Alt size={32} color="#1572B6" /> },
                { name: 'Bootstrap', experience: '4 yrs experience', level: 'Advanced', progress: 85, color: '#7952B3', tags: ['Responsive', 'Components'], icon: <FaBootstrap size={32} color="#7952B3" /> }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: 'Java / Core Java', experience: '4 yrs experience', level: 'Expert', progress: 90, color: '#f89820', tags: ['OOP', 'Collections', 'Multithreading'], icon: <FaJava size={32} color="#f89820" /> },
                { name: 'Spring Boot', experience: '4 yrs experience', level: 'Advanced', progress: 85, color: '#6DB33F', tags: ['MVC', 'JPA', 'Security'], icon: <SiSpringboot size={32} color="#6DB33F" /> },
                { name: 'Node.js', experience: '4 yrs experience', level: 'Advanced', progress: 80, color: '#339933', tags: ['Express', 'Event Loop'], icon: <FaNodeJs size={32} color="#339933" /> },
                { name: 'REST API', experience: '4 yrs experience', level: 'Expert', progress: 95, color: '#FF5733', tags: ['Design', 'Security', 'Integration'], icon: <TbApi size={32} color="#FF5733" /> },
                { name: 'Microservices', experience: '4 yrs experience', level: 'Advanced', progress: 80, color: '#00ADD8', tags: ['Architecture', 'Scaling'], icon: <VscServerProcess size={32} color="#00ADD8" /> }
            ]
        },
        {
            title: "Messaging & Streaming",
            skills: [
                { name: 'Apache Kafka', experience: '4 yrs experience', level: 'Advanced', progress: 80, color: '#231F20', tags: ['Topics', 'Partitions', 'Streaming'], icon: <SiApachekafka size={32} color="#fff" /> },
                { name: 'RabbitMQ', experience: '4 yrs experience', level: 'Advanced', progress: 85, color: '#FF6600', tags: ['Queues', 'Exchanges'], icon: <SiRabbitmq size={32} color="#FF6600" /> },
                { name: 'ActiveMQ', experience: '4 yrs experience', level: 'Advanced', progress: 80, color: '#D9281A', tags: ['JMS', 'Brokers'], icon: <FaExchangeAlt size={30} color="#D9281A" /> },
                { name: 'Azure Event Hub', experience: '4 yrs experience', level: 'Advanced', progress: 80, color: '#0089D6', tags: ['Big Data', 'Ingestion'], icon: <VscAzure size={30} color="#0089D6" /> },
                { name: 'Azure Service Bus', experience: '4 yrs experience', level: 'Advanced', progress: 85, color: '#0089D6', tags: ['Pub/Sub', 'Queues'], icon: <VscAzure size={30} color="#0089D6" /> },
                { name: 'IBM MQ', experience: '4 yrs experience', level: 'Advanced', progress: 75, color: '#052FAD', tags: ['Enterprise', 'Messaging'], icon: <FaServer size={30} color="#052FAD" /> }
            ]
        },
        {
            title: "Cloud & File Transfer",
            skills: [
                { name: 'Azure Cloud', experience: '4 yrs experience', level: 'Advanced', progress: 85, color: '#0089D6', tags: ['Services', 'Deployment'], icon: <VscAzure size={30} color="#0089D6" /> },
                { name: 'AWS S3', experience: '4 yrs experience', level: 'Advanced', progress: 85, color: '#FF9900', tags: ['Storage', 'Buckets'], icon: <FaAws size={32} color="#FF9900" /> },
                { name: 'SFTP / FTP', experience: '4 yrs experience', level: 'Advanced', progress: 90, color: '#4CAF50', tags: ['File Transfer', 'Security'], icon: <FaCloudUploadAlt size={32} color="#4CAF50" /> },
                { name: 'SMTP', experience: '4 yrs experience', level: 'Advanced', progress: 85, color: '#E91E63', tags: ['Email Protocol', 'Integrations'], icon: <FaEnvelope size={30} color="#E91E63" /> }
            ]
        },
        {
            title: "Architecture & Tools",
            skills: [
                { name: 'Nx Monorepo', experience: '4 yrs experience', level: 'Advanced', progress: 80, color: '#00308F', tags: ['Workspaces', 'Scaling'], icon: <SiNx size={30} color="#00308F" /> },
                { name: 'Git (GitHub)', experience: '4 yrs experience', level: 'Expert', progress: 95, color: '#ffffff', tags: ['Version Control', 'PRs'], icon: <FaGithub size={32} color="#ffffff" /> },
                { name: 'GitLab', experience: '4 yrs experience', level: 'Advanced', progress: 85, color: '#FCA121', tags: ['CI/CD', 'Pipelines'], icon: <FaGitlab size={32} color="#FCA121" /> },
                { name: 'Agile/Scrum', experience: '4 yrs experience', level: 'Expert', progress: 95, color: '#FFC107', tags: ['Sprints', 'JIRA', 'Teamwork'], icon: <FaProjectDiagram size={30} color="#FFC107" /> }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="skills" style={{ padding: '0', margin: '0' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <SectionHeading title="Technical Skills" subtitle="my toolkit" />

                {skillsCategories.map((category, catIdx) => (
                    <div key={category.title} style={{ marginBottom: '5rem' }}>
                        <motion.h3 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ 
                                fontSize: '2rem', 
                                marginBottom: '2rem', 
                                color: 'var(--text-primary)',
                                borderBottom: '2px solid rgba(255,255,255,0.1)',
                                paddingBottom: '1rem',
                                display: 'inline-block'
                            }}
                        >
                            {category.title}
                        </motion.h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                                gap: '2rem'
                            }}
                        >
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    variants={cardVariants}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    style={{
                                        background: 'var(--bg-secondary)', // Theme-aware card background
                                        borderTop: `4px solid ${skill.color === '#ffffff' ? '#666' : skill.color}`,
                                        borderRadius: '16px',
                                        padding: '1.8rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.5rem',
                                        boxShadow: 'var(--glass-shadow)',
                                        border: '1px solid var(--glass-border)',
                                        borderTopWidth: '4px' // Override the 1px to keep the color bar
                                    }}
                                >
                                    {/* Top Row: Icon & Badge */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div style={{
                                            width: '56px', height: '56px',
                                            background: skill.color === '#ffffff' ? 'rgba(255,255,255,0.05)' : `${skill.color}15`, 
                                            borderRadius: '14px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            border: `1px solid ${skill.color === '#ffffff' ? 'rgba(255,255,255,0.1)' : `${skill.color}30`}`
                                        }}>
                                            {skill.icon}
                                        </div>
                                        <div style={{
                                            color: skill.color === '#ffffff' ? '#fff' : skill.color,
                                            fontSize: '0.8rem', fontWeight: 700,
                                            padding: '6px 12px',
                                            background: skill.color === '#ffffff' ? 'rgba(255,255,255,0.1)' : `${skill.color}1a`,
                                            borderRadius: '20px',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {skill.level}
                                        </div>
                                    </div>
                                    
                                    {/* Middle Row: Titles & Bar */}
                                    <div>
                                        <h3 style={{ margin: '0 0 6px 0', fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 800 }}>{skill.name}</h3>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{skill.experience}</span>
                                            <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 700 }}>{skill.progress}%</span>
                                        </div>
                                        
                                        <div style={{ 
                                            width: '100%', 
                                            height: '8px', 
                                            background: 'var(--bg-primary)', 
                                            borderRadius: '6px', 
                                            overflow: 'hidden',
                                            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)'
                                        }}>
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                                                style={{ 
                                                    height: '100%', 
                                                    background: skill.color === '#ffffff' ? '#aaa' : skill.color, 
                                                    borderRadius: '6px',
                                                    boxShadow: `0 0 10px ${skill.color === '#ffffff' ? '#aaa' : skill.color}60`
                                                }}
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Bottom Row: Tags */}
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
                                        {skill.tags.map(tag => (
                                            <span key={tag} style={{
                                                background: 'var(--bg-primary)', 
                                                color: 'var(--text-secondary)',
                                                padding: '5px 12px', 
                                                borderRadius: '8px',
                                                fontSize: '0.8rem', 
                                                fontWeight: 500,
                                                border: '1px solid var(--glass-border)'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
