"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { IconBolt } from "@/components/icons/SectionIcons";
import Link from "next/link";
import Image from "next/image";
import StatsBar from "@/components/StatsBar";

export function AnimatedHero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => [
            "toda la costa caribe",
            "Barranquilla",
            "Cartagena",
            "Santa Marta",
            "Valledupar",
            "Sincelejo",
            "Montería",
        ],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2500);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <header id="top" className="hero">
            <div className="container heroInner">
                <div className="heroText">
                    <p className="kicker">
                        <IconBolt size={14} />
                        Grupo KeSoluciones
                    </p>

                    <h1 className="text-left font-regular">
                        <span className="block mb-2">
                            Mantenimiento de plantas eléctricas{" "}
                            <span className="heroHighlight">24/7</span>
                        </span>
                        <span className="block text-[0.8em] font-medium text-gray-500 dark:text-gray-400 mb-2">
                            para empresas y propiedad horizontal en
                        </span>
                        <span className="relative flex w-full overflow-hidden pb-4 pt-1 h-[1.3em]">
                            {titles.map((title, index) => (
                                <motion.span
                                    key={index}
                                    className="absolute font-bold text-blue-600 dark:text-sky-400"
                                    initial={{ opacity: 0, y: "-100%" }}
                                    transition={{ type: "spring", stiffness: 50 }}
                                    animate={
                                        titleNumber === index
                                            ? {
                                                y: 0,
                                                opacity: 1,
                                            }
                                            : {
                                                y: titleNumber > index ? "-150%" : "150%",
                                                opacity: 0,
                                            }
                                    }
                                >
                                    {title}
                                </motion.span>
                            ))}
                        </span>
                    </h1>

                    <p className="lead mt-4">
                        Mantenimiento preventivo y correctivo, diagnóstico y reparación de
                        plantas eléctricas. Venta de repuestos y soporte técnico
                        especializado.
                    </p>

                    <p className="seoText">
                        Ejecutamos rutinas programadas, contratos de mantenimiento,
                        montaje y puesta en marcha, Transferencias automáticas (ATS),
                        subestaciones y sincronismo.
                    </p>

                    <div className="ctaRow mt-8">
                        <Link
                            className="btnPrimary"
                            href="https://wa.me/573006447179?text=Hola,%20quisiera%20cotizar%20servicios/repuestos."
                            target="_blank"
                            rel="noreferrer"
                        >
                            Cotiza por WhatsApp
                        </Link>

                        <Link className="btnGhost" href="#servicios">
                            Ver servicios
                        </Link>
                    </div>

                    <StatsBar />
                </div>

                <div className="heroVisual">
                    <div className="heroCard" aria-label="Marca">
                        <Image
                            className="logoImg"
                            src="/img/Logo_principal.png"
                            alt="Grupo KeSoluciones — Logo"
                            width={200}
                            height={200}
                            priority
                        />
                        <p className="heroCardText">
                            Continuidad operativa, atención técnica confiable y soluciones a
                            la medida para su empresa.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
