"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";

export default function RSVPPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="w-6 h-6 text-green-600" />
        </div>
        <h2 className="font-serif text-lg text-navy mb-2">¡Gracias!</h2>
        <p className="text-navy/60 text-xs">
          Hemos recibido tu confirmación
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-5">
      <div className="text-center mb-4">
        <Mail className="w-5 h-5 text-gold mx-auto mb-2" />
        <h2 className="font-serif text-lg text-navy">Confirmar Asistencia</h2>
        <div className="w-10 h-px bg-gold mx-auto mt-2" />
      </div>

      <form
        className="flex-1 flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <input
          type="text"
          placeholder="Tu nombre"
          required
          className="w-full px-3 py-2 bg-navy/5 rounded-lg text-sm text-navy placeholder:text-navy/40 outline-none focus:ring-1 focus:ring-gold"
        />
        <input
          type="email"
          placeholder="Tu email"
          required
          className="w-full px-3 py-2 bg-navy/5 rounded-lg text-sm text-navy placeholder:text-navy/40 outline-none focus:ring-1 focus:ring-gold"
        />
        <select
          required
          className="w-full px-3 py-2 bg-navy/5 rounded-lg text-sm text-navy outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="">¿Asistirás?</option>
          <option value="yes">Sí, asistiré</option>
          <option value="no">No podré asistir</option>
        </select>
        <select
          className="w-full px-3 py-2 bg-navy/5 rounded-lg text-sm text-navy outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="1">1 persona</option>
          <option value="2">2 personas</option>
          <option value="3">3 personas</option>
        </select>
        <textarea
          placeholder="Mensaje (opcional)"
          rows={2}
          className="w-full px-3 py-2 bg-navy/5 rounded-lg text-sm text-navy placeholder:text-navy/40 outline-none focus:ring-1 focus:ring-gold resize-none"
        />
        <button
          type="submit"
          className="mt-auto w-full py-2 bg-navy text-white rounded-lg text-sm font-medium hover:bg-navy-light transition-colors"
        >
          Confirmar
        </button>
      </form>
    </div>
  );
}
