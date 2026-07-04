function About() {
  return (
    <section id="about"
    data-aos="fade-right"
     className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-blue-600 mb-10">
      About Me
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        

        <p className="text-gray-600 leading-8">
          I'm Vishwesh Pandey, a Final-year B.Tech Computer Science Engineering
          student passionate about Full Stack Web Development, Java,
          React, and Data Structures & Algorithms.
        </p>

        <p className="text-gray-600 mt-5 leading-8">
          I enjoy building responsive websites, solving coding problems,
          and continuously learning modern technologies to become
          a Software Engineer.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-blue-600">
            100+
          </h3>
          <p>DSA Problems</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-blue-600">
            5+
          </h3>
          <p>Projects</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-blue-600">
            Java
          </h3>
          <p>Main Language</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-blue-600">
            2027
          </h3>
          <p>Graduation</p>
        </div>

      </div>

    </div>

  </div>
</section>
  );
}

export default About;