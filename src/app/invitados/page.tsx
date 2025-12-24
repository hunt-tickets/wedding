"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Upload, Heart, Users, ArrowLeft, X, Instagram, Sparkles } from "lucide-react";
import Link from "next/link";

interface Guest {
  id: string;
  name: string;
  photo: string;
  message: string;
  instagram?: string;
  attending: "bride" | "groom" | "both";
  likes: number;
  likedByMe: boolean;
}

// Mock data for demo
const initialGuests: Guest[] = [
  {
    id: "1",
    name: "Camila Rodríguez",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    message: "¡Felicidades a los novios! 💕",
    instagram: "@camila_rdz",
    attending: "bride",
    likes: 12,
    likedByMe: false,
  },
  {
    id: "2",
    name: "Andrés García",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    message: "Amigos desde la universidad, ¡los quiero!",
    instagram: "@andresg",
    attending: "groom",
    likes: 8,
    likedByMe: false,
  },
  {
    id: "3",
    name: "Valentina López",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    message: "Prima de la novia ✨",
    attending: "bride",
    likes: 15,
    likedByMe: false,
  },
  {
    id: "4",
    name: "Santiago Martínez",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    message: "Mejor amigo del novio desde siempre",
    instagram: "@santimtz",
    attending: "groom",
    likes: 20,
    likedByMe: false,
  },
  {
    id: "5",
    name: "Isabella Torres",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    message: "¡Qué emoción verlos casarse! 🎉",
    attending: "both",
    likes: 6,
    likedByMe: false,
  },
  {
    id: "6",
    name: "Mateo Hernández",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    message: "Compañero de trabajo del novio",
    attending: "groom",
    likes: 4,
    likedByMe: false,
  },
];

