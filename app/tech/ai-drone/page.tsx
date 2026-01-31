import Link from "next/link";
import Image from "next/image";

export default function TraditionalGuardPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
      <div className="rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
        {/* Badge */}
        <div className="inline-flex rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-800">
          Хамгаалалтын үйлчилгээ
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
          Уламжлалт харуул хамгаалалт
        </h1>

        {/* Intro */}
        <p className="mt-3 max-w-3xl leading-relaxed text-gray-700">
          Бид уламжлалт харуул хамгаалалтын үйлчилгээг хиймэл оюун ухаан (AI) болон
          орчин үеийн дэвшилтэт технологитой хослуулан үзүүлдэг. Хүний оролцоог
          AI шийдлүүдтэй уялдуулснаар илүү үр дүнтэй, найдвартай хамгаалалтын
          системийг бүрдүүлж байна.
        </p>

        {/* 🔹 Image section */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { src: "/tech/guard-4.jpg", alt: "Харуул хамгаалалтын ажилтан" },
            { src: "/tech/guard-2.jpg", alt: "AI камерт суурилсан хяналт" },
            { src: "/tech/guard-1.png", alt: "Дрон хяналтын систем" },
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

        {/* Services */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              k: "Объект хамгаалалт",
              v: "Оффис, байгууллага, худалдааны төв, үзвэр үйлчилгээний газар",
            },
            {
              k: "Олон нийтийн арга хэмжээ",
              v: "Тоглолт, эвэнт, олон нийтийн арга хэмжээний биечилсэн хамгаалалт",
            },
            {
              k: "AI камер – 24/7",
              v: "AI камерт суурилсан хяналтын систем, тасралтгүй мониторинг",
            },
            {
              k: "AI & Дрон систем",
              v: "Нүүр царай, хөдөлгөөн, автомашины дугаар таних",
            },
            {
              k: "Эрсдэлээс сэргийлэлт",
              v: "Гал, ус алдалт, гадны халдлага, эмх замбараагүй байдал",
            },
            {
              k: "Бодит цагийн анализ",
              v: "Өгөгдөлд суурилсан дүн шинжилгээ, шуурхай хариу үйлдэл",
            },
          ].map((x) => (
            <div
              key={x.k}
              className="rounded-2xl border border-black/5 bg-white p-4"
            >
              <div className="text-xs font-semibold text-gray-500">{x.k}</div>
              <div className="mt-1 font-semibold text-gray-900">{x.v}</div>
            </div>
          ))}
        </div>

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