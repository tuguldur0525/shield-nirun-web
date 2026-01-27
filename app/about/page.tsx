import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
        <section className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white/80 shadow-sm">
          <div className="relative h-[260px] md:h-[320px]">
            <Image
              src="/Service/nirunCover.jpg"
              alt="About Shield Nirun"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* subtle glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />

            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-10">
                <div className="inline-flex rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/18 backdrop-blur">
                  Бидний тухай
                </div>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Найдвартай хамгаалалт,
                  <span className="block">цогц үйлчилгээ</span>
                </h1>
                <p className="mt-3 max-w-2xl text-white/90">
                  Shield Nirun нь аюулгүй байдал, хамгаалалт болон үйлчилгээний салбарт
                  харилцагчийн хэрэгцээнд нийцсэн шийдлийг мэргэжлийн түвшинд санал болгодог.
                </p>
              </div>
            </div>
          </div>

          {/* quick actions (consistent buttons) */}
          <div className="flex flex-col gap-3 border-t border-black/5 bg-white/80 p-6 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-gray-700">
              Танай хэрэгцээнд тохирсон шийдлийг санал болгоё.
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                Холбоо барих
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-sky-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Үйлчилгээнүүд үзэх
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              k: "Алсын хараа",
              t: "Найдвартай хамгаалалт, тогтвортой орчин",
              d: "Аюулгүй байдлын чанартай үйлчилгээ, системтэй ажиллагаагаар харилцагчийн итгэлийг бий болгоно.",
            },
            {
              k: "Эрхэм зорилго",
              t: "Эрсдэлийг бууруулж, хамгаалалтыг сайжруулах",
              d: "Үйл ажиллагаанд нийцсэн хамгаалалтын шийдэл боловсруулж, хэрэгжилтийг тогтвортой хангана.",
            },
            {
              k: "Үнэ цэнэ",
              t: "Хариуцлага • Шударга • Шуурхай",
              d: "Нууцлал, сахилга бат, ил тод байдлыг эрхэмлэн харилцагчийн аюулгүй байдлыг нэн тэргүүнд тавина.",
            },
          ].map((x) => (
            <div
              key={x.k}
              className="rounded-3xl border border-sky-200 bg-white/80 p-6 shadow-sm"
            >
              <div className="text-xs font-semibold text-sky-800">{x.k}</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">{x.t}</div>
              <p className="mt-2 text-gray-700">{x.d}</p>
            </div>
          ))}
        </section>

        {/* WHAT WE DO */}
        <section className="mt-12 rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Бид юу хийдэг вэ?</h2>
          <p className="mt-3 max-w-3xl text-gray-700">
            Бид хамгаалалт, үйлчилгээг зөвхөн гүйцэтгэл бус,{" "}
            <span className="font-semibold">эрсдэлийн үнэлгээ, төлөвлөлт, процесс, хяналт</span>{" "}
            зэрэгтэй уялдуулсан цогц байдлаар хэрэгжүүлдэг.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Shield Nirun */}
            <div className="rounded-3xl border border-black/5 bg-white/70 p-6">
              <div className="text-sm font-semibold text-sky-800">Shield Nirun</div>
              <p className="mt-2 font-medium text-gray-900">
                Харуул хамгаалалт • Хувийн бие хамгаалалт • Камерын систем
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• Объектын харуул хамгаалалт</li>
                <li>• VIP / хувийн бие хамгаалалт</li>
                <li>• Камер суурилуулалт, хяналт</li>
                <li>• Шуурхай арга хэмжээ, тайлагнал</li>
              </ul>
              <Link
                href="/services/shield-nirun"
                className="mt-4 inline-flex text-sm font-semibold text-sky-700 hover:underline"
              >
                Дэлгэрэнгүй →
              </Link>
            </div>

            {/* Shield Service */}
            <div className="rounded-3xl border border-black/5 bg-white/70 p-6">
              <div className="text-sm font-semibold text-sky-800">Shield Service</div>
              <p className="mt-2 font-medium text-gray-900">Цэвэрлэгээ • Нүүлгэлтийн үйлчилгээ</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• Оффисын цэвэрлэгээ</li>
                <li>• Гэр ахуйн гүн цэвэрлэгээ</li>
                <li>• Нүүлгэлтийн үйлчилгээ</li>
                <li>• Тээвэрлэлт, зохион байгуулалт</li>
              </ul>
              <Link
                href="/services/shield-service"
                className="mt-4 inline-flex text-sm font-semibold text-sky-700 hover:underline"
              >
                Дэлгэрэнгүй →
              </Link>
            </div>
          </div>
        </section>

        {/* WHY US + PROCESS */}
        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Яагаад бид вэ?</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Хэрэгцээнд нийцсэн уян хатан шийдэл</li>
              <li>• Стандартчилсан ажиллагаа, тайлагнал</li>
              <li>• Шуурхай холбоо, хариу арга хэмжээ</li>
              <li>• Нууцлал, сахилга бат, хариуцлага</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Ажиллах процесс</h2>
            <ol className="mt-4 space-y-2 text-gray-700">
              <li>1. Хэрэгцээ тодорхойлох, уулзалт</li>
              <li>2. Үнэлгээ, санал боловсруулах</li>
              <li>3. Гэрээ, хэрэгжилт</li>
              <li>4. Хяналт, сайжруулалт</li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold text-sky-800">Дараагийн алхам</div>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                Танай хэрэгцээнд тохирсон шийдэл санал болгоё
              </h2>
              <p className="mt-2 text-gray-700">Бидэнтэй холбогдож дэлгэрэнгүй мэдээлэл аваарай.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
              <Link
                href="/contact"
                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                Холбоо барих
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-sky-200 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Үйлчилгээнүүд үзэх
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
