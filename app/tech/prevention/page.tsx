import Link from "next/link";
import Image from "next/image";

export default function InstallationPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
      <div className="rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
        {/* Badge */}
        <div className="inline-flex rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-800">
          Суурилуулалтын үйлчилгээ
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
          🔧 Суурилуулалт – Холбоо дохиолол, камер, донофон
        </h1>

        {/* Intro */}
        <p className="mt-3 max-w-3xl leading-relaxed text-gray-700">
          Манай 10+ жилийн туршлагатай мэргэжлийн баг дохиолол, хяналтын камер,
          донофон зэрэг аюулгүй байдлын тоног төхөөрөмжийг өндөр чанартайгаар,
          олон улсын стандартад нийцүүлэн суурилуулж, тохируулга хийж гүйцэтгэдэг.
        </p>

        {/* Images */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { src: "/tech/install-1.png", alt: "Хяналтын камер (CCTV) суурилуулалт" },
            { src: "/tech/install-2.webp", alt: "Холбоо дохиолол, галын аюул илрүүлэх систем" },
            { src: "/tech/install-3.webp", alt: "Ухаалаг донофон, орц гарцын хяналт" },
          ].map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/5"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Services list */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            { k: "CCTV суурилуулалт", v: "Хяналтын камер төлөвлөлт, суурилуулалт, тохиргоо" },
            { k: "Холбоо дохиолол", v: "Хулгай болон галын аюул илрүүлэх систем" },
            { k: "Ухаалаг донофон", v: "Орц, гарцын хяналт (интерком систем)" },
            { k: "Цахилгаан монтаж", v: "Шугам сүлжээ, кабельчлал, монтажийн шийдэл" },
            { k: "Дата хадгалалт & Cloud", v: "Бичлэг хадгалах төхөөрөмж, үүлэн интеграци" },
            { k: "Хяналтын платформ", v: "Мобайл/компьютерийн хяналтын платформ суурилуулалт" },
            { k: "AI таних функц", v: "Нүүр царай, хөдөлгөөн, автомашины дугаар таних" },
            { k: "Засвар үйлчилгээ", v: "Техникийн зөвлөгөө, оношилгоо, засвар үйлчилгээ" },
          ].map((x) => (
            <div key={x.k} className="rounded-2xl border border-black/5 bg-white p-4">
              <div className="text-xs font-semibold text-gray-500">{x.k}</div>
              <div className="mt-1 font-semibold text-gray-900">{x.v}</div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <p className="mt-6 max-w-3xl leading-relaxed text-gray-700">
          Бид суурилуулалтыг зөвхөн хийдэг биш, харин тухайн орчны онцлогт нийцсэн
          цогц шийдлийг боловсруулан санал болгодог.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-800"
          >
            Үнийн санал авах
          </Link>
          <Link
            href="/"
            className="rounded-full border border-sky-200 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-900 hover:bg-white"
          >
            Нүүр хуудас →
          </Link>
        </div>
      </div>
    </main>
  );
}