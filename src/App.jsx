import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import gsap from "gsap";
import "./App.css";
import logo from "./assets/mylogo.png";
import menu from "./assets/menu.png";
import Banner from "./banner.jsx";
import About from "./about.jsx";
import Skills from "./skills.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [togglehamburger, setTogglehamburger] = useState(false);
  const handleToggle = () => {
    setTogglehamburger((prev) => !prev);
  };

  useEffect(() => {
    const animation = gsap.timeline();
    animation
      .to(".profile-pic", {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      })
      .from(".intro-text", {
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
      })
      .to(".intro-text", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.3,
      });
  }, []);

  return (
    <section className="bg-[#fff] font-lato">
      <section>
        <div className="container mx-auto lg:flex justify-between items-center py-4">
          <div className="text-center flex justify-between px-3 lg:px-0">
            <a href="/wisdom-portfolio/">
              <img
                src={logo}
                alt="Logo"
                title="Ukeje Isaac"
                className="flex h-14 lg:h-28 lg:hover:scale-125 transition-all"
              />
            </a>
            <img
              src={menu}
              alt="hamburger menu icon"
              className="flex justify-end lg:hidden h-14"
              onClick={handleToggle}
            />
          </div>
          {togglehamburger && (
            <ul className="lg:hidden flex flex-col justify-between items-center bg-[#1F2937] text-gray-400 absolute top-20 left-0 w-full py-5 shadow-lg z-10">
              <li className="text-lg font-semibold hover:text-black transition-all tracking-widest">
                <motion.a
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 150, // Controls how stiff the motion is
                    damping: 7, // Controls how much it bounces
                    bounce: 1, // Higher value means more bounce
                  }}
                  viewport={{ once: true }}
                  href="#about"
                >
                  About
                </motion.a>
              </li>
              <li className="text-lg font-semibold hover:text-black transition-all tracking-widest ">
                <motion.a
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    type: "spring",
                    stiffness: 150, // Controls how stiff the motion is
                    damping: 7, // Controls how much it bounces
                    bounce: 1, // Higher value means more bounce
                  }}
                  viewport={{ once: true }}
                  href="#projects"
                >
                  Projects
                </motion.a>
              </li>
              <li className="text-lg font-semibold hover:text-black transition-all tracking-widest ">
                <motion.a
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.9,
                    type: "spring",
                    stiffness: 150, // Controls how stiff the motion is
                    damping: 7, // Controls how much it bounces
                    bounce: 1, // Higher value means more bounce
                  }}
                  viewport={{ once: true }}
                  href="#contact"
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          )}
          <ul className="hidden lg:flex justify-between items-center text-gray-400 ">
            <li className="mx-6 text-lg font-semibold hover:text-black transition-all tracking-widest mt-5 lg:mt-0">
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1,
                  type: "spring",
                  stiffness: 150, // Controls how stiff the motion is
                  damping: 7, // Controls how much it bounces
                  bounce: 1, // Higher value means more bounce
                }}
                viewport={{ once: true }}
                href="#about"
              >
                About
              </motion.a>
            </li>
            <li className="mx-6 text-lg font-semibold hover:text-black transition-all tracking-widest mt-5 lg:mt-0">
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 2,
                  type: "spring",
                  stiffness: 150, // Controls how stiff the motion is
                  damping: 7, // Controls how much it bounces
                  bounce: 1, // Higher value means more bounce
                }}
                viewport={{ once: true }}
                href="#projects"
              >
                Projects
              </motion.a>
            </li>
            <li className="mx-6 text-lg font-semibold hover:text-black transition-all tracking-widest mt-5 lg:mt-0">
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 3,
                  type: "spring",
                  stiffness: 150, // Controls how stiff the motion is
                  damping: 7, // Controls how much it bounces
                  bounce: 1, // Higher value means more bounce
                }}
                viewport={{ once: true }}
                href="#contact"
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </div>
      </section>

      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}

export default App;
