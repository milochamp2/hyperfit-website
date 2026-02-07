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
    <footer className="border-t border-steel bg-jet">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-tight">
                HYPER<span className="text-cyan">FIT</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted">
              Mitcham&apos;s premier function training gym. Open functional
              training space, full gym facilities, and 3 private training &amp;
              recovery rooms.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted transition-colors hover:text-cyan"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted transition-colors hover:text-cyan"
              >
                <FacebookIcon />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-muted transition-colors hover:text-cyan"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyan">
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
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyan">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <PhoneIcon className="h-4 w-4 shrink-0 text-cyan" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-muted hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <EnvelopeIcon className="h-4 w-4 shrink-0 text-cyan" />
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
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyan">
              <span className="inline-flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                Hours
              </span>
            </h3>
            <ul className="mt-4 space-y-1">
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
        <div className="mt-12 border-t border-steel pt-6 text-center text-sm text-muted">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
