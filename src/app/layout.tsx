import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // 1. Adicione esta linha
});

export const metadata: Metadata = {
  title: "Rede Cinema",
  description: "Created By ANIMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. Injete a variável na tag html
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
       {/* 3. Mantenha a classe no body */}
       <body className={`${poppins.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
