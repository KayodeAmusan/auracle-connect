import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/posts";
import mark from "@/assets/logo-mark.png";

export const Route = createFileRoute("/blog")({
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

const posts = [
  {
    title: "Why every school needs a management system in 2026",
    tag: "EdTech",
    date: "Coming soon",
    excerpt:
      "From results and fees to parent communication — how a school management platform saves administrators hours every week.",
  },
  {
    title: "Solar backup power: what Lagos businesses should know",
    tag: "Solar",
    date: "Coming soon",
    excerpt:
      "Sizing inverters and batteries correctly is the difference between reliable backup and constant frustration.",
  },
  {
    title: "CCTV that actually protects your business",
    tag: "Security",
    date: "Coming soon",
    excerpt:
      "Camera placement, remote viewing and storage — the details that separate a real security system from decoration.",
  },
  {
    title: "ERP vs spreadsheets: when to make the switch",
    tag: "Business Systems",
    date: "Coming soon",
    excerpt:
      "The warning signs that your growing business has outgrown spreadsheets — and what an ERP changes.",
  },
];

function Blog() {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-6">
          <Link to="/" className="shrink-0 rounded-xl p-1">
            <img src={mark} alt="Auracle Innovations" className="h-9 w-auto md:h-10" />
          </Link>
          <Link to="/" className="rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-ink shadow-gold">
            Back to home
          </Link>
        </div>
      </header>

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
            <article
              key={p.title}
              className="group flex min-h-56 flex-col justify-between rounded-3xl border p-7 transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-gold"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-display text-gold">{p.tag}</span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </article>
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
