"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { MenuIcon, XIcon, ChevronDownIcon } from "./Icons";
import Button from "./Button";
import Logo from "./Logo";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Training",
    children: [
      { label: "Class Timetable",  href: "/timetable",    description: "Weekly class schedule" },
      { label: "Book a Class",     href: "/services#book", description: "Reserve your spot" },
      { label: "All Services",     href: "/services",     description: "Everything we offer" },
    ],
  },
  {
    label: "Membership",
    children: [
      { label: "Membership Plans", href: "/membership",   description: "View plans & sign up" },
      { label: "Pricing",          href: "/pricing",      description: "Transparent pricing" },
    ],
  },
  { label: "Recovery Hub", href: "/recovery-hub" },
  { label: "Shop",         href: "/shop" },
  {
    label: "More",
    children: [
      { label: "FAQs",    href: "/faqs",    description: "Common questions" },
      { label: "Contact", href: "/contact", description: "Get in touch" },
    ],
  },
];

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    // Small delay so cursor can travel from button → panel without closing
    closeTimer.current = setTimeout(() => setOpen(false), 80);
  }, []);

  const isActive = item.children?.some((c) => pathname === c.href) ?? false;

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white cursor-pointer ${
          isActive ? "text-white" : "text-white/70"
        }`}
      >
        {item.label}
        <ChevronDownIcon
          className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
        {isActive && <span className="absolute -bottom-1 left-0 h-px w-full bg-white" />}
      </button>

      {/* pt-3 bridges the gap so cursor doesn't leave the hover zone */}
      {open && (
        <div className="absolute left-1/2 top-full w-52 -translate-x-1/2 pt-3">
          <div className="rounded-xl border border-white/10 bg-jet/98 py-2 shadow-2xl backdrop-blur-xl">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 transition-colors hover:bg-white/5 group"
              >
                <span className="block text-xs font-semibold uppercase tracking-widest text-white group-hover:text-white">
                  {child.label}
                </span>
                {child.description && (
                  <span className="mt-0.5 block text-[10px] text-white/40 group-hover:text-white/60 transition-colors">
                    {child.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-jet/80 backdrop-blur-md">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" aria-label="HyperFit Home" onClick={closeMobile}>
            <Logo height={24} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} pathname={pathname} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`relative text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white ${
                    pathname === item.href ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-white" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/services#book" size="sm">Book a Class</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-steel-light/50 to-transparent" />
      </header>

      {/* Mobile overlay — rendered outside header so it fills the screen */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-jet/60 backdrop-blur-sm"
            onClick={closeMobile}
          />

          {/* Slide-in panel */}
          <nav
            className="absolute right-0 top-0 flex h-full w-72 flex-col bg-jet shadow-2xl"
            aria-label="Mobile navigation"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <Logo height={20} />
              <button
                type="button"
                onClick={closeMobile}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white hover:bg-white/10 cursor-pointer"
                aria-label="Close menu"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-left font-heading text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:bg-white/5 hover:text-white cursor-pointer"
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileExpanded === item.label && (
                      <div className="mb-1 ml-3 border-l border-white/10 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMobile}
                            className={`block rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-widest transition-colors hover:bg-white/5 hover:text-white ${
                              pathname === child.href ? "text-white" : "text-white/50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    onClick={closeMobile}
                    className={`block rounded-lg px-3 py-3.5 font-heading text-sm font-semibold uppercase tracking-widest transition-colors hover:bg-white/5 hover:text-white ${
                      pathname === item.href ? "text-white" : "text-white/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Bottom CTAs */}
            <div className="border-t border-white/10 px-4 py-5 flex flex-col gap-3">
              <Button href="/services#book" className="w-full" onClick={closeMobile}>
                Book a Class
              </Button>
              <Button href={`tel:${siteConfig.phone}`} variant="outline" className="w-full">
                Call Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
