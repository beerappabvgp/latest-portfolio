import type { Metadata } from "next";
import { Poppins, Playfair_Display, Kode_Mono , Roboto, Shantell_Sans , McLaren , Handlee } from "next/font/google";
import "./globals.css";

// Load Poppins for body text
const handlee = Handlee({
  subsets: ['latin'],
  weight: ['400'], // Normal and bold weights
  variable: '--font-handlee',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Normal and bold weights
  variable: '--font-poppins',
});

const kodeMono = Kode_Mono({
  subsets: ['latin'],
  weight: ['400', '700'], // Normal and bold weights
  variable: '--font-kode',
});

const mclaren = McLaren({
  subsets: ['latin'],
  weight: ['400' , '400'], // Normal and bold weights
  variable: '--font-mclaren',
});



// Load Playfair Display for headings
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Normal and bold weights
  variable: '--font-playfair',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400' , '700'],
  variable: "--font-roboto",
});

const shan = Shantell_Sans({
  subsets: ['latin'],
  weight: ['400' , '700'],
  variable: "--font-shan"
})

export const metadata: Metadata = {
  title: `Bharath's Portfolio`,
  description: "This page is all about me and who I am",
  icons: {
    icon: "/photo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfairDisplay.variable} ${kodeMono.variable} ${roboto.variable} ${shan.variable}`}>
      <body className="antialiased bg-background text-foreground font-roboto">
        {children}
      </body>
    </html>
  );
}
