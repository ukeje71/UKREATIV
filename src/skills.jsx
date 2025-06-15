import html from "./assets/html.png";
import css from "./assets/css.png";
import JS from "./assets/JS.png";
import bootstrap from "./assets/bootstrap.png";
import tailwind from "./assets/tailwind.png";
import react from "./assets/react.png";
import git from "./assets/git.png";
import TS from "./assets/typescript.png";
import vite from "./assets/vite.png";
import figma from "./assets/figma.png";
import vercel from "./assets/vercel.png";
import github from "./assets/github.png";
import firebase from "./assets/firebase.png";

const Skills = () => {
  return (
    <section className="container mx-auto border-[#000] border-t-4">
      <div className="flex justify-center items-center mt-10 container mx-auto flex-col">
        <h1 className="text-3xl font-bold mb-5 text-blue-700 rounded-md py-2 px-4 mt-12 tracking-widest">
          Skills
        </h1>
        <p className="text-black text-lg font-bold mb-8 text-center px-5 lg:px-0">
          The skills and technologies I am really good at:
        </p>
      </div>
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mb-10 animate-pulse"
        id="skills-section"
      >
        <div className="flex items-center flex-col skill-icon">
          <img src={html} alt="html5 image" />
          <p className="text-black font-semibold">HTML5</p>
        </div>
        <div className="flex items-center flex-col skill-icon2">
          <img src={css} alt="css3 image" />
          <p className="text-black font-semibold">CSS3</p>
        </div>
        <div className="flex items-center flex-col skill-icon">
          <img src={bootstrap} alt="bootstrap image" />
          <p className="text-black font-semibold">BOOTSTRAP</p>
        </div>
        <div className="flex items-center flex-col skill-icon2">
          <img src={JS} alt="javascript image" />
          <p className="text-black font-semibold">JAVASCRIPT</p>
        </div>
        <div className="flex items-center flex-col skill-icon">
          <img src={TS} alt="javascript image" />
          <p className="text-black font-semibold">TYPESCRIPT</p>
        </div>
        <div className="flex items-center flex-col skill-icon2">
          <img src={tailwind} alt="tailwind image" />
          <p className="text-black font-semibold">TAILWIND</p>
        </div>
        <div className="flex items-center flex-col skill-icon">
          <img src={react} alt="react image" />
          <p className="text-black font-semibold">REACT</p>
        </div>
        <div className="flex items-center flex-col skill-icon2">
          <img src={git} alt="git image" />
          <p className="text-black font-semibold">GIT</p>
        </div>
        <div className="flex items-center flex-col skill-icon">
          <img src={github} alt="github image" />
          <p className="text-black font-semibold">GITHUB</p>
        </div>
        <div className="flex items-center flex-col skill-icon2">
          <img src={figma} alt="figma image" />
          <p className="text-black font-semibold">FIGMA</p>
        </div>
        <div className="flex items-center flex-col skill-icon2">
          <img src={firebase} alt="figma image" />
          <p className="text-black font-semibold">Firebase</p>
        </div>
        <div className="flex items-center flex-col skill-icon">
          <img src={vite} alt="vite image" />
          <p className="text-black font-semibold">VITE</p>
        </div>
        <div className="flex items-center flex-col skill-icon2">
          <img src={vercel} alt="vercel image" className="h-24" />
          <p className="text-black font-semibold">VERCEL</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
