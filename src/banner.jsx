import bannerimg from "./assets/Ukeje-isaac .jpg";
import location from "./assets/location.png";
import dot from "./assets/dot.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import x from "./assets/x.png";
import facebook from "./assets/facebook.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="container mx-auto text-black">
      <div className="flex flex-col-reverse lg:flex-row justify-between py-10 mt-3 px-5 lg:px-0">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-5xl font-medium mb-3 intro-text">Hello!</h1>
          <span className="text-6xl font-bold mb-7 intro-text">
            I am Ukeje Isaac
          </span>
          <p className="lg:w-9/12 lg:text-xl">
            I am front-end web developer with a focus on creating and exception
            digital experiences, websites and webapps that are fast, accessible,
            visually appealing, and responsive. With ample experience with HTML,
            CSS, Tailwind, and React to create stunning and efficient
            innovations to solve problems.
          </p>
          <div className="mt-16">
            <div className="flex flex-col md:flex-row gap-5 lg:gap-10 lg:w-[40rem] justify-center lg:items-center">
              <div className="flex items-end text-lg bg-[#091A48] rounded-full w-72 lg:w-full px-2 py-3 text-white">
                <img
                  src={location}
                  alt="Location"
                  className="flex h-6 mr-2 items-center"
                />
                Abia State, Nigeria
              </div>
              <div className="flex items-end text-lg bg-[#091A48] rounded-full w-72 lg:w-full px-2 py-3 text-white">
                <img
                  src={dot}
                  alt="Availability"
                  className="flex h-7 mr-2 items-center"
                />
                Available for new projects
              </div>
            </div>
            <div className="flex mt-16">
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 150, // Controls how stiff the motion is
                  damping: 7, // Controls how much it bounces
                  bounce: 2, // Higher value means more bounce
                }}
                viewport={{ once: true }}
                href="https://github.com/ukeje71"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github account" className="h-12" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 150, // Controls how stiff the motion is
                  damping: 7, // Controls how much it bounces
                  bounce: 2, // Higher value means more bounce
                }}
                viewport={{ once: true }}
                href="https://www.linkedin.com/in/ukeje-isaac-7280a1332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="Linkedin Account"
                  className="h-12 ml-8"
                />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 150, // Controls how stiff the motion is
                  damping: 7, // Controls how much it bounces
                  bounce: 2, // Higher value means more bounce
                }}
                viewport={{ once: true }}
                href="https://x.com/ukeje71"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={x} alt="X account" className="h-12 ml-8" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.8,
                  type: "spring",
                  stiffness: 150, // Controls how stiff the motion is
                  damping: 7, // Controls how much it bounces
                  bounce: 2, // Higher value means more bounce
                }}
                viewport={{ once: true }}
                href="https://www.facebook.com/profile.php?id=100092532492898"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="Facebook account"
                  className="h-12 ml-8"
                />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="-mt-5 lg:-mt-0 mb-10 lg:mb-0">
            <img
              src={bannerimg}
              alt="Ukeje Isaac"
              title="Ukeje Isaac"
              className="w-[65rem] rounded-md profile-pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
