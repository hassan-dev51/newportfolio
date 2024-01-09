import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hassan Ali | Portfolio",
  description:
    "i am full stack next js developer. i build custom and business type web application using typescript and modren trends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="m-auto max-w-[1440px]">
          {children}
          <Toaster richColors />
        </main>
      </body>
    </html>
  );
}
