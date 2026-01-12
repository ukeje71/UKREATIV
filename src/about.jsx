import { useEffect, useRef } from "react";
import aboutbanner from "./assets/ukeje71";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const aboutRef = useRef(null);
  const aboutImageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Image Scroll Animation
      gsap.to(aboutImageRef.current, {
        yPercent: -5,
        scrollTrigger: {
          trigger: aboutRef.current,
          scrub: 1,
          start: "top 80%",
          end: "top 30%",
        },
      });

      // Scroll-triggered text animation with better stagger handling
      gsap.utils
        .toArray([
          ".about-text",
          ".about-text2",
          ".about-text3",
          ".about-text4",
        ])
        .forEach((text, i) => {
          gsap.from(text, {
            opacity: 0,
            x: -100,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
            stagger: i * 0.3,
          });
        });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="about-section border-[#000] border-t-4 mx-auto container">
      <div
        className="flex justify-center items-center mt-28 lg:mt-10 container mx-auto"
        id="about"
      >
        <h1 className="text-3xl font-bold mb-12 text-blue-700 rounded-md py-2 px-4 mt-12 tracking-widest">
          About Me
        </h1>
      </div>
      <div className="container mx-auto flex flex-col  items-center lg:items-start gap-8 px-4 lg:p-6">
        <div className="w-full  flex m-auto  justify-center">
          <img 
            title="Ukeje Isaac"
            ref={aboutImageRef}
            src={aboutbanner}
            alt="Ukeje Isaac"
            className="h-[20rem] lg:h-[30rem]  rounded-lg animate about-image flex profile-pic"
          />
        </div>
        <div className=" w-full text-justify mb-5">
          <h1 className="text-4xl text-start md:text-center tracking-widest font-bold mb-4 text-black about-text">
            Ukeje Isaac
          </h1>
          <p className="text-black leading-relaxed text-lg mt-4 animate-two about-text">
            A passionate Front-End Developer dedicated to crafting visually
            stunning, user-friendly websites and web applications. I have
            expertise in React, TailwindCSS, JavaScript, and other modern web
            technologies, I aim to deliver seamless digital experiences that
            solve real-world problems.
          </p>
          <p className="text-black leading-relaxed mt-4 text-lg animate-two about-text2">
            I thrive on creating intuitive designs and functionality, ensuring
            every project reflects a blend of creativity, performance, and
            accessibility. Whether it’s building responsive web pages, dynamic
            web apps, collaborating with a team, or building scalable
            interfaces, I approach every task with precision, a drive to meet
            deadlines, curiosity, and a drive to continuously improve.
          </p>
          <p className="text-black leading-relaxed mt-4 text-lg animate-two about-text3">
            When I’m not coding, you can find me exploring the latest trends in
            tech, reading books, or enjoying music that fuels my creativity. My
            love for continuous learning keeps me motivated to evolve as a
            developer and create solutions that make a difference. You can
            follow me on
            <span>
              <a
                href="https://x.com/ukeje71"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline underline-offset-4"
              >
                {" "}
                Twitter,
              </a>
            </span>{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/ukeje-isaac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline underline-offset-4"
              >
                LinkedIn,
              </a>
            </span>{" "}
            <span>
              <a
                href="https://www.facebook.com/profile.php?id=100092532492898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline underline-offset-4"
              >
                Facebook.
              </a>
            </span>{" "}
            Check out my works on{" "}
            <span>
              <a
                href="https://github.com/ukeje71"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline underline-offset-4"
              >
                Github.
              </a>
            </span>
          </p>
          <h3 className="text-2xl font-bold text-black mt-4 tracking-widest animate-two">
            Finally, what I bring to the table:
          </h3>
          <div className="text-black leading-relaxed mt-4 px-3 lg:px-0 text-lg about-text4">
            <ul className="list-disc">
              <li className="animate-two">
                <span className="text-xl font-semibold">
                  Technical Expertise
                </span>
                : Proficient in HTML, CSS, JavaScript, Tailwind and frameworks
                like React.
              </li>
              <li className="animate-two">
                <span className="text-xl font-semibold">Aesthetic Vision</span>:
                A strong sense of design, leveraging tools like TailwindCSS to
                build clean, modern interfaces.
              </li>
              <li className="animate-two">
                <span className="text-xl font-semibold">
                  Problem-Solving Skills
                </span>
                : An analytical mind to debug and optimize code efficiently.
              </li>
              <li className="animate-two">
                <span className="text-xl font-semibold">Adaptability</span>: A
                commitment to staying updated with emerging technologies and
                industry practices.
              </li>
              <li className="animate-two">
                <span className="text-xl font-semibold">Soft Skills</span>:
                Effective communication, team collaboration, time management,
                creativity, critical thinking, resilience, and a growth mindset
                ensure I excel in dynamic and collaborative environments.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
