import type { Metadata } from "next";
import { Geist, Geist_Mono} from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

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
        <Header />
        <main className="pt-12 min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}


export const metadata: Metadata = {
  title: "Dimasaurus | Fullstack Developer",
  description: "Portfolio Dimasaurus, Fullstack Developer specializing in React, Next.js, Supabase, and modern web technologies.",
  keywords: [
    "Fullstack Developer",
    "Next.js",
    "React",
    "Supabase",
    "Portfolio"
  ],
  openGraph: {
    title: "Dimasaurus Portfolio",
    description: "Personal portfolio showcasing projects and experience.",
    type: "website",
  },
};
