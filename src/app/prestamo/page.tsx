"use client"

import * as React from "react"
import { AdBanner, AdSidebar } from "@/components/ads"
import { Calendar, DollarSign, Percent } from "lucide-react"

export default function PrestamoPage() {
  const [monto, setMonto] = React.useState<number | "">(5000)
  const [tasa, setTasa] = React.useState<number | "">(16.06)
  const [meses, setMeses] = React.useState<number | "">(24)

  const numMonto = Number(monto) || 0
  const numTasa = Number(tasa) || 0
  const numMeses = Number(meses) || 0

  let cuotaMensual = 0
  let totalPagado = 0
  let interesTotal = 0
  let tablaAmortizacion = []

  if (numMonto > 0 && numTasa > 0 && numMeses > 0) {
    const tasaMensual = numTasa / 100 / 12
    const factor = Math.pow(1 + tasaMensual, numMeses)
    cuotaMensual = (numMonto * tasaMensual * factor) / (factor - 1)
    totalPagado = cuotaMensual * numMeses
    interesTotal = totalPagado - numMonto

    // Generar tabla
    let saldo = numMonto
    for (let i = 1; i <= numMeses; i++) {
      const interesMes = saldo * tasaMensual
      const capitalMes = cuotaMensual - interesMes
      saldo = saldo - capitalMes
      if (saldo < 0.01) saldo = 0

      // limit to 100 rows to avoid very long arrays if user types 1000 months
      if (i <= 120) {
        tablaAmortizacion.push({
          mes: i,
          cuota: cuotaMensual,
          interes: interesMes,
          capital: capitalMes,
          saldo: saldo
        })
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <AdBanner />
      
      <div className="max-w-6xl mx-auto mt-8 items-start gap-8 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Calculadora de Préstamos y Créditos</h1>
            <p className="text-muted-foreground text-lg">Simula tu crédito bancario o cooperativo. Conoce cuánto pagarás de cuota mensual y el interés total mediante el método de amortización francés.</p>
          </div>

          <div className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* INPUTS */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="monto" className="text-sm font-medium text-foreground block">Monto del Préstamo (USD)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      id="monto"
                      type="number"
                      value={monto}
                      onChange={(e) => setMonto(e.target.value ? Number(e.target.value) : "")}
                      className="w-full bg-background border border-input pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="tasa" className="text-sm font-medium text-foreground block">Tasa de Interés Anual (%)</label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      id="tasa"
                      type="number"
                      step="0.01"
                      value={tasa}
                      onChange={(e) => setTasa(e.target.value ? Number(e.target.value) : "")}
                      className="w-full bg-background border border-input pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-lg"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">La tasa máxima en Ecuador varía según el segmento de crédito. Ej: Consumo ~16.06%</p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="meses" className="text-sm font-medium text-foreground block">Plazo en Meses</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      id="meses"
                      type="number"
                      value={meses}
                      onChange={(e) => setMeses(e.target.value ? Number(e.target.value) : "")}
                      className="w-full bg-background border border-input pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* RESULTADOS */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 flex flex-col justify-center">
                <div className="text-center mb-8">
                  <p className="text-sm text-primary font-medium mb-2 uppercase tracking-wider">Cuota Mensual Estimada</p>
                  <p className="text-5xl font-extrabold text-foreground">
                    ${cuotaMensual > 0 ? cuotaMensual.toFixed(2) : "0.00"}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-primary/10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Capital (Préstamo)</span>
                    <span className="font-semibold text-foreground">${numMonto.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Interés Total</span>
                    <span className="font-semibold text-red-500">${interesTotal > 0 ? interesTotal.toFixed(2) : "0.00"}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-base pt-2 border-t border-primary/10">
                    <span className="font-medium text-foreground">Total a Pagar</span>
                    <span className="font-bold text-foreground">${totalPagado > 0 ? totalPagado.toFixed(2) : "0.00"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {tablaAmortizacion.length > 0 && (
            <div className="bg-card border border-border shadow-sm rounded-2xl overflow-hidden mt-8">
              <div className="px-6 py-4 border-b border-border bg-muted/30">
                <h3 className="font-semibold text-foreground">Tabla de Amortización (Método Francés)</h3>
                <p className="text-sm text-muted-foreground">Mostrando los primeros {tablaAmortizacion.length} meses</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                    <tr>
                      <th className="px-6 py-3 font-medium">Mes</th>
                      <th className="px-6 py-3 font-medium text-right">Cuota</th>
                      <th className="px-6 py-3 font-medium text-right">Capital</th>
                      <th className="px-6 py-3 font-medium text-right text-red-500/80">Interés</th>
                      <th className="px-6 py-3 font-medium text-right">Saldo Restante</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tablaAmortizacion.map((fila) => (
                      <tr key={fila.mes} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-3 font-medium text-foreground">{fila.mes}</td>
                        <td className="px-6 py-3 text-right">${fila.cuota.toFixed(2)}</td>
                        <td className="px-6 py-3 text-right text-emerald-600 dark:text-emerald-400">${fila.capital.toFixed(2)}</td>
                        <td className="px-6 py-3 text-right text-red-600 dark:text-red-400">${fila.interes.toFixed(2)}</td>
                        <td className="px-6 py-3 text-right font-medium text-foreground">${fila.saldo.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <article className="prose dark:prose-invert max-w-none text-muted-foreground py-8">
            <h2 className="text-2xl font-bold text-foreground">Acerca del Crédito en Ecuador</h2>
            <p>
              En el sistema financiero ecuatoriano, la mayoría de préstamos de consumo y vivienda utilizan el <strong>método de amortización francés</strong>. Esto significa que la cuota que pagas mensualmente es siempre la misma, pero la proporción entre los intereses y el capital varía con el tiempo.
            </p>
            <ul>
              <li><strong>Al principio:</strong> Una gran parte de tu cuota se destina a pagar los intereses y muy poco a reducir el capital adeudado.</li>
              <li><strong>Al final:</strong> Pagas menos intereses y la mayor parte de tu cuota se destina a reducir el capital.</li>
            </ul>
            <p>
              Tasas referenciales: Es importante visitar fuentes oficiales como el Banco Central del Ecuador (BCE) para conocer las tasas máximas permitidas para cada segmento de crédito (Consumo, Inmobiliario, Microcrédito, etc.).
            </p>
          </article>
        </div>

        <div className="hidden lg:block relative h-full">
          <AdSidebar />
        </div>
      </div>
    </div>
  )
}
