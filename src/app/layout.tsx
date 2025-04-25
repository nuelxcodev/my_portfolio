import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Poppins } from "next/font/google";
import "./globals.css";

// Original fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Added fonts
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ekine Chukwuemeka | Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Ekine Chukwuemeka, a self-taught Frontend Developer specializing in React, JavaScript, and beautiful web experiences.",
  keywords: [
    "Ekine Chukwuemeka",
    "frontend developer",
    "software engineer",
    "React developer",
    "JavaScript",
    "portfolio",
    "self-taught developer",
    "web design",
  ],
  authors: [
    {
      name: "Ekine Chukwuemeka Emmanuel",
      url: "https://ekine-chukwuemeka.netlify.app",
    },
  ],
  creator: "Ekine Chukwuemeka",
  metadataBase: new URL("https://ekine-chukwuemeka.netlify.app"),
  openGraph: {
    title: "Ekine Chukwuemeka | Frontend Developer Portfolio",
    description: "Browse Ekine's personal portfolio and see beautifully crafted projects, technical skills, and a way to get in touch.",
    siteName: "Ekine Chukwuemeka Portfolio",
    images: [
      {
        url: "https://ekine-chukwuemeka.netlify.app/preview-image.png",
        width: 1200,
        height: 630,
        alt: "Ekine Chukwuemeka Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekine Chukwuemeka | Frontend Developer Portfolio",
    description: "Explore the portfolio of Ekine Chukwuemeka, a frontend developer with a passion for clean UI and smooth UX.",
    creator: "@yourTwitterHandle", // Optional: replace if you have one
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${poppins.variable}`}>
      <body className="antialiased w-screen">{children}</body>
    </html>
  );
}
