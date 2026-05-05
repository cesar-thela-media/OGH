"use client";

import { useParams } from "next/navigation";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import ArticleCard from "@/components/ArticleCard";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { journalArticles } from "@/data/content";

const articlesMap: Record<string, (typeof journalArticles)[0]> = {};
journalArticles.forEach((a) => { articlesMap[a.slug] = a; });

export default function JournalArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesMap[slug];

  if (!article) {
    return (
      <>
        <UtilityBar />
        <SiteHeader />
        <div className="pt-[160px] container-content text-center pb-20">
          <h1 className="text-h1 text-ocean-ink mb-4">Article Not Found</h1>
          <Link href="/journal" className="btn-primary">Back to Journal</Link>
        </div>
        <SiteFooter />
      </>
    );
  }

  const related = journalArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <UtilityBar />
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-[88px]">
        <div className="aspect-[21/9] min-h-[400px]">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Content */}
      <article className="section-standard">
        <div className="container-content max-w-[720px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="chip">{article.category}</span>
            <span className="text-body-sm text-driftwood">{article.date}</span>
          </div>
          <h1 className="text-h1 text-ocean-ink mb-8">{article.title}</h1>
          <div className="text-body text-slate space-y-5 leading-relaxed">
            {article.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return <h2 key={i} className="text-h2 text-ocean-ink mt-8 mb-4">{paragraph.replace(/\*\*/g, "")}</h2>;
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2">
                    {paragraph.split("\n").map((line, j) => (
                      <li key={j}>{line.replace(/^- /, "")}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-standard bg-sea-glass/30">
          <div className="container-content">
            <h2 className="text-h2 text-ocean-ink mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((a) => (
                <ArticleCard
                  key={a.slug}
                  image={a.image}
                  category={a.category}
                  title={a.title}
                  excerpt={a.excerpt}
                  date={a.date}
                  slug={a.slug}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        headline="Ready to Start Your Coastal Journey?"
        body="Our team is here to answer your questions and help you take the next step."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <SiteFooter />
    </>
  );
}
