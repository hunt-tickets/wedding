import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pablo José & María José | 01 de Agosto 2026",
  description: "Estás invitado a celebrar nuestra boda en Santa Marta, Colombia. ¡Te esperamos!",
  keywords: ["boda", "wedding", "Pablo José", "María José", "Santa Marta", "Colombia"],
  openGraph: {
    title: "Pablo José & María José - Nuestra Boda",
    description: "01 de Agosto 2026 | Santa Marta, Colombia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
