import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Surendar Kumar H P | Software Engineer Portfolio", description: "Portfolio of Surendar Kumar H P — Software Developer specializing in web development, Android applications, AI/ML and Cloud Technologies.", keywords: ["Surendar Kumar H P","Software Engineer","Android Developer","AI/ML","Full Stack Developer"], authors:[{name:"Surendar Kumar H P"}] };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

