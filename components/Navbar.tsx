"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Нүүр" },
  { href: "/services", label: "Үйлчилгээ" },
  { href: "/about", label: "Бидний тухай" },
  { href: "/contact", label: "Холбоо барих" },
  { href: "/partners", label: "Хамтрагч" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) setMounted(true);
    else {
      const t = setTimeout(() => setMounted(false), 280);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = useMemo(() => {
    return (href: string) => {
      const active = isActive(pathname, href);
      return [
        "group relative rounded-full px-4 py-2 text-sm font-medium transition",
        active ? "text-gray-900" : "text-gray-700 hover:text-gray-900",
      ].join(" ");
    };
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* WRAPPER */}
      <div
        className={[
          "relative transition-all duration-300",
          scrolled
            ? "border-b border-black/10 shadow-sm"
            : "border-b border-black/5",
        ].join(" ")}
      >
        {/* BACKGROUND – SOLID WHITE WITH LIGHT DETAIL */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* solid base */}
          <div className="absolute inset-0 bg-white" />

          {/* very subtle brand glow */}
          <div className="absolute -top-20 -left-24 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute -top-24 right-[-120px] h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />

          {/* ultra subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]
            [background-image:
              linear-gradient(to_right,rgba(2,132,199,0.35)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(2,132,199,0.25)_1px,transparent_1px)
            ]
            [background-size:96px_96px]"
          />

          {/* paper grain */}
          <div
            className="absolute inset-0 opacity-[0.04]
            [background-image:
              repeating-radial-gradient(
                rgba(0,0,0,0.05) 0,
                rgba(0,0,0,0.05) 1px,
                transparent 1px,
                transparent 3px
              )
            ]
            [background-size:4px_4px]"
          />
        </div>

        {/* CONTENT */}
        <div
          className={[
            "mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300",
            scrolled ? "py-3" : "py-4",
          ].join(" ")}
        >
          {/* LOGO */}
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
            <Image
              src="/nirunLOGO.svg"
              alt="Shield Nirun"
              width={100}
              height={30}
              priority
              className="opacity-100"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-2 md:flex">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                  {item.label}
                  <span
                    className={[
                      "pointer-events-none absolute left-4 right-4 -bottom-1 h-[2px] rounded-full bg-sky-600 transition-all duration-300",
                      active
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <a
              href="tel:+97690000000"
              className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              Бидэнтэй холбогдох
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-xl border border-black/10 bg-white p-2 text-gray-800 shadow-sm transition hover:bg-gray-50 md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mounted && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            onClick={() => setOpen(false)}
            className={[
              "absolute inset-0 bg-black/40 transition-opacity duration-300",
              open ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />

          <div
            className={[
              "absolute right-0 top-0 h-full w-[72%] max-w-sm bg-white shadow-2xl transition-transform duration-300",
              open ? "translate-x-0" : "translate-x-full",
            ].join(" ")}
          >
            <div className="flex items-center justify-between border-b px-6 py-4">
              <div className="font-semibold text-gray-900">Menu</div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-xl border border-black/10 p-2 text-gray-700 hover:bg-gray-50"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 px-6 py-6">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                      active
                        ? "border-sky-300 bg-sky-50 text-sky-700"
                        : "border-black/10 text-gray-900 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    {item.label}
                    <span>→</span>
                  </Link>
                );
              })}

              <a
                href="tel:+97690000000"
                className="mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
              >
                Бидэнтэй холбогдох
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}