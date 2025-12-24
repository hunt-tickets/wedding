"use client";

import { Music, Plus } from "lucide-react";

export default function PlaylistPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      <Music className="w-6 h-6 text-gold mb-3" />
      <h2 className="font-serif text-lg text-navy mb-1">Playlist</h2>
      <div className="w-10 h-px bg-gold mx-auto mt-2 mb-6" />

      <p className="text-navy/60 text-xs mb-6">
        ¡Ayúdanos a crear la playlist perfecta!
      </p>

      <div className="w-full max-w-[200px] bg-navy/5 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <Music className="w-4 h-4 text-white" />
          </div>
          <span className="font-medium text-sm text-navy">Spotify</span>
        </div>
        <p className="text-navy/50 text-xs">
          Sugiere canciones para la fiesta
        </p>
      </div>

      <button className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-xs">
        <Plus className="w-4 h-4" />
        Agregar canción
      </button>

      <p className="text-navy/40 text-[10px] mt-6">
        Las mejores sugerencias sonarán en la fiesta
      </p>
    </div>
  );
}
