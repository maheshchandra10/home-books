import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AuthContext from "@/context/AuthCOntext";
import ToasterContext from "@/context/ToasterContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entre na plataforma",
  description: "Sua biblioteca virtual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
