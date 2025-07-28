import React from 'react';

const PortfolioStyles = () => {
  return (
    <style jsx>{`
      body, html {
        overflow: hidden;
        height: 100vh;
        height: 100dvh; /* Dynamic viewport height for modern browsers */
        width: 100vw;
        margin: 0;
        padding: 0;
        position: fixed; /* Prevents Chrome mobile scrolling */
        top: 0;
        left: 0;
      }
      
      /* Chrome mobile specific fix */
      @supports (-webkit-touch-callout: none) {
        body, html {
          height: -webkit-fill-available;
        }
        
        .chrome-mobile-fix {
          height: -webkit-fill-available !important;
          min-height: -webkit-fill-available !important;
        }
      }
      
      /* Additional Chrome mobile viewport fix */
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        .chrome-mobile-fix {
          height: 100vh !important;
          min-height: 100vh !important;
        }
      }
      
      @keyframes grid-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slide-up {
        from { 
          opacity: 0; 
          transform: translateY(20px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
      
      @keyframes slide-left {
        from { 
          opacity: 0; 
          transform: translateX(30px); 
        }
        to { 
          opacity: 1; 
          transform: translateX(0); 
        }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-fade-in {
        animation: fade-in 1s ease-out forwards;
      }
      
      .animate-slide-up {
        animation: slide-up 0.8s ease-out forwards;
      }
      
      .animate-slide-left {
        animation: slide-left 1s ease-out forwards;
      }
      
      .delay-300 {
        animation-delay: 0.3s;
      }
      
      .delay-500 {
        animation-delay: 0.5s;
      }
      
      .delay-700 {
        animation-delay: 0.7s;
      }
      
      .delay-1000 {
        animation-delay: 1s;
      }
    `}</style>
  );
};

export default PortfolioStyles;