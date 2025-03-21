// src/app/page.tsx

'use client';

export default function HomePage() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div className="background" />

      {/* Semi-Transparent Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 2,
        }}
      />

      {/* Foreground Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        <h1 className="comingSoon">Coming Soon</h1>
        <p className="description">
          News, events, updates, and forums. Stay tuned for more!
        </p>
      </div>

      <style jsx>{`
        /* Background images and media queries */
        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('/images/001_259a6c.webp') no-repeat center center;
          background-size: cover;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .background {
            background: url('/images/marvel-rivals-wq3mr.png') no-repeat center center;
            background-size: cover;
          }
        }

        /* "Coming Soon" heading */
        .comingSoon {
          font-family: 'RefrigeratorDeluxeHeavy';
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: clamp(3rem, 10vw, 7rem);
          margin-bottom: 1rem;
          color: #fff;

          /* Pop-in animation */
          animation: popIn 0.8s ease-out forwards;
          opacity: 0; /* hidden until animation starts */

          /* Hover effect */
          cursor: pointer;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .comingSoon:hover {
          transform: scale(1.1);
          color: #f5c618;
        }

        /* Description paragraph (thinner style) */
        .description {
          font-family: 'RefrigeratorDeluxeHeavy';
          /* Smaller range for a thinner look */
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          max-width: 600px;
          line-height: 1.3;
          color: #fff;
          margin: 0;

          /* Fade-slide animation with a slight delay */
          animation: fadeSlideUp 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0; /* hidden until animation starts */
        }

        /* Keyframes for heading (pop-in) */
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1; /* ensure it remains visible at the end */
            transform: scale(1);
          }
        }

        /* Keyframes for paragraph (fade-slide) */
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}