"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Calculator } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sueldo", href: "/sueldo" },
  { name: "Préstamo", href: "/prestamo" },
  { name: "Interés", href: "/interes" },
  { name: "Blog", href: "/blog" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:scale-105 transition-transform">
                <Calculator className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                Calcula Ecuador
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/sueldo"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              Empezar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/sueldo"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-lg text-base font-medium transition-colors shadow-sm"
              >
                Empezar a calcular
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
