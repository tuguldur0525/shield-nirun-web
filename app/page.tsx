import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative isolate overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Base paper */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-sky-50" />

          {/* glow orbs */}
          <div className="absolute -top-10 -left-40 h-[610px] w-[680px] rounded-full bg-sky-300/25 blur-[130px] animate-float10 xl:h-[760px] xl:w-[860px] 2xl:h-[860px] 2xl:w-[980px]" />

          {/* Large soft color fields */}
          <div className="absolute -top-56 -left-56 h-[700px] w-[700px] rounded-full bg-sky-300/22 blur-[120px] xl:h-[860px] xl:w-[860px] 2xl:h-[980px] 2xl:w-[980px]" />
          <div className="absolute top-[-200px] right-[-220px] h-[620px] w-[620px] rounded-full bg-cyan-300/20 blur-[120px] xl:h-[760px] xl:w-[760px] 2xl:h-[880px] 2xl:w-[880px]" />
          <div className="absolute bottom-[-260px] left-1/3 h-[680px] w-[680px] rounded-full bg-sky-200/20 blur-[140px] xl:h-[840px] xl:w-[840px] 2xl:h-[980px] 2xl:w-[980px]" />

          {/* Medium depth blobs */}
          <div className="absolute top-1/3 left-[-120px] h-[360px] w-[360px] rounded-full bg-sky-400/10 blur-[90px] xl:h-[460px] xl:w-[460px] 2xl:h-[520px] 2xl:w-[520px]" />
          <div className="absolute bottom-1/4 right-[-140px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[100px] xl:h-[520px] xl:w-[520px] 2xl:h-[600px] 2xl:w-[600px]" />

          {/* Technical grid */}
          <div
            className="absolute inset-0 opacity-[0.09]
            [background-image:
              linear-gradient(to_right,rgba(2,132,199,0.45)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(2,132,199,0.35)_1px,transparent_1px)
            ]
            [background-size:72px_72px]"
          />

          {/* Micro grid */}
          <div
            className="absolute inset-0 opacity-[0.05]
            [background-image:
              linear-gradient(to_right,rgba(2,132,199,0.35)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(2,132,199,0.35)_1px,transparent_1px)
            ]
            [background-size:18px_18px]"
          />

          {/* Dot constellation */}
          <div
            className="absolute inset-0 opacity-[0.06]
            [background-image:radial-gradient(rgba(2,132,199,0.7)_1px,transparent_1px)]
            [background-size:22px_22px]"
          />

          {/* Canvas / paper grain */}
          <div
            className="absolute inset-0 opacity-[0.12] mix-blend-multiply
            [background-image:
              repeating-radial-gradient(
                rgba(0,0,0,0.06) 0,
                rgba(0,0,0,0.06) 1px,
                transparent 1px,
                transparent 3px
              )
            ]
            [background-size:4px_4px]"
          />

          {/* Readability fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/90" />
        </div>

        {/* CONTENT */}
        <div className="relative mx-auto w-full max-w-6xl px-6 py-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[86rem]">
          <div className="flex min-h-[60vh] items-center py-4 md:min-h-[64vh] md:py-10 lg:min-h-[68vh] xl:min-h-[70vh] 2xl:min-h-[74vh]">
            <div className="grid w-full items-center gap-10 lg:gap-12 xl:gap-14 md:grid-cols-12">
              {/* LEFT TEXT */}
              <div className="md:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white/70 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm backdrop-blur">
                    Технологи төвтэй
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white/70 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm backdrop-blur">
                    Хиймэл оюун ухаанд суурилсан
                  </span>
                </div>

                <h1 className="mt-5 text-4xl py-1 font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl xl:text-[4.1rem]">
                  Аюулгүй байдлын
                  <span className="block">цогц шийдэл</span>
                  <span className="mt-2 block text-2xl py-2 font-semibold text-sky-600/80 sm:text-3xl md:text-3xl xl:text-[2.05rem]">
                    Харуул хамгаалалт - Хувийн бие хамгаалалт - Камер суурилуулалт хяналт
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg xl:text-[1.05rem]">
                 Shield Nirun нь уламжлалт хамгаалалтын үйлчилгээг хиймэл оюун ухаанд суурилсан дэвшилтэт технологитой хослуулсан шинэ үеийн хамгаалалтын компани юм. Бид 10 гаруй жилийн туршлагатай, олон улсын стандартын дагуу ажилладаг мэргэшсэн багийн хамтаар хувь хүн, байгууллага, арга хэмжээнд зориулсан ухаалаг, найдвартай хосолмол хамгаалалтын шийдлүүдийг санал болгодог. 
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a
                    href="tel:+97690000000"
                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    Бидэнтэй холбогдох
                  </a>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white/70 px-7 py-3 text-sm font-semibold text-sky-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    Үйлчилгээнүүд үзэх →
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Хариуцлагатай хамт олон",
                    "Шуурхай арга хэмжээ",
                    "Стандарт үйл ажиллагаа",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT CARDS (✅ clickable to detail pages) */}
              <div className="md:col-span-5">
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 xl:gap-4">
                  {[
                    {
                      t: "AI & Дронд суурилсан",
                      d: "Цогц хяналтын шийдэл",
                      href: "/tech/ai-drone",
                    },
                    {
                      t: "Cloud хяналтын систем",
                      d: "Төвлөрсөн удирдлага",
                      href: "/tech/cloud-monitoring",
                    },
                    {
                      t: "Урьдчилан сэргийлэлт",
                      d: "Эрсдэлийг бодитоор бууруулна",
                      href: "/tech/prevention",
                    },
                  ].map((x) => (
                    <Link
                      key={x.t}
                      href={x.href}
                      className="group block rounded-3xl border border-sky-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 xl:p-6"
                    >
                      <div className="text-sm font-semibold text-gray-900">
                        {x.t}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">{x.d}</div>
                      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
                      <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-sky-800">
                        Дэлгэрэнгүй{" "}
                        <span className="transition group-hover:translate-x-0.5">
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* bottom divider */}
          <div className="pb-8">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
          </div>
        </div>
      </section>

          {/*Services */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div className="absolute left-1/2 top-0 -z-10 h-72 w-[900px] -translate-x-1/2 rounded-full bg-sky-200/35 blur-3xl xl:w-[1100px] 2xl:w-[1280px]" />
        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:radial-gradient(rgba(2,132,199,0.8)_1px,transparent_1px)] [background-size:26px_26px]" />

        <div className="mx-auto max-w-6xl px-6 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
        <div className="flex flex-col gap-3">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
              Үйлчилгээний багц
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Үйлчилгээнүүд
            </h2>

            <p className="max-w-5xl text-gray-700 leading-relaxed">
              Shield Nirun болон Shield Service нь байгууллага, объектын хамгаалалтаас эхлээд аюулгүй байдлын зөвлөх үйлчилгээ, сургалт, техник шийдэл хүртэл{" "}
              <span className="font-semibold text-gray-900">цогц үйлчилгээ</span>{" "}
              санал болгоно. Бид эрсдэлийн үнэлгээ хийж, хэрэгжилтийг зохион
              байгуулан, тогтмол хяналт ба тайлагнал хийж ажилладаг.
            </p>

            {/* Quick highlights */}
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                { k: "Хамгаалалт", v: "24/7 хяналт, зохион байгуулалт" },
                { k: "Тайлагнал", v: "Тогтмол үнэлгээ, сайжруулалт" },
                { k: "Шийдэл", v: "Зөвлөх, сургалт, технологи" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="text-xs font-semibold text-gray-500">
                    {x.k}
                  </div>
                  <div className="mt-1 font-semibold text-gray-900">
                    {x.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Shield Nirun */}
            <Link
              href="/services/shield-nirun"
              className="group relative overflow-hidden rounded-3xl border border-sky-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-100 via-sky-400 to-cyan-300 opacity-80" />
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl transition group-hover:bg-sky-300/40" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
                      Үндсэн хамгаалалт
                    </div>

                    <div className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900">
                      Shield Nirun
                    </div>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      Объектын хамгаалалтын төлөвлөлт, хэрэгжилт, хяналт,
                      тайлагналыг{" "}
                      <span className="font-semibold text-gray-900">
                        нэг цонхоор
                      </span>{" "}
                      зохион байгуулна.
                    </p>
                  </div>

                  <div className="hidden shrink-0 rounded-2xl bg-sky-50 p-3 text-sky-700 ring-1 ring-sky-200 md:block">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2
                        L20 5.5
                        V11.5
                        C20 16.5 15.5 20.5 12 22
                        C8.5 20.5 4 16.5 4 11.5
                        V5.5
                        L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M9 12.5 L11 14.5 L15 10.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    {
                      t: "Эрсдэлийн үнэлгээ",
                      d: "Объектын нөхцөл, эрсдэлийг тодорхойлж төлөвлөгөө гаргана.",
                    },
                    {
                      t: "24/7 хяналт, хамгаалалт",
                      d: "Тасралтгүй хяналт, сахилга, шалгалтын горим хэрэгжүүлнэ.",
                    },
                    {
                      t: "Шуурхай арга хэмжээ",
                      d: "Дуудлага, эрсдэлийн үед зохион байгуулалттай шуурхай ажиллана.",
                    },
                  ].map((i) => (
                    <div
                      key={i.t}
                      className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition group-hover:border-sky-200"
                    >
                      <div className="text-sm font-semibold text-gray-900">
                        {i.t}
                      </div>
                      <div className="mt-1 text-sm text-gray-600 leading-relaxed">
                        {i.d}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["24/7", "Хяналт", "Тайлагнал", "Шуурхай"].map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                  Дэлгэрэнгүй үзэх{" "}
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* Shield Service */}
            <Link
              href="/services/shield-service"
              className="group relative overflow-hidden rounded-3xl border border-cyan-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-100 via-cyan-400 to-sky-300 opacity-80" />
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-200/35 blur-3xl transition group-hover:bg-cyan-300/40" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-200">
                      Цэвэрлэгээ, нүүлгэлтийн үйлчилгээ
                    </div>

                    <div className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900">
                      Shield Service
                    </div>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      Аюулгүй байдлын зөвлөх үйлчилгээ, сургалт, техник шийдлийг{" "}
                      <span className="font-semibold text-gray-900">
                        стандартын түвшинд
                      </span>{" "}
                      хэрэгжүүлнэ.
                    </p>
                  </div>

                  <div className="hidden shrink-0 rounded-2xl bg-cyan-50 p-3 text-cyan-700 ring-1 ring-cyan-200 md:block">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3v18M3 12h18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 7l10 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.6"
                      />
                      <path
                        d="M17 7L7 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    {
                      t: "Зөвлөх үйлчилгээ",
                      d: "Дотоод журам, процесс, хяналтын схемийг сайжруулна.",
                    },
                    {
                      t: "Сургалт, дадлага",
                      d: "Ажилтны бэлтгэл, сургалт, дадлагажуулалтыг зохион байгуулна.",
                    },
                    {
                      t: "Техникийн шийдэл",
                      d: "Шийдлийн зөвлөмж, төхөөрөмжийн сонголт, хэрэгжилтийн зөвлөгөө өгнө.",
                    },
                  ].map((i) => (
                    <div
                      key={i.t}
                      className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition group-hover:border-cyan-200"
                    >
                      <div className="text-sm font-semibold text-gray-900">
                        {i.t}
                      </div>
                      <div className="mt-1 text-sm text-gray-600 leading-relaxed">
                        {i.d}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Зөвлөх", "Сургалт", "Техник", "Стандарт"].map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
                  Дэлгэрэнгүй үзэх{" "}
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* helper CTA */}
          <div className="mt-10 rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:flex md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-gray-900">
                Танай байгууллагад аль нь тохирох вэ?
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Хэрэгцээгээ хэлбэл бид хамгийн тохирсон багц, төлөвлөгөөг санал
                болгоё.
              </div>
            </div>

            <a
              href="tel:+97690000000"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg md:mt-0"
            >
              Одоо залгах
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          WHY US
         ========================= */}
      <section className="relative overflow-hidden py-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-sky-50" />
        <div className="absolute left-1/2 top-10 -z-10 h-72 w-[900px] -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl xl:w-[1100px] 2xl:w-[1280px]" />
        <hr />
        <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
          <div className="flex flex-col gap-3">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
              Давуу тал
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Яагаад бид вэ?
            </h2>

            <p className="max-w-5xl text-gray-700 leading-relaxed">
              Бид хамгаалалт, зөвлөх үйлчилгээ, сургалт, техник шийдлийг{" "}
              <span className="font-semibold text-gray-900">нэг стандарт</span>
              -аар удирдаж, хэрэгжилт–хяналт–тайлагналын тасралтгүй циклийг
              баримталдаг. Ингэснээр үйлчилгээ{" "}
              <span className="font-semibold text-gray-900">
                тогтвортой, хэмжигдэхүйц
              </span>{" "}
              болж, эрсдэлийг бодитоор бууруулна.
            </p>

            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                { k: "24/7", v: "Хяналт хамгаалалт" },
                { k: "Тогтмол", v: "Тайлагнал ба үнэлгээ" },
                { k: "Шуурхай", v: "Хариу арга хэмжээ" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="text-xs font-semibold text-gray-500">
                    {s.k}
                  </div>
                  <div className="mt-1 font-semibold text-gray-900">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                k: "Процесс",
                t: "Стандартчилсан ажиллагаа",
                d: "Төлөвлөлт → хэрэгжилт → хяналт → тайлагнал гэсэн шаталсан процессоор үйлчилгээ тасралтгүй сайжирна.",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 7h10M4 12h16M4 17h10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                k: "Хяналт",
                t: "Тайлагнал ба чанарын хяналт",
                d: "Гүйцэтгэл, нөхцөл байдлыг тогтмол хэмжиж, харилцагчид ойлгомжтой тайлангаар хүргэнэ.",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 19V5M4 19h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 15l3-3 3 2 5-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                k: "Шуурхай",
                t: "Түргэн хариу арга хэмжээ",
                d: "Эрсдэлийн үед холбоо, зохион байгуулалт, арга хэмжээг богино хугацаанд хэрэгжүүлж эрсдэлийг бууруулна.",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2
                        L20 5.5
                        V11.5
                        C20 16.5 15.5 20.5 12 22
                        C8.5 20.5 4 16.5 4 11.5
                        V5.5
                        L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M9 12.5 L11 14.5 L15 10.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map((x) => (
              <div
                key={x.k}
                className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-100 via-sky-400 to-cyan-300 opacity-80" />
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-200/30 blur-2xl transition group-hover:bg-sky-300/35" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-sky-50 p-3 text-sky-700 ring-1 ring-sky-200">
                      {x.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-sky-700">
                        {x.k}
                      </div>
                      <div className="mt-1 font-semibold text-gray-900">
                        {x.t}
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {x.d}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Стандарт", "Хяналт", "Тайлан"]
                      .slice(0, x.k === "Процесс" ? 3 : x.k === "Хяналт" ? 3 : 2)
                      .map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200"
                        >
                          {h}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:flex md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-gray-900">
                Танай байгууллагад тохирсон шийдлийг санал болгоё
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Хэрэгцээгээ хэлбэл бид тохиромжтой үйлчилгээний багц,
                төлөвлөгөөг боловсруулна.
              </div>
            </div>

            <a
              href="tel:+97690000000"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg md:mt-0"
            >
              Одоо залгах
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          PROCESS
         ========================= */}
      <section className="relative overflow-hidden py-1">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-sky-50" />
        <div className="absolute left-1/2 top-8 -z-10 h-72 w-[900px] -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl xl:w-[1100px] 2xl:w-[1280px]" />
        <hr />
        <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
          <div className="flex flex-col gap-3">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
              Алхамчилсан ажиллагаа
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Ажиллах процесс
            </h2>

            <p className="max-w-5xl text-gray-700 leading-relaxed">
              Бид ажил эхлэхээс өмнө хэрэгцээг тодорхойлж, эрсдэлийг үнэлэн,
              төлөвлөгөөг хэрэгжүүлж, дараа нь тогтмол хяналт ба тайлагнал хийж
              үйлчилгээний чанарыг тасралтгүй сайжруулдаг.
            </p>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent md:block" />

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  n: "01",
                  t: "Уулзалт",
                  d: "Хэрэгцээ, зорилгыг тодорхойлж нөхцөл байдлыг сонсоно.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8 10h8M8 14h5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M21 12c0 4.418-4.03 8-9 8a10.5 10.5 0 01-4.5-1l-4.5 1 1.5-4A7.6 7.6 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  n: "02",
                  t: "Үнэлгээ",
                  d: "Эрсдэлийн үнэлгээ хийж хамгийн зөв шийдлийг санал болгоно.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 19V5M4 19h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 15l3-3 3 2 5-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  n: "03",
                  t: "Хэрэгжилт",
                  d: "Төлөвлөгөөний дагуу үйлчилгээ эхлүүлж, зохион байгуулалт хийнэ.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M9.5 12l1.8 1.8L15 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  n: "04",
                  t: "Хяналт",
                  d: "Тайлагнал, сайжруулалтыг тогтмол хийж үр дүнг баталгаажуулна.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 11l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="group relative rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-sky-100 via-sky-400 to-cyan-300 opacity-80" />
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-200/30 blur-2xl transition group-hover:bg-sky-300/35" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-gray-500">
                        Алхам {s.n}
                      </div>
                      <div className="rounded-2xl bg-sky-50 p-3 text-sky-700 ring-1 ring-sky-200">
                        {s.icon}
                      </div>
                    </div>

                    <div className="mt-3 text-lg font-semibold text-gray-900">
                      {s.t}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {s.d}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                      Дараагийн алхам{" "}
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
         ========================= */}
      <section className="relative overflow-hidden py-1">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div className="absolute left-1/2 top-8 -z-10 h-72 w-[900px] -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl xl:w-[1100px] 2xl:w-[1280px]" />

        <div className="mx-auto max-w-6xl px-6 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
          <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white p-8 shadow-sm md:flex md:items-center md:justify-between">
            <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
            <div className="absolute -left-28 -bottom-28 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-100 via-sky-400 to-cyan-300 opacity-80" />

            <div className="relative max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
                Үнийн санал • Түргэн холболт
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900">
                Үнийн санал авахад бэлэн үү?
              </h2>

              <p className="mt-3 text-gray-700 leading-relaxed">
                Танай байгууллагын хэрэгцээ, эрсдэлийн түвшинд тулгуурлан{" "}
                <span className="font-semibold text-gray-900">
                  хамгийн тохиромжтой шийдэл
                </span>
                -ийг санал болгоё. Холбогдоод 1–2 асуултад хариулахад
                хангалттай.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "24/7 боломжит зохион байгуулалт",
                  "Тайлагналтай үйлчилгээ",
                  "Шуурхай арга хэмжээ",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-7 flex flex-col gap-3 sm:flex-row md:mt-0 md:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                Холбоо барих
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                Үйлчилгээнүүд үзэх →
              </Link>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-gray-500">
            * Холбогдсоноор бид танай нөхцөл байдалд тохирсон үйлчилгээний санал
            боловсруулна.
          </div>
        </div>
      </section>
    </main>
  );
}