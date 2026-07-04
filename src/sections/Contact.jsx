import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact"
    data-aos="fade-up"
     className="py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
      Contact Me
    </h2>

    <div className="grid md:grid-cols-2 gap-12">

      {/* Left Side */}
      <div className="space-y-6">

        <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <FaEnvelope className="text-3xl text-blue-600" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>pandeyvishwesh50@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <FaPhone className="text-3xl text-blue-600" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>+91 8887571609</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <FaMapMarkerAlt className="text-3xl text-blue-600" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p>Greater Noida, India</p>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className="bg-white p-8 rounded-xl shadow-md">

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 transition"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-lg p-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 transition"
          ></textarea>

          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  </div>
</section>
  );
}

export default Contact;