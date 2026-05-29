"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "../icons";
import { CONTACTS_LINKS } from "@/constants";

const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Ventas", href: "/ventas" },
  { label: "Blog", href: "/blog" },
  { label: "Por qué elegirnos", href: "/#porque" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ─── Navbar shell ─── */}
      <header
        className={`fixed inset-x-0 top-0 z-[100] flex items-center h-[var(--nav-h)] px-4 md:px-7 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--surface-scrolled)] shadow-md backdrop-blur-md backdrop-saturate-[180%]"
            : "bg-[var(--surface)]/80 backdrop-blur-md backdrop-saturate-[160%]"
        }`}
      >
        <div className="w-full max-w-[1160px] mx-auto flex items-center justify-between gap-8">
          
          {/* ─── Logo ─── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-[34px] h-[34px] rounded-md flex items-center justify-center shrink-0">
              <Image
                alt="KES isotipo"
                src="/img/isotipo_kes.svg"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-['Barlow_Condensed',sans-serif] text-lg font-bold tracking-wide uppercase text-[var(--ink)]">
                Grupo KeSoluciones
              </span>
              <span className="font-['Barlow',sans-serif] text-[0.6rem] font-normal tracking-widest uppercase text-[var(--muted)] mt-[1px]">
                Mantenimiento
              </span>
            </div>
          </Link>

          {/* ─── Nav links (Desktop) ─── */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1 m-0 p-0 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-['Barlow',sans-serif] text-sm font-medium text-[var(--muted)] px-3 py-1.5 rounded transition-colors hover:text-[var(--ink)] hover:bg-slate-800/5 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ─── Right side (Desktop) ─── */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <Link
              href={CONTACTS_LINKS.phone.value}
              className="flex items-center gap-1.5 font-['Barlow',sans-serif] text-[0.82rem] font-semibold text-[var(--ink)] tracking-tight"
            >
              <div className="w-3.5 h-3.5 stroke-[var(--blue)] shrink-0 flex items-center">
                 <PhoneIcon />
              </div>
              {CONTACTS_LINKS.phone.label}
            </Link>
            <Link
              href="/#contacto"
              className="font-['Barlow',sans-serif] text-[0.82rem] font-semibold tracking-wide text-white bg-[var(--blue)] px-4 py-2 rounded-md transition-all hover:bg-[var(--accent-dark)] hover:-translate-y-[1px] active:translate-y-0 whitespace-nowrap"
            >
              Contáctanos
            </Link>
          </div>

          {/* ─── Hamburger (Mobile) ─── */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 bg-transparent border border-[var(--border)] rounded-md px-2 shrink-0 transition-colors hover:border-slate-800/25 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-[1.5px] w-full bg-[var(--ink)] rounded-sm transition-all duration-300 origin-center ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-full bg-[var(--ink)] rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[1.5px] w-full bg-[var(--ink)] rounded-sm transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* ─── Mobile drawer ─── */}
      <div
        className={`md:hidden fixed inset-x-0 top-[var(--nav-h)] bottom-0 z-[99] bg-[var(--surface-scrolled)] backdrop-blur-md backdrop-saturate-[180%] flex flex-col px-7 py-6 border-t border-[var(--border)] transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col m-0 p-0 list-none">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-[var(--border)]">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-['Barlow',sans-serif] text-base font-medium text-[var(--ink)] py-3.5 transition-all hover:text-[var(--blue)] hover:pl-1.5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-col gap-3">
          <Link
            href={CONTACTS_LINKS.phone.value}
            className="flex items-center gap-2 font-['Barlow',sans-serif] text-[0.9rem] font-semibold text-[var(--ink)]"
          >
            <div className="w-[15px] h-[15px] stroke-[var(--blue)] flex items-center">
                <PhoneIcon />
            </div>
            {CONTACTS_LINKS.phone.label}
          </Link>
          <Link
            href="/#contacto"
            onClick={() => setMenuOpen(false)}
            className="block font-['Barlow',sans-serif] text-[0.9rem] font-semibold text-center text-white bg-[var(--blue)] rounded-md py-3 transition-colors hover:bg-[var(--accent-dark)]"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </>
  );
}