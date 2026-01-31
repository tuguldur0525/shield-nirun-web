import Link from "next/link";
import Image from "next/image";

export default function ResidentialSecurityPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
      <div className="rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
        {/* Badge */}
        <div className="inline-flex rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-800">
          Хотхоны аюулгүй байдал
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
          Хотхоны аюулгүй байдлын цогц шийдэл
        </h1>

        {/* Intro */}
        <p className="mt-3 max-w-3xl leading-relaxed text-gray-700">
          Бид хотхон, орон сууцны хорооллуудын СӨХ болон удирдлагын багтай
          хамтран ажиллаж, оршин суугчдын аюулгүй, амар тайван орчныг
          бүрдүүлэх цогц шийдэл бүхий үйлчилгээг санал болгодог.
        </p>

        {/* 🔹 Image section */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { src: "/tech/complex-1.png", alt: "Хотхоны камержуулалт" },
            { src: "/tech/complex-2.jpg", alt: "Орц гарцын хяналтын систем" },
            { src: "/tech/complex-3.png", alt: "Харуул хамгаалалтын хяналт" },
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
              k: "Аюулгүй байдлын төлөвлөгөө",
              v: "СӨХ болон удирдлагатай хамтран боловсруулна",
            },
            {
              k: "AI камерын сүлжээ",
              v: "Нүүр царай, хөдөлгөөн, автомашины дугаар таних",
            },
            {
              k: "Орц, гарцын хяналт",
              v: "RFID карт, донофон, QR код систем",
            },
            {
              k: "24/7 харуул хамгаалалт",
              v: "Байнгын хяналт, шуурхай хариу үйлдэл",
            },
            {
              k: "Автомат мэдрэгчүүд",
              v: "Галын дохиолол, ус алдалт илрүүлэх",
            },
            {
              k: "Cloud & AI систем",
              v: "Үүлэн хадгалалт, бодит цагийн өгөгдөл боловсруулах",
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

        {/* Closing */}
        <p className="mt-6 max-w-3xl text-gray-700 leading-relaxed">
          Оршин суугчдын тав тух, аюулгүй байдлыг бүрэн хангах зорилгоор
          хүний оролцоо болон технологийн дэвшлийг хослуулсан шийдлүүдийг
          бид санал болгож байна.
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