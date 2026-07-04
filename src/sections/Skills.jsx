import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBinaryTree2 } from "react-icons/tb";
function Skills() {
  return (
    <section id="skills" 
    data-aos="fade-left"
    className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">

            <FaJava className="text-6xl text-orange-600 mx-auto mb-4" />

            <h3 className="text-xl font-bold">
            Java
            </h3>

             <p className="text-gray-600 mt-2">
                Core Programming
            </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <TbBinaryTree2 className="text-6xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold">DSA</h3>
            <p className="text-gray-600 mt-2">Problem Solving</p>
            </div>

         <div className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <FaReact className="text-6xl text-cyan-500 mx-auto mb-4" />
             <h3 className="text-xl font-bold">React</h3>
             <p className="text-gray-600 mt-2">Frontend Development</p>
            </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <FaHtml5 className="text-6xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">HTML</h3>
            <p className="text-gray-600 mt-2">Markup Language</p>
            </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <FaCss3Alt className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">CSS</h3>
            <p className="text-gray-600 mt-2">Responsive Design</p>
            </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <FaJsSquare className="text-6xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold">JavaScript</h3>
            <p className="text-gray-600 mt-2">Dynamic Web Apps</p>
            </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <SiTailwindcss className="text-6xl text-sky-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Tailwind CSS</h3>
             <p className="text-gray-600 mt-2">Modern CSS Framework</p>
            </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <FaGitAlt className="text-6xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Git</h3>
            <p className="text-gray-600 mt-2">Version Control</p>
            </div>

          
        </div>
      </div>
    </section>
  );
}

export default Skills;