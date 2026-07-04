import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <h2 className="text-2xl font-bold text-blue-500">
          Vishwesh Pandey
        </h2>

        <p className="mt-2 text-gray-400">
          Aspiring Full Stack Developer
        </p>

        <div className="flex justify-center gap-6 text-2xl my-6">

          <a
          href="https://github.com/vishwesh-pandey-1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
          >
          <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vishwesh-pandey-53ab472b0/"
        target="_blank"
          rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:pandeyvishwesh50@gmail.com"
            className="hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500 text-sm">
          © 2026 Vishwesh Pandey. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;