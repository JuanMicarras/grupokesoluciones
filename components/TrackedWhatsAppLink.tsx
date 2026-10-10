// components/TrackedWhatsAppLink.tsx
"use client";

import Link from "next/link";
import { ReactNode } from "react";

type TrackedWhatsAppLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function TrackedWhatsAppLink({ 
  href, 
  className, 
  children 
}: TrackedWhatsAppLinkProps) {
  
  const registrarConversion = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18465905677/kEPKCNeUp5gdEI24neVE',
        'value': 1.0,
        'currency': 'COP'
      });
    }
  };

  return (
    <Link 
      href={href} 
      className={className} 
      target="_blank" 
      rel="noreferrer" 
      onClick={registrarConversion}
    >
      {children}
    </Link>
  );
}