import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "F5 Moments",
  //@TODO: add description & favicon
  description:
    "F5 is a non-profit organization that trains and equips the youth to face the challenges of life by reaching out to them through their schools and colleges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <title>F5 Moments</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="F5 Moments" key="title" />
        <meta
          name="description"
          content="F5 is a non-profit organization that trains and equips the youth to face the challenges of life by reaching out to them through their schools and colleges."
        />
        <meta
          name="keywords"
          content="F5 Moments, F5Moments, F5moments, f5 moments, f5moments, f5Moments"
        />
        <meta name="author" content="F5 Moments" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
