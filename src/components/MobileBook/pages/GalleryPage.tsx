"use client";

import { Camera } from "lucide-react";

const photos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=400&q=80",
];

export default function GalleryPage() {
  return (
    <div className="h-full flex flex-col p-5">
      <div className="text-center mb-4">
        <Camera className="w-5 h-5 text-gold mx-auto mb-2" />
        <h2 className="font-serif text-lg text-navy">Galería</h2>
        <div className="w-10 h-px bg-gold mx-auto mt-2" />
      </div>

      <div className="flex-1 grid grid-cols-2 gap-2">
        {photos.map((src, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden bg-navy/10"
            style={{ aspectRatio: "1" }}
          >
            <img
              src={src}
              alt={`Foto ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <p className="text-center text-navy/40 text-[10px] mt-4">
        #MariaJoseYPablo2026
      </p>
    </div>
  );
}
