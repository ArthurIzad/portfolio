import localFont from "next/font/local"

import {Lato} from 'next/font/google'
import {Playwrite } from 'next/font/google'


import "./globals.css"




const lato  = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const playwrite  = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const metadata = {
  title: "Portfolio",
  description: "Un aperçu de ce que je sais faire !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={lato.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

// ${geistMono.variable}
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });