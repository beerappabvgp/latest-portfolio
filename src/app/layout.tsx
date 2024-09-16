import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const robotoRegular = localFont({
  src: "./fonts/Roboto/Roboto-Regular.ttf",
  variable: "--font-roboto-regular",
  weight: "400", // Normal weight
});

const robotoBold = localFont({
  src: "./fonts/Roboto/Roboto-Bold.ttf",
  variable: "--font-roboto-bold",
  weight: "700", // Bold weight
});

export const metadata: Metadata = {
  title: `Bharath's Portfolio`,
  description: "This page is all about me and who I am",
  icons: {
    icon: "/photo.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="ml-5 mr-5">
      <body
        className={`${robotoBold.variable} ${robotoBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
