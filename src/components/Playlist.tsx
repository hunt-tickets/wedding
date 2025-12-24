"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, ExternalLink } from "lucide-react";

export default function Playlist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Music className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6">
            ¡Ayúdanos con la Música!
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto mb-10">
            Queremos que la pista de baile esté siempre llena. Agrega tus canciones
            favoritas a nuestra playlist colaborativa de Spotify.
          </p>
          <div className="w-24 h-px bg-gold mx-auto mb-12" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-cream rounded-2xl p-8 md:p-12"
          >
            {/* Spotify Embed Placeholder */}
            <div className="bg-navy/5 rounded-xl p-8 mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1DB954] rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-serif text-2xl text-navy">
                    Playlist de la Boda
                  </h3>
                  <p className="text-navy/60">Pablo & María José</p>
                </div>
              </div>

              <p className="text-navy/50 mb-6 text-sm">
                🎵 42 canciones • 2h 45min • Colaborativa
              </p>

              <div className="space-y-3">
                {[
                  { title: "Perfect", artist: "Ed Sheeran" },
                  { title: "All of Me", artist: "John Legend" },
                  { title: "Thinking Out Loud", artist: "Ed Sheeran" },
                ].map((song, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-white rounded-lg"
                  >
                    <div className="w-10 h-10 bg-navy/10 rounded flex items-center justify-center text-navy/40 text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-navy">{song.title}</p>
                      <p className="text-sm text-navy/50">{song.artist}</p>
                    </div>
                  </div>
                ))}
                <p className="text-navy/40 text-sm pt-2">+ 39 canciones más...</p>
              </div>
            </div>

            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1DB954] text-white px-8 py-4 rounded-full hover:bg-[#1ed760] transition-colors font-medium"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Abrir en Spotify
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
