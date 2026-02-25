"use client";

import styles from "./styles.module.css";
import { IconWhatsApp } from "../icons";
import { CONTACTS_LINKS } from "@/constants";
import Link from "next/link";

export default function WaFloatButton() {
  return (
    <Link
      href={CONTACTS_LINKS.whatsapp.url}
      target="_blank"
      className={styles.container}
    >
      <IconWhatsApp className={styles.icon} />
    </Link>
  );
}
