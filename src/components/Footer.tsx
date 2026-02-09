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
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-jet">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block" aria-label="HyperFit Home">
              <Logo height={20} />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-steel-light bg-steel/50 text-white/70 transition-all hover:border-white/30 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <PhoneIcon className="h-4 w-4 shrink-0 text-white/60" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-white/70 hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <EnvelopeIcon className="h-4 w-4 shrink-0 text-white/60" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/70 hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              <span className="inline-flex items-center gap-2">
                <ClockIcon className="h-3.5 w-3.5" />
                Hours
              </span>
            </h3>
            <ul className="mt-4 space-y-1.5">
              {siteConfig.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between text-sm text-white/70"
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
          <p className="text-xs tracking-wider text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
