"use client"

import * as React from "react"
import { Metadata } from "next"
import { AdBanner, AdSidebar } from "@/components/ads"
import { Calculator, DollarSign, Info } from "lucide-react"

export default function SueldoPage() {
  const [bruto, setBruto] = React.useState<number | "">("")
  const [extras, setExtras] = React.useState<number | "">(0)
  const [bonos, setBonos] = React.useState<number | "">(0)
  const [descuentos, setDescuentos] = React.useState<number | "">(0)

  const numBruto = Number(bruto) || 0
  const numExtras = Number(extras) || 0
  const numBonos = Number(bonos) || 0
  const numDescuentos = Number(descuentos) || 0

  // En Ecuador, IESS 9.45% se calcula sobre el sueldo bruto + horas extras.
  const baseIESS = numBruto + numExtras
  const calculoIESS = baseIESS * 0.0945
  
  const totalIngresos = numBruto + numExtras + numBonos
  const totalEgresos = calculoIESS + numDescuentos
  
  const sueldoNeto = totalIngresos - totalEgresos

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <AdBanner />
      
      <div className="max-w-6xl mx-auto mt-8 items-start gap-8 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Calculadora de Sueldo Neto Ecuador</h1>
            <p className="text-muted-foreground text-lg">Calcula exactamente cuánto recibirás a fin de mes luego del descuento de la aportación al IESS y otros rubros.</p>
          </div>

          <div className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* INPUTS */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="bruto" className="text-sm font-medium text-foreground block">Sueldo Bruto Mensual</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      id="bruto"
                      type="number"
                      value={bruto}
                      onChange={(e) => setBruto(e.target.value ? Number(e.target.value) : "")}
                      className="w-full bg-background border border-input pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Ej. 1200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="extras" className="text-sm font-medium text-foreground block">Valor Horas Extras</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      id="extras"
                      type="number"
                      value={extras}
                      onChange={(e) => setExtras(e.target.value ? Number(e.target.value) : "")}
                      className="w-full bg-background border border-input pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="bonos" className="text-sm font-medium text-foreground block">Bonificaciones (no aporta IESS)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      id="bonos"
                      type="number"
                      value={bonos}
                      onChange={(e) => setBonos(e.target.value ? Number(e.target.value) : "")}
                      className="w-full bg-background border border-input pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="descuentos" className="text-sm font-medium text-foreground block">Otros descuentos (préstamos, etc)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      id="descuentos"
                      type="number"
                      value={descuentos}
                      onChange={(e) => setDescuentos(e.target.value ? Number(e.target.value) : "")}
                      className="w-full bg-background border border-input pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* RESULTADOS */}
              <div className="bg-muted/30 rounded-2xl p-6 border border-border/50 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-6 text-foreground flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-primary" />
                    Resumen de Pago
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                      <span className="text-muted-foreground text-sm">Total Ingresos aportables</span>
                      <span className="font-medium text-foreground">${baseIESS.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                      <span className="text-muted-foreground text-sm">Aporte IESS (9.45%)</span>
                      <span className="font-medium text-red-500">-${calculoIESS.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                      <span className="text-muted-foreground text-sm flex items-center">
                        Total Egresos
                      </span>
                      <span className="font-medium text-red-500">-${totalEgresos.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <p className="text-sm text-primary font-medium mb-1 uppercase tracking-wider">Sueldo Neto a Recibir</p>
                  <p className="text-4xl md:text-5xl font-extrabold text-foreground">
                    ${sueldoNeto > 0 ? sueldoNeto.toFixed(2) : "0.00"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <article className="prose dark:prose-invert max-w-none text-muted-foreground py-8">
            <h2 className="text-2xl font-bold text-foreground">¿Cómo se calcula el Sueldo Neto en Ecuador?</h2>
            <p>
              El cálculo del sueldo neto para trabajadores bajo relación de dependencia en Ecuador es sencillo pero requiere conocer qué rubros aportan al seguro social.
            </p>
            <h3 className="text-xl font-bold mt-6 text-foreground">Aporte al IESS (9.45%)</h3>
            <p>
              Por ley, el trabajador debe aportar el 9.45% de sus ingresos gravados al Instituto Ecuatoriano de Seguridad Social (IESS). Este cálculo se realiza sumando el <strong>Sueldo Bruto</strong> y las <strong>Horas Extras</strong> realizadas en el mes. Ciertos bonos y beneficios no constituyen materia gravada y por lo tanto, no se les aplica el 9.45%.
            </p>
            <div className="bg-blue-50/50 dark:bg-blue-950/20 p-4 rounded-xl border border-blue-200 dark:border-blue-900 flex gap-3 mt-4">
              <Info className="h-6 w-6 text-blue-500 shrink-0" />
              <p className="m-0 text-sm">Recuerda que si tu sueldo supera la base imponible del Impuesto a la Renta, también deberás considerar esa retención, la cual depende de las cargas familiares y los gastos personales proyectados.</p>
            </div>
          </article>
        </div>

        {/* SIDEBAR FOR ADS */}
        <div className="hidden lg:block relative h-full">
          <AdSidebar />
        </div>
      </div>
    </div>
  )
}
