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
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-black/5">
      {/* Light + canvas background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-sky-50" />

        <div className="absolute -top-40 -left-40 h-[620px] w-[620px] rounded-full bg-sky-200/28 blur-[120px]" />
        <div className="absolute -top-44 right-[-220px] h-[680px] w-[680px] rounded-full bg-cyan-200/22 blur-[140px]" />
        <div className="absolute bottom-[-260px] left-1/3 h-[720px] w-[720px] rounded-full bg-sky-100/30 blur-[160px]" />

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

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-12">
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

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600">
              Байгууллага, объектын хамгаалалт, зөвлөх үйлчилгээ, сургалт,
              техник шийдлүүдийг цогцоор нь санал болгоно.
            </p>
          </div>

          {/* Pages */}
          <div className="md:col-span-3">
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
            <div className="text-sm font-semibold text-gray-900">
              Цахим хуудсууд
            </div>

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
          <div className="md:col-span-3">
            <div className="text-sm font-semibold text-gray-900">Холбоо барих</div>

            <div className="mt-4 space-y-4 text-sm text-gray-700">
              <div className="rounded-2xl border border-sky-200 bg-white/80 p-4 shadow-sm">
                <div className="text-xs text-gray-500">Утас</div>
                <a href="tel:+97690000000" className="mt-1 font-semibold text-gray-900">
                  +976 9000-0000
                </a>
              </div>

              <div className="rounded-2xl border border-sky-200 bg-white/80 p-4 shadow-sm">
                <div className="text-xs text-gray-500">Имэйл</div>
                <a
                  href="mailto:info@shieldnirun.mn"
                  className="mt-1 font-semibold text-gray-900"
                >
                  info@shieldnirun.mn
                </a>
              </div>
              <div className="rounded-2xl border border-sky-200 bg-white/80 p-4 shadow-sm">
                <div className="text-xs text-gray-500">Хаяг</div>
                <div className="mt-1 font-semibold text-gray-900">Улаанбаатар хот</div>
                <a
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-800 hover:underline"
                  href="https://maps.google.com/?q=Ulaanbaatar"
                  target="_blank"
                  rel="noreferrer"
                >
                  Газрын зураг <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-black/10 pt-6">
          <div className="flex flex-auto items-center justify-center gap-3 text-center text-sm text-gray-600 md:flex-row md:text-left">
            <div>© {year} Shield Nirun. Бүх эрх хуулиар хамгаалагдсан.</div>
            <div className="inline-flex items-center gap-2 text-xs text-gray-500">
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
        </div>
        
      </div>

    </footer>
  );
}