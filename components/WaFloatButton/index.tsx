"use client";

import styles from "./styles.module.css";
import { IconWhatsApp } from "../icons";
import { CONTACTS_LINKS } from "@/constants";
import Link from "next/link";
import TrackedWhatsAppLink from "../TrackedWhatsAppLink";


export default function WaFloatButton() {
  return (
    <TrackedWhatsAppLink
      href={CONTACTS_LINKS.whatsapp.url}
      className={styles.container}
    >
      <IconWhatsApp className={styles.icon} />
    </TrackedWhatsAppLink>
  );
}
