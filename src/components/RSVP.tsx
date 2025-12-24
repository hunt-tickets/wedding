"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, Check, Loader2 } from "lucide-react";

const rsvpSchema = z.object({
  name: z.string().min(2, "Por favor ingresa tu nombre completo"),
  email: z.string().email("Por favor ingresa un email válido"),
  guests: z.string().min(1, "Por favor selecciona el número de invitados"),
  attendance: z.enum(["yes", "no"], {
    message: "Por favor confirma tu asistencia",
  }),
  dietary: z.string().optional(),
  message: z.string().optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export default function RSVP() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
  });

  const attendance = watch("attendance");

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-16 sm:py-24 md:py-32 bg-navy text-white relative overflow-hidden">
      {/* Decorative elements - hidden on mobile */}
      <div className="absolute inset-0 opacity-5 hidden sm:block">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_40%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,white_0%,transparent_40%)]" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6">
            Confirma tu Asistencia
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Por favor, confirma antes del 1 de Julio de 2026
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Form or Success Message */}
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-10 text-center border border-white/20"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl mb-3 sm:mb-4">¡Gracias por confirmar!</h3>
            <p className="text-white/70 text-sm sm:text-base">
              Hemos recibido tu respuesta. ¡Nos vemos el 01 de Agosto de 2026!
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-10 border border-white/20"
          >
            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                {...register("name")}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-white placeholder-white/40"
                placeholder="Tu nombre"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Correo electrónico *
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-white placeholder-white/40"
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Attendance */}
            <div className="mb-5 sm:mb-6">
              <label className="block text-sm font-medium mb-2 sm:mb-3">
                ¿Asistirás a la boda? *
              </label>
              <div className="flex gap-2 sm:gap-4">
                <label className="flex-1">
                  <input
                    type="radio"
                    {...register("attendance")}
                    value="yes"
                    className="sr-only peer"
                  />
                  <div className="py-2.5 sm:py-3 px-3 sm:px-4 border border-white/20 rounded-lg text-center cursor-pointer peer-checked:bg-gold peer-checked:border-gold transition-all hover:border-white/40 text-sm sm:text-base">
                    ¡Sí, asistiré!
                  </div>
                </label>
                <label className="flex-1">
                  <input
                    type="radio"
                    {...register("attendance")}
                    value="no"
                    className="sr-only peer"
                  />
                  <div className="py-2.5 sm:py-3 px-3 sm:px-4 border border-white/20 rounded-lg text-center cursor-pointer peer-checked:bg-white/20 peer-checked:border-white/40 transition-all hover:border-white/40 text-sm sm:text-base">
                    No podré asistir
                  </div>
                </label>
              </div>
              {errors.attendance && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.attendance.message}
                </p>
              )}
            </div>

            {/* Conditional fields for attendance */}
            {attendance === "yes" && (
              <>
                {/* Number of guests */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Número de invitados *
                  </label>
                  <select
                    {...register("guests")}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-white"
                  >
                    <option value="" className="text-navy">
                      Selecciona
                    </option>
                    <option value="1" className="text-navy">
                      1 persona
                    </option>
                    <option value="2" className="text-navy">
                      2 personas
                    </option>
                    <option value="3" className="text-navy">
                      3 personas
                    </option>
                    <option value="4" className="text-navy">
                      4 personas
                    </option>
                  </select>
                  {errors.guests && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.guests.message}
                    </p>
                  )}
                </div>

                {/* Dietary restrictions */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Restricciones alimentarias
                  </label>
                  <input
                    type="text"
                    {...register("dietary")}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-white placeholder-white/40"
                    placeholder="Vegetariano, vegano, alergias, etc."
                  />
                </div>
              </>
            )}

            {/* Message */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                Mensaje para los novios
              </label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-white placeholder-white/40 resize-none"
                placeholder="¡Déjanos un mensaje especial!"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold text-white py-4 rounded-lg font-medium hover:bg-gold-light transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar confirmación
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
