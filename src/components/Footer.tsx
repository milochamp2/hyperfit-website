import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="relative bg-jet">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-tight">
                HYPER<span className="text-gradient-accent">FIT</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Mitcham&apos;s premier function training gym. Open functional
              training space, full gym facilities, and 3 private training &amp;
              recovery rooms.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { href: siteConfig.socials.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: siteConfig.socials.facebook, label: "Facebook", Icon: FacebookIcon },
                { href: siteConfig.socials.tiktok, label: "TikTok", Icon: TikTokIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-steel-light bg-steel/50 text-muted transition-all hover:border-cyan/30 hover:text-cyan hover:shadow-[0_0_12px_rgba(0,194,255,0.1)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan/60" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <PhoneIcon className="h-4 w-4 shrink-0 text-cyan/60" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-muted hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <EnvelopeIcon className="h-4 w-4 shrink-0 text-cyan/60" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-muted hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">
              <span className="inline-flex items-center gap-2">
                <ClockIcon className="h-3.5 w-3.5" />
                Hours
              </span>
            </h3>
            <ul className="mt-4 space-y-1.5">
              {siteConfig.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between text-sm text-muted"
                >
                  <span>{h.day.slice(0, 3)}</span>
                  <span>
                    {h.open} – {h.close}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-steel-light/30 pt-6 text-center">
          <p className="text-xs tracking-wider text-muted/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
