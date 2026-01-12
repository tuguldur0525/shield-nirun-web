import Link from "next/link";
import Image from "next/image";
const nav = [
  { href: "/", label: "Нүүр" },
  { href: "/services", label: "Үйлчилгээ" },
  { href: "/about", label: "Бидний тухай" },
  { href: "/contact", label: "Холбоо барих" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-shield-light">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-shield shadow-sm" />
              <div className="leading-tight">
                <div className="text-lg font-semibold text-gray-900">
                  Shield Nirun
                </div>
                <div className="text-sm text-gray-600">Security & Services</div>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-700">
              Байгууллага, объектын хамгаалалт, зөвлөх үйлчилгээ, сургалт,
              техник шийдлүүдийг цогцоор нь санал болгоно.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+97690000000"
                className="inline-flex items-center justify-center rounded-full bg-shield px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-shield-dark"
              >
                Бидэнтэй холбогдох
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-white"
              >
                Үйлчилгээнүүд
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <div className="text-sm font-semibold text-gray-900">Хуудаснууд</div>
            <ul className="mt-4 space-y-2">
              {nav.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-sm text-gray-700 hover:text-shield"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="text-sm font-semibold text-gray-900">Холбоо барих</div>

            <div className="mt-4 space-y-4 text-sm text-gray-700">
              <div>
                <div className="text-xs text-gray-600">Утас</div>
                <a
                  href="tel:+97690000000"
                  className="mt-1 inline-block font-medium text-gray-900 hover:text-shield"
                >
                  +976 9000-0000
                </a>
              </div>

              <div>
                <div className="text-xs text-gray-600">Имэйл</div>
                <a
                  href="mailto:info@shieldnirun.mn"
                  className="mt-1 inline-block font-medium text-gray-900 hover:text-shield"
                >
                  info@shieldnirun.mn
                </a>
              </div>

              <div>
                <div className="text-xs text-gray-600">Хаяг</div>
                <div className="mt-1 font-medium text-gray-900">Улаанбаатар хот</div>
                <a
                  className="mt-2 inline-block text-sm font-medium text-shield hover:underline"
                  href="https://maps.google.com/?q=Ulaanbaatar"
                  target="_blank"
                  rel="noreferrer"
                >
                  Газрын зураг →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom (same background, no dark strip) */}
        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 text-sm text-gray-700 md:flex-row md:items-center md:justify-between">
          <div>© {year} Shield Nirun. Бүх эрх хуулиар хамгаалагдсан.</div>
        </div>
      </div>
    </footer>
  );
}