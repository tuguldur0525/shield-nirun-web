import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/", label: "Нүүр" },
  { href: "/services", label: "Үйлчилгээ" },
  { href: "/about", label: "Бидний тухай" },
  { href: "/contact", label: "Холбоо барих" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border bg-white">
            <Image src="/logoblack.svg" alt="Shield Nirun" fill className="object-contain p-1" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-shield">Shield Nirun</div>
            <div className="text-xs text-gray-500">Security & Services</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:+97690000000"
            className="rounded-full bg-shield px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-shield-dark"
          >
            Бидэнтэй холбогдох
          </a>
        </div>
      </div>

      {/* Mobile bottom scroll nav */}
      <div className="border-t md:hidden">
        <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-6 py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="tel:+97690000000"
            className="whitespace-nowrap rounded-full bg-shield px-4 py-2 text-sm font-medium text-white hover:bg-shield-dark"
          >
            Бидэнтэй холбогдох
          </a>
        </div>
      </div>
    </header>
  );
}