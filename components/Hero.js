import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        backgroundImage: `url('/images/hero1.jpg')`, // You'll need to add this image to public/images
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Gradient overlay for better text readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '2rem',
          maxWidth: '900px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <div 
          style={{ 
            marginBottom: '1.5rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '0.2s'
          }}
        >
          <h1 
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Empowering the Silenced to Lead: Your Voice, Unleashed.
          </h1>
          <p 
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
              marginBottom: '2.5rem', 
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto 2.5rem auto',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            LeadWise Foundation is dismantling systemic barriers through advocacy, education, and one-on-one empowerment.
            We champion voices that systems have ignored — especially women, marginalized communities, and underrepresented talent in tech and education.
          </p>
        </div>
        
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '0.4s'
          }}
        >
          <a
            href="/donate"
            style={{
              padding: '0.9rem 2rem',
              backgroundColor: '#ff6f61',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(255, 111, 97, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'inline-block',
              letterSpacing: '0.5px',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 111, 97, 0.6)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 111, 97, 0.4)';
            }}
          >
            Donate Now
          </a>
          <a
            href="/get-involved"
            style={{
              padding: '0.9rem 2rem',
              backgroundColor: 'transparent',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: 'bold',
              border: '2px solid #fff',
              transition: 'background-color 0.3s ease, color 0.3s ease',
              display: 'inline-block',
              letterSpacing: '0.5px',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            Get Involved
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div 
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: isVisible ? 0.8 : 0,
            transition: 'opacity 0.8s ease-out',
            transitionDelay: '1s',
            animation: 'bounce 2s infinite',
          }}
        >
          <style jsx>{`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-10px);
              }
              60% {
                transform: translateY(-5px);
              }
            }
          `}</style>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
