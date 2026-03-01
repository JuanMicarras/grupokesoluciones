"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import "./contacto.css";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  seccion: string;
  mensaje: string;
}

export default function ContactoPage() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    seccion: "",
    mensaje: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Crear mensaje para WhatsApp
    const mensaje = `
*Nuevo mensaje de contacto*
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Empresa: ${formData.empresa}
Sección: ${formData.seccion}
Mensaje: ${formData.mensaje}
    `;

    const url = `https://wa.me/573006447179?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      empresa: "",
      seccion: "",
      mensaje: "",
    });
  };

  return (
    <main className="contacto-page">
      <div className="contacto-container">
        <h1 className="contacto-title">Contáctenos</h1>

        <div className="contacto-grid">
          {/* Columna izquierda: Información */}
          <section className="contacto-info">
            <h2>Información de contacto</h2>
            <p className="contacto-item">
              📱 <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/573006447179"
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 300 6447179
              </a>
            </p>
            <p className="contacto-subitem">
              Lunes - Viernes | 8 a.m. - 6 p.m; Sábados 8 a.m. - 12 m
            </p>
            <p className="contacto-item">
              🏢 <strong>Dirección:</strong> Cra 3A # 25-74, Barranquilla -
              Colombia
            </p>
            <p className="contacto-item">
              ✉️ <strong>Email:</strong>{" "}
              <a href="mailto:info@grupokes.com">info@grupokes.com</a>
            </p>
            <p className="contacto-subitem">
              Asesoría, cotizaciones e información
            </p>
          </section>

          {/* Columna derecha: Formulario */}
          <section className="contacto-form">
            <h2>Envíanos tu mensaje</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre y Apellido"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="empresa"
                  placeholder="Empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                />
              </div>

              <label htmlFor="seccion">Sección de interés</label>
              <select
                name="seccion"
                id="seccion"
                value={formData.seccion}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="cotizacion">Cotización</option>
                <option value="soporte">Soporte técnico</option>
                <option value="otros">Otros</option>
              </select>

              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                name="mensaje"
                placeholder="Escriba su mensaje aquí..."
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Enviar mensaje por WhatsApp</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
