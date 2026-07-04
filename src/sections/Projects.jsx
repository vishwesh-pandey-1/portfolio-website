import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import emotion from "../assets/projects/emotion.png";
import library from "../assets/projects/library.png";
import recipe from "../assets/projects/recipe.png";

function Projects() {
  return (
    <section id="projects"
    data-aos="zoom-in-up"
     className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border">

            <div className="overflow-hidden">
              <img
                src={emotion}
                alt="Student Emotion Recognition"
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-3">
                Student Emotion Recognition System
              </h3>

              <p className="text-gray-600">
                Deep Learning based project that detects students' emotions
                using CNN and OpenCV to monitor classroom engagement.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Python
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  OpenCV
                </span>

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  CNN
                </span>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Deep Learning
                </span>
              </div>

              <div className="flex gap-4 mt-6">

                <a
                  href="#"
                  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <FaGithub />
                  Code
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border">

            <div className="overflow-hidden">
              <img
                src={library}
                alt="Library Management System"
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-3">
                Library Management System
              </h3>

              <p className="text-gray-600">
                Java-based desktop application to manage books, members,
                issue/return records and library operations efficiently.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Java
                </span>

                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                  Swing
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  MySQL
                </span>
              </div>

              <div className="flex gap-4 mt-6">

                <a
                  href="#"
                  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <FaGithub />
                  Code
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border">

            <div className="overflow-hidden">
              <img
                src={recipe}
                alt="Recipe Finder Website"
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-3">
                Recipe Finder Website
              </h3>

              <p className="text-gray-600">
                Responsive recipe website built using HTML, CSS and
                JavaScript to search and explore recipes.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  HTML
                </span>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  CSS
                </span>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>
              </div>

              <div className="flex gap-4 mt-6">

                <a
                  href="#"
                  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <FaGithub />
                  Code
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;