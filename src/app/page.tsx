import Link from "next/link"
import { ArrowRight, Calculator, CheckCircle2, Coins, Landmark, PiggyBank } from "lucide-react"
import { AdBanner, AdInline } from "@/components/ads"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-background pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#93c5fd] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            100% Gratis para Ecuador
          </div>
          
          <h1 className="mx-auto max-w-4xl font-extrabold tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Calculadoras financieras <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              gratuitas para Ecuador
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
            Calcula sueldos, préstamos, intereses y más herramientas útiles en segundos. Diseñado para darte respuestas rápidas sin complicaciones.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/sueldo" 
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              Empezar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="#herramientas" 
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-background border-2 border-input px-8 py-4 text-base font-semibold text-foreground hover:bg-muted transition-all"
            >
              Ver calculadoras
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4"><AdBanner /></div>

      {/* HERRAMIENTAS DESTACADAS */}
      <section id="herramientas" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Herramientas Destacadas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Selecciona la calculadora que necesitas y obtén resultados al instante, adaptados a la normativa ecuatoriana.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Calculadora de Sueldo"
              description="Conoce tu sueldo neto exacto después de aportes al IESS y calcula el impacto de tus horas extras y bonificaciones."
              icon={<Coins className="h-8 w-8 text-primary" />}
              href="/sueldo"
            />
            <FeatureCard 
              title="Calculadora de Préstamo"
              description="Simula tu crédito. Calcula la cuota mensual, el interés total a pagar y obtén una tabla de amortización detallada."
              icon={<Landmark className="h-8 w-8 text-primary" />}
              href="/prestamo"
            />
            <FeatureCard 
              title="Calculadora de Interés"
              description="Compara el crecimiento de tu dinero con interés simple o compuesto. Ideal para proyectar ahorros e inversiones."
              icon={<PiggyBank className="h-8 w-8 text-primary" />}
              href="/interes"
            />
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">¿Por qué usar Calcula Ecuador?</h2>
              <p className="text-lg text-muted-foreground mb-8">Nuestra plataforma está construida pensando en las necesidades específicas de los trabajadores y ciudadanos ecuatorianos, eliminando la complejidad de los cálculos financieros.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Completamente Gratis", desc: "Sin costos ocultos ni suscripciones premium." },
                  { title: "Sin Registro Necesario", desc: "Entra, calcula y sal. Tu privacidad está garantizada." },
                  { title: "Resultados Inmediatos", desc: "Algoritmos optimizados para darte respuestas en milisegundos." },
                  { title: "Diseñado para Ecuador", desc: "Aportes al IESS y fórmulas adaptadas a la realidad local." }
                ].map((benefit, i) => (
                  <div key={i} className="flex group">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-foreground">{benefit.title}</h4>
                      <p className="mt-1 text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-emerald-400/20 rounded-3xl transform rotate-3" />
              <div className="relative bg-card border border-border shadow-2xl rounded-3xl p-8 transform -rotate-1 transition-transform hover:rotate-0 duration-500">
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Sueldo Neto Calculado</p>
                    <p className="text-4xl font-bold text-foreground">$1,250.00</p>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calculator className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sueldo Bruto</span>
                    <span className="font-semibold text-foreground">$1,380.45</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Aporte IESS (9.45%)</span>
                    <span className="font-semibold text-red-500">-$130.45</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-primary w-[90%] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4"><AdInline /></div>

      {/* FAQ SEO */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "¿Cómo se calcula el sueldo neto en Ecuador?", a: "Para obtener el sueldo neto, debes restar el aporte personal al IESS (9.45%) del sueldo bruto, más las retenciones de impuesto a la renta si aplicara. Nuestra calculadora lo hace en segundos." },
              { q: "¿Es confiable el resultado de la calculadora de préstamos?", a: "Sí, utilizamos fórmulas de amortización estándar (método francés) usadas por los bancos y cooperativas en el país para darte una estimación precisa de tu cuota mensual." },
              { q: "¿Guardan mis datos financieros?", a: "No. Todos los cálculos se realizan localmente en tu navegador. Nosotros no guardamos, rastreamos ni enviamos tu información financiera a ningún servidor." }
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Aprende sobre Finanzas</h2>
              <p className="text-muted-foreground max-w-2xl">Artículos, guías y consejos para administrar mejor tu dinero en Ecuador.</p>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center text-primary font-semibold hover:underline">
              Ver todos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard title="Cómo calcular tu sueldo neto correctamente" tag="Guía" date="15 Abr, 2026" />
            <BlogCard title="Entendiendo el interés compuesto en inversiones" tag="Inversiones" date="28 Mar, 2026" />
            <BlogCard title="Consejos antes de solicitar un préstamo personal" tag="Créditos" date="12 Mar, 2026" />
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="inline-flex items-center text-primary font-semibold hover:underline">
              Ver todos nuestros artículos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4"><AdBanner /></div>
    </div>
  )
}

function FeatureCard({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) {
  return (
    <Link href={href} className="flex flex-col p-8 bg-card rounded-2xl border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-all group h-full">
      <div className="mb-6 p-4 bg-primary/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground flex-1 leading-relaxed">{description}</p>
      <div className="mt-6 flex items-center text-primary font-medium">
        Calcular ahora <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}

function BlogCard({ title, tag, date }: { title: string, tag: string, date: string }) {
  return (
    <Link href="/blog" className="group flex flex-col justify-between h-full bg-card rounded-2xl border border-border p-6 hover:shadow-md transition-all">
      <div>
        <div className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary mb-4">
          {tag}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
      </div>
      <div className="mt-6 flex items-center text-sm text-muted-foreground">
        <span>{date}</span>
      </div>
    </Link>
  )
}
