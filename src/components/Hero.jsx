import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profilepic from "../assets/avatar.svg";
import {
  DiCss3,
  DiHtml5,
  DiNodejsSmall,
  DiReact,
  DiJavascript1,
  DiMongodb,
} from "react-icons/di";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";
import ShinyEffect from "./ShinyEffect";
import { SiExpress } from "react-icons/si";

const Hero = () => {
  const handleMailClick = (e) => {
    e.preventDefault();

    const email = "ritamkhatua545@gmail.com";
    const mailtoLink = `mailto:${email}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      window.open(gmailLink, "_blank");
    }, 1000);
  };

  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative" id="hero">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
              "Coder",
              1000,
              "Web Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tighter mb-4"
          >
            HEY, I AM <br />
            <span className="	text-sky-400">Ritam Khatua</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-200 md:text-lg text-base max-w-[300px]  md:max-w-[500px] mb-6"
          >
            Continuously improving my skills to build responsive and scalable
            web applications, blending both frontend and backend development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6  my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0,0,0,0.3",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-sky-500 rounded-xl"
            >
              <a
                href="./Ritam_khatua_Resume.pdf"
                download="Ritam_khatua_Resume.pdf"
                className="flex items-center"
              >
                Download CV
              </a>
            </motion.button>

            <div className="flex cursor-pointer gap-6 flex-row text-4xl md:text-sky-500 z-20">
              <motion.a
                target="_blank"
                whileHover={{ scale: 1.2 }}
                href="https://github.com/ritam2004-dev"
                className="text-gray-300"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                target="_blank"
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/ritam15/"
                className="text-gray-300"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                onClick={handleMailClick}
                className="text-gray-300"
              >
                <AiOutlineMail />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[1300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        ></motion.img>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-4xl px-12 md:px-0 w-full justify-center items-center pb-20 pt-10 mt-10"
      >
        <div className="flex flex-wrap justify-center items-center py-4">
          <p className="text-gray-200 mr-4 mb-2 text-2xl">My Tech Stack</p>
          <div className="flex flex-wrap justify-center">
            <DiHtml5 className="mx-2 my-1 text-red-600 text-4xl" />
            <DiCss3 className="mx-2 my-1 text-blue-600 text-4xl" />
            <DiJavascript1 className="mx-2 my-1 text-yellow-600 text-4xl" />
            <DiReact className="mx-2 my-1 text-teal-400 text-4xl" />
            <DiNodejsSmall className="mx-2 my-1 text-green-600 text-4xl" />
            <DiMongodb className="mx-2 my-1 text-green-600 text-4xl" />
            <SiExpress className="mx-2 my-1 text-gray-600 text-4xl" />
          </div>
        </div>
      </motion.div>

      <div className="absolute insert-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
