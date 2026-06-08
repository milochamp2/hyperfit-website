"use client";

import { useState } from "react";
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
      { label: "Class Timetable", href: "/timetable", description: "Weekly class schedule" },
      { label: "Book a Class", href: "/services#book", description: "Reserve your spot" },
      { label: "All Services", href: "/services", description: "Everything we offer" },
    ],
  },
  {
    label: "Membership",
    children: [
      { label: "Membership Plans", href: "/membership", description: "View plans & sign up" },
      { label: "Pricing", href: "/pricing", description: "Transparent pricing" },
    ],
  },
  { label: "Recovery Hub", href: "/recovery-hub" },
  { label: "Shop", href: "/shop" },
  {
    label: "More",
    children: [
      { label: "FAQs", href: "/faqs", description: "Common questions" },
      { label: "Contact", href: "/contact", description: "Get in touch" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    if (item.href) return pathname === item.href;
    return item.children?.some((c) => pathname === c.href) ?? false;
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-jet/80 backdrop-blur-md">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" aria-label="HyperFit Home">
          <Logo height={24} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white cursor-pointer ${
                    isActive(item) ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.label}
                  <ChevronDownIcon
                    className={`h-3 w-3 transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                  {isActive(item) && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-white" />
                  )}
                </button>

                {/* Dropdown panel */}
                {openDropdown === item.label && (
                  <div className="absolute left-1/2 top-full mt-3 w-52 -translate-x-1/2 rounded-xl border border-white/10 bg-jet/95 py-2 shadow-2xl backdrop-blur-md">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-l border-t border-white/10 bg-jet/95" />
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 transition-colors hover:bg-white/5"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="block text-xs font-semibold uppercase tracking-widest text-white">
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="mt-0.5 block text-[10px] text-white/40">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`relative text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white ${
                  isActive(item) ? "text-white" : "text-white/70"
                }`}
              >
                {item.label}
                {isActive(item) && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-white" />
                )}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/services#book" size="sm">
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

      <div className="h-px w-full bg-gradient-to-r from-transparent via-steel-light/50 to-transparent" />

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="border-t border-steel-light/30 bg-jet/95 px-6 pb-8 pt-6 backdrop-blur-md lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className="flex w-full items-center justify-between py-3 font-heading text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white cursor-pointer"
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="mb-2 ml-4 flex flex-col gap-1 border-l border-white/10 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                          className={`py-2 text-sm font-semibold uppercase tracking-widest transition-colors hover:text-white ${
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
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 font-heading text-sm font-semibold uppercase tracking-widest transition-colors hover:text-white ${
                    pathname === item.href ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-4 flex flex-col gap-3">
              <Button href="/services#book">Book a Class</Button>
              <Button href={`tel:${siteConfig.phone}`} variant="outline">Call Us</Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
