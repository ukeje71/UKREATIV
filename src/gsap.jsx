// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { useNavigate } from "react-router-dom"; 

// const GSAPDemo = () => {    

//   const navigate = useNavigate();
//   const comp = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
      
//       const t1 = gsap.timeline({
//         onComplete: () => setTimeout(() => navigate("/wisdom-portfolio/home"), 1000),
//       })
//       t1.from("#intro-slider", {
//         xPercent: -100,
//         duration: 1,
//         delay: 0.8,
//       }).from(["#title-1", "#title-2", "#title-3"], {
//         opacity: 0,
//         y: "+=30",
//         stagger: 0.8, 
//       }).to(["#title-1", "#title-2", "#title-3"], {
//         opacity: 0,
//         y: "-=30",
//         stagger: 0.8,
//       }).to("#intro-slider", {
//         xPercent: -100,
//         duration: 1.3,
//       })
//       .from("#welcome", {
//         opacity: 0,
//         duration: 0.5
//       })
//       .to("#welcome", {
//         textShadow: "0px 5px 5px rgba(251, 251, 251, 0.8)", // Stronger glow effect
//         duration: 1,
//         ease: "power2.in",
//         delay: 0.5
//       });
//     }, comp)

//     return () => ctx.revert();
//   })

//   return( 
//       <div className="relative" ref={comp}>
//       {/* Intro Slider */}
//         <div id="intro-slider" 
//           className="h-screen p-3 sm:p-6 lg:p-10 bg-gray-500 font-semibold 
//           absolute top-0 left-0 z-10 flex flex-col items-center 
//           text-center font-poppins w-full gap-32 lg:gap-32 tracking-tight justify-center">
          
//           <h1 className="text-3xl md:text-6xl lg:text-7xl" id="title-1">
//             Front-End Web Development.
//           </h1>
//           <h1 className="text-3xl md:text-6xl lg:text-7xl" id="title-2">
//             Innovation.
//           </h1>
//           <h1 className="text-3xl md:text-6xl lg:text-7xl" id="title-3">
//             AI.
//           </h1>
//         </div>

//         {/* Welcome Section */}
//         <div className="h-screen flex bg-[#182238] justify-center items-center">
//           <h1 id="welcome" 
//             className="text-6xl md:text-7xl lg:text-9xl 
//             font-bold text-black font-poppins leading-snug text-center">
//             Welcome.
//           </h1>
//         </div>
//     </div>
//   )
// };

// export default GSAPDemo;
