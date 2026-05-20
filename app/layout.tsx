import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import AppProvider from './provider'

const appFont= Nunito_Sans({
  subsets:['latin']
})



export const metadata: Metadata = {
  title: "UIUX Generator App",
  description: "Generate Free UI and UX Designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={appFont.className}
      >
        <AppProvider>
          {children}
        </AppProvider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
