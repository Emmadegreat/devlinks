import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Devlins - App",
	description: "Devlinks"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="../../public/assests/images/devlinks.png" />
      <body className={inter.className}>
        {children}
        <ToastContainer/>
      </body>
    </html>
  );
}
