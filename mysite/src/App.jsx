// // MOVEMENT OF HEXAGONAL ELEMENT
// import React, { useState, useEffect, useRef } from 'react';
// import { Mail, Linkedin, Github, ExternalLink, Code } from 'lucide-react';

// const Portfolio = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const hexagonRef = useRef(null);
  
//   // Generate stable particle data once
//   const [particles] = useState(() => 
//     [...Array(15)].map((_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       top: Math.random() * 100,
//       animationDelay: Math.random() * 3,
//       animationDuration: 2 + Math.random() * 3
//     }))
//   );

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (window.innerWidth >= 1024) { // Only on large devices
//         // Use the entire screen as reference
//         const centerX = window.innerWidth / 2;
//         const centerY = window.innerHeight / 2;
        
//         const deltaX = e.clientX - centerX;
//         const deltaY = e.clientY - centerY;
        
//         // Limit movement to stay within reasonable bounds
//         const maxMove = 100; // Maximum pixels to move
//         const limitedX = Math.max(-maxMove, Math.min(maxMove, deltaX * 0.05));
//         const limitedY = Math.max(-maxMove, Math.min(maxMove, deltaY * 0.05));
        
//         setMousePosition({ x: limitedX, y: limitedY });
//       }
//     };

//     // Add event listener to the entire document
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const techStack = [
//     { 
//       name: 'MongoDB', 
//       icon: () => (
//         <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="#4DB33D"/>
//         </svg>
//       ), 
//       color: 'text-green-400' 
//     },
//     { 
//       name: 'Express.js', 
//       icon: () => (
//         <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9-.666L18.281 10.5l3.543-4.734a1.435 1.435 0 011.85-.67L18.622 11.5 24 18.588zm-20.267 2.179l.267-.36 9.418-12.415.133-.183a.984.984 0 011.39-.24.877.877 0 01.23 1.364L5.893 18.507a.885.885 0 01-1.4.257.988.988 0 01-.26-1.387z" fill="#68A063"/>
//         </svg>
//       ), 
//       color: 'text-gray-200' 
//     },
//     { 
//       name: 'React.js', 
//       icon: () => (
//         <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.943.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.990-1.36-1.56z" fill="#00D8FF"/>
//         </svg>
//       ), 
//       color: 'text-cyan-400' 
//     },
//     { 
//       name: 'Node.js', 
//       icon: () => (
//         <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.271-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="#689F63"/>
//         </svg>
//       ), 
//       color: 'text-green-500' 
//     }
//   ];

//   const handleContactClick = () => {
//     window.open('mailto:yashdt50@gmail.com?subject=Hello%20Yashdev&body=Hi%20Yashdev,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.%0D%0A%0D%0ABest%20regards', '_blank');
//   };

//   const handleLinkedInClick = () => {
//     window.open('https://linkedin.com/in/ydt1738', '_blank');
//   };

//   const handleGithubClick = () => {
//     window.open('https://github.com/ydt-yash-1738', '_blank');
//   };

//   return (
//     <div className="h-screen w-screen bg-black text-white relative overflow-hidden chrome-mobile-fix" style={{ minHeight: '100dvh' }}>
//       {/* Animated background grid */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           animation: 'grid-move 20s linear infinite'
//         }}></div>
//       </div>

//       {/* Floating particles */}
//       <div className="absolute inset-0">
//         {particles.map((particle) => (
//           <div
//             key={particle.id}
//             className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
//             style={{
//               left: `${particle.left}%`,
//               top: `${particle.top}%`,
//               animationDelay: `${particle.animationDelay}s`,
//               animationDuration: `${particle.animationDuration}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="relative z-10 h-full w-full px-3 sm:px-4 lg:px-6 flex items-center chrome-mobile-fix py-4 lg:py-8" style={{ minHeight: '100dvh' }}>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center w-full max-w-7xl mx-auto">
          
//           {/* Left Section - Main Content */}
//           <div className={`space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4 text-center lg:text-left ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
//             <div className="space-y-2 sm:space-y-3 lg:space-y-2">
//               <div className="inline-block">
//                 <span className="text-cyan-400 text-sm sm:text-base md:text-lg lg:text-base font-medium tracking-wider">
//                   Hello, I'm
//                 </span>
//               </div>
              
//               <h1 className={`text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
//                 <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
//                   Yashdev
//                 </span>
//                 <br />
//                 <span className="text-cyan-400">Tiwari</span>
//               </h1>
              
//               <div className={`space-y-2 sm:space-y-3 lg:space-y-2 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0 translate-y-8'}`}>
//                 <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl font-semibold text-gray-300">
//                   MERN Stack Developer
//                 </h2>
//                 <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-base max-w-sm mx-auto lg:mx-0">
//                   Crafting full-stack web applications with modern technologies and clean code.
//                 </p>
//               </div>
//             </div>

//             {/* Tech Stack */}
//             <div className={`${isVisible ? 'animate-slide-up delay-500' : 'opacity-0 translate-y-8'}`}>
//               <h3 className="text-cyan-400 font-semibold mb-3 sm:mb-4 lg:mb-3 text-base sm:text-lg md:text-xl lg:text-lg">Tech Stack</h3>
//               <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-3 max-w-sm sm:max-w-md lg:max-w-sm mx-auto lg:mx-0">
//                 {techStack.map((tech, index) => {
//                   const IconComponent = tech.icon;
//                   return (
//                     <div
//                       key={tech.name}
//                       className="flex items-center space-x-3 lg:space-x-2 p-3 sm:p-4 lg:p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group"
//                       style={{ animationDelay: `${0.7 + index * 0.1}s` }}
//                     >
//                       <div className={`${tech.color} group-hover:scale-110 transition-transform`}>
//                         <IconComponent />
//                       </div>
//                       <span className="text-gray-300 font-medium text-sm sm:text-base lg:text-sm">{tech.name}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Contact Button */}
//             <div className={`${isVisible ? 'animate-slide-up delay-700' : 'opacity-0 translate-y-8'}`}>
//               <button
//                 onClick={handleContactClick}
//                 className="group relative inline-flex items-center px-6 sm:px-8 lg:px-6 py-3 sm:py-4 lg:py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-lg hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/30 text-sm sm:text-base lg:text-sm"
//               >
//                 <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 mr-2 group-hover:animate-bounce" />
//                 Get In Touch
//                 <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 lg:w-3 lg:h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//               </button>
//             </div>

//             {/* Social Links */}
//             <div className={`flex justify-center lg:justify-start space-x-4 sm:space-x-6 lg:space-x-4 ${isVisible ? 'animate-fade-in delay-1000' : 'opacity-0'}`}>
//               <button
//                 onClick={handleLinkedInClick}
//                 className="p-3 sm:p-4 lg:p-3 rounded-full border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:scale-110"
//               >
//                 <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
//               </button>
//               <button
//                 onClick={handleGithubClick}
//                 className="p-3 sm:p-4 lg:p-3 rounded-full border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:scale-110"
//               >
//                 <Github className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Right Section - Modern Geometric Design */}
//           <div className="flex justify-center items-center order-first lg:order-last">
//             <div className={`relative ${isVisible ? 'animate-slide-left delay-500' : 'opacity-0 translate-x-12'}`}>
//               {/* Main hexagonal container */}
//               <div ref={hexagonRef} className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-64 md:w-64 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
//                 {/* Hexagonal background */}
//                 <div className="absolute inset-0 transform rotate-0">
//                   <div className="w-full h-full border-2 border-cyan-400/30 relative"
//                        style={{
//                          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
//                          background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.05) 0%, rgba(6, 182, 212, 0.1) 100%)'
//                        }}>
//                   </div>
//                 </div>

//                 {/* Inner hexagonal layers */}
//                 <div className="absolute inset-4 sm:inset-6 lg:inset-4 transform rotate-0">
//                   <div className="w-full h-full border border-cyan-400/20"
//                        style={{
//                          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
//                          background: 'rgba(34, 211, 238, 0.03)'
//                        }}>
//                   </div>
//                 </div>

//                 <div className="absolute inset-8 sm:inset-10 lg:inset-8 transform rotate-0">
//                   <div className="w-full h-full border border-cyan-400/10"
//                        style={{
//                          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
//                          background: 'rgba(34, 211, 238, 0.02)'
//                        }}>
//                   </div>
//                 </div>

//                 {/* Floating geometric elements */}
//                 <div className="absolute top-4 right-6 w-3 h-3 bg-cyan-400 animate-float"
//                      style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
//                 </div>
                
//                 <div className="absolute bottom-6 left-4 w-2 h-2 bg-cyan-300 animate-float delay-700"
//                      style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
//                 </div>
                
//                 <div className="absolute top-12 left-3 w-4 h-1 bg-cyan-500 animate-float delay-300"
//                      style={{ transform: 'rotate(45deg)' }}>
//                 </div>

//                 <div className="absolute bottom-12 right-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full animate-float delay-1000">
//                 </div>

//                 {/* Center content */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div 
//                     className="text-center p-2 sm:p-3 md:p-4 lg:p-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-cyan-400/20 transition-transform duration-300 ease-out"
//                     style={{
//                       transform: window.innerWidth >= 1024 
//                         ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
//                         : 'none'
//                     }}
//                   >
//                     <Code className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 text-cyan-400 mx-auto mb-1 sm:mb-2 lg:mb-1 animate-float" />
//                     <div className="text-xs lg:text-xs text-gray-400 font-medium">Full Stack</div>
//                     <div className="text-xs sm:text-sm md:text-base lg:text-sm text-cyan-400 font-bold">Developer</div>
//                   </div>
//                 </div>

//                 {/* Corner accents */}
//                 <div className="absolute -top-1 -right-1 w-6 h-6 border-2 border-cyan-400 opacity-60"
//                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}>
//                 </div>
                
//                 <div className="absolute -bottom-1 -left-1 w-6 h-6 border-2 border-cyan-400 opacity-60"
//                      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}>
//                 </div>

//                 {/* Glowing lines */}
//                 <div className="absolute top-1/4 left-0 w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 animate-pulse"></div>
//                 <div className="absolute bottom-1/4 right-0 w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400 animate-pulse delay-500"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         body, html {
//           overflow: hidden;
//           height: 100vh;
//           height: 100dvh; /* Dynamic viewport height for modern browsers */
//           width: 100vw;
//           margin: 0;
//           padding: 0;
//           position: fixed; /* Prevents Chrome mobile scrolling */
//           top: 0;
//           left: 0;
//         }
        
//         /* Chrome mobile specific fix */
//         @supports (-webkit-touch-callout: none) {
//           body, html {
//             height: -webkit-fill-available;
//           }
          
//           .chrome-mobile-fix {
//             height: -webkit-fill-available !important;
//             min-height: -webkit-fill-available !important;
//           }
//         }
        
//         /* Additional Chrome mobile viewport fix */
//         @media screen and (-webkit-min-device-pixel-ratio: 0) {
//           .chrome-mobile-fix {
//             height: 100vh !important;
//             min-height: 100vh !important;
//           }
//         }
        
//         @keyframes grid-move {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(50px, 50px); }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
        
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @keyframes slide-up {
//           from { 
//             opacity: 0; 
//             transform: translateY(20px); 
//           }
//           to { 
//             opacity: 1; 
//             transform: translateY(0); 
//           }
//         }
        
//         @keyframes slide-left {
//           from { 
//             opacity: 0; 
//             transform: translateX(30px); 
//           }
//           to { 
//             opacity: 1; 
//             transform: translateX(0); 
//           }
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .animate-fade-in {
//           animation: fade-in 1s ease-out forwards;
//         }
        
//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out forwards;
//         }
        
//         .animate-slide-left {
//           animation: slide-left 1s ease-out forwards;
//         }
        
//         .delay-300 {
//           animation-delay: 0.3s;
//         }
        
//         .delay-500 {
//           animation-delay: 0.5s;
//         }
        
//         .delay-700 {
//           animation-delay: 0.7s;
//         }
        
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Portfolio;


// import React, { useState, useEffect, useRef } from 'react';
// import { Mail, Linkedin, Github, ExternalLink, Code } from 'lucide-react';
// import PortfolioStyles from './styles/PortfolioStyles';

// const Portfolio = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const hexagonRef = useRef(null);
  
//   // Generate stable particle data once
//   const [particles] = useState(() => 
//     [...Array(15)].map((_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       top: Math.random() * 100,
//       animationDelay: Math.random() * 3,
//       animationDuration: 2 + Math.random() * 3
//     }))
//   );

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (window.innerWidth >= 1024) { // Only on large devices
//         // Use the entire screen as reference
//         const centerX = window.innerWidth / 2;
//         const centerY = window.innerHeight / 2;
        
//         const deltaX = e.clientX - centerX;
//         const deltaY = e.clientY - centerY;
        
//         // Limit movement to stay within reasonable bounds
//         const maxMove = 100; // Maximum pixels to move
//         const limitedX = Math.max(-maxMove, Math.min(maxMove, deltaX * 0.05));
//         const limitedY = Math.max(-maxMove, Math.min(maxMove, deltaY * 0.05));
        
//         setMousePosition({ x: limitedX, y: limitedY });
//       }
//     };

//     // Add event listener to the entire document
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

  // const techStack = [
  //   { 
  //     name: 'MongoDB', 
  //     icon: () => (
  //       <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="#4DB33D"/>
  //       </svg>
  //     ), 
  //     color: 'text-green-400' 
  //   },
  //   { 
  //     name: 'Express.js', 
  //     icon: () => (
  //       <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9-.666L18.281 10.5l3.543-4.734a1.435 1.435 0 011.85-.67L18.622 11.5 24 18.588zm-20.267 2.179l.267-.36 9.418-12.415.133-.183a.984.984 0 011.39-.24.877.877 0 01.23 1.364L5.893 18.507a.885.885 0 01-1.4.257.988.988 0 01-.26-1.387z" fill="#68A063"/>
  //       </svg>
  //     ), 
  //     color: 'text-gray-200' 
  //   },
  //   { 
  //     name: 'React.js', 
  //     icon: () => (
  //       <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.943.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.990-1.36-1.56z" fill="#00D8FF"/>
  //       </svg>
  //     ), 
  //     color: 'text-cyan-400' 
  //   },
  //   { 
  //     name: 'Node.js', 
  //     icon: () => (
  //       <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.271-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="#689F63"/>
  //       </svg>
  //     ), 
  //     color: 'text-green-500' 
  //   }
  // ];

//   const handleContactClick = () => {
//     window.open('mailto:yashdt50@gmail.com?subject=Hello%20Yashdev&body=Hi%20Yashdev,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.%0D%0A%0D%0ABest%20regards', '_blank');
//   };

//   const handleLinkedInClick = () => {
//     window.open('https://linkedin.com/in/ydt1738', '_blank');
//   };

//   const handleGithubClick = () => {
//     window.open('https://github.com/ydt-yash-1738', '_blank');
//   };

//   return (
//     <>
//       <PortfolioStyles />
      // <div className="h-screen w-screen bg-black text-white relative overflow-hidden chrome-mobile-fix" style={{ minHeight: '100dvh' }}>
      //   {/* Animated background grid */}
      //   <div className="absolute inset-0 opacity-10">
      //     <div className="absolute inset-0" style={{
      //       backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
      //       backgroundSize: '50px 50px',
      //       animation: 'grid-move 20s linear infinite'
      //     }}></div>
      //   </div>

      //   {/* Floating particles */}
      //   <div className="absolute inset-0">
      //     {particles.map((particle) => (
      //       <div
      //         key={particle.id}
      //         className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
      //         style={{
      //           left: `${particle.left}%`,
      //           top: `${particle.top}%`,
      //           animationDelay: `${particle.animationDelay}s`,
      //           animationDuration: `${particle.animationDuration}s`
      //         }}
      //       ></div>
      //     ))}
      //   </div>

      //   <div className="relative z-10 h-full w-full px-3 sm:px-4 lg:px-6 flex items-center chrome-mobile-fix py-4 lg:py-8" style={{ minHeight: '100dvh' }}>
      //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center w-full max-w-7xl mx-auto">
            
      //       {/* Left Section - Main Content */}
      //       <div className={`space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4 text-center lg:text-left ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      //         <div className="space-y-2 sm:space-y-3 lg:space-y-2">
      //           <div className="inline-block">
      //             <span className="text-cyan-400 text-sm sm:text-base md:text-lg lg:text-base font-medium tracking-wider">
      //               Hello, I'm
      //             </span>
      //           </div>
                
      //           <h1 className={`text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
      //             <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
      //               Yashdev
      //             </span>
      //             <br />
      //             <span className="text-cyan-400">Tiwari</span>
      //           </h1>
                
      //           <div className={`space-y-2 sm:space-y-3 lg:space-y-2 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0 translate-y-8'}`}>
      //             <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl font-semibold text-gray-300">
      //               MERN Stack Developer
      //             </h2>
      //             <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-base max-w-sm mx-auto lg:mx-0">
      //               Crafting full-stack web applications with modern technologies and clean code.
      //             </p>
      //           </div>
      //         </div>

      //         {/* Tech Stack */}
      //         <div className={`${isVisible ? 'animate-slide-up delay-500' : 'opacity-0 translate-y-8'}`}>
      //           <h3 className="text-cyan-400 font-semibold mb-3 sm:mb-4 lg:mb-3 text-base sm:text-lg md:text-xl lg:text-lg">Tech Stack</h3>
      //           <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-3 max-w-sm sm:max-w-md lg:max-w-sm mx-auto lg:mx-0">
      //             {techStack.map((tech, index) => {
      //               const IconComponent = tech.icon;
      //               return (
      //                 <div
      //                   key={tech.name}
      //                   className="flex items-center space-x-3 lg:space-x-2 p-3 sm:p-4 lg:p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group"
      //                   style={{ animationDelay: `${0.7 + index * 0.1}s` }}
      //                 >
      //                   <div className={`${tech.color} group-hover:scale-110 transition-transform`}>
      //                     <IconComponent />
      //                   </div>
      //                   <span className="text-gray-300 font-medium text-sm sm:text-base lg:text-sm">{tech.name}</span>
      //                 </div>
      //               );
      //             })}
      //           </div>
      //         </div>

      //         {/* Contact Button */}
      //         <div className={`${isVisible ? 'animate-slide-up delay-700' : 'opacity-0 translate-y-8'}`}>
      //           <button
      //             onClick={handleContactClick}
      //             className="group relative inline-flex items-center px-6 sm:px-8 lg:px-6 py-3 sm:py-4 lg:py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-lg hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/30 text-sm sm:text-base lg:text-sm"
      //           >
      //             <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 mr-2 group-hover:animate-bounce" />
      //             Get In Touch
      //             <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 lg:w-3 lg:h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
      //           </button>
      //         </div>

      //         {/* Social Links */}
      //         <div className={`flex justify-center lg:justify-start space-x-4 sm:space-x-6 lg:space-x-4 ${isVisible ? 'animate-fade-in delay-1000' : 'opacity-0'}`}>
      //           <button
      //             onClick={handleLinkedInClick}
      //             className="p-3 sm:p-4 lg:p-3 rounded-full border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:scale-110"
      //           >
      //             <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
      //           </button>
      //           <button
      //             onClick={handleGithubClick}
      //             className="p-3 sm:p-4 lg:p-3 rounded-full border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:scale-110"
      //           >
      //             <Github className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
      //           </button>
      //         </div>
      //       </div>

      //       {/* Right Section - Modern Geometric Design */}
      //       <div className="flex justify-center items-center order-first lg:order-last">
      //         <div className={`relative ${isVisible ? 'animate-slide-left delay-500' : 'opacity-0 translate-x-12'}`}>
      //           {/* Main hexagonal container */}
      //           <div ref={hexagonRef} className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-64 md:w-64 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
      //             {/* Hexagonal background */}
      //             <div className="absolute inset-0 transform rotate-0">
      //               <div className="w-full h-full border-2 border-cyan-400/30 relative"
      //                    style={{
      //                      clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
      //                      background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.05) 0%, rgba(6, 182, 212, 0.1) 100%)'
      //                    }}>
      //               </div>
      //             </div>

      //             {/* Inner hexagonal layers */}
      //             <div className="absolute inset-4 sm:inset-6 lg:inset-4 transform rotate-0">
      //               <div className="w-full h-full border border-cyan-400/20"
      //                    style={{
      //                      clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
      //                      background: 'rgba(34, 211, 238, 0.03)'
      //                    }}>
      //               </div>
      //             </div>

      //             <div className="absolute inset-8 sm:inset-10 lg:inset-8 transform rotate-0">
      //               <div className="w-full h-full border border-cyan-400/10"
      //                    style={{
      //                      clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
      //                      background: 'rgba(34, 211, 238, 0.02)'
      //                    }}>
      //               </div>
      //             </div>

      //             {/* Floating geometric elements */}
      //             <div className="absolute top-4 right-6 w-3 h-3 bg-cyan-400 animate-float"
      //                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
      //             </div>
                  
      //             <div className="absolute bottom-6 left-4 w-2 h-2 bg-cyan-300 animate-float delay-700"
      //                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
      //             </div>
                  
      //             <div className="absolute top-12 left-3 w-4 h-1 bg-cyan-500 animate-float delay-300"
      //                  style={{ transform: 'rotate(45deg)' }}>
      //             </div>

      //             <div className="absolute bottom-12 right-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full animate-float delay-1000">
      //             </div>

      //             {/* Center content */}
      //             <div className="absolute inset-0 flex items-center justify-center">
      //               <div 
      //                 className="text-center p-2 sm:p-3 md:p-4 lg:p-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-cyan-400/20 transition-transform duration-300 ease-out"
      //                 style={{
      //                   transform: window.innerWidth >= 1024 
      //                     ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
      //                     : 'none'
      //                 }}
      //               >
      //                 <Code className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 text-cyan-400 mx-auto mb-1 sm:mb-2 lg:mb-1 animate-float" />
      //                 <div className="text-xs lg:text-xs text-gray-400 font-medium">Full Stack</div>
      //                 <div className="text-xs sm:text-sm md:text-base lg:text-sm text-cyan-400 font-bold">Developer</div>
      //               </div>
      //             </div>

      //             {/* Corner accents */}
      //             <div className="absolute -top-1 -right-1 w-6 h-6 border-2 border-cyan-400 opacity-60"
      //                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}>
      //             </div>
                  
      //             <div className="absolute -bottom-1 -left-1 w-6 h-6 border-2 border-cyan-400 opacity-60"
      //                  style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}>
      //             </div>

      //             {/* Glowing lines */}
      //             <div className="absolute top-1/4 left-0 w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 animate-pulse"></div>
      //             <div className="absolute bottom-1/4 right-0 w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400 animate-pulse delay-500"></div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
//     </>
//   );
// };

// export default Portfolio;



import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Code } from 'lucide-react';
import PortfolioStyles from './styles/PortfolioStyles';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });
  const [isGyroscopeEnabled, setIsGyroscopeEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hexagonRef = useRef(null);
  const lastGyroUpdate = useRef(0);
  const gyroSmoothingFactor = 0.1;

  const [particles] = useState(() =>
    [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 3
    }))
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768;

      setIsMobile(isMobileDevice);

      if (isMobileDevice && typeof DeviceOrientationEvent !== 'undefined') {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
          DeviceOrientationEvent.requestPermission()
            .then(response => {
              if (response === 'granted') {
                setIsGyroscopeEnabled(true);
              }
            })
            .catch(console.error);
        } else {
          setIsGyroscopeEnabled(true);
        }
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !isGyroscopeEnabled) return;

    const handleDeviceOrientation = (event) => {
      const now = Date.now();
      if (now - lastGyroUpdate.current < 16) return;
      lastGyroUpdate.current = now;

      const { beta, gamma } = event;

      if (beta !== null && gamma !== null) {
        const normalizedX = Math.max(-1, Math.min(1, gamma / 30));
        const normalizedY = Math.max(-1, Math.min(1, (beta - 45) / 30));

        setGyroscopeData(prev => ({
          x: prev.x + (normalizedX - prev.x) * gyroSmoothingFactor,
          y: prev.y + (normalizedY - prev.y) * gyroSmoothingFactor,
          z: 0
        }));
      }
    };

    window.addEventListener('deviceorientation', handleDeviceOrientation);
    return () => window.removeEventListener('deviceorientation', handleDeviceOrientation);
  }, [isMobile, isGyroscopeEnabled]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth >= 1024 && !isMobile) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        const maxMove = 100;
        const limitedX = Math.max(-maxMove, Math.min(maxMove, deltaX * 0.05));
        const limitedY = Math.max(-maxMove, Math.min(maxMove, deltaY * 0.05));

        setMousePosition({ x: limitedX, y: limitedY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

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
    window.open(
      'mailto:yashdt50@gmail.com?subject=Hello%20Yashdev&body=Hi%20Yashdev,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.%0D%0A%0D%0ABest%20regards',
      '_blank'
    );
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/ydt1738', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/ydt-yash-1738', '_blank');
  };

  const transformPosition = isMobile && isGyroscopeEnabled
    ? { x: gyroscopeData.x * 50, y: gyroscopeData.y * 50 }
    : !isMobile && window.innerWidth >= 1024
    ? mousePosition
    : { x: 0, y: 0 };

  return (
    <>
      <PortfolioStyles />
            <div className="h-screen w-screen bg-black text-white relative overflow-hidden chrome-mobile-fix" style={{ minHeight: '100dvh' }}>
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
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 h-full w-full px-3 sm:px-4 lg:px-6 flex items-center chrome-mobile-fix py-4 lg:py-8" style={{ minHeight: '100dvh' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center w-full max-w-7xl mx-auto">
            
            {/* Left Section - Main Content */}
            <div className={`space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4 text-center lg:text-left ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-2 sm:space-y-3 lg:space-y-2">
                <div className="inline-block">
                  <span className="text-cyan-400 text-sm sm:text-base md:text-lg lg:text-base font-medium tracking-wider">
                    Hello, I'm
                  </span>
                </div>
                
                <h1 className={`text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
                  <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                    Yashdev
                  </span>
                  <br />
                  <span className="text-cyan-400">Tiwari</span>
                </h1>
                
                <div className={`space-y-2 sm:space-y-3 lg:space-y-2 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0 translate-y-8'}`}>
                  <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl font-semibold text-gray-300">
                    MERN Stack Developer
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-base max-w-sm mx-auto lg:mx-0">
                    Crafting full-stack web applications with modern technologies and clean code.
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className={`${isVisible ? 'animate-slide-up delay-500' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-cyan-400 font-semibold mb-3 sm:mb-4 lg:mb-3 text-base sm:text-lg md:text-xl lg:text-lg">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-3 max-w-sm sm:max-w-md lg:max-w-sm mx-auto lg:mx-0">
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center space-x-3 lg:space-x-2 p-3 sm:p-4 lg:p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group"
                        style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                      >
                        <div className={`${tech.color} group-hover:scale-110 transition-transform`}>
                          <IconComponent />
                        </div>
                        <span className="text-gray-300 font-medium text-sm sm:text-base lg:text-sm">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Button */}
              <div className={`${isVisible ? 'animate-slide-up delay-700' : 'opacity-0 translate-y-8'}`}>
                <button
                  onClick={handleContactClick}
                  className="group relative inline-flex items-center px-6 sm:px-8 lg:px-6 py-3 sm:py-4 lg:py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-lg hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/30 text-sm sm:text-base lg:text-sm"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 mr-2 group-hover:animate-bounce" />
                  Get In Touch
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 lg:w-3 lg:h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              {/* Social Links */}
              <div className={`flex justify-center lg:justify-start space-x-4 sm:space-x-6 lg:space-x-4 ${isVisible ? 'animate-fade-in delay-1000' : 'opacity-0'}`}>
                <button
                  onClick={handleLinkedInClick}
                  className="p-3 sm:p-4 lg:p-3 rounded-full border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
                </button>
                <button
                  onClick={handleGithubClick}
                  className="p-3 sm:p-4 lg:p-3 rounded-full border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:scale-110"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
                </button>
              </div>
            </div>

            {/* Right Section - Modern Geometric Design */}
            <div className="flex justify-center items-center order-first lg:order-last">
              <div className={`relative ${isVisible ? 'animate-slide-left delay-500' : 'opacity-0 translate-x-12'}`}>
                {/* Main hexagonal container */}
                <div ref={hexagonRef} className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-64 md:w-64 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                  {/* Hexagonal background */}
                  <div className="absolute inset-0 transform rotate-0">
                    <div className="w-full h-full border-2 border-cyan-400/30 relative"
                         style={{
                           clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                           background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.05) 0%, rgba(6, 182, 212, 0.1) 100%)'
                         }}>
                    </div>
                  </div>

                  {/* Inner hexagonal layers */}
                  <div className="absolute inset-4 sm:inset-6 lg:inset-4 transform rotate-0">
                    <div className="w-full h-full border border-cyan-400/20"
                         style={{
                           clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                           background: 'rgba(34, 211, 238, 0.03)'
                         }}>
                    </div>
                  </div>

                  <div className="absolute inset-8 sm:inset-10 lg:inset-8 transform rotate-0">
                    <div className="w-full h-full border border-cyan-400/10"
                         style={{
                           clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                           background: 'rgba(34, 211, 238, 0.02)'
                         }}>
                    </div>
                  </div>

                  {/* Floating geometric elements */}
                  <div className="absolute top-4 right-6 w-3 h-3 bg-cyan-400 animate-float"
                       style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                  </div>
                  
                  <div className="absolute bottom-6 left-4 w-2 h-2 bg-cyan-300 animate-float delay-700"
                       style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                  </div>
                  
                  <div className="absolute top-12 left-3 w-4 h-1 bg-cyan-500 animate-float delay-300"
                       style={{ transform: 'rotate(45deg)' }}>
                  </div>

                  <div className="absolute bottom-12 right-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full animate-float delay-1000">
                  </div>

                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="text-center p-2 sm:p-3 md:p-4 lg:p-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-cyan-400/20 transition-transform duration-300 ease-out"
                      style={{
                        transform: window.innerWidth >= 1024 
                          ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
                          : 'none'
                      }}
                    >
                      <Code className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 text-cyan-400 mx-auto mb-1 sm:mb-2 lg:mb-1 animate-float" />
                      <div className="text-xs lg:text-xs text-gray-400 font-medium">Full Stack</div>
                      <div className="text-xs sm:text-sm md:text-base lg:text-sm text-cyan-400 font-bold">Developer</div>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-2 border-cyan-400 opacity-60"
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}>
                  </div>
                  
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-2 border-cyan-400 opacity-60"
                       style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}>
                  </div>

                  {/* Glowing lines */}
                  <div className="absolute top-1/4 left-0 w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-0 w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400 animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
