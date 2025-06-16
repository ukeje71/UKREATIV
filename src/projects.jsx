import { motion } from "framer-motion";
import frenzy from "./assets/Frenzy.webm";
import phily from "./assets/Phily.webm";
import Graceland from "./assets/Graceland.webm";
import Civic from "./assets/Civic-connect.webm";
import PhilsCake from "./assets/PhilsCake.png";
import pitchbot from "./assets/pitchbot.png";
import weather from "./assets/weather.png";

const Projects = () => {
  return (
    <section className="container border-[#000] border-t-4 mx-auto pb-10 lg:pb-20 ">
      <div
        className="flex justify-center items-center flex-col container mx-auto mt-10"
        id="projects"
      >
        <h1 className="text-3xl font-bold mb-5 text-blue-700 rounded-md py-2 px-4 mt-12 tracking-widest">
          Projects
        </h1>
        <p className="text-white text-lg text-center font-bold px-5 lg:px-0 lg:mb-4">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-white container mx-auto pb-4 px-3 lg:px-0 projects-section"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5 project-card"
        >
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2 animate">
            <h2 className="text-2xl font-bold mb-4">ChatRoom</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white mb-4"
            >
              ChatRoom is a modern real-time chat application designed to
              simplify communication and enhance user interaction. It supports
              seamless messaging and responsive design across all devices. With
              features like message replies, notifications, no-mark delete,
              ChatRoom offers a smooth and engaging chat experience tailored for
              both casual and professional use.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[
                "vite",
                "JavaScript",
                "TailwindCSS",
                "React",
                "GSAP",
                "Firebase",
                "Git",
                "GitHub",
                "Vercel",
                "Cloudinary",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <a
              href="https://chatroom-ruddy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <span>Check it out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-end ml-0 lg:ml-2 mb-5 lg:mb-0">
            <a
              href="https://chatroom-ruddy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={PhilsCake}
                alt="Project preview"
                title="Chatroom"
                className="rounded-lg w-full h-full lg:w-[130rem] lg:h-[20rem] animate-two"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5 project-card"
        >
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2 animate">
            <h2 className="text-2xl font-bold mb-4">PitchMate</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white mb-4"
            >
              PitchMate is an AI-powered virtual assistant designed to help
              entrepreneurs and startups craft compelling business pitch decks
              with ease. the website combines a conversational chatbot interface
              with advanced AI capabilities enabling dynamic and intelligent
              responses. Ideal for founders looking for an intelligent
              brainstorming assistant to help structure, refine, and draft
              investor-ready business pitches.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[
                "vite",
                "JavaScript",
                "Typescript",
                "TailwindCSS",
                "React",
                "Framer-Motion",
                "Git",
                "GitHub",
                "Vercel",
                "OpenRouter",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <a
              href="https://pitchbot.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <span>Check it out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-end ml-0 lg:ml-2 mb-5 lg:mb-0">
            <a
              href="https://pitchbot.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={pitchbot}
                alt="Project preview"
                title="Pitchbot"
                className="rounded-lg w-full h-full lg:w-[130rem] lg:h-[20rem] animate-two"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5 project-card"
        >
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2 animate">
            <h2 className="text-2xl font-bold mb-4">Frenzy</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white mb-4"
            >
              Frenzy is a powerful Ecommerce platform that aims to Selling shoes
              to football team&apos;s collaboration and simplify the way tasks
              are tracked and completed. It is designed with user-friendliness
              in mind and is tailored to enhance productivity within football
              teams of all sizes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[
                "Vite",
                "JavaScript",
                "TailwindCSS",
                "React",
                "GSAP",
                "Firebase",
                "Git",
                "GitHub",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <a
              href="https://frenzy-gamma.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <span>Check it out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-end ml-0 lg:ml-2 mb-5 lg:mb-0">
            <a
              href="https://frenzy-gamma.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video autoPlay loop muted id="Video">
                <source src={frenzy} type="video/mp4" />
              </video>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5 project-card"
        >
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2 animate">
            <h2 className="text-2xl font-bold mb-4">Weather-Now</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white mb-4"
            >
              Weather-Now is a simple weather platform that aims to streamline
              weather reports and simplify weather information. It is user
              friendly and has weather dashboard, statistics, calender, and even
              map functions integrated.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[
                "Vite",
                "JavaScript",
                "TailwindCSS",
                "React",
                "Zustand",
                "Git",
                "GitHub",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <a
              href="https://weather-gilt-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <span>Check it out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-end ml-0 lg:ml-2 mb-5 lg:mb-0">
            <a
              href="https://weather-gilt-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={weather}
                title="weather"
                alt="Project preview"
                className="rounded-lg w-full h-full lg:w-[90rem] lg:h-[17rem] animate-two"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl px-5 project-card"
        >
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2 animate">
            <h2 className="text-2xl font-bold mb-4">LiBrain</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white mb-4"
            >
              LiBrain is an online bookstore offering a curated selection of
              books across various genres. The platform provides users with an
              intuitive browsing experience, detailed book descriptions, and
              seamless purchasing options, making it a go-to destination for
              book enthusiasts.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[
                "Html",
                "Css",
                "JavaScript",
                "TailwindCSS",
                "Vercel",
                "Git",
                "GitHub",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <a
              href="https://bookstore-li-brain.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <span>Check it out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-end ml-0 lg:ml-2 mb-5 lg:mb-0">
            <a
              href="https://Graceland-flame.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video autoPlay loop muted id="Video">
                <source src={Graceland} type="video/mp4" />
              </video>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5 project-card"
        >
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2 animate">
            <h2 className="text-2xl font-bold mb-4">Civic-Connect</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white mb-4"
            >
              Civic-Connect is an e-commerce platform designed to offer users
              access to a wide range of products at competitive prices. The
              website features a clean and modern interface, with categories to
              help users discover the latest trends and enjoy unbeatable
              discounts.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[
                "Typescript",
                "Auth 0",
                "Router",
                "TailwindCSS",
                "Vercel",
                "Git",
                "GitHub",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <a
              href="https://Abia-state-hackthon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <span>Check it out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-end ml-0 lg:ml-2 mb-5 lg:mb-0">
            <a
              href="https://Abia-state-hackthon.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video autoPlay loop muted id="Video">
                <source src={Civic} type="video/mp4" />
              </video>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5 project-card"
        >
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2 animate">
            <h2 className="text-2xl font-bold mb-4">Philly_confectories</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white mb-4"
            >
              Philly-Confectories is a user-friendly food ordering platform that
              allows customers to browse a diverse menu, add items to their
              cart, and place orders for delivery. With a focus on local
              cuisine, the platform features dishes like Ofe Riro, Pounded Yam,
              and Okra Soup, catering to diverse culinary preferences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[
                "Html",
                "Css",
                "JavaScript",
                "TailwindCSS",
                "Vercel",
                "Git",
                "GitHub",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <a
              href="https://Phil-catering.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <span>Check it out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-end ml-0 lg:ml-2 mb-5 lg:mb-0">
            <a
              href="https://github.com/ukeje71/Phil-Catering"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video autoPlay loop muted id="Video">
                <source src={phily} type="video/mp4" />
              </video>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
