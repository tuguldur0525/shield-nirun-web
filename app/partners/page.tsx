"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import partners from "@/content/partners.json";
import events from "@/content/events.json";

type PartnerOrg = {
  id: string;
  name: string;
  industry?: string;
  logo?: string;
  summary?: string;
  services?: string[];
  period?: string;
};

type Activity = {
  id: string;
  title: string;
  type?: string;
  cover?: string;
  client?: string;
  period?: string;
  summary?: string;
  highlights?: string[];
  gallery?: string[];
};

export default function PartnersPage() {
  const [tab, setTab] = useState<"partners" | "activities">("partners");

  const partnerList = partners as PartnerOrg[];
  const eventList = events as Activity[];

  const counts = useMemo(
    () => ({
      partners: partnerList.length,
      activities: eventList.length,
    }),
    [partnerList.length, eventList.length]
  );

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

      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm md:p-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute -left-28 -bottom-28 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm">
              Портфолио • Хамтын ажиллагаа
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Хамтрагч & Хамтарсан ажлууд
            </h1>

            <p className="mt-3 max-w-3xl text-gray-700">
              Бид байгууллага болон арга хэмжээний хэрэгцээнд тохируулан хамгаалалт, камерын хяналт,
              цэвэрлэгээ, нүүлгэлтийн үйлчилгээг төлөвлөлттэйгээр хэрэгжүүлдэг.
            </p>

            {/* Tabs */}
            <div className="mt-7 w-full max-w-xl">
              <div className="rounded-2xl border border-sky-200 bg-white/80 p-1 shadow-sm">
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setTab("partners")}
                    className={[
                      "rounded-xl px-4 py-2 text-sm font-semibold transition",
                      tab === "partners"
                        ? "bg-sky-700 text-white shadow-sm"
                        : "bg-white/70 text-sky-900 hover:bg-white",
                    ].join(" ")}
                  >
                    Хамтрагч
                    <span className={tab === "partners" ? "text-white/80" : "text-gray-400"}>
                      {" "}
                      ({counts.partners})
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTab("activities")}
                    className={[
                      "rounded-xl px-4 py-2 text-sm font-semibold transition",
                      tab === "activities"
                        ? "bg-sky-700 text-white shadow-sm"
                        : "bg-white/70 text-sky-900 hover:bg-white",
                    ].join(" ")}
                  >
                    Үйл ажиллагаа
                    <span className={tab === "activities" ? "text-white/80" : "text-gray-400"}>
                      {" "}
                      ({counts.activities})
                    </span>
                  </button>
                </div>
              </div>

              <div className="mt-3 text-xs text-gray-500">
                * Таб сонгоод жагсаалтаа хараарай.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      {tab === "partners" ? (
        <PartnersSection partners={partnerList} />
      ) : (
        <ActivitiesSection activities={eventList} />
      )}

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-3xl border border-sky-200 bg-white/80 p-6 shadow-sm md:flex md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-900">
              Танай байгууллага/үйл ажиллагаанд тохирсон шийдэл санал болгоё
            </div>
            <div className="mt-1 text-sm text-gray-600">
              Хамгаалалт • камер • цэвэрлэгээ • нүүлгэлт — хэрэгцээ, цар хүрээнээс хамаарч төлөвлөгөө гаргана.
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
            <a
              href="tel:+97690000000"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-800"
            >
              Одоо залгах
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            >
              Үнийн санал авах
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function PartnersSection({ partners }: { partners: PartnerOrg[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-extrabold text-gray-900">Хамтрагч байгууллагууд</h2>
        <p className="max-w-3xl text-gray-700">
          Байгууллага бүрт тохирсон хэрэгжилт, тогтмол хяналт ба тайлагналын загвараар хамтран ажилладаг.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {partners.map((p) => (
          <article
            key={p.id}
            className="group rounded-3xl border border-sky-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/5 bg-white/80 shadow-sm">
                {p.logo ? (
                  <div className="relative h-10 w-10">
                    <Image src={p.logo} alt={p.name} fill className="object-contain" sizes="56px" />
                  </div>
                ) : (
                  <div className="text-xs font-bold text-gray-700">LOGO</div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="truncate text-lg font-bold text-gray-900">{p.name}</div>
                    {p.industry ? <div className="text-sm text-gray-600">{p.industry}</div> : null}
                  </div>

                  {p.period ? (
                    <span className="rounded-full border border-black/5 bg-white/70 px-3 py-1 text-xs font-semibold text-gray-700">
                      {p.period}
                    </span>
                  ) : null}
                </div>

                {p.summary ? (
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">{p.summary}</p>
                ) : null}

                {p.services?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ActivitiesSection({ activities }: { activities: Activity[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-extrabold text-gray-900">Хамтарсан үйл ажиллагаа</h2>
        <p className="max-w-3xl text-gray-700">
          Концерт, event, нүүлгэлт зэрэг ажлуудад төлөвлөлт → хэрэгжилт → хяналт → тайлагнал гэсэн горимоор ажилладаг.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {activities.map((a) => (
          <article
            key={a.id}
            className="group overflow-hidden rounded-3xl border border-sky-200 bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            {/* Cover */}
            <div className="relative h-48 w-full bg-gray-100">
              {a.cover ? (
                <Image
                  src={a.cover}
                  alt={a.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-white" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                {a.type ? (
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur">
                    {a.type}
                  </span>
                ) : null}
                {a.period ? (
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {a.period}
                  </span>
                ) : null}
              </div>

              <div className="absolute bottom-4 left-5 right-5">
                <div className="text-lg font-bold text-white">{a.title}</div>
                {a.client ? <div className="mt-1 text-xs text-white/80">{a.client}</div> : null}
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              {a.summary ? <p className="text-sm leading-relaxed text-gray-700">{a.summary}</p> : null}

              {a.highlights?.length ? (
                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  {a.highlights.slice(0, 4).map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-700" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {a.gallery?.length ? (
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {a.gallery.slice(0, 3).map((g) => (
                    <div key={g} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                      <Image src={g} alt="Gallery" fill className="object-cover" sizes="33vw" />
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
                >
                  Ижил ажил хийлгэх <span className="transition group-hover:translate-x-1">→</span>
                </Link>

                <a
                  href="tel:+97690000000"
                  className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold text-sky-900 shadow-sm transition hover:bg-white"
                >
                  Шууд залгах
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}