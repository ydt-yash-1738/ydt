import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Code } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStack = [
    { 
      name: 'MongoDB', 
      icon: () => (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="#4DB33D"/>
        </svg>
      ), 
      color: 'text-green-400' 
    },
    { 
      name: 'Express.js', 
      icon: () => (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9-.666L18.281 10.5l3.543-4.734a1.435 1.435 0 011.85-.67L18.622 11.5 24 18.588zm-20.267 2.179l.267-.36 9.418-12.415.133-.183a.984.984 0 011.39-.24.877.877 0 01.23 1.364L5.893 18.507a.885.885 0 01-1.4.257.988.988 0 01-.26-1.387z" fill="#68A063"/>
        </svg>
      ), 
      color: 'text-gray-200' 
    },
    { 
      name: 'React.js', 
      icon: () => (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.943.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.990-1.36-1.56z" fill="#00D8FF"/>
        </svg>
      ), 
      color: 'text-cyan-400' 
    },
    { 
      name: 'Node.js', 
      icon: () => (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.271-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="#689F63"/>
        </svg>
      ), 
      color: 'text-green-500' 
    }
  ];

  const handleContactClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=yashdt50@gmail.com&body=Body%20Here', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/ydt1738', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/ydt-yash-1738', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Section - Main Content */}
          <div className={`space-y-6 sm:space-y-8 text-center lg:text-left ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-block">
                <span className="text-cyan-400 text-base sm:text-lg font-medium tracking-wider animate-pulse">
                  Hello, I'm
                </span>
              </div>
              
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
                <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                  Yashdev
                </span>
                <br />
                <span className="text-cyan-400">Tiwari</span>
              </h1>
              
              <div className={`space-y-2 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">
                  MERN Stack Developer
                </h2>
                <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
                  Crafting full-stack web applications with modern technologies and clean code.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className={`${isVisible ? 'animate-slide-up delay-500' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-cyan-400 font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Tech Stack</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto lg:mx-0">
                {techStack.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group"
                      style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                    >
                      <div className={`${tech.color} group-hover:scale-110 transition-transform`}>
                        <IconComponent />
                      </div>
                      <span className="text-gray-300 font-medium text-sm sm:text-base">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Button */}
            <div className={`${isVisible ? 'animate-slide-up delay-700' : 'opacity-0 translate-y-8'}`}>
              <button
                onClick={handleContactClick}
                className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-lg hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/30 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                Get In Touch
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Social Links */}
            <div className={`flex justify-center lg:justify-start space-x-4 sm:space-x-6 ${isVisible ? 'animate-fade-in delay-1000' : 'opacity-0'}`}>
              <button
                onClick={handleLinkedInClick}
                className="p-2 sm:p-3 rounded-full border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleGithubClick}
                className="p-2 sm:p-3 rounded-full border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:scale-110"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Right Section - Visual Element */}
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <div className={`relative ${isVisible ? 'animate-slide-left delay-500' : 'opacity-0 translate-x-12'}`}>
              {/* Main circle - responsive sizing */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-cyan-400/30 relative animate-spin-slow">
                <div className="absolute inset-3 sm:inset-4 rounded-full border border-cyan-400/20"></div>
                <div className="absolute inset-6 sm:inset-8 rounded-full border border-cyan-400/10"></div>
                
                {/* Floating elements */}
                <div className="absolute top-3 sm:top-4 right-6 sm:right-8 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 sm:bottom-8 left-3 sm:left-4 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full animate-pulse delay-500"></div>
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Code className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-cyan-400 mx-auto mb-3 sm:mb-4 animate-float" />
                    <div className="text-xs sm:text-sm text-gray-400 font-medium">MERN Stack</div>
                    <div className="text-base sm:text-lg text-cyan-400 font-bold">Developer</div>
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                <div className="absolute -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full shadow-lg shadow-cyan-400/30"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 right-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-300 to-cyan-200 rounded-full shadow-lg shadow-cyan-300/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-left {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
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
    </div>
  );
};

export default Portfolio;