export default function InvitadosPage() {
  const [guests, setGuests] = useState<Guest[]>(initialGuests);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<"all" | "bride" | "groom">("all");
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  // Form state
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [instagram, setInstagram] = useState("");
  const [attending, setAttending] = useState<"bride" | "groom" | "both">("both");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !photoPreview) return;

    const newGuest: Guest = {
      id: Date.now().toString(),
      name,
      photo: photoPreview,
      message,
      instagram: instagram || undefined,
      attending,
      likes: 0,
      likedByMe: false,
    };

    setGuests([newGuest, ...guests]);
    setShowForm(false);
    setName("");
    setMessage("");
    setInstagram("");
    setPhotoPreview(null);
  };

  const handleLike = (guestId: string) => {
    setGuests(guests.map(g => {
      if (g.id === guestId) {
        return {
          ...g,
          likes: g.likedByMe ? g.likes - 1 : g.likes + 1,
          likedByMe: !g.likedByMe,
        };
      }
      return g;
    }));
  };

  const filteredGuests = guests.filter(g => {
    if (filter === "all") return true;
    return g.attending === filter || g.attending === "both";
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy text-white py-6 px-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Volver</span>
          </Link>
          <h1 className="font-serif text-xl">Invitados</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-gold text-navy px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
          >
            <Camera className="w-4 h-4" />
            <span className="hidden sm:inline">Unirme</span>
          </button>
        </div>
      </header>

      {/* Stats */}
      <div className="bg-navy/5 py-4 px-4">
        <div className="max-w-4xl mx-auto flex justify-center gap-8">
          <div className="text-center">
            <p className="font-serif text-2xl text-navy">{guests.length}</p>
            <p className="text-navy/60 text-xs">Invitados</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl text-gold">{guests.reduce((acc, g) => acc + g.likes, 0)}</p>
            <p className="text-navy/60 text-xs">Corazones</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="py-4 px-4 border-b border-navy/10">
        <div className="max-w-4xl mx-auto flex justify-center gap-2">
          {[
            { key: "all", label: "Todos" },
            { key: "bride", label: "Novia" },
            { key: "groom", label: "Novio" },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key as typeof filter)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === f.key
                  ? "bg-navy text-white"
                  : "bg-white text-navy border border-navy/20 hover:border-navy/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Guest Grid */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredGuests.map((guest, index) => (
            <motion.div
              key={guest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedGuest(guest)}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-navy/10">
                <img
                  src={guest.photo}
                  alt={guest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Badge */}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-[10px] font-medium ${
                  guest.attending === "bride" ? "bg-pink-400 text-white" :
                  guest.attending === "groom" ? "bg-blue-400 text-white" :
                  "bg-gold text-navy"
                }`}>
                  {guest.attending === "bride" ? "👰" : guest.attending === "groom" ? "🤵" : "💒"}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-serif text-white text-sm truncate">{guest.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Heart className={`w-3 h-3 ${guest.likedByMe ? "text-red-400 fill-red-400" : "text-white/70"}`} />
                    <span className="text-white/70 text-xs">{guest.likes}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredGuests.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-navy/20 mx-auto mb-4" />
            <p className="text-navy/50">No hay invitados en esta categoría</p>
          </div>
        )}
      </div>

      {/* Registration Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/70 flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full sm:max-w-md sm:rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="bg-navy p-4 text-white flex items-center justify-between sticky top-0">
                <h2 className="font-serif text-xl">Únete al muro</h2>
                <button onClick={() => setShowForm(false)} className="p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Photo Upload */}
                <div className="flex justify-center">
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="relative w-32 h-32 rounded-full bg-navy/5 border-2 border-dashed border-navy/20 flex items-center justify-center cursor-pointer hover:border-gold transition-colors overflow-hidden"
                  >
                    {photoPreview ? (
                      <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-navy/40 mx-auto" />
                        <p className="text-navy/40 text-xs mt-1">Tu foto</p>
                      </div>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-navy/70 text-sm mb-1">Tu nombre *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 bg-navy/5 rounded-xl text-navy placeholder:text-navy/40 outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-navy/70 text-sm mb-1">Mensaje para los novios</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="¡Felicidades! 💕"
                    rows={2}
                    className="w-full px-4 py-3 bg-navy/5 rounded-xl text-navy placeholder:text-navy/40 outline-none focus:ring-2 focus:ring-gold resize-none"
                  />
                </div>

                {/* Instagram */}
                <div>
                  <label className="block text-navy/70 text-sm mb-1">Instagram (opcional)</label>
                  <div className="relative">
                    <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/40" />
                    <input
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      placeholder="@tu_usuario"
                      className="w-full pl-10 pr-4 py-3 bg-navy/5 rounded-xl text-navy placeholder:text-navy/40 outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                </div>

                {/* Attending */}
                <div>
                  <label className="block text-navy/70 text-sm mb-2">¿De quién eres invitado/a?</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: "bride", label: "Novia", emoji: "👰" },
                      { key: "groom", label: "Novio", emoji: "🤵" },
                      { key: "both", label: "Ambos", emoji: "💒" },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setAttending(opt.key as typeof attending)}
                        className={`py-3 rounded-xl text-sm transition-colors ${
                          attending === opt.key
                            ? "bg-navy text-white"
                            : "bg-navy/5 text-navy hover:bg-navy/10"
                        }`}
                      >
                        <span className="text-lg">{opt.emoji}</span>
                        <p className="text-xs mt-1">{opt.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!name || !photoPreview}
                  className="w-full py-4 bg-gold text-navy font-medium rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Publicar
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Guest Detail Modal */}
      <AnimatePresence>
        {selectedGuest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedGuest(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-sm w-full"
            >
              <div className="relative aspect-square">
                <img
                  src={selectedGuest.photo}
                  alt={selectedGuest.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedGuest(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                  selectedGuest.attending === "bride" ? "bg-pink-400 text-white" :
                  selectedGuest.attending === "groom" ? "bg-blue-400 text-white" :
                  "bg-gold text-navy"
                }`}>
                  {selectedGuest.attending === "bride" ? "Invitado de la novia" :
                   selectedGuest.attending === "groom" ? "Invitado del novio" :
                   "Invitado de ambos"}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-2xl text-navy">{selectedGuest.name}</h3>
                  <button
                    onClick={() => handleLike(selectedGuest.id)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-navy/5"
                  >
                    <Heart className={`w-5 h-5 transition-colors ${
                      selectedGuest.likedByMe ? "text-red-500 fill-red-500" : "text-navy/40"
                    }`} />
                    <span className="text-sm text-navy">{selectedGuest.likes}</span>
                  </button>
                </div>

                {selectedGuest.message && (
                  <p className="text-navy/70 text-sm mb-3">"{selectedGuest.message}"</p>
                )}

                {selectedGuest.instagram && (
                  <a
                    href={`https://instagram.com/${selectedGuest.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gold hover:text-navy transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    {selectedGuest.instagram}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
