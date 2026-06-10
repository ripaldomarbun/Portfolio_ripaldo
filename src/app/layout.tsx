import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Doe | Portfolio",
  description:
    "Portfolio pribadi John Doe — Full-stack Developer. Lihat project, pengalaman, dan hubungi untuk kolaborasi.",
  openGraph: {
    title: "John Doe | Portfolio",
    description:
      "Full-stack Developer — lihat portfolio dan hubungi saya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-surface text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
