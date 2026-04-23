import Link from "next/link"
import { Calculator } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-primary-foreground p-1 rounded group-hover:scale-105 transition-transform">
                <Calculator className="h-4 w-4" />
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">
                Calcula Ecuador
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Herramientas financieras gratuitas, confiables y fáciles de usar diseñadas específicamente para Ecuador.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Calculadoras</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/sueldo" className="hover:text-primary transition-colors">
                  Sueldo Neto Ecuador
                </Link>
              </li>
              <li>
                <Link href="/prestamo" className="hover:text-primary transition-colors">
                  Préstamos
                </Link>
              </li>
              <li>
                <Link href="/interes" className="hover:text-primary transition-colors">
                  Intereses
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Recursos</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog Financiero
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Acerca de</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Un proyecto creado para ayudar a los ecuatorianos a tomar mejores decisiones financieras de forma rápida y sencilla.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {year} Calcula Ecuador. Las calculadoras proveen estimaciones y no constituyen asesoría financiera formal.
          </p>
        </div>
      </div>
    </footer>
  )
}
