"use client";

import { useState } from "react";
import Logo from "./Logo";

const navItems = [
  { label: "How it works", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" aria-label="CreatorByte home">
          <Logo />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Sign up free
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border-[1.6px] border-ink md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="py-1 font-medium">
                {item.label}
              </a>
            ))}
            <a href="#" className="py-1 font-medium">
              Log in
            </a>
            <a
              href="#"
              className="mt-1 rounded-pill bg-ink px-5 py-3 text-center font-semibold text-white"
            >
              Sign up free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
