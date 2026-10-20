"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // モバイルメニューが開いているときは背景スクロールを防止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight group">
          <span className="gradient-text">S.Matsuoka</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
                isOpen ? "rotate-45 translate-x-1" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-200 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
                isOpen ? "-rotate-45 translate-x-1" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav overlay & dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-zinc-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg text-base font-medium transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

