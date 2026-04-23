import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    default: "Calcula Ecuador | Calculadoras Financieras Gratuitas",
    template: "%s | Calcula Ecuador",
  },
  description: "Calculadoras financieras útiles para Ecuador. Calcula tu sueldo neto, cuotas de préstamos e intereses de manera rápida, gratuita y precisa.",
  keywords: ["calculadora ecuador", "sueldo neto ecuador", "calculadora prestamos", "iess", "calculadora intereses", "finanzas ecuador"],
  authors: [{ name: "Calcula Ecuador" }],
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://calculaecuador.com",
    title: "Calcula Ecuador | Calculadoras Financieras Gratuitas",
    description: "Calcula tu sueldo neto, cuotas de préstamos e intereses rápido y gratis para Ecuador.",
    siteName: "Calcula Ecuador",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcula Ecuador",
    description: "Calculadoras financieras útiles para Ecuador.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
