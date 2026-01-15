import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "Grupo KeSoluciones | Plantas eléctricas, mantenimiento y consultoría",
  description:
    "Especialistas en venta, instalación, mantenimiento y consultoría de plantas eléctricas. Servicios industriales, comerciales y residenciales.",
  keywords: [
    "plantas eléctricas",
    "mantenimiento de plantas eléctricas",
    "grupos electrógenos",
    "instalación de plantas eléctricas",
    "ATS",
    "subestaciones eléctricas",
    "servicios eléctricos industriales",
    "repuestos para plantas eléctricas",
    "Acometidas eléctricas",
    "Sensores"
  ],
  // openGraph: {
  //   title: "Grupo KeSoluciones",
  //   description:
  //     "Soluciones integrales en plantas eléctricas, mantenimiento y consultoría especializada.",
  //   url: "https://grupokesoluciones.com",
  //   siteName: "Grupo KeSoluciones",
  //   images: [
  //     {
  //       url: "/img/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Grupo KeSoluciones",
  //     },
  //   ],
  //   locale: "es_CO",
  //   type: "website",
  // },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
