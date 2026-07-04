import hero from "../assets/hero.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section
  id="home"
  data-aos="fade-up"
  className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-100"
>
      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <h3 className="text-2xl font-medium">
            Hi, I'm
          </h3>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mt-2">
          <span className="text-gray-900">Vishwesh</span>{" "}
          <span className="text-blue-600">Pandey</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Java Developer",
              1500,
              "React Developer",
              1500,
              "Full Stack Developer",
              1500,
              "Problem Solver",
              1500,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-semibold mt-5 text-blue-600"
          />

          <p className="text-gray-600 mt-6 text-lg leading-8 max-w-2xl">
            Final-year B.Tech Computer Science Engineering student with a
            strong interest in Full Stack Web Development, Java, and Data
            Structures & Algorithms. I enjoy building responsive web
            applications, solving coding challenges, and continuously learning
            modern technologies to become a skilled Software Engineer.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
         Java
         </span>

           <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
           DSA
          </span>

         <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
           React
        </span>

  

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
          Tailwind CSS
        </span>
        </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-8 flex-wrap">

            <a
          href="/resume/Vishwesh_Pandey_Resume.pdf"
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:-translate-y-1 hover:scale-105 transition duration-300 inline-block"
          >
          Download Resume
          </a>

            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:scale-105 transition duration-300">
              Contact Me
            </button>

          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8">

            <a
            href="https://github.com/vishwesh-pandey-1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 hover:scale-110"
            >
            <FaGithub className="text-2xl" />
            </a>

            <a
            href="https://www.linkedin.com/in/vishwesh-pandey-53ab472b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 hover:scale-110"
            >
            <FaLinkedin className="text-2xl" />
            </a>
            <a
          href="https://leetcode.com/u/vishwesh_pandey/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 rounded-full shadow-lg hover:bg-yellow-400 hover:text-white transition duration-300 hover:scale-110"
          >
          <SiLeetcode className="text-2xl" />
          </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <img
            src={hero}
            alt="Hero"
            className="w-96 h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl transition duration-500 hover:scale-105 hover:rotate-2"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;