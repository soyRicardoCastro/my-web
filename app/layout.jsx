'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { darkTheme, lightTheme } from './theme'

import { Nav, Footer } from "./components"

import './dist.css'

export default function RootLayout({
  children,
}) {
  return (
    <html>
      <head>
        <title>Ricardo Castro: Web Developer</title>
      </head>
      <body className='bg-black/90 text-gray-200 min-h-screen'>
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className
          }}
        >
          <NextUIProvider theme={darkTheme}>
            <Nav />
            <main>
              {children}
            </main>
            <Footer />
          </NextUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
