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
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/nirunLogo.svg"
                alt="Shield Nirun"
                width={140}
                height={40}
                priority
                className="opacity-95"
              />
            </Link>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 2xl:text-base">
              Байгууллага, объектын хамгаалалт, зөвлөх үйлчилгээ, сургалт, техник шийдлүүдийг цогцоор нь
              санал болгоно.
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
            <ul className="mt-4 space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-sky-700"
                  >
                    <span className="h-2 w-2 rounded-full bg-sky-600/60" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="text-sm font-semibold text-gray-900">Холбоо барих</div>

            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-sky-200 bg-white/80 p-4 shadow-sm 2xl:p-5">
                <div className="text-xs text-gray-500">Утас</div>
                <a href="tel:+97670077010" className="mt-1 block text-gray-900">
                  +976 7007-7010
                </a>
              </div>

              <div className="rounded-2xl border border-sky-200 bg-white/80 p-4 shadow-sm 2xl:p-5">
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

            <div className="mt-4 rounded-2xl border border-sky-200 bg-white/80 p-4 shadow-sm 2xl:p-5">
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