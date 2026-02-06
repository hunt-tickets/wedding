import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import InstallPrompt from "@/components/InstallPrompt";

export const metadata: Metadata = {
  title: "María José & Pablo José | 01 de Agosto 2026",
  description: "Estás invitado a celebrar nuestra boda en Santa Marta, Colombia. ¡Te esperamos!",
  keywords: ["boda", "wedding", "María José", "Pablo José", "Santa Marta", "Colombia"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MP & PJ Boda",
  },
  openGraph: {
    title: "María José & Pablo José - Nuestra Boda",
    description: "01 de Agosto 2026 | Santa Marta, Colombia",
    type: "website",
  },
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/apple-touch-icon.png",
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
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MP & PJ Boda" />
      </head>
      <body className="antialiased">
        <ServiceWorkerRegistration />
        <InstallPrompt />
        {children}
      </body>
    </html>
  );
}
