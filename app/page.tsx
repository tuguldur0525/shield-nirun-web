import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-gray-700">
              <span className="font-medium">Shield Nirun</span>
              <span className="text-gray-400">•</span>
              <span>Аюулгүй байдлын шийдэл</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Аюулгүй байдлын
              <span className="block">найдвартай шийдэл,</span>
              <span className="block">чанартай үйлчилгээ</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Байгууллага, объектын хамгаалалт болон зөвлөх үйлчилгээ, сургалт, техник шийдлүүдийг
              цогцоор нь санал болгоно.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Үнийн санал авах
              </Link>
              <Link
                href="/services"
                className="rounded-full border px-6 py-3 text-sm font-medium hover:bg-gray-50"
              >
                Үйлчилгээнүүд үзэх
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-gray-50 p-4">
                <div className="text-sm text-gray-500">Хамгаалалт</div>
                <div className="mt-1 font-semibold">24/7 хяналт</div>
              </div>
              <div className="rounded-2xl bg-gray-50 p-4">
                <div className="text-sm text-gray-500">Баг</div>
                <div className="mt-1 font-semibold">Мэргэшсэн ажилтан</div>
              </div>
              <div className="rounded-2xl bg-gray-50 p-4">
                <div className="text-sm text-gray-500">Шуурхай</div>
                <div className="mt-1 font-semibold">Түргэн арга хэмжээ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="p-6 text-3xl font-bold">Tailwind test</div>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Үйлчилгээнүүд</h2>
          <p className="text-gray-600">
            Танай хэрэгцээнд тохирсон хамгаалалт болон зөвлөх үйлчилгээний шийдэл.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            href="/services/shield-nirun"
            className="group rounded-3xl border p-8 hover:shadow-sm"
          >
            <div className="text-sm text-gray-500">Үндсэн үйлчилгээ</div>
            <div className="mt-2 text-xl font-semibold">Shield Nirun</div>
            <p className="mt-2 text-gray-600">
              Байгууллага, объектын хамгаалалтын цогц үйлчилгээ.
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-gray-700">
              <li>Эрсдэлийн үнэлгээ, төлөвлөгөө</li>
              <li>24/7 хамгаалалт, хяналт</li>
              <li>Шуурхай дуудлага, арга хэмжээ</li>
            </ul>

            <div className="mt-6 text-sm font-medium group-hover:underline">
              Дэлгэрэнгүй →
            </div>
          </Link>

          <Link
            href="/services/shield-service"
            className="group rounded-3xl border p-8 hover:shadow-sm"
          >
            <div className="text-sm text-gray-500">Нэмэлт үйлчилгээ</div>
            <div className="mt-2 text-xl font-semibold">Shield Service</div>
            <p className="mt-2 text-gray-600">
              Зөвлөх үйлчилгээ, сургалт болон тусгай чиглэлийн шийдэл.
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-gray-700">
              <li>Зөвлөх үйлчилгээ, процесс сайжруулалт</li>
              <li>Сургалт, дадлага</li>
              <li>Техникийн шийдэл, зөвлөмж</li>
            </ul>

            <div className="mt-6 text-sm font-medium group-hover:underline">
              Дэлгэрэнгүй →
            </div>
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold">Яагаад бид вэ?</h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            Бид үйлчилгээний чанар, сахилга бат, тайлагнал, хяналтыг системтэйгээр хэрэгжүүлдэг.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-6">
              <div className="text-sm text-gray-500">Процесс</div>
              <div className="mt-2 font-semibold">Стандартчилсан ажиллагаа</div>
              <p className="mt-2 text-gray-600">
                Төлөвлөлтөөс хэрэгжилт хүртэл шат дараалсан, ойлгомжтой процесс.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6">
              <div className="text-sm text-gray-500">Хяналт</div>
              <div className="mt-2 font-semibold">Тайлагнал ба хяналт</div>
              <p className="mt-2 text-gray-600">
                Хийсэн ажлын гүйцэтгэл, нөхцөл байдлыг тогтмол хянаж сайжруулна.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6">
              <div className="text-sm text-gray-500">Шуурхай</div>
              <div className="mt-2 font-semibold">Түргэн хариу арга хэмжээ</div>
              <p className="mt-2 text-gray-600">
                Дуудлага, эрсдэлийн үед шуурхай зохион байгуулалттай ажиллана.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Ажиллах процесс</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Уулзалт", d: "Хэрэгцээ тодорхойлж нөхцөл байдлыг сонсоно." },
            { n: "02", t: "Үнэлгээ", d: "Эрсдэлийн үнэлгээ хийж санал боловсруулна." },
            { n: "03", t: "Хэрэгжилт", d: "Төлөвлөгөөний дагуу үйлчилгээ эхлүүлнэ." },
            { n: "04", t: "Хяналт", d: "Тайлагнал, сайжруулалтыг тогтмол хийнэ." },
          ].map((s) => (
            <div key={s.n} className="rounded-3xl border p-6">
              <div className="text-sm text-gray-500">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="mt-2 text-gray-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-3xl border p-8 md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Үнийн санал авахад бэлэн үү?</h2>
              <p className="mt-2 text-gray-600">
                Танай байгууллагын хэрэгцээнд тохирсон шийдлийг хамт гаргая.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
              <a
  href="tel:+97690000000"
  className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90"
>
  Бидэнтэй холбогдох
</a>
              <Link
                href="/services"
                className="rounded-full border px-6 py-3 text-sm font-medium hover:bg-gray-50"
              >
                Үйлчилгээнүүд үзэх
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}