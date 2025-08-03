import './App.css';
import ProfileCard from './blocks/Components/ProfileCard/ProfileCard';
import Dock from './blocks/Components/Dock/Dock';
import Lightning from './blocks/Backgrounds/Lightning/Lightning'; // Import Lightning
import TextType from './blocks/TextAnimations/TextType/TextType'; // Import TextType
import ScrambledText from './blocks/TextAnimations/ScrambledText/ScrambledText'; // Import ScrambledText
import { Card, default as CardSwap } from './blocks/Components/CardSwap/CardSwap';
import React, { useState, useEffect, useRef } from 'react';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import SplitText from './blocks/TextAnimations/SplitText/SplitText';
import { FaLaravel, FaReact, FaJs, FaPhp, FaCss3Alt, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHoveringEmail, setIsHoveringEmail] = useState(false);
  const [isHoveringWhatsapp, setIsHoveringWhatsapp] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 3000);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {isLoading && (
        <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
          <SplitText
            text="Welcome to My Portofolio"
            speed={100}
            revealSpeed={500}
            style={{ color: 'white', fontSize: '3em' }}
          />
        </div>
      )}
      <div className={`App ${isLoading ? 'hidden' : ''}`} style={{ overflowX: 'hidden', position: 'relative' }}>
        {/* Prevent horizontal scroll and set relative position */}


        {/* Lightning Background */}
        <div className="lightning-background">
          <Lightning />
        </div>

        {/* Main Content Wrapper - Centers content and sets max width */}
        <div className="main-content-wrapper">
          {/* Content Area: TextType on left, ProfileCard on right */}
          <div ref={homeRef} className="content-area">
            {/* TextType Container */}
            <div className="text-type-container">
              <h1 className="main-heading">I am a freelancer</h1>
              <TextType
                text="Husnul Yaqin"
                speed={100} // Adjust typing speed as needed
                style={{ color: 'white', fontSize: '4em' }}
              />
            </div>

            {/* Profile Card Container */}
            <div className="profile-card-container">
              <div style={{ width: '235px', transform: 'translateX(-120px)' }}> {/* Adjust width to make ProfileCard smaller */}
                <ProfileCard
                  name="Husnul Yaqin"
                  title="Software Engineer"
                  description="Passionate about building scalable web applications."
                  avatarUrl="/husnull.png" // Use /husnull.png after copying to public folder
                  handle="husn"
                />
              </div>
            </div>
          </div>

          {/* About Me Section */}
          <div ref={aboutRef} className="about-me-section">
            <h2 className="about-me-heading">About Me</h2>
            <ScrambledText
              speed={50} // Adjust scrambling speed as needed
              revealSpeed={100} // Adjust reveal speed as needed
              style={{ color: 'white', fontSize: '1.5em', lineHeight: '1.6em', textAlign: 'left', marginTop: '20px' }}
            >
              I am a Web Developer, AI Agent Developer, and Data Entry Specialist with expertise in various modern web technologies. I build interactive and responsive websites using React JS, JavaScript, HTML, CSS, and Bootstrap, and handle back-end development using Laravel. In addition to creating attractive and functional UIs, I also develop AI Agents to help automate tasks such as chatbots and virtual assistants. When it comes to data entry, I'm accustomed to managing large-scale data neatly and accurately to support systems or further data analysis.
            </ScrambledText>
          </div>

          {/* Content Area: TextType on left, ProfileCard on right */}

          {/* CardSwap Section */}
          <div ref={portfolioRef} className="card-swap-section">
            <div className="card-swap-content">
              {/* Left Column: Portfolio Title and Description */}
              <div className="portfolio-description">
                <h2 style={{ fontSize: '3em', marginBottom: '20px' }}>Portfolio</h2>
                <p style={{ fontSize: '1.1em', lineHeight: '1.5em', marginTop: '10px', textAlign: 'left' }}>
                  My Featured Projects<br />
                  Some projects I have worked on include data automation, website development, and AI agent development:<br />
                  - Excel Automation: Processing thousands of data automatically to speed up work processes.<br />
                  - Website Project: Building responsive websites with modern designs and complete features.<br />
                  - AI Agent Project: Creating AI agents that can interact automatically for business needs.<br />
                </p>
              </div>
              {/* Right Column: CardSwap Component */}
              <CardSwap>
                <Card className="card-swap-item">
                  <div className="card-header">
                    <div className="card-header-dots">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                    <div className="card-header-title">Website Project</div>
                  </div>
                  <img src="/website.png" alt="Website Project" className="card-image" />
                </Card>
                <Card className="card-swap-item">
                  <div className="card-header">
                    <div className="card-header-dots">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                    <div className="card-header-title">AI Agent Project</div>
                  </div>
                  <img src="/aiagent.png" alt="AI Agent Project" className="card-image" />
                </Card>
                <Card className="card-swap-item">
                  <div className="card-header">
                    <div className="card-header-dots">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                    <div className="card-header-title">Excel Automation</div>
                  </div>
                  <img src="/excel.jpg" alt="Excel Project" className="card-image" />
                </Card>
              </CardSwap>
            </div>

            {/* Programming Language Section */}
            <div className="programming-language-section">
              <h2 className="programming-language-heading">Programming Language</h2>
              <div className="programming-language-icons">
                <FaLaravel size={50} />
                <FaReact size={50} />
                <FaJs size={50} />
                <FaPhp size={50} />
                <FaCss3Alt size={50} />
                <FaHtml5 size={50} />
                <FaBootstrap size={50} />
              </div>
            </div>
            {/* Contact/Footer Section */}
            <div ref={contactRef} className="contact-footer-section">
              <h2 className="contact-heading">Contact</h2>
              
              <div className="contact-icons">
                {/* Email Icon and Text */}
                <div style={{ position: 'relative' }}>
                  <a
                    href="mailto:yaqinh315@gmail.com"
                    style={{ color: 'white' }}
                    onMouseEnter={() => setIsHoveringEmail(true)}
                    onMouseLeave={() => setIsHoveringEmail(false)}
                  ><MdEmail size={30} /></a>
                  <span className={`email-text ${isHoveringEmail ? 'visible' : ''}`}>yaqinh315@gmail.com</span>
                </div>

                {/* WhatsApp Icon and Text */}
                <div style={{ position: 'relative' }}>
                  <a
                    href="https://wa.me/6287817153137"
                    target="_blank" rel="noopener noreferrer"
                    style={{ color: 'white' }}
                    onMouseEnter={() => setIsHoveringWhatsapp(true)}
                    onMouseLeave={() => setIsHoveringWhatsapp(false)}
                  ><FaWhatsapp size={30} /></a>
                  <span className={`whatsapp-text ${isHoveringWhatsapp ? 'visible' : ''}`}>+62 87817153137</span>
                </div>

                {/* Instagram Icon */}
                <a href="https://instagram.com/hy_thexw/" target="_blank" rel="noopener noreferrer" className={`contact-icon ${isHoveringEmail || isHoveringWhatsapp ? 'shifted' : ''}`}><FaInstagram size={30} /></a>
                {/* GitHub Icon */}
                <a href="https://github.com/hmike-12" target="_blank" rel="noopener noreferrer" className={`contact-icon ${isHoveringEmail || isHoveringWhatsapp ? 'shifted' : ''}`}><FaGithub size={30} /></a>
                {/* LinkedIn Icon */}
                <a href="https.linkedin.com/in/husnul-yaqin-645511273/" target="_blank" rel="noopener noreferrer" className={`contact-icon ${isHoveringEmail || isHoveringWhatsapp ? 'shifted' : ''}`}><FaLinkedin size={30} /></a>
              </div>
              <p className="copyright-text">
                &copy; {new Date().getFullYear()} Husnul Yaqin. All rights reserved.
              </p>
            </div>
          </div>

        </div>

        
        {/* Dock at the bottom */}
        <div className="dock-container">
          <Dock 
            items={[
              { icon: <VscHome size={18} color='white' />, label: 'Home', onClick: () => scrollToSection(homeRef) },
              { icon: <VscArchive size={18} color='white' />, label: 'About', onClick: () => scrollToSection(aboutRef) },
              { icon: <VscAccount size={18} color='white' />, label: 'Portofolio', onClick: () => scrollToSection(portfolioRef) },
              { icon: <VscSettingsGear size={18} color='white' />, label: 'Contact', onClick: () => scrollToSection(contactRef) },
            ]}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>
        {/* You can add other content here if needed */}
      </div>
    </>
  );
}

export default App;
