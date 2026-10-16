import { Link } from "@tanstack/react-router";
import { useState } from "react";
import mark from "@/assets/logo-mark.png";

const PHONE = "+2348161253374";
const PHONE_DISPLAY = "+234 816 125 3374";

const nav = [
  ["Services", "/#services"],
  ["Work", "/#work"],
  ["Why us", "/#why"],
  ["Contact", "/#contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-6">
        <Link to="/" className="shrink-0 rounded-xl p-1">
          <img src={mark} alt="Auracle Innovations" className="h-9 w-auto md:h-10" />
        </Link>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {nav.map(([l, h]) => (
            <a key={h} href={h} className="transition hover:text-gold">{l}</a>
          ))}
          <Link to="/blog" className="transition hover:text-gold">Blog</Link>
        </nav>
        <a href={`tel:${PHONE}`} className="hidden rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-ink shadow-gold md:inline-block">
          Call us
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
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
          <Link to="/blog" onClick={() => setOpen(false)} className="py-2 text-lg font-display">Blog</Link>
          <a href={`tel:${PHONE}`} className="mt-3 rounded-full bg-gold-gradient py-3 text-center font-semibold text-ink">Call {PHONE_DISPLAY}</a>
        </nav>
      </div>
    </header>
  );
}
