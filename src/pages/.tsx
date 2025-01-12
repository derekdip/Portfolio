//import styles from '@styles/Home.module.css'
import Footer from '@components/footer'
import Header from '@components/header';
import { GetPaletteContext } from '@styles/paletteContext';
import ProjectCard from '@components/card';
import {projects} from '@helpers/projects'
import React from 'react';
export default function Home() {
  return(<HomePage/>)
}


const HomePage = () => {
  return (
    <div style={styles.container as React.CSSProperties}>
      {/* Header */}
      <header style={styles.header as React.CSSProperties}>
        <h1 style={styles.title}>Welcome to Sandy Trees</h1>
        <p style={styles.subtitle}>Unique Cross-Platform VR and Mobile Games</p>
      </header>

      {/* Mission Statement */}
      <section style={styles.missionSection as React.CSSProperties}>
        <h2 style={styles.missionTitle}>Our Mission</h2>
        <p style={styles.missionText}>
          Sandy Trees focuses on creating immersive, fun, and unique cross-platform VR and mobile experiences
          that bring people together in exciting new worlds. Whether you're on a VR headset or your phone, our
          games offer something for everyone.
        </p>
      </section>

      {/* Video Demo */}
      <section style={styles.videoSection as React.CSSProperties}>
        <h2 style={styles.sectionTitle}>Watch Our Demo</h2>
        <div style={styles.videoContainer}>
          <iframe
            style={styles.videoSection as React.CSSProperties }
            width="100%"
            height="500"
            src="/demo.mp4"
            title="Sandy Trees Game Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contactSection as React.CSSProperties}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.contactText}>
          Have questions? Interested in partnering with us? Reach out!
        </p>
        <p style={styles.contactInfo}>
          Email us at: <a href="mailto:contact@sandytrees.com" style={styles.contactLink}>contact@sandytrees.com</a>
        </p>
      </section>

      {/* Footer */}
      <footer style={styles.footer as React.CSSProperties}>
        <p style={styles.footerText}>© 2025 Sandy Trees. All rights reserved.</p>
      </footer>
    </div>
  );
};
const colorHead = "grey"
const colorBody = "#c9b569"
const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f4f4f4',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      backgroundColor: '#008080',
      color: 'white',
      padding: '50px 20px',
      textAlign: 'center',
      width: '100%',
    },
    title: {
      fontSize: '3rem',  // Adjust font size to fit larger screens
      margin: 0,
      '@media (max-width: 768px)': {
        fontSize: '2rem',  // Smaller font size on tablets
      },
      '@media (max-width: 480px)': {
        fontSize: '1.5rem',  // Even smaller font size on mobile
      },
    },
    subtitle: {
      fontSize: '1.5rem',
      marginTop: '10px',
      '@media (max-width: 768px)': {
        fontSize: '1.2rem',
      },
      '@media (max-width: 480px)': {
        fontSize: '1rem',
      },
    },
    missionSection: {
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      width: '100%',
    },
    missionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      '@media (max-width: 768px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width: 480px)': {
        fontSize: '1.2rem',
      },
    },
    missionText: {
      fontSize: '1.2rem',
      color: '#555',
      maxWidth: '800px',
      margin: '0 auto',
      '@media (max-width: 768px)': {
        fontSize: '1rem',
      },
      '@media (max-width: 480px)': {
        fontSize: '0.9rem',
      },
    },
    videoSection: {
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      width: '100%',
    },
    videoContainer: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      '@media (max-width: 768px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width: 480px)': {
        fontSize: '1.2rem',
      },
    },
    contactSection: {
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      width: '100%',
    },
    contactText: {
      fontSize: '1.2rem',
      color: '#555',
      marginBottom: '10px',
      '@media (max-width: 768px)': {
        fontSize: '1rem',
      },
      '@media (max-width: 480px)': {
        fontSize: '0.9rem',
      },
    },
    contactInfo: {
      fontSize: '1.2rem',
    },
    contactLink: {
      color: '#008080',
      textDecoration: 'none',
    },
    footer: {
      backgroundColor: '#008080',
      color: 'white',
      padding: '20px',
      width: '100%',
      textAlign: 'center',
    },
    footerText: {
      margin: 0,
      fontSize: '1rem',
    },
  };
  


//export default HomePage;
