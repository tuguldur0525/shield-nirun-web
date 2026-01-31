"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react"; // ✅ useEffect нэмэв
import partners from "@/content/partners.json";
import events from "@/content/events.json";
import works from "@/content/works.json"; // ✅ NEW

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
  const [tab, setTab] = useState<"partners" | "activities" | "works">("partners");

  const partnerList = partners as PartnerOrg[];
  const eventList = events as Activity[];
  const worksList = works as Activity[];

  const counts = useMemo(
    () => ({
      partners: partnerList.length,
      activities: eventList.length,
      works: worksList.length,
    }),
    [partnerList.length, eventList.length, worksList.length]
  );

  // ✅ Lightbox state
  const [lbOpen, setLbOpen] = useState(false);
  const [lbImages, setLbImages] = useState<string[]>([]);
  const [lbIndex, setLbIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    if (!images?.length) return;
    setLbImages(images);
    setLbIndex(Math.max(0, Math.min(index, images.length - 1)));
    setLbOpen(true);
  };

  const closeLightbox = () => setLbOpen(false);

  const prev = () => {
    setLbIndex((i) => (lbImages.length ? (i - 1 + lbImages.length) % lbImages.length : 0));
  };

  const next = () => {
    setLbIndex((i) => (lbImages.length ? (i + 1) % lbImages.length : 0));
  };

  // ✅ ESC / Arrow keys
  useEffect(() => {
    if (!lbOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lbOpen, lbImages.length]);

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
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
        <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm md:p-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute -left-28 -bottom-28 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm">
              Портфолио • Хамтын ажиллагаа
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Хамтрагч болон хамтарсан ажлууд
            </h1>

            <p className="mt-3 max-w-7xl text-gray-700">
              Бид байгууллага болон төрөл бүрийн арга хэмжээний онцлог, хэрэгцээ, эрсдэлийн түвшинд тулгуурлан хамгаалалт, камерын хяналт, цэвэрлэгээ, нүүлгэлтийн үйлчилгээг уялдаа холбоотойгоор төлөвлөж, хэрэгжилтийг мэргэжлийн түвшинд зохион байгуулдаг. Үйлчилгээ бүрийг урьдчилсан үнэлгээ, тодорхой төлөвлөгөө, хэрэгжилтийн үеийн хяналт, гүйцэтгэлийн тайлагналын нэгдсэн горимоор хэрэгжүүлснээр аюулгүй байдал, эмх цэгц, ажиллагааны тасралтгүй байдлыг хангаж, харилцагчийн үйл ажиллагаанд бодит дэмжлэг үзүүлж ажилладаг.
            </p>

            {/* Tabs */}
            <div className="mt-7 w-full max-w-7xl">
              <div className="rounded-2xl border border-sky-200 bg-white/80 p-1 shadow-sm">
                <div className="grid grid-cols-3 gap-1">
                  <button
                    type="button"
                    onClick={() => setTab("partners")}
                    className={[
                      "rounded-xl px-4 py-3 text-sm font-semibold transition",
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

                  <button
                    type="button"
                    onClick={() => setTab("works")}
                    className={[
                      "rounded-xl px-4 py-2 text-sm font-semibold transition",
                      tab === "works"
                        ? "bg-sky-700 text-white shadow-sm"
                        : "bg-white/70 text-sky-900 hover:bg-white",
                    ].join(" ")}
                  >
                    Хийсэн ажлууд
                    <span className={tab === "works" ? "text-white/80" : "text-gray-400"}>
                      {" "}
                      ({counts.works})
                    </span>
                  </button>
                </div>
              </div>

              <div className="mt-3 text-xs text-gray-500">* Таб сонгоод жагсаалтаа хараарай.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      {tab === "partners" ? (
        <PartnersSection partners={partnerList} />
      ) : tab === "activities" ? (
        <ActivitiesSection activities={eventList} openLightbox={openLightbox} />
      ) : (
        <WorksSection works={worksList} openLightbox={openLightbox} />
      )}

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
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

      {/* ✅ Lightbox */}
      <Lightbox
        open={lbOpen}
        images={lbImages}
        index={lbIndex}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
      />
    </main>
  );
}

function PartnersSection({ partners }: { partners: PartnerOrg[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6  lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
      <div className="flex flex-col gap-2 px-4">
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

function ActivitiesSection({
  activities,
  openLightbox,
}: {
  activities: Activity[];
  openLightbox: (images: string[], index: number) => void;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
      <div className="flex flex-col gap-2 px-4">
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
            <div className="relative h-60 w-full bg-gray-100">
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

                            {/* ✅ clickable gallery thumbnails */}
              {a.gallery?.length ? (
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {a.gallery.slice(0, 3).map((g, idx) => {
                    const extra = a.gallery!.length - 3;
                    const isLastThumb = idx === 2;
                    const showOverlay = isLastThumb && extra > 0;

                    return (
                      <button
                        key={g}
                        type="button"
                        onClick={() => openLightbox(a.gallery!, idx)}
                        className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
                        aria-label="Open image"
                      >
                        <Image
                          src={g}
                          alt="Gallery"
                          fill
                          className="object-cover"
                          sizes="33vw"
                        />

                        {/* Overlay: зөвхөн 3 дахь зураг дээр, 3-аас олон зурагтай үед */}
                        {showOverlay && (
                          <>
                            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="inline-flex items-center rounded-xl bg-white/20 px-4 py-2 text-md font-medium text-white">
                                +{extra}
                              </div>
                            </div>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
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

function WorksSection({
  works,
  openLightbox,
}: {
  works: Activity[];
  openLightbox: (images: string[], index: number) => void;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
      <div className="flex flex-col gap-2 px-4">
        <h2 className="text-2xl font-extrabold text-gray-900">Хийсэн ажлууд</h2>
        <p className="max-w-3xl text-gray-700">
          Бодит хэрэгжилт дээр төвлөрсөн кейсүүд — товч мэдээлэл, гол үр дүн, зураг.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {works.map((w) => (
          <article
            key={w.id}
            className="group relative overflow-hidden rounded-3xl border border-sky-200 bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-500/70 via-cyan-400/40 to-transparent" />

            <div className="grid md:grid-cols-12">
              {/* Cover (optional click to open cover) */}
              <div className="relative md:col-span-5">
                <div className="relative h-48 md:min-h-[240px] md:h-full">
                  {w.cover ? (
                    <button
                      type="button"
                      onClick={() => openLightbox([w.cover!, ...(w.gallery ?? [])], 0)}
                      className="absolute inset-0"
                      aria-label="Open cover image"
                    >
                      <Image
                        src={w.cover}
                        alt={w.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </button>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-white" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />

                  {w.type ? (
                    <div className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 pointer-events-none">
                      {w.type}
                    </div>
                  ) : null}

                  {w.period ? (
                    <div className="absolute right-4 top-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur pointer-events-none">
                      {w.period}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="p-6 md:col-span-7">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-extrabold text-gray-900">{w.title}</h3>
                    {w.client ? (
                      <div className="mt-1 text-xs font-semibold text-gray-500">
                        Харилцагч: <span className="text-gray-700">{w.client}</span>
                      </div>
                    ) : null}
                  </div>

                  <span className="hidden rounded-2xl border border-sky-200 bg-white/80 px-3 py-2 text-xs font-semibold text-sky-800 shadow-sm md:block">
                    Case
                  </span>
                </div>

                {w.summary ? (
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">{w.summary}</p>
                ) : null}

                {w.highlights?.length ? (
                  <ol className="mt-4 space-y-2 text-sm text-gray-700">
                    {w.highlights.slice(0, 4).map((h, idx) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-700 text-[11px] font-bold text-white">
                          {idx + 1}
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ol>
                ) : null}

                {/* ✅ clickable thumbnails (gallery) */}
                {w.gallery?.length ? (
                  <div className="mt-5 flex gap-2">
                    {w.gallery.slice(0, 3).map((g, idx) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => openLightbox(w.gallery!, idx)}
                        className="relative h-14 w-20 overflow-hidden rounded-2xl border border-black/5 bg-gray-100"
                        aria-label="Open image"
                      >
                        <Image src={g} alt="Work gallery" fill className="object-cover" sizes="80px" />
                      </button>
                    ))}
                    {w.gallery.length > 3 ? (
                      <button
                        type="button"
                        onClick={() => openLightbox(w.gallery!, 3)}
                        className="flex h-14 w-20 items-center justify-center rounded-2xl border border-sky-200 bg-white/80 text-xs font-semibold text-sky-800"
                        aria-label="Open more images"
                      >
                        +{w.gallery.length - 3}
                      </button>
                    ) : null}
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-sky-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-800"
                  >
                    Ижил ажил хийлгэх →
                  </Link>

                  <a
                    href="tel:+97690000000"
                    className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold text-sky-900 shadow-sm transition hover:bg-white"
                  >
                    Шууд залгах
                  </a>

                  {w.gallery?.length ? (
                    <span className="ml-auto text-xs font-semibold text-gray-500">
                      Зураг: {w.gallery.length}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ✅ LIGHTBOX COMPONENT */
function Lightbox({
  open,
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  if (!open) return null;

  const src = images[index];

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose} // ✅ outside click closes
    >
      <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        {/* Top bar */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-white/80">
            {index + 1} / {images.length}
          </div>

          <div className="flex items-center gap-2">
            {/* ✅ prev/next buttons */}
            <button
              type="button"
              onClick={onPrev}
              className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur hover:bg-white/15"
              aria-label="Previous"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={onNext}
              className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur hover:bg-white/15"
              aria-label="Next"
            >
              Next
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur hover:bg-white/15"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-black">
          <Image
            src={src}
            alt="Preview"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Arrow overlay buttons (extra) */}
        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white backdrop-blur hover:bg-white/15"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              type="button"
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white backdrop-blur hover:bg-white/15"
              aria-label="Next image"
            >
              →
            </button>
          </>
        ) : null}

        <div className="mt-3 text-center text-xs text-white/70">
          ESC — хаах • ←/→ — дараагийн зураг
        </div>
      </div>
    </div>
  );
}