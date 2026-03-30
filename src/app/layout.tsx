import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { MoonSecretProvider } from "@/components/MoonSecretProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jessie Li Kam Wa",
  description:
    "Third-year CS student at York University. Intern at AssistIQ. Building with TypeScript, React, Next.js, Three.js, Python, and Express.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef4ff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh min-h-full touch-manipulation antialiased">
        <ThemeProvider>
          <MoonSecretProvider>{children}</MoonSecretProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
