"use client";

import { usePathname } from "next/navigation";
import Navbar from "../navbar/Navbar";
import Container from "../container/Container";
import Footer from "../footer/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = pathname === "/cart";

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="flex-grow p-5">
        <Container>{children}</Container>
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}
