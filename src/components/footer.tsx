import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#222] border-t border-gray-700 py-4 px-6 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-white text-sm gap-4 md:gap-0">
        {/* Kiri: Copyright */}
        <div className="flex gap-4 text-left">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Hajra Sardi. All rights reserved.
          </p>
        </div>

        {/* Tengah: Ikon Sosial Media */}
        <div className="flex gap-4 text-2xl justify-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Kanan: Credit */}
        {/* <div className="flex gap-4 text-right">
          <p className="text-center md:text-right text-xs text-gray-300 italic">
            Design by Hajra Sardi
          </p>
        </div> */}
      </div>
    </footer>
  );
}
