import "./globals.css";
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-romantic",
});

export const metadata = {
  title: "For Trisha",
  description: "for trisha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={parisienne.className}>
      <head>
        <link
          rel="icon"
          href="https://cdn-icons-png.freepik.com/512/6697/6697628.png"
          type="image/png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
