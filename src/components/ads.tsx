import * as React from "react"
import { cn } from "@/lib/utils"

// Estos componentes actúan como placeholders limpios para los espacios publicitarios.
// En producción, aquí se insertaría el script de Google Adsense o el \`<ins>\` correspondiente.

export function AdBanner({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-4xl mx-auto my-8 bg-muted/50 border border-border/50 rounded-xl p-4 flex flex-col items-center justify-center min-h-[120px] text-muted-foreground text-sm relative overflow-hidden group", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
      <span className="mb-2 block text-xs opacity-50 uppercase tracking-widest">Publicidad</span>
      <p className="text-center">Espacio optimizado para Banner Google Adsense</p>
    </div>
  )
}

export function AdInline({ className }: { className?: string }) {
  return (
    <div className={cn("w-full my-6 bg-muted/30 border border-border/30 rounded-lg p-4 flex items-center justify-center min-h-[90px] text-muted-foreground text-sm", className)}>
      <p className="text-center flex flex-col items-center">
        <span className="text-[10px] opacity-50 uppercase tracking-widest mb-1">Anuncio</span>
        Bloque de anuncio adaptativo
      </p>
    </div>
  )
}

export function AdSidebar({ className }: { className?: string }) {
  return (
    <div className={cn("w-full h-full min-h-[600px] bg-muted/30 border border-border/50 rounded-xl p-4 flex items-center justify-center text-muted-foreground text-sm sticky top-24", className)}>
      <div className="text-center">
        <span className="text-xs opacity-50 uppercase tracking-widest block mb-2">Publicidad</span>
        <p>Vertical Sticky Ad</p>
      </div>
    </div>
  )
}
