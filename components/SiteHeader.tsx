"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import { CONTACT_HREF, NAV_ITEMS, SCHEDULE_HREF } from "@/lib/nav";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const desktopNav = useMemo(() => NAV_ITEMS, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    function onResize() {
      if (typeof window.matchMedia !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
        setOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    if (typeof document === "undefined") return;

    function isMobileNav() {
      return window.matchMedia("(max-width: 767.98px)").matches;
    }
    if (!isMobileNav()) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeMenu]);

  return (
    <header className={`site-header${open ? " site-header--nav-open" : ""}`}>
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label={`${siteConfig.name}, home page`}>
          <SiteLogo variant="light" />
        </Link>

        <div className="header-tools">
          <nav aria-label="Primary">
            <ul className="nav-desktop">
              {desktopNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} prefetch aria-current={pathname === item.href ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            className="button button--primary button--compact nav-cta nav-cta--desktop"
            href={SCHEDULE_HREF}
            prefetch
            aria-label="Schedule a consultation (opens contact form)"
          >
            Schedule consultation
          </Link>
          <Link
            className="button button--outline nav-cta nav-cta--mobile"
            href={CONTACT_HREF}
            prefetch
            aria-label="Contact our office"
          >
            Contact
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            aria-haspopup="dialog"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close menu" : "Menu"}
          </button>
        </div>
      </div>

      <button
        type="button"
        className="nav-backdrop"
        hidden={!open}
        aria-label="Close menu"
        tabIndex={-1}
        onClick={closeMenu}
      />

      <div
        className="nav-panel"
        id={panelId}
        role="dialog"
        aria-modal={open}
        aria-label="Mobile navigation"
        aria-hidden={!open}
        hidden={!open}
      >
        <div className="nav-mobile-cta">
          <Link
            ref={firstLinkRef}
            className="button button--primary"
            href={SCHEDULE_HREF}
            prefetch
            onClick={closeMenu}
            aria-label="Schedule a consultation (opens contact form)"
          >
            Schedule consultation
          </Link>
          <Link className="button button--outline" href={CONTACT_HREF} prefetch onClick={closeMenu}>
            Contact
          </Link>
        </div>
        <nav aria-label="Mobile primary">
          <ul className="nav-mobile">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
