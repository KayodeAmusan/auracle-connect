import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/posts";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Auracle Innovations Ltd" },
      {
        name: "description",
        content:
          "Insights on UI/UX, software development, school technology, solar power, security systems and IT infrastructure from Auracle Innovations.",
      },
      { property: "og:title", content: "Blog — Auracle Innovations Ltd" },
      { property: "og:description", content: "Insights on design, software and IT infrastructure." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Blog</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">
          Ideas, guides and <span className="text-gold-gradient">insights</span>.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Practical notes from our work in design, software and IT infrastructure. New articles are on the way.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex min-h-56 flex-col justify-between rounded-3xl border p-7 transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-gold"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-display text-gold">{p.tag}</span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold leading-snug group-hover:text-gold">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Read article <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Auracle Innovations Ltd · RC 9681189</p>
        </div>
      </footer>
    </div>
  );
}
