import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CartProvider from "@/propvider/CartProvider";
import { Toaster } from "react-hot-toast";
import { metadata } from "./components/metaData/metaData";
import ClientLayout from "./components/clientLayout/ClientLayout";

export { metadata };

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <ClientLayout>{children}</ClientLayout>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
