import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AeroFlow",
  description: "A guided AI workflow manager for developers. Your specs take flight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
