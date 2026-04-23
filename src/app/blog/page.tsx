import * as React from "react"
import Link from "next/link"
import { AdBanner } from "@/components/ads"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  const articles = [
    {
      title: "Cómo calcular tu sueldo neto correctamente en Ecuador",
      excerpt: "Aprende qué rubros son gravables para el IESS y cómo estimar el impacto de la retención a la fuente paso a paso.",
      category: "Guías",
      date: "15 Abr, 2026",
      slug: "como-calcular-sueldo-neto-ecuador"
    },
    {
      title: "Entendiendo el interés compuesto en tus inversiones",
      excerpt: "Descubre por qué Albert Einstein habría llamado al interés compuesto 'la octava maravilla del mundo' y cómo aprovecharlo.",
      category: "Inversiones",
      date: "28 Mar, 2026",
      slug: "interes-compuesto"
    },
    {
      title: "Guía definitiva antes de solicitar un préstamo personal",
      excerpt: "Todo lo que debes preguntar a tu banco o cooperativa: tasa nominal vs efectiva, seguros de desgravamen y costos ocultos.",
      category: "Créditos",
      date: "12 Mar, 2026",
      slug: "guia-prestamo-personal"
    },
    {
      title: "Diferencia entre interés simple y compuesto",
      excerpt: "Una explicación libre de jerga financiera para que entiendas cómo los bancos calculan tus rendimientos o tus deudas.",
      category: "Conceptos Básicos",
      date: "05 Mar, 2026",
      slug: "diferencia-interes-simple-compuesto"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">Blog Financiero</h1>
          <p className="text-xl text-muted-foreground">Consejos, guías e información útil para tomar mejores decisiones financieras en Ecuador.</p>
        </div>

        <AdBanner />

        <div className="grid gap-8 mt-12">
          {articles.map((article) => (
            <article key={article.slug} className="group relative bg-card flex flex-col md:flex-row p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 shadow-sm hover:shadow-md transition-all">
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm mb-3">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
                    {article.category}
                  </span>
                  <span className="text-muted-foreground">{article.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  <Link href={"/blog/" + article.slug} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {article.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-2 md:line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-primary font-medium mt-auto">
                  Leer artículo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
