"use client";

import styles from "./styles.module.css";
import { IconWhatsApp } from "../icons";
import { CONTACTS_LINKS } from "@/constants";
import Link from "next/link";
import { sendGAEvent } from '@next/third-parties/google';

const registrarConversion = () => {
    sendGAEvent('event', 'conversion', {
      'send_to': 'AW-18465905677/kEPKCNeUp5gdEI24neVE',
      'value': 1.0,
      'currency': 'COP'
    });
  };

export default function WaFloatButton() {
  return (
    <Link
      href={CONTACTS_LINKS.whatsapp.url}
      className={styles.container}
      target="_blank"
      rel="noreferrer"
      onClick={registrarConversion}
    >
      <IconWhatsApp className={styles.icon} />
    </Link>
  );
}
