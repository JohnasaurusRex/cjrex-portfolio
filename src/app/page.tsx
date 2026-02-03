'use client'

import React, { useState, useEffect, JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { 
  DiReact, 
  DiNodejsSmall, 
  DiPython, 
  DiJavascript1, 
  DiAws,
  DiMysql
} from 'react-icons/di';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiVuedotjs, 
  SiNextdotjs, 
  SiFastapi, 
  SiFlask, 
  SiPostgresql, 
  SiVercel, 
  SiDigitalocean, 
  SiFigma, 
  SiTensorflow, 
  SiNumpy, 
  SiKeras,
  SiLinkedin,
  SiGmail,
  SiTelegram
} from 'react-icons/si';
import { FaDownload, FaComments, FaGithub, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

// TypeScript Interfaces
interface TechStack {
  icon: IconType;
  name: string;
  color: string;
}

interface WorkExperience {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Project {
  title: string;
  description: string;
  accuracy?: string;
  technologies: string[];
  github?: string;
  live?: string;
  link?: string;
}

interface NavItem {
  name: string;
  id: string;
}

export default function Portfolio(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const techStacks: TechStack[] = [
    { icon: DiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: DiNodejsSmall, name: 'Node.js', color: '#339933' },
    { icon: DiPython, name: 'Python', color: '#3776AB' },
    { icon: DiJavascript1, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D' },
    { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
    { icon: SiFlask, name: 'Flask', color: '#000000' },
    { icon: DiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiVercel, name: 'Vercel', color: '#000000' },
    { icon: DiAws, name: 'AWS', color: '#FF9900' },
    { icon: SiDigitalocean, name: 'DigitalOcean', color: '#0080FF' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
    { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
    { icon: SiNumpy, name: 'NumPy', color: '#013243' },
    { icon: SiKeras, name: 'Keras', color: '#D00000' }
  ];

  const workExperience: WorkExperience[] = [
    {
      title: "Full Stack Developer",
      company: "Advanced AI Development",
      period: "Jan 2025 – June 2025",
      description: "Designed advanced AI agents to analyze and summarize crypto market data for strategic insights, and developed six high-availability React web systems with robust emergency protocols.",
      technologies: ["React", "AI/ML", "AWS", "Digital Ocean", "Discord Bots"]
    },
    {
      title: "Junior Web Developer - Intern", 
      company: "Wela School Systems",
      location: "Cagayan De Oro",
      period: "Jun 2024 - Nov 2024",
      description: "Enhanced the school forms of a school management system using Frappe framework for efficient operations. Created efficient Frappe web pages with Python.",
      technologies: ["Python", "Frappe", "Web Development"]
    }
  ];

  const projects: Project[] = [
    {
      title: "Abaca Fiber Grade Image Classification",
      description: "Developed a classifier model to predict abaca fiber grade using VGGNet CNN architecture for supervised learning and K-means Clustering with Grid Search and Random Forest Classifier for unsupervised learning model.",
      accuracy: "91% (Supervised) | 97% (Unsupervised)",
      technologies: ["Python", "TensorFlow", "Machine Learning", "Computer Vision"],
      link: "https://drive.google.com/file/d/112TUKLFwt2fvM0evFr8uAemQn6L-kUU7/view"
    },
    {
      title: "JobMatch Analyzer",
      description: "Developed a resume analyzer web application using React JS with Flask to evaluate resume compatibility with specific job descriptions using Google Gemini AI API.",
      technologies: ["React", "Flask", "NLP", "Google Gemini AI"],
      github: "https://github.com/JohnasaurusRex/jobmatch-v2",
      live: "https://jobmatch-v2.cjrex.online/"
    }
  ];

  const navItems: NavItem[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const downloadCV = (): void => {
    // In a real implementation, you'd link to your actual CV file
    window.open('/chris-john-rex-cv.pdf', '_blank');
  };

  const handleContactClick = (): void => {
    scrollToSection('contact');
  };

  if (!mounted) {
    return <div className="min-h-screen bg-slate-900"></div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CJREX
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item: NavItem) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-purple-500 transition-colors ${
                    activeSection === item.id ? 'text-purple-500' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-purple-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl text-gray-300">Hello It&apos;s Me</h2>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent">
                Chris John Rex
              </h1>
              <div className="flex items-center gap-2 text-2xl md:text-3xl">
                <span className="text-gray-300">And I&apos;m a</span>
                <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent font-bold">
                  Full-stack Developer
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 max-w-md leading-relaxed">
              Highly motivated and results-oriented Computer Science graduate with strong expertise in web development, cybersecurity, and database security. Passionate about creating innovative solutions and leveraging cutting-edge technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={downloadCV}
                className="bg-gradient-to-r from-purple-700 to-purple-800 px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-purple-700/25 transition-all duration-300"
              >
                <FaDownload />
                Download CV
              </button>
              <button 
                onClick={handleContactClick}
                className="border border-purple-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-700/20 transition-all duration-300"
              >
                <FaComments />
                Let&apos;s Talk
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Link 
                href="https://github.com/JohnasaurusRex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-purple-700 transition-colors"
              >
                <FaGithub size={20} />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/chris-john-rex-pajal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-purple-700 transition-colors"
              >
                <SiLinkedin size={20} />
              </Link>
              <Link 
                href="mailto:cjcanoy45@gmail.com" 
                className="p-3 rounded-full bg-slate-800 hover:bg-purple-700 transition-colors"
              >
                <SiGmail size={20} />
              </Link>
              <Link 
                href="tel:+639274670299" 
                className="p-3 rounded-full bg-slate-800 hover:bg-purple-700 transition-colors"
              >
                <FaPhone size={20} />
              </Link>
              <Link 
                href="#" 
                className="p-3 rounded-full bg-slate-800 hover:bg-purple-700 transition-colors"
              >
                <SiTelegram size={20} />
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-700/20 to-purple-800/20 border-4 border-purple-700/40 p-2 hover:border-purple-600/70 transition-all duration-300 hover:scale-105">
              <Image
                src="/CJ-Portrait.png"
                alt="Chris John Rex Pajal - Full Stack Developer"
                width={320}
                height={320}
                className="rounded-full object-cover w-full h-full"
                priority
                quality={95}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="about" className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {techStacks.map((tech: TechStack, index: number) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="group relative">
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-purple-700/30 hover:border-purple-600/60 transition-all duration-300 hover:scale-110">
                    <IconComponent 
                      size={40} 
                      style={{ color: tech.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {workExperience.map((job: WorkExperience, index: number) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30 hover:border-purple-600/60 transition-all duration-300 hover:transform hover:scale-105">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-purple-500">{job.title}</h3>
                    <p className="text-gray-300">{job.company}</p>
                    {job.location && <p className="text-gray-400 text-sm">{job.location}</p>}
                    <p className="text-purple-400 text-sm">{job.period}</p>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-purple-700/20 text-purple-400 rounded-full text-xs border border-purple-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project: Project, index: number) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30 hover:border-purple-600/60 transition-all duration-300 hover:transform hover:scale-105">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-purple-500">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-500 transition-colors"
                        >
                          <FaGithub size={20} />
                        </Link>
                      )}
                      {project.live && (
                        <Link 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-500 transition-colors"
                        >
                          <FaExternalLinkAlt size={20} />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                  {project.accuracy && (
                    <p className="text-green-400 font-semibold">Accuracy: {project.accuracy}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-purple-700/20 text-purple-400 rounded-full text-xs border border-purple-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I&apos;m available for freelance projects and full-time opportunities. Let&apos;s create something amazing together!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <FaPhone className="text-purple-500" />
              <span>(+63) 927-467-0299</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <SiGmail className="text-purple-500" />
              <span>cjcanoy45@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-purple-500" />
              <span>Philippines</span>
            </div>
          </div>
          <Link 
            href="mailto:cjcanoy45@gmail.com"
            className="inline-block bg-gradient-to-r from-purple-700 to-purple-800 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-700/25 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-700/30 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Chris John Rex Pajal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}