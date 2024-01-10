import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hassan Ali | Portfolio",
  description:
    "I am a passionate web developer specializing in Next.js, with a robust skill set encompassing HTML, CSS, Tailwind CSS, JavaScript, TypeScript, and React.js. My expertise extends to version control systems like Git, and I possess a foundational understanding of Node.js frameworks, particularly Express.js. Explore my portfolio for innovative web solutions crafted with precision and creativity.",
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
