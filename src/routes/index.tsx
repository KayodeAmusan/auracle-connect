import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/auracle-logo.png.asset.json";
import mark from "@/assets/logo-mark.png";
import heroImg from "@/assets/cloud.jpg";
import designImg from "@/assets/design.jpg";
import installImg from "@/assets/install.jpg";

const PHONE = "+2348161253374";
const PHONE_DISPLAY = "+234 816 125 3374";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auracle Innovations Ltd — Design, Software & IT Infrastructure" },
      {
        name: "description",
        content:
          "UI/UX, web & app development, school management systems, IT procurement, CCTV, solar, car trackers, networking, cloud, DevOps, ERP, CRM and omnichannel.",
      },
      { property: "og:title", content: "Auracle Innovations Ltd" },
      { property: "og:description", content: "Design, software and IT infrastructure — delivered end to end." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const groups = [
  {
    title: "Design & Development",
    img: designImg,
    items: [
      ["UI/UX Design", "Research-led interfaces people enjoy using."],
      ["Web & App Development", "Fast, secure websites and mobile apps."],
      ["School Management Systems", "Results, fees, attendance and parent portals."],
    ],
  },
  {
    title: "Business Systems & Cloud",
    img: heroImg,
    items: [
      ["ERP Systems", "Unify finance, inventory, HR and operations."],
      ["CRM & Omnichannel", "Every customer conversation in one place."],
      ["Cloud & DevOps", "Migration, CI/CD, monitoring and automation."],
      ["Email Servers & Networking", "Reliable business email, LAN/WAN and Wi-Fi."],
    ],
  },
  {
    title: "Supply & Installation",
    img: installImg,
    items: [
      ["IT Equipment", "Procurement and supply of laptops, servers and peripherals."],
      ["CCTV", "Surveillance design, installation and remote viewing."],
      ["Solar Power", "Inverters, panels and backup power systems."],
      ["Car Trackers", "GPS vehicle tracking and fleet monitoring."],
    ],
  },
];

const clients = [
  { name: "Mienebi International School", url: "https://mienebischool.com", host: "mienebischool.com" },
  { name: "Best Solution International School", url: "https://bestsolution.ng", host: "bestsolution.ng" },
  { name: "Diamond Standard Group of Schools", url: "https://diamondstandard.ng", host: "diamondstandard.ng" },
];

const marqueeWords = ["UI/UX", "Web Apps", "Mobile Apps", "ERP", "CRM", "Omnichannel", "Cloud", "DevOps", "Networking", "CCTV", "Solar", "Car Trackers", "IT Supplies"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const nav = [
    ["Services", "#services"],
    ["Work", "#work"],
    ["Why us", "#why"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "border-b bg-background/90 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-6">
          <a href="#top" className={`shrink-0 rounded-xl p-1 transition ${scrolled ? "" : "bg-card"}`}>
            <img src={mark} alt="Auracle Innovations" className="h-9 w-auto md:h-10" />
          </a>
          <nav className={`hidden gap-8 text-sm font-medium md:flex ${scrolled ? "text-foreground" : "text-ink-foreground"}`}>
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="transition hover:text-gold">{l}</a>
            ))}
          </nav>
          <a href={`tel:${PHONE}`} className="hidden rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-ink shadow-gold md:inline-block">
            Call us
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden ${scrolled ? "text-foreground" : "text-ink-foreground"}`}
          >
            <span className={`h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
        <div className={`overflow-hidden bg-background transition-all duration-500 md:hidden ${open ? "max-h-96 border-b" : "max-h-0"}`}>
          <nav className="flex flex-col gap-1 px-5 py-4">
            {nav.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-lg font-display">{l}</a>
            ))}
            <a href={`tel:${PHONE}`} className="mt-3 rounded-full bg-gold-gradient py-3 text-center font-semibold text-ink">Call {PHONE_DISPLAY}</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-ink-foreground">
        <img src={heroImg} alt="" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 md:px-6">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.35em] text-gold">Auracle Innovations Ltd</p>
          <h1 className="animate-rise mt-6 max-w-4xl text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl md:text-7xl" style={{ animationDelay: "120ms" }}>
            Technology, <br className="hidden sm:block" />crafted to <span className="text-gold-gradient animate-shimmer">endure</span>.
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-base text-ink-foreground/75 md:text-lg" style={{ animationDelay: "240ms" }}>
            We design, build, supply and install — software, infrastructure and power for ambitious organisations.
          </p>
          <div className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ animationDelay: "360ms" }}>
            <a href="#contact" className="rounded-full bg-gold-gradient px-8 py-3.5 text-center font-semibold text-ink shadow-gold transition hover:scale-[1.03]">
              Start a project
            </a>
            <a href="#work" className="rounded-full border border-ink-foreground/30 px-8 py-3.5 text-center font-semibold transition hover:border-gold hover:text-gold">
              See our work
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-ink-foreground/50 md:block">Scroll</div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b bg-background py-5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-lg text-muted-foreground md:text-2xl">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-10">{w}<span className="h-1.5 w-1.5 rounded-full bg-gold" /></span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-28">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What we do</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">One accountable team, end to end.</h2>
        </div>
        <div className="mt-14 space-y-20 md:space-y-28">
          {groups.map((g, gi) => (
            <div key={g.title} className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${gi % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="reveal group relative overflow-hidden rounded-3xl">
                <img src={g.img} alt={g.title} loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full object-cover transition duration-[1.5s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute bottom-5 left-6 font-display text-5xl font-extrabold text-gold-gradient">0{gi + 1}</span>
              </div>
              <div className="reveal">
                <h3 className="text-2xl font-bold md:text-3xl">{g.title}</h3>
                <div className="mt-6 divide-y border-y">
                  {g.items.map(([t, d]) => (
                    <div key={t} className="group flex gap-4 py-5">
                      <span className="mt-2 h-px w-6 shrink-0 bg-gold transition-all group-hover:w-10" />
                      <div className="min-w-0">
                        <h4 className="font-semibold">{t}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative overflow-hidden bg-ink py-20 text-ink-foreground md:py-28">
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-gold-gradient opacity-15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-6">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Selected work</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">School management, deployed and trusted.</h2>
            <p className="mt-4 max-w-xl text-ink-foreground/70">Complete school management platforms powering admissions, results, fees and parent communication.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {clients.map((c, i) => (
              <a
                key={c.host}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="reveal group flex min-h-56 flex-col justify-between rounded-3xl border border-ink-foreground/15 p-7 transition duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-gold"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-display text-sm text-gold">School Management System</span>
                <div>
                  <h3 className="text-xl font-bold leading-snug">{c.name}</h3>
                  <p className="mt-3 flex items-center gap-2 text-sm text-ink-foreground/60 group-hover:text-gold">
                    {c.host} <span className="transition group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-28">
        <div className="grid gap-10 sm:grid-cols-3">
          {[
            ["3+", "Schools running on our platform"],
            ["14", "Services under one roof"],
            ["24/7", "Support after go-live"],
          ].map(([n, t], i) => (
            <div key={t} className="reveal border-t pt-6" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="font-display text-5xl font-extrabold text-gold-gradient md:text-6xl">{n}</div>
              <p className="mt-3 text-muted-foreground">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 pb-20 md:px-6 md:pb-28">
        <div className="reveal relative overflow-hidden rounded-3xl bg-ink p-7 text-ink-foreground sm:p-10 md:p-16">
          <div className="absolute inset-0 grid-lines" />
          <div className="relative grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Let's build something <span className="text-gold-gradient">brilliant</span>.</h2>
              <p className="mt-4 text-ink-foreground/70">Tell us what you need and we'll respond within one business day.</p>
              <div className="mt-8 space-y-3">
                <a href={`tel:${PHONE}`} className="block font-display text-xl text-gold hover:underline">{PHONE_DISPLAY}</a>
                <a href={`https://wa.me/${PHONE.slice(1)}`} target="_blank" rel="noreferrer" className="inline-block rounded-full border border-ink-foreground/25 px-5 py-2 text-sm hover:border-gold hover:text-gold">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const text = `Hello Auracle, I'm ${f.get("name")} (${f.get("email")}). ${f.get("message")}`;
                window.open(`https://wa.me/${PHONE.slice(1)}?text=${encodeURIComponent(text)}`, "_blank");
              }}
            >
              <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-ink-foreground/20 bg-transparent px-4 py-3 outline-none transition focus:border-gold" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-ink-foreground/20 bg-transparent px-4 py-3 outline-none transition focus:border-gold" />
              <textarea name="message" rows={4} required placeholder="How can we help?" className="w-full rounded-xl border border-ink-foreground/20 bg-transparent px-4 py-3 outline-none transition focus:border-gold" />
              <button className="w-full rounded-full bg-gold-gradient py-3.5 font-semibold text-ink shadow-gold transition hover:scale-[1.02]">Send enquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-center text-sm text-muted-foreground md:flex-row md:px-6">
          <img src={logo.url} alt="Auracle Innovations Ltd" className="h-16 w-auto" />
          <p>© {new Date().getFullYear()} Auracle Innovations Ltd · RC 9681189 · {PHONE_DISPLAY}</p>
        </div>
      </footer>
    </div>
  );
}
