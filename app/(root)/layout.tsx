import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/organisme/Navbar";
import Footer from "@/components/organisme/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ScrollProgressBar from "@/components/atoms/ScrollProgressBar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-secondary [&::-webkit-scrollbar-thumb]:bg-second-accent`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          <ScrollProgressBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
