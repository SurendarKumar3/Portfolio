import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Surendar Kumar H P - Portfolio",
  description: "Computer Science Engineering Student | Full Stack Developer - Portfolio showcasing my projects, skills, certifications, and hackathon achievements",
  keywords: ["portfolio", "developer", "computer science", "full stack", "AI", "ML", "cybersecurity", "Surendar Kumar", "hackathon"],
  authors: [{ name: "Surendar Kumar H P" }],
  openGraph: {
    title: "Surendar Kumar H P - Portfolio",
    description: "Computer Science Engineering Student | Full Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
