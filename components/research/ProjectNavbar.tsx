"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { maternalAdvocacyChrome, maternalAdvocacyNav } from "@/lib/research";

export function ProjectNavbar() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    if (typeof document === "undefined") return;

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
    <header className={`project-nav${open ? " project-nav--open" : ""}`}>
      <div className="project-nav__inner">
        <div className="project-nav__brand">
          <Link className="project-nav__parent" href={maternalAdvocacyChrome.parentHref}>
            <span aria-hidden="true">&larr;</span> {maternalAdvocacyChrome.parentBrand}
          </Link>
          <Link className="project-nav__title" href={maternalAdvocacyChrome.navBrandHref}>
            {maternalAdvocacyChrome.navBrand}
          </Link>
        </div>

        <nav className="project-nav__links project-nav__links--desktop" aria-label="Project sections">
          <ul>
            {maternalAdvocacyNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="project-nav__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close project menu" : "Open project menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        className="project-nav__panel"
        id={panelId}
        role="dialog"
        aria-modal={open}
        aria-label="Project sections"
        aria-hidden={!open}
        hidden={!open}
      >
        <nav aria-label="Project sections mobile">
          <ul className="project-nav__mobile">
            {maternalAdvocacyNav.map((item, i) => (
              <li key={item.href}>
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
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
