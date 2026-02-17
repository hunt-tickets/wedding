import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "María José & Pablo José | 01 de Agosto 2026",
  description: "Estás invitado a celebrar nuestra boda en Santa Marta, Colombia. ¡Te esperamos!",
  keywords: ["boda", "wedding", "María José", "Pablo José", "Santa Marta", "Colombia"],
  openGraph: {
    title: "María José & Pablo José - Nuestra Boda",
    description: "01 de Agosto 2026 | Santa Marta, Colombia",
    type: "website",
  },
  icons: {
    icon: "/icons/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="Cache-Control" content="no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
