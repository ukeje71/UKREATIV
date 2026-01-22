import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import x from "./assets/x.png";
import facebook from "./assets/facebook.png";
import email from "./assets/mail.png";
import phone from "./assets/phone.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="container mx-auto border-[#000] border-t-4 px-3 lg:px-12 py-10">
      <div
        className="flex flex-col justify-center items-center mt-16 lg:mt-10 container mx-auto"
        id="contact"
      >
        <h1 className="text-3xl font-bold mb-5 text-blue-700 rounded-md py-2 px-4 tracking-widest">
          Get in Touch
        </h1>
        <p className="text-black text-lg font-bold mb-9 text-center lg:w-[50rem] animate-three">
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex flex-col items-center text-center pb-12 gap-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-bold text-lg md:text-2xl lg:text-3xl text-black flex items-center animate-three"
        >
          <img
            src={email}
            alt="Email Icon"
            className="h-6 mr-2 cursor-pointer"
          />
          ukejeisaac71@gmail.com
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-bold text-lg md:text-2xl lg:text-3xl text-black flex items-center animate-three"
        >
          <img
            src={phone}
            alt="Phone Icon"
            className="h-6 mr-2 cursor-pointer"
          />
          {/* +234 7072967842 */}
          +234 7076354937
        </motion.h1>
      </div>
      <div>
        <p className="text-black text-lg font-semibold text-center mb-4">
          You can also find me on these platforms:
        </p>
        <div className="flex justify-center gap-x-6 mt-3 pb-8 cursor-pointer">
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 150, 
              damping: 7, 
              bounce: 1, 
            }}
            viewport={{ once: true }}
            href="https://github.com/ukeje71"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github account" className="h-8" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 150,
              damping: 7, 
              bounce: 1, 
            }}
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/ukeje-isaac"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Account" className="h-8" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 150,
              damping: 7, 
              bounce: 1, 
            }}
            viewport={{ once: true }}
            href="https://x.com/ukeje719"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={x} alt="X account" className="h-8" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              type: "spring",
              stiffness: 150, 
              damping: 7, 
              bounce: 1, 
            }}
            viewport={{ once: true }}
            href="https://www.facebook.com/profile.php?id=100092532492898"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook account" className="h-8" />
          </motion.a>
        </div>
        <p className="text-center text-black">
          &copy; {new Date().getFullYear()}
          <span className="text-[#1D4ED8]"> Ukeje Isaac</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
