import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold">Бидний тухай</h1>
      <p className="mt-2 text-gray-600">
        Shield Nirun нь аюулгүй байдлын чиглэлээр байгууллага, объект болон харилцагчдын хэрэгцээнд
        нийцсэн шийдэл, үйлчилгээг санал болгодог.
      </p>

      {/* Intro cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border p-6">
          <div className="text-sm text-gray-500">Алсын хараа</div>
          <div className="mt-2 text-lg font-semibold">Найдвартай хамгаалалт, тогтвортой орчин</div>
          <p className="mt-2 text-gray-700">
            Аюулгүй байдлын чанартай үйлчилгээ, системтэй ажиллагаагаар харилцагчийн итгэлийг бүтээнэ.
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <div className="text-sm text-gray-500">Эрхэм зорилго</div>
          <div className="mt-2 text-lg font-semibold">Эрсдэлийг бууруулж, хамгаалалтыг сайжруулах</div>
          <p className="mt-2 text-gray-700">
            Үйл ажиллагаанд нийцсэн хамгаалалтын шийдэл боловсруулж, хэрэгжилтийг тогтвортой хангана.
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <div className="text-sm text-gray-500">Үнэ цэнэ</div>
          <div className="mt-2 text-lg font-semibold">Хариуцлага • Шударга • Шуурхай</div>
          <p className="mt-2 text-gray-700">
            Харилцагчийн аюулгүй байдлыг нэн тэргүүнд тавьж, ил тод, чанартай үйлчилгээг баримтална.
          </p>
        </div>
      </div>

      {/* What we do */}
      <section className="mt-10 rounded-3xl border p-8">
        <h2 className="text-xl font-semibold">Бид юу хийдэг вэ?</h2>
        <p className="mt-3 text-gray-700">
          Бид хамгаалалтын үйлчилгээг зөвхөн “харуул” түвшинд бус, эрсдэлийн үнэлгээ, төлөвлөлт,
          процесс, сургалт, хяналт-шалгалт зэрэг цогцоор нь авч үздэг.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 p-6">
            <div className="font-medium">Shield Nirun</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
              <li>Объектын хамгаалалт, хяналт</li>
              <li>24/7 хамгаалалт, шуурхай арга хэмжээ</li>
              <li>Эрсдэлийн үнэлгээ, төлөвлөгөө</li>
            </ul>
            <Link
              href="/services/shield-nirun"
              className="mt-4 inline-flex text-sm font-medium hover:underline"
            >
              Дэлгэрэнгүй үзэх →
            </Link>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <div className="font-medium">Shield Service</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
              <li>Зөвлөх үйлчилгээ, стандарт/процесс</li>
              <li>Сургалт, дадлага, зөвлөмж</li>
              <li>Техникийн шийдэл, дэмжлэг</li>
            </ul>
            <Link
              href="/services/shield-service"
              className="mt-4 inline-flex text-sm font-medium hover:underline"
            >
              Дэлгэрэнгүй үзэх →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border p-8">
          <h2 className="text-xl font-semibold">Яагаад бид вэ?</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>Хэрэгцээнд нийцсэн шийдэл, уян хатан үйлчилгээ</li>
            <li>Стандартчилсан ажиллагаа, тайлагнал</li>
            <li>Шуурхай холбоо, түргэн хариу арга хэмжээ</li>
            <li>Нууцлал, хариуцлага, сахилга бат</li>
          </ul>
        </div>

        <div className="rounded-3xl border p-8">
          <h2 className="text-xl font-semibold">Ажиллах процесс</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-gray-700">
            <li>Хэрэгцээ тодорхойлох, уулзалт</li>
            <li>Эрсдэлийн үнэлгээ, санал боловсруулах</li>
            <li>Гэрээ, хэрэгжилтийн төлөвлөгөө</li>
            <li>Хэрэгжилт + хяналт, сайжруулалт</li>
          </ol>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Холбоо барих
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 rounded-3xl border p-8">
        <h2 className="text-xl font-semibold">Үнийн санал авах уу?</h2>
        <p className="mt-2 text-gray-700">
          Танай байгууллага/объектын онцлогт тохирсон хамгаалалтын шийдэл санал болгоё.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Үнийн санал авах
          </Link>
          <Link
            href="/services"
            className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            Үйлчилгээнүүд үзэх
          </Link>
        </div>
      </section>
    </main>
  );
}