import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayax Global Travels & Tours | Travel, Education & Global Opportunities",
  description: "Official portal for Medical Tourism in India, Work Abroad Visas, Study Abroad admissions, and flight reservations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased m-0 p-0">
        {children}
      </body>
    </html>
  );
}