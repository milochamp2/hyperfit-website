"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { MenuIcon, XIcon } from "./Icons";
import Button from "./Button";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-jet/80 backdrop-blur-md">
      {/* Accent line at very top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-heading text-2xl font-bold tracking-tight">
            HYPER<span className="text-gradient-accent">FIT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-xs font-semibold uppercase tracking-widest transition-colors hover:text-cyan ${
                pathname === item.href ? "text-cyan" : "text-muted"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-cyan" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button href={siteConfig.bookingUrl} size="sm" external>
            Book a Class
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white transition-colors hover:text-cyan md:hidden cursor-pointer"
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
          className="border-t border-steel-light/30 bg-jet/95 px-4 pb-6 pt-4 backdrop-blur-md md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`font-heading text-sm font-semibold uppercase tracking-widest transition-colors hover:text-cyan ${
                  pathname === item.href ? "text-cyan" : "text-white"
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
