"use client"

import * as React from "react"
import { AdBanner, AdSidebar } from "@/components/ads"
import { Calendar, DollarSign, Percent } from "lucide-react"
import { cn } from "@/lib/utils"
// Importamos recharts, pero lo hacemos opcionalmente seguro con try/catch o dinámico. Next.js lo compilará bien si se instaló.
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function InteresPage() {
  const [tab, setTab] = React.useState<"simple" | "compuesto">("compuesto")
  
  const [capital, setCapital] = React.useState<number | "">(1000)
  const [tasa, setTasa] = React.useState<number | "">(8)
  const [tiempo, setTiempo] = React.useState<number | "">(5)
  const [frecuencia, setFrecuencia] = React.useState<number>(12) // Mensual por defecto (12 veces al año)

  const numCapital = Number(capital) || 0
  const numTasa = Number(tasa) || 0
  const numTiempo = Number(tiempo) || 0

  let interesTotal = 0
  let montoFinal = 0
  let dataChart: any[] = []

  if (numCapital > 0 && numTasa > 0 && numTiempo > 0) {
    const r = numTasa / 100

    if (tab === "simple") {
      interesTotal = numCapital * r * numTiempo
      montoFinal = numCapital + interesTotal
      
      // Datos para gráfico simple
      for (let i = 0; i <= numTiempo; i++) {
        dataChart.push({
          año: "Año " + i,
          total: numCapital + (numCapital * r * i),
          interes: numCapital * r * i
        })
      }
    } else {
      // Interés compuesto
      montoFinal = numCapital * Math.pow(1 + (r / frecuencia), frecuencia * numTiempo)
      interesTotal = montoFinal - numCapital

      // Datos para gráfico compuesto
      for (let i = 0; i <= numTiempo; i++) {
        dataChart.push({
          año: "Año " + i,
          total: numCapital * Math.pow(1 + (r / frecuencia), frecuencia * i),
          interes: (numCapital * Math.pow(1 + (r / frecuencia), frecuencia * i)) - numCapital
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Calculadora de Intereses</h1>
            <p className="text-muted-foreground text-lg">Proyecta el crecimiento de tu dinero a través del tiempo. Descubre el poder del interés compuesto en tus inversiones o ahorros.</p>
          </div>

          {/* TABS */}
          <div className="flex bg-muted/50 p-1 rounded-xl w-fit">
            <button
              onClick={() => setTab("simple")}
              className={cn(
                "px-6 py-2.5 text-sm font-medium rounded-lg transition-all",
                tab === "simple" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Interés Simple
            </button>
            <button
              onClick={() => setTab("compuesto")}
              className={cn(
                "px-6 py-2.5 text-sm font-medium rounded-lg transition-all",
                tab === "compuesto" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Interés Compuesto
            </button>
          </div>

          <div className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* INPUTS */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="capital" className="text-sm font-medium text-foreground block">Capital Inicial (USD)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      id="capital"
                      type="number"
                      value={capital}
                      onChange={(e) => setCapital(e.target.value ? Number(e.target.value) : "")}
                      className="w-full bg-background border border-input pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
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
                      step="0.1"
                      value={tasa}
                      onChange={(e) => setTasa(e.target.value ? Number(e.target.value) : "")}
                      className="w-full bg-background border border-input pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="tiempo" className="text-sm font-medium text-foreground block">Tiempo (Años)</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      id="tiempo"
                      type="number"
                      value={tiempo}
                      onChange={(e) => setTiempo(e.target.value ? Number(e.target.value) : "")}
                      className="w-full bg-background border border-input pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                {tab === "compuesto" && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-4">
                    <label htmlFor="frecuencia" className="text-sm font-medium text-foreground block">Frecuencia de Capitalización</label>
                    <select
                      id="frecuencia"
                      value={frecuencia}
                      onChange={(e) => setFrecuencia(Number(e.target.value))}
                      className="w-full bg-background border border-input px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none"
                    >
                      <option value={1}>Anual (1 vez al año)</option>
                      <option value={2}>Semestral (2 veces al año)</option>
                      <option value={4}>Trimestral (4 veces al año)</option>
                      <option value={12}>Mensual (12 veces al año)</option>
                      <option value={365}>Diaria (365 veces al año)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* RESULTADOS */}
              <div className="flex flex-col gap-4">
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 text-center">
                  <p className="text-sm text-primary font-medium mb-1 uppercase tracking-wider">Monto Final Acumulado</p>
                  <p className="text-4xl font-extrabold text-foreground mb-4">
                    ${montoFinal > 0 ? montoFinal.toFixed(2) : "0.00"}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm pt-4 border-t border-primary/10">
                    <span className="text-muted-foreground">Capital Inicial</span>
                    <span className="font-medium text-foreground">${numCapital.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-muted-foreground">Interés Ganado</span>
                    <span className="font-semibold text-emerald-500">+${interesTotal > 0 ? interesTotal.toFixed(2) : "0.00"}</span>
                  </div>
                </div>

                {dataChart.length > 0 && (
                  <div className="bg-muted/10 border border-border rounded-2xl p-4 h-64 mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={dataChart} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" opacity={0.3} />
                        <XAxis dataKey="año" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => "$" + val} />
                        <Tooltip 
                          formatter={(value: any) => ["$" + Number(value).toFixed(2), 'Monto']}
                          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Area type="monotone" dataKey="total" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            </div>
          </div>

          <article className="prose dark:prose-invert max-w-none text-muted-foreground py-8">
            <h2 className="text-2xl font-bold text-foreground">¿Cuál es la diferencia?</h2>
            <h3 className="text-xl font-bold mt-4 text-foreground">Interés Simple</h3>
            <p>
              El interés simple calcula las ganancias únicamente sobre el capital inicial prestado o depositado. No se ganan intereses sobre los intereses generados en periodos anteriores. Crece de manera lineal (línea recta).
            </p>
            <h3 className="text-xl font-bold mt-4 text-foreground">Interés Compuesto (La Octava Maravilla)</h3>
            <p>
              En el interés compuesto, los intereses que generas en cada periodo se suman al capital inicial para calcular los nuevos intereses. Esto produce un efecto "bola de nieve" donde tu dinero crece exponencialmente. A mayor frecuencia de capitalización, mayor será el rendimiento final.
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
