import { Nav, Footer } from "./components";
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
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
