import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/", label: "Нүүр" },
  { href: "/services", label: "Үйлчилгээ" },
  { href: "/about", label: "Бидний тухай" },
  { href: "/contact", label: "Холбоо барих" },
  { href: "/partners", label: "Хамтрагч" },
];

const socials = [
  { href: "https://facebook.com/mongole.mn", label: "Facebook" },
  { href: "https://www.instagram.com/shieldnirun_/", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-black/5">
      {/* glows (✅ click blocking-г болиулав) */}
      <div className="pointer-events-none absolute -top-10 -left-40 h-[510px] w-[680px] rounded-full bg-sky-200/25 blur-[1000px] animate-float10 xl:h-[760px] xl:w-[860px] 2xl:h-[700px] 2xl:w-[1000px]" />
      <div className="pointer-events-none absolute -bottom-5 -right-20 h-[610px] w-[680px] rounded-full bg-sky-200/25 blur-[1300px] animate-float10 xl:h-[760px] xl:w-[860px] 2xl:h-[900px] 2xl:w-[1000px]" />

      {/* Light + canvas background (✅ click blocking-г болиулав) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-sky-50" />

        <div className="absolute -top-40 -left-40 h-[620px] w-[620px] rounded-full bg-sky-200/28 blur-[120px] xl:h-[780px] xl:w-[780px] 2xl:h-[920px] 2xl:w-[920px]" />
        <div className="absolute -top-44 right-[-220px] h-[680px] w-[680px] rounded-full bg-cyan-200/22 blur-[140px] xl:h-[840px] xl:w-[840px] 2xl:h-[980px] 2xl:w-[980px]" />
        <div className="absolute bottom-[-260px] left-1/3 h-[720px] w-[720px] rounded-full bg-sky-100/30 blur-[160px] xl:h-[900px] xl:w-[900px] 2xl:h-[1040px] 2xl:w-[1040px]" />

        <div
          className="absolute inset-0 opacity-[0.045]
          [background-image:
            linear-gradient(to_right,rgba(2,132,199,0.35)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(2,132,199,0.25)_1px,transparent_1px)
          ]
          [background-size:96px_96px]"
        />

        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-multiply
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

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/90" />
      </div>

      {/* Контент (layout өөрчлөхгүйгээр зөвхөн z-index өгсөн) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 xl:max-w-[84rem] 2xl:max-w-[92rem] 2xl:py-14">
        {/* Top */}
        <div className="grid items-start gap-8 md:grid-cols-12 xl:gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
  {/* Shield Nirun */}
  <Link href="/" className="inline-flex items-center">
    <Image
      src="/nirunlogo.svg"
      alt="Shield Nirun"
      width={140}
      height={40}
      priority
      className="opacity-90 transition hover:opacity-100 "
    />
  </Link>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 2xl:text-base">
            Байгууллага, объектын хамгаалалт, аюулгүй байдлын зөвлөх үйлчилгээ, сургалт, техник шийдлүүдийг олон улсын жишигт нийцсэн стандартын дагуу цогц байдлаар хэрэгжүүлнэ.
            </p>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <div className="text-sm font-semibold text-gray-900">Хуудаснууд</div>
            <ul className="mt-4 space-y-2">
              {nav.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-sm text-gray-700 transition hover:text-gray-900"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-600/70" />
                      {i.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
<div className="md:col-span-2">
  <div className="text-sm font-semibold text-gray-900">Цахим хуудсууд</div>

  <ul className="mt-4 space-y-3">
    {socials.map((s) => (
      <li key={s.label}>
        <a
          href={s.href}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 text-sm font-medium text-gray-700 transition hover:text-sky-700"
        >
          {/* ICON */}
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-200 bg-white/60 text-sky-600 transition group-hover:bg-sky-50 group-hover:text-sky-700">
            {s.label === "Facebook" && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.7c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
              </svg>
            )}

            {s.label === "Instagram" && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
            )}

            {s.label === "LinkedIn" && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 6.5A1.94 1.94 0 115 4.56 1.94 1.94 0 016.94 6.5zM5 8.5h3.9V19H5zM14.6 8.3a4.3 4.3 0 00-3.8 2.1V8.5H7v10.5h3.9v-5.5c0-1.5.3-3 2.1-3s1.8 1.7 1.8 3.1v5.4H19v-6.2c0-3-1.6-4.5-4.4-4.5z" />
              </svg>
            )}

            {s.label === "YouTube" && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 7.5s-.2-1.7-.8-2.4c-.8-.8-1.7-.8-2.1-.9C16.9 4 12 4 12 4h0s-4.9 0-8.1.2c-.4.1-1.3.1-2.1.9C1.2 5.8 1 7.5 1 7.5S.8 9.5.8 11.4v1.2c0 1.9.2 3.9.2 3.9s.2 1.7.8 2.4c.8.8 1.9.8 2.4.9 1.7.2 7.8.2 7.8.2s4.9 0 8.1-.2c.4-.1 1.3-.1 2.1-.9.6-.7.8-2.4.8-2.4s.2-2 .2-3.9v-1.2c0-1.9-.2-3.9-.2-3.9zM9.8 14.7V8.9l5.2 2.9-5.2 2.9z" />
              </svg>
            )}
          </span>

          {/* LABEL */}
          <span>{s.label}</span>
        </a>
      </li>
    ))}
  </ul>
</div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="text-sm font-semibold text-gray-900">Холбоо барих</div>

            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-sky-200 bg-white/20 p-4 shadow-sm 2xl:p-5">
                <div className="text-xs text-gray-500">Утас</div>
                <a href="tel:+97670077010" className="mt-1 block text-gray-900">
                  +976 7007-7010
                </a>
              </div>

              <div className="rounded-2xl border border-sky-200 bg-white/20 p-4 shadow-sm 2xl:p-5">
                <div className="text-xs text-gray-500">Имэйл</div>
                <a href="mailto:info@shieldnirun.mn" className="mt-1 block text-gray-900">
                  info@shieldnirun.mn
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <div className="text-sm font-semibold text-gray-900">Хаяг</div>

            <div className="mt-4 rounded-2xl border border-sky-200 bg-white/20 p-4 shadow-sm 2xl:p-5">
              <div className="leading-relaxed text-gray-900">
                Сүхбаатар дүүрэг, 3 хороо,<br />
                Санто таур 802,<br />
                Ulaanbaatar, Mongolia
              </div>

              {/* ✅ Одоо заавал дарна */}
              <a
                href="https://maps.app.goo.gl/h9g2sZMpHbYLqyS47"
                target="_blank"
                rel="noreferrer"
                className="relative z-20 mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-800 hover:underline"
              >
                Газрын зураг <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-black/10 pt-6">
          <div className="flex items-center justify-center text-center text-sm text-gray-600">
            © {year} Shield Nirun. Бүх эрх хуулиар хамгаалагдсан.
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
        </div>
      </div>
    </footer>
  );
}