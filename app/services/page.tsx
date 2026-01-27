import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
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

      <div className="mx-auto max-w-6xl py-12 px-6 lg:px-8 xl:max-w-[70rem] 2xl:max-w-[86rem]">
      {/* Header */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white/80 p-10 shadow-sm">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="relative max-w-3xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm"
          >
            Үйлчилгээнүүд
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Хамгаалалт аюулгүй байдал, Цэвэрлэгээ нүүлгэлтийн үйлчилгээ
          </h1>
          <p className="mt-3 text-gray-700">
            Shield Nirun нь аюулгүй байдлын (харуул хамгаалалт, хувийн бие хамгаалалт, камер) <br/>
            Shield Service нь оффис/гэр ахуйн цэвэрлэгээ болон нүүлгэлтийн үйлчилгээ үзүүлнэ.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+97690000000"
              className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-800"
            >
              Одоо залгах
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-sky-200 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            >
              Үнийн санал авах
            </Link>
          </div>
        </div>
      </section>

      {/* Two Columns */}
      <section className="mt-10 grid gap-8 md:grid-cols-2">
        {/* Shield Nirun */}
        <article className="group overflow-hidden rounded-3xl border border-sky-200 bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
          {/* Image header */}
          <div className="relative h-52">
            <Image
              src="/Service/nirunCover.jpg"
              alt="Shield Nirun - хамгаалалт"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute left-6 top-6 inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900">
            Аюулгүй байдал
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-2xl font-bold text-white">Shield Nirun</h2>
              <p className="mt-1 text-sm text-white/90">
                Харуул хамгаалалт • Хувийн бие хамгаалалт • Камерын хяналт
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* highlights */}
            <div className="flex flex-wrap gap-2">
              {["24/7 хамгаалалт", "Шуурхай арга хэмжээ", "Хяналт ба тайлагнал"].map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm"
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-black/5 bg-white/70 p-5">
              <div className="text-sm font-semibold text-gray-900">Хэзээ тохирох вэ?</div>
              <p className="mt-2 text-sm text-gray-700">
                Объект/оффис/талбайн <span className="font-semibold">байнгын хамгаалалт</span>,
                VIP хувийн бие хамгаалалт, эсвэл <span className="font-semibold">камерын систем</span> шаардлагатай үед.
              </p>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-gray-900">Үндсэн үйлчилгээ</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {[
                  "Харуул хамгаалалт (объект, байгууллага)",
                  "Хувийн бие хамгаалалт (VIP хамгаалалт)",
                  "Камерын систем суурилуулалт, тохиргоо",
                  "Хяналт/мониторинг, шуурхай арга хэмжээ",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-700" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/services/shield-nirun"
                className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Дэлгэрэнгүй →
              </Link>
              <a
                href="tel:+97690000000"
                className="rounded-full border border-sky-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-sky-900 shadow-sm transition hover:bg-white"
              >
                Одоо залгах
              </a>
            </div>
          </div>
        </article>

        {/* Shield Service */}
        <article className="group overflow-hidden rounded-3xl border border-sky-200 bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
          {/* Image header */}
          <div className="relative h-52">
            <Image
              src="/Service/serviceCover.png"
              alt="Shield Service - цэвэрлэгээ, нүүлгэлт"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute left-6 top-6 inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900">
              Цэвэрлэгээ, Нүүлгэлт
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-2xl font-bold text-white">Shield Service</h2>
              <p className="mt-1 text-sm text-white/90">
                Оффис цэвэрлэгээ • Гэр ахуй • Нүүлгэлтийн үйлчилгээ
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* highlights */}
            <div className="flex flex-wrap gap-2">
              {["Тогтмол үйлчилгээ", "Гүн цэвэрлэгээ", "Нүүлгэлтийн багц"].map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm"
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-black/5 bg-white/70 p-5">
              <div className="text-sm font-semibold text-gray-900">Хэзээ тохирох вэ?</div>
              <p className="mt-2 text-sm text-gray-700">
                Оффис/гэрийн <span className="font-semibold">цэвэрлэгээ</span> хэрэгтэй үед эсвэл
                <span className="font-semibold"> нүүх, зөөх</span> ажиллагааг хурдан, эмх цэгцтэй хийх үед.
              </p>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-gray-900">Үндсэн үйлчилгээ</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {[
                  "Оффисын цэвэрлэгээ (тогтмол / нэг удаа)",
                  "Гэр ахуйн цэвэрлэгээ (гүн цэвэрлэгээ)",
                  "Нүүлгэлт (ачих, зөөх, буулгах)",
                  "Тээвэрлэлт, зохион байгуулалт",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-700" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/services/shield-service"
                className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Дэлгэрэнгүй →
              </Link>
              <a
                href="tel:+97690000000"
                className="rounded-full border border-sky-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-sky-900 shadow-sm transition hover:bg-white"
              >
                Захиалга өгөх
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* Bottom CTA */}
      <section className="mt-12 rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
        <div className="md:flex md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-sky-800">Хурдан холбогдох</div>
            <div className="mt-2 text-2xl font-bold text-gray-900">
              Танд аль үйлчилгээ тохирохыг хамт тодорхойлъё
            </div>
            <p className="mt-2 text-gray-600">
              Хэрэгцээгээ хэлээрэй — бид хамгийн тохиромжтой багц, санал гаргана.
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
          </div>
        </div>
      </section>
    </div>
    </main>
  );
}