import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/auracle-logo.png.asset.json";
import mark from "@/assets/logo-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auracle Innovations Ltd — Design, Software & IT Infrastructure" },
      {
        name: "description",
        content:
          "UI/UX design, web & app development, IT procurement, CCTV, solar, car trackers, networking, cloud, DevOps, ERP, CRM and omnichannel solutions.",
      },
      { property: "og:title", content: "Auracle Innovations Ltd" },
      {
        property: "og:description",
        content: "Design, software and IT infrastructure — delivered end to end by Auracle Innovations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const groups = [
  {
    title: "Design & Development",
    items: [
      ["UI/UX Design", "Research-led interfaces people enjoy using."],
      ["Web Development", "Fast, secure websites and web platforms."],
      ["App Development", "Native and cross-platform mobile apps."],
    ],
  },
  {
    title: "Business Systems",
    items: [
      ["ERP Systems", "Unify finance, inventory, HR and operations."],
      ["CRM Tools", "Track leads, customers and sales pipelines."],
      ["Omnichannel", "Serve customers on chat, email, voice and social from one place."],
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      ["Cloud Management", "Migration, cost control and monitoring."],
      ["DevOps", "CI/CD pipelines, containers and automation."],
      ["Email Servers", "Reliable business email setup and configuration."],
      ["Networking", "Structured cabling, LAN/WAN and Wi-Fi."],
    ],
  },
  {
    title: "Supply & Installation",
    items: [
      ["IT Equipment", "Procurement and supply of laptops, servers and peripherals."],
      ["CCTV", "Surveillance design, installation and remote viewing."],
      ["Solar Power", "Inverters, panels and backup power systems."],
      ["Car Trackers", "GPS vehicle tracking installation and fleet monitoring."],
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={mark} alt="Auracle Innovations" className="h-10 w-auto" />
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-gold">Services</a>
            <a href="#why" className="hover:text-gold">Why us</a>
            <a href="#contact" className="hover:text-gold">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Get a quote
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-gradient opacity-25 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:py-32">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Auracle Innovations Ltd</p>
            <h1 className="text-4xl font-extrabold leading-[1.05] md:text-6xl">
              Technology that <span className="text-gold-gradient">powers</span> your business.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-foreground/70">
              From beautiful apps to secure networks, solar and CCTV — one partner to design, build, supply and install.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-gold-gradient px-7 py-3 font-semibold text-ink shadow-gold hover:brightness-105">
                Start a project
              </a>
              <a href="#services" className="rounded-full border border-ink-foreground/25 px-7 py-3 font-semibold hover:border-gold hover:text-gold">
                Our services
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-3xl bg-card p-6 shadow-gold">
              <img src={logo.url} alt="Auracle Innovations logo" className="w-full max-w-sm" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What we do</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-5xl">Fourteen services. One accountable team.</h2>
        <div className="mt-14 space-y-14">
          {groups.map((g, gi) => (
            <div key={g.title} className="grid gap-6 md:grid-cols-[220px_1fr]">
              <div>
                <span className="font-display text-sm text-gold">0{gi + 1}</span>
                <h3 className="mt-1 text-xl font-bold">{g.title}</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {g.items.map(([t, d]) => (
                  <div key={t} className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-gold">
                    <div className="mb-4 h-1 w-10 rounded-full bg-gold-gradient transition-all group-hover:w-16" />
                    <h4 className="text-lg font-semibold">{t}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {[
            ["End to end", "Strategy, design, build, supply, install and support under one roof."],
            ["Certified & registered", "A registered company (RC 9681189) you can hold accountable."],
            ["Support that stays", "Maintenance, monitoring and quick response after go-live."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="text-xl font-bold">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-ink-foreground md:p-16">
          <div className="absolute inset-0 grid-lines" />
          <div className="relative grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Let's build something <span className="text-gold-gradient">brilliant</span>.</h2>
              <p className="mt-4 text-ink-foreground/70">Tell us what you need and we'll get back within one business day.</p>
              <div className="mt-8 space-y-2 text-sm">
                <p>hello@auracleinnovations.com</p>
                <p>+234 000 000 0000</p>
              </div>
            </div>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                window.location.href = `mailto:hello@auracleinnovations.com?subject=${encodeURIComponent("Enquiry from " + f.get("name"))}&body=${encodeURIComponent(String(f.get("message")))}`;
              }}
            >
              <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-ink-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-gold" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-ink-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-gold" />
              <textarea name="message" rows={4} required placeholder="How can we help?" className="w-full rounded-xl border border-ink-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-gold" />
              <button className="w-full rounded-full bg-gold-gradient py-3 font-semibold text-ink shadow-gold">Send enquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <img src={mark} alt="" className="h-8" />
          <p>© {new Date().getFullYear()} Auracle Innovations Ltd · RC 9681189</p>
        </div>
      </footer>
    </div>
  );
}
