import Footer from "../components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WaFloatButton from "../components/WaFloatButton";
import Navbar from "@/components/Navbar";

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
    "Sensores",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Grupo KeSoluciones",
              description:
                "Servicios de mantenimiento, montaje, consultoría y soluciones para plantas eléctricas en la Costa Caribe Colombiana.",
              url: "https://grupokesoluciones.com",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Costa Caribe Colombiana",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "CO",
              },
              sameAs: ["https://wa.me/573177788997"],
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <WaFloatButton />
      </body>
    </html>
  );
}
