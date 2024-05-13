import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "./_context/cart";
import AuthProvider from "./_providers/auth";
import "./globals.css";
import { Toaster } from "@/app/_components/ui/sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSW Food",
  description: "App Web FSW Food",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.svg" />
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
