"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#mySkills" },
  { name: "Portofolio", href: "#portofolio" },
  { name: "Experiences", href: "#experiences" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = navItems.map(({ href }) => {
        const el = document.querySelector(href);
        return {
          href,
          offset: el?.getBoundingClientRect().top! + window.scrollY,
        };
      });

      const current = offsets
        .reverse()
        .find((section) => scrollY >= section.offset - 100);

      if (current) setActiveSection(current.href);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#222] text-white shadow-md">
      <div className="flex justify-between items-center h-16 px-6 md:px-10 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          HajraPORTO
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-12 text-lg font-medium gap-6 m-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                activeSection === item.href
                  ? "text-pink-400 underline underline-offset-4"
                  : "hover:text-pink-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-16 right-0 w-2/8 h-screen bg-[#222] px-6 py-6 shadow-lg z-40 md:hidden"
          >
            <ul className="flex flex-col gap-6 text-lg font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block ${
                      activeSection === item.href
                        ? "text-pink-400 underline underline-offset-4"
                        : "hover:text-pink-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
