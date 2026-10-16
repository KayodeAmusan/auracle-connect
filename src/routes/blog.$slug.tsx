import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts } from "@/lib/posts";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Auracle Innovations` : "Article unavailable — Auracle Innovations" },
      ...(loaderData
        ? [
            { name: "description", content: loaderData.excerpt },
            { property: "og:title", content: loaderData.title },
            { property: "og:description", content: loaderData.excerpt },
            { property: "og:type", content: "article" },
            { name: "twitter:card", content: "summary" },
          ]
        : [{ name: "robots", content: "noindex" }]),
    ],
  }),
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen">
      <header className="border-b bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-6">
          <Link to="/" className="shrink-0 rounded-xl p-1">
            <img src={mark} alt="Auracle Innovations" className="h-9 w-auto md:h-10" />
          </Link>
          <Link to="/blog" className="rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-ink shadow-gold">
            All articles
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-16 md:px-6 md:py-24">
        <div className="flex items-center gap-4 text-sm">
          <span className="font-display text-gold">{post.tag}</span>
          <span className="text-muted-foreground">{post.date}</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{post.title}</h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="mt-14 rounded-3xl bg-ink p-8 text-ink-foreground">
          <h2 className="text-2xl font-bold">
            Need help with <span className="text-gold-gradient">{post.tag.toLowerCase()}</span>?
          </h2>
          <p className="mt-3 text-ink-foreground/70">Call or message us — we respond within one business day.</p>
          <a
            href="tel:+2348161253374"
            className="mt-6 inline-block rounded-full bg-gold-gradient px-8 py-3 font-semibold text-ink shadow-gold transition hover:scale-[1.03]"
          >
            Call +234 816 125 3374
          </a>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-6">
        <h2 className="text-2xl font-bold">More articles</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex min-h-40 flex-col justify-between rounded-3xl border p-7 transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-gold"
            >
              <span className="font-display text-sm text-gold">{p.tag}</span>
              <h3 className="mt-4 text-xl font-bold leading-snug group-hover:text-gold">{p.title}</h3>
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
