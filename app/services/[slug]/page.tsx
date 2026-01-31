import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/content";

export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

function getHeroImage(slug: string) {
  if (slug === "shield-nirun") return "/Service/nirunCover.jpg";
  if (slug === "shield-service") return "/Service/serviceCover.png";
  return "/Service/nirunCover.jpg";
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  const heroImage = getHeroImage(slug);
  return (
    <main className="relative overflow-hidden">
      {/* Light + canvas background (shared design) */}
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

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
        {/* HERO */}
        <section className="group relative overflow-hidden rounded-3xl border border-sky-200 bg-white/80 shadow-sm">
          <div className="relative h-[320px] md:h-[380px]">
            <Image
              src={heroImage}
              alt={`${service.title} cover`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {service.title}
              </h1>
              <p className="mt-2 max-w-3xl text-base text-white/90 md:text-lg">
                {service.subtitle}
              </p>

              {/* Highlights */}
              {service.highlights?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/18 backdrop-blur"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex flex-col gap-3 border-t border-black/5 bg-white/80 p-6 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-gray-700">
              Шууд холбогдох / Үнийн санал авах боломжтой.
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+97690000000"
                className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                Одоо залгах
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-sky-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Үнийн санал авах
              </Link>
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          {/* Main sections */}
          <div className="space-y-6 md:col-span-8">
            {service.sections?.map((sec) => (
              <section
                key={sec.heading}
                className="rounded-3xl border border-sky-200 bg-white/80 p-7 shadow-sm"
              >
                <h2 className="text-xl font-bold text-gray-900">{sec.heading}</h2>

                {sec.body ? (
                  <p className="mt-3 leading-relaxed text-gray-700">{sec.body}</p>
                ) : null}

                {sec.bullets?.length ? (
                  <ul className="mt-5 space-y-2 text-sm text-gray-700">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {/* Sticky sidebar */}
          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Summary box */}
              <div className="rounded-3xl border border-sky-200 bg-white/80 p-6 shadow-sm">
                <div className="text-sm font-semibold text-gray-900">
                  Үйлчилгээний товч
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  Хэрэгцээгээ хэлбэл бид тохирсон шийдэл, санал боловсруулж өгнө.
                </p>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/80 px-4 py-3">
                    <span className="text-gray-600">Холбоо барих</span>
                    <a
                      href="tel:+97690000000"
                      className="font-semibold text-sky-700 hover:underline"
                    >
                      +976 7007-7010
                    </a>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/80 px-4 py-3">
                    <span className="text-gray-600">Имэйл</span>
                    <a
                      href="mailto:info@shieldnirun.mn"
                      className="font-semibold text-sky-700 hover:underline"
                    >
                      info@shieldnirun.mn
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="w-full rounded-full bg-sky-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700"
                  >
                    Үнийн санал авах
                  </Link>
                  <Link
                    href="/services"
                    className="w-full rounded-full border border-sky-200 bg-white/80 px-5 py-2.5 text-center text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Бусад үйлчилгээнүүд
                  </Link>
                </div>
              </div>

              {/* Mini CTA */}
              <div className="rounded-3xl border border-sky-200 bg-white/80 p-6 shadow-sm">
                <div className="text-sm font-semibold text-gray-900">
                  Түргэн асуулт байна уу?
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  Шууд залгаад мэдээлэл аваарай.
                </p>
                <a
                  href="tel:+97690000000"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                >
                  Залгах
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        {service.faq?.length ? (
          <section className="mt-10 rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Түгээмэл асуулт</h2>

            <div className="mt-6 space-y-3">
              {service.faq.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-black/5 bg-white/70 p-5 open:bg-white open:ring-1 open:ring-black/5"
                >
                  <summary className="cursor-pointer list-none font-semibold text-gray-900">
                    <div className="flex items-start justify-between gap-4">
                      <span>{f.q}</span>
                      <span className="text-gray-400 transition group-open:rotate-180">
                        ▼
                      </span>
                    </div>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {/* Bottom CTA */}
        <section className="mt-10 overflow-hidden rounded-3xl border border-sky-200 bg-white/80 shadow-sm">
          <div className="relative p-8 md:p-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

            <div className="relative md:flex md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold text-sky-800">Дараагийн алхам</div>
                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  Танай хэрэгцээнд тохирсон үнийн санал аваарай
                </h3>
                <p className="mt-2 text-gray-700">
                  Бид танай нөхцөл байдалд тохируулан шийдэл санал болгож, хэрэгжилтийг
                  зохион байгуулна.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
                <a
                  href="tel:+97690000000"
                  className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700"
                >
                  Одоо залгах
                </a>
                <Link
                  href="/contact"
                  className="rounded-full border border-sky-200 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Холбоо барих
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-sky-200 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Буцах
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
