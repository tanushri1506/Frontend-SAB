import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAB",
  description: "Students' Academic Board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sab/favicon.ico?v=2" sizes="any" />
      </head>

      <body className={`${inter.className}  overflow-x-hidden`}>
        <Header />

        <main className="min-h-screen">
          {children}
          <Toaster richColors />
        </main>

        <Footer />
      </body>
    </html>
  );
}
