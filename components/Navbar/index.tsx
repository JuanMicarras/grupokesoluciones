"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "../icons";
import { CONTACTS_LINKS } from "@/constants";

const navLinks = [
  { label: "Servicios", href: "/#servicios" },
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
      <header
        className={[
          styles.navbar,
          scrolled ? styles.scrolled : styles.blurred,
        ].join(" ")}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Image
                alt="KES isotipo"
                src="/img/isotipo_kes.svg"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>Grupo KeSoluciones</span>
              <span className={styles.logoTagline}>Mantenimiento</span>
            </div>
          </Link>

          <nav>
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.right}>
            <Link href={CONTACTS_LINKS.phone.value} className={styles.phone}>
              <PhoneIcon />
              {CONTACTS_LINKS.phone.label}
            </Link>
            <Link href="/#contacto" className={styles.cta}>
              Contáctanos
            </Link>
          </div>

          <button
            className={[styles.hamburger, menuOpen ? styles.open : ""].join(
              " ",
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={[styles.drawer, menuOpen ? styles.open : ""].join(" ")}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.drawerBottom}>
          <Link
            href={CONTACTS_LINKS.phone.value}
            className={styles.drawerPhone}
          >
            <PhoneIcon />
            {CONTACTS_LINKS.phone.label}
          </Link>
          <Link
            href="/#contacto"
            className={styles.drawerCta}
            onClick={() => setMenuOpen(false)}
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </>
  );
}
