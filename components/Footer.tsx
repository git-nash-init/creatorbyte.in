import Logo from "./Logo";
import { footerLinks, BRAND } from "@/lib/content";

const columns = [
  footerLinks.features,
  footerLinks.use,
  footerLinks.help,
  footerLinks.about,
];

const socials = ["X", "Instagram", "YouTube"];

export default function Footer() {
  return (
    <footer className="bg-white px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-5">
          <div className="md:col-span-1">
            <Logo />
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold text-ink">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink/70 transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="grid h-9 w-9 place-items-center rounded-full border-[1.6px] border-ink/20 text-xs font-semibold text-ink/70 transition-colors hover:border-ink hover:text-ink"
              >
                {s[0]}
              </a>
            ))}
          </div>
          <p className="text-xs text-ink/50">
            © {new Date().getFullYear()} {BRAND}. Built with love for creators.
          </p>
        </div>
      </div>
    </footer>
  );
}
