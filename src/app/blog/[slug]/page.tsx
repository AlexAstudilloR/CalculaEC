import * as React from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Share2, User } from "lucide-react"
import { AdBanner, AdInline, AdSidebar } from "@/components/ads"
import { Metadata } from "next"

// Simulación de una base de datos o CMS (MDRX/Local)
const articles = [
  {
    slug: "como-calcular-sueldo-neto-ecuador",
    title: "Cómo calcular tu sueldo neto correctamente en Ecuador",
    excerpt: "Aprende qué rubros son gravables para el IESS y cómo estimar el impacto de la retención a la fuente paso a paso.",
    category: "Guías",
    date: "15 Abr, 2026",
    author: "Equipo Calcula Ecuador",
    content: (
      <>
        <p className="lead">Calcular el sueldo neto en Ecuador puede parecer complejo debido a las diferentes deducciones de ley. En esta guía detallada, explicaremos cómo y qué variables debes tomar en cuenta para saber exactamente cuánto dinero llegará a tu cuenta bancaria a fin de mes.</p>
        
        <h2>El concepto: Sueldo Bruto vs Sueldo Neto</h2>
        <p>El <strong>sueldo bruto</strong> es la cantidad total por la cual te contrató tu empleador, es decir, antes de cualquier descuento de ley, multas, préstamos u otras obligaciones. El <strong>sueldo neto</strong> (también conocido a veces como salario líquido) es lo que efectivamente se deposita o entrega mes a mes tras restar los descuentos de la nómina.</p>
        
        <AdInline />
        
        <h2>¿Qué es el Aporte Personal del IESS?</h2>
        <p>En Ecuador, todo trabajador en relación de dependencia debe afiliarse obligatoriamente al Instituto Ecuatoriano de Seguridad Social (IESS). Por ley, el aporte personal (lo que se descuenta a tu sueldo) corresponde al <strong>9.45%</strong> de tus ingresos que constituyan "materia gravada".</p>
        
        <h3>¿Qué es materia gravada?</h3>
        <ul>
          <li>Tu sueldo mensual (básico o superior).</li>
          <li>Horas extras y suplementarias.</li>
          <li>Comisiones que ganes permanentemente.</li>
        </ul>
        <h3>¿Qué NO es materia gravada?</h3>
        <ul>
          <li>Bonos por desempeño (que no constituyan una regularidad mensual exigible).</li>
          <li>Décimo tercer y décimo cuarto sueldo (fondos de reserva tienen reglas especiales pero no aportan el 9.45% personal).</li>
          <li>Utilidades.</li>
          <li>Viáticos no regulares y pagos de movilización.</li>
        </ul>

        <h2>Impuesto a la Renta</h2>
        <p>Si tu sueldo mensual supera el equivalente mensual de la Base Desgravada del Impuesto a la Renta dictada por el SRI cada año fiscal (por lo general, para ingresos que bordean o superan los $980 - $1,100 mensuales dependiendo del año y tus cargas familiares), tu empleador está en la obligación legal de hacerte una <strong>Retención en la Fuente</strong>.</p>
        
        <blockquote>
          <p>La retención a la fuente es, básicamente, que tu empleador paga tu Impuesto a la Renta de a poquitos por ti todos los meses, en lugar de que tú debas desembolsar una fuerte suma anual en marzo del año siguiente.</p>
        </blockquote>

        <h2>Ejemplo Práctico</h2>
        <p>María gana un sueldo bruto mensual de $1,000. Durante marzo, realizó horas extras por un valor de $100. Además, recibe un bono de movilización de $50 (no es materia gravada de IESS).</p>
        <ul>
          <li><strong>Total materia gravada IESS:</strong> $1,000 + $100 = $1,100</li>
          <li><strong>Cálculo IESS (9.45%):</strong> $1,100 * 0.0945 = $103.95 deducción IESS.</li>
          <li><strong>Total de Ingresos:</strong> $1,000 + $100 + $50 = $1,150</li>
          <li><strong>Sueldo Neto a Recibir:</strong> $1,150 (Total de ingresos) - $103.95 (IESS) = <strong>$1,046.05</strong></li>
        </ul>
        
        <p>¿No quieres hacer tú los cálculos a mano? ¡Utiliza nuestra <a href="/sueldo">calculadora gratuita de sueldo</a> y obtén resultados precisos en 1 segundo!</p>
      </>
    )
  },
  {
    slug: "interes-compuesto",
    title: "Entendiendo el interés compuesto en tus inversiones",
    excerpt: "Descubre por qué Albert Einstein habría llamado al interés compuesto 'la octava maravilla del mundo' y cómo aprovecharlo.",
    category: "Inversiones",
    date: "28 Mar, 2026",
    author: "Experto Financiero Calcula EC",
    content: (
      <>
        <p className="lead">El interés compuesto suele denominarse la octava maravilla del mundo porque permite que la riqueza crezca de forma exponencial con el paso del tiempo. En este artículo exploraremos ambos lados del espectro: cómo funciona tanto para hacer que tus ahorros crezcan, como para inflar tus deudas de tarjetas de crédito.</p>
        
        <h2>¿Qué es el interés compuesto?</h2>
        <p>A diferencia del interés simple, donde los intereses devengados solo se calculan sobre la suma de dinero original de la inversión (capital), el interés compuesto calcula intereses del capital y TAMBIÉN de los intereses previamente adquiridos.</p>
        
        <p>Es decir, tu dinero devenga intereses todos los días (o todos los meses). Ese interés se transfiere y se añade a tu saldo. Luego, el siguiente cálculo de intereses, se produce sobre este saldo que es ligeramente mayor.</p>

        <AdInline />

        <h2>El efecto avalancha o "Bola de Nieve"</h2>
        <p>A corto plazo, la diferencia no parece sustancial. Supongamos que tienes $1,000 al año con una Tasa Efectiva Anual (TEA) de un 8%.</p>
        <ul>
          <li>Terminando el Año 1 con interés simple, tienes: $1080. Con interés compuesto (capitalización anual): $1080</li>
          <li>Terminando el Año 2 con simple: $1160. Con compuesto: $1166.40 (¡Empiezas a ganar la partida!)</li>
        </ul>
        <p>Ahora, ¿Qué pasa a largo plazo?</p>
        <p>Si dejas esos mismos $1,000 durante 30 años sin tocarlos:</p>
        <ul>
          <li><strong>Con Interés Simple:</strong> Obtendrás un total de $3,400. ($1000 de cap + 2400 de intereses)</li>
          <li><strong>Con Interés Compuesto:</strong> Obtendrás un total de <strong>$10,062.66</strong>. ¡Triplicando virtualmente las ganancias debido al interés generado sobre el interés!</li>
        </ul>

        <h2>Aprovechando la frecuencia de capitalización</h2>
        <p>No todos los intereses compuestos se crean de la misma manera. Entre más frecuente sea el periodo donde el banco "deposita y actualiza" tus intereses, mayor será el crecimiento de tu saldo en el largo plazo a causas de las milimétricas sumas matemáticas.</p>
        
        <p>Si el interés se calcula en lugar de una vez al año, cada día del año en curso (los fondos Indexados comunes hacen capitalizaciones diarias), estarías ante un crecimiento mucho más drástico.</p>
        
        <h2>Cuidado con las deudas "Revolving"</h2>
        <p>La misma magia funciona en contra tuya cuando se trata de deudas en tarjetas de crédito (crédito rotativo o revolving). Si no pagas los balances en su totalidad a final del mes, no solo se calcularán intereses de la deuda. Los intereses moratorios sin pagar del mes 1 en la tarjeta de crédito se subirán al capital con el que arrancas en el mes 2 produciendo que cada mes debas absurdamente más dinero.</p>
        <p>Siempre compara utilizando simulaciones en la <a href="/interes">calculadora de interés</a>.</p>
      </>
    )
  },
  {
    slug: "guia-prestamo-personal",
    title: "Guía definitiva antes de solicitar un préstamo personal",
    excerpt: "Todo lo que debes preguntar a tu banco o cooperativa: tasa nominal vs efectiva, seguros de desgravamen y costos ocultos.",
    category: "Créditos",
    date: "12 Mar, 2026",
    author: "Consultor Créditos EC",
    content: (
      <>
        <p className="lead">Adquirir un préstamo es un compromiso enorme para tus finanzas de los próximos tres a siete años típicamente. Muchos ecuatorianos firman tablas de amortización sin haber realizado las preguntas cruciales que protegen su salud económica. Esta es la lista que debes verificar antes de acceder a la firma del pagaré.</p>

        <h2>1. Conoce el Sistema de Amortización: ¿Francés o Alemán?</h2>
        <p>En el país se manejan predominantemente dos métodos de amortización, y la diferencia es abismal respecto a cómo evoluciona la cuota mensual frente a tu bolsillo:</p>
        <ul>
          <li><strong>Amortización Francesa:</strong> La inmensa mayoría de préstamos de consumo te darán una Cuota Fija todos los meses (perfecta si tu sueldo es estricto y no sueles ganar más dinero del normal). Al comienzo se pagan altísimas porciones de interés y poco del capital original; y recién al final de la vida del crédito pagas genuinamente para que la deuda capital restante se reduzca.</li>
          <li><strong>Amortización Alemana:</strong> Las cuotas son variables. Al mes uno de sacar el préstamo tendrás que pagar la Cuota Mensual más costosa y cara de todas; pero poco a poco la mensualidad caerá y se te hará más factible su pago. En este modelo el capital original se reduce siempre equitativa y linealmente. Llegas al final de tu préstamo pagando cuotas diminutas. A mayor plazo, el sistema alemán suele cobrar en la totalidad menos cantidades de intereses.</li>
        </ul>

        <AdInline />

        <h2>2. Seguro de Desgravamen</h2>
        <p>Por norma en el país, cada préstamo requerirá en tu hoja mensual cobros por el "Seguro de Desgravamen". Este seguro funciona principalmente para subsanar que, en el trágico e infortunado caso del fallecimiento o invalidez permanente del titular de la deuda, la deuda se cancela inmediatamente con el banco (los familiares herederos de la persona que falleció no se adjudican la deuda). Ten en cuenta qué porcentaje extra están sumándole al pago final mensual.</p>

        <h2>3. Tasa de Interés Nominal vs. Tasa de Interés Efectiva (TEA)</h2>
        <p>No caigas en la trampa publicitaria. A veces un anuncio ofrece la grandiosa suma de Préstamo en su titular a "Solo el 12.5% de interés", pero la letra muy pequeña asevera que es la tasa nominal.</p>
        <p>Siempre pregunta por la <strong>TEA (Tasa Efectiva Anual)</strong>, la TEA sí contiene explícitamente los recargos que se darán por los periodos precisos de cobros. Compara las carpetas de distintas instituciones bajo la TEA para ver quién es honestamente más barato.</p>

        <h2>4. Multas y Cargos por Precobro / Pre-cancelación</h2>
        <p>La Superintendencia tiene estrictas normativas referentes a cuánta capacidad sancionatoria existe para las instituciones si decides <strong>abonar o pre-cancelar un crédito al capital</strong>. La regla de oro, si en algún momento en el futuro adquieres gran volumen de efectivo (agosto o diciembre en tu trabajo, un bono o indemnización, venta de la propiedad) lo mejor será ir personalmente presencial y pedir la abolición o el abono directo a la reducción del capital; con ello te saltas todos los intereses de las cuotas finales que jamás se cobraran.</p>
        
        <p>Analiza el mercado, y antes de acudir al banco proyecta tu propia capacidad de financiamiento calculando desde tu celular en la aplicación oficial de <strong>Calcula Ecuador</strong> con la <a href="/prestamo">Calculadora Gratuita de Préstamos Ecuatorianos</a>.</p>
      </>
    )
  },
  {
    slug: "diferencia-interes-simple-compuesto",
    title: "Diferencia entre interés simple y compuesto",
    excerpt: "Una explicación libre de jerga financiera para que entiendas cómo los bancos calculan tus rendimientos o tus deudas.",
    category: "Conceptos Básicos",
    date: "05 Mar, 2026",
    author: "Equipo Calcula Ecuador",
    content: (
      <>
        <p className="lead">Si estás pensando en entrar en finanzas de forma segura o simplemente deseas saber cómo crece una inversión normal versus cómo avanza de cruel un préstamo informal que carece de topes regulatorios, tienes que comprender el concepto más básico de matemáticas financieras. Ambos sistemas impactan en cómo el dinero te beneficia (o perjudica) a través de los años, siendo de esta premisa de donde se forjan billones de dólares globalmente.</p>

        <h2>¿Cómo se calculan?</h2>
        <p>El nombre por sí mismo revela su principal componente orgánico para sus operaciones y funciones subyacentes.</p>
        <p>El Cálculo del interés Simple es literal: (Principal × Tasa% × Años). Un préstamo a diez años por diez mil dólares a una plana cuota del 10% siempre cobrará mil por cada año; dando en concreto que se pida devuelta los 10 mil originales más 10 mil recabados del cobro simple al finalizarse una década en un único cobro. (No aplican abonos al capital entremedio que puedan variar).</p>
        <AdInline />
        
        <h2>Frecuencias y Capitalizaciones</h2>
        <p>En el interés Compuesto, todo cobra una dinámica paralela e interdependiente entre meses donde se fusiona orgánicamente. Cada vez que termina un "Período de maduración de interés", el interés ya no se destina a apartarse estáticamente esperando a culminar su año; sino que es obligatoriamente tragado, absorbido o sumado obligatoriamente hacia el propio balance Original principal para generar sobre ese nuevo monto sumado aún un mayor nivel en el período secuencial que se generará a continuación.</p>
        
        <h2>¿Qué usan entonces los Bancos cotidianamente?</h2>
        <p>Prácticamente no te toparás nunca ante operaciones de Interés Simple en instituciones bancarias y cooperativas cuando emiten un préstamo. La Tasa de Interés activa para transacciones hipotecarias, créditos vehiculares y créditos de libre destino (como ir de viaje) exigen por sus propios beneficios cobrar las modalidades bajo métodos sofisticados de cálculos iterativos y compuestos para pre-agendar meses (como en la Amortización vista desde nuestra plataforma de Análisis).</p>
      </>
    )
  }
]

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const article = articles.find((a) => a.slug === resolvedParams.slug)
  
  if (!article) {
    return { title: 'Artículo no encontrado' }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title + " | Calcula Ecuador",
      description: article.excerpt,
      type: "article",
      authors: [article.author],
    }
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const article = articles.find((a) => a.slug === resolvedParams.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        <article className="flex-1 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a artículos
          </Link>

          <header className="mb-10">
            <div className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-sm font-semibold text-primary mb-6">
              {article.category}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-b border-border/50 py-4">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center ml-auto">
                <button className="flex items-center hover:text-primary transition-colors focus:outline-none">
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartir
                </button>
              </div>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 max-w-none text-muted-foreground">
            {article.content}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <AdBanner />
            <div className="mt-12 bg-muted/30 rounded-2xl p-8 border border-border/50 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">¿Te resultó útil esta información?</h3>
              <p className="text-muted-foreground mb-6">Prueba nuestras calculadoras financieras gratuitas para tener mayor control sobre tu dinero.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/sueldo" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Calculadora de Sueldo
                </Link>
                <Link href="/prestamo" className="bg-background text-foreground border border-input px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
                  Calculadora de Préstamo
                </Link>
              </div>
            </div>
          </div>
        </article>
        
        {/* SIDEBAR FOR ADS AND SUGGESTIONS */}
        <aside className="lg:w-80 space-y-8 lg:sticky lg:top-24 lg:h-max">
          <AdSidebar />
        </aside>
      </div>
    </div>
  )
}
