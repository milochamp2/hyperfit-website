"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { MenuIcon, XIcon } from "./Icons";
import Button from "./Button";
import Logo from "./Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-jet/80 backdrop-blur-md">
      {/* Accent line at very top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" aria-label="HyperFit Home">
          <Logo height={24} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white ${
                pathname === item.href ? "text-white" : "text-white/70"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-white" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href={siteConfig.bookingUrl} size="sm" external>
            Book a Class
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white transition-colors hover:text-white/80 lg:hidden cursor-pointer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Bottom border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-steel-light/50 to-transparent" />

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="border-t border-steel-light/30 bg-jet/95 px-6 pb-8 pt-6 backdrop-blur-md lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-5">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`font-heading text-sm font-semibold uppercase tracking-widest transition-colors hover:text-white ${
                  pathname === item.href ? "text-white" : "text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button href={siteConfig.bookingUrl} external>
                Book a Class
              </Button>
              <Button href={`tel:${siteConfig.phone}`} variant="outline">
                Call Us
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
