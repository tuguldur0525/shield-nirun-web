import Link from "next/link";

export default function AIDronePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 lg:px-8 xl:max-w-[76rem] 2xl:max-w-[86rem]">
      <div className="rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
        <div className="inline-flex rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-800">
          Технологийн шийдэл
        </div>

        <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
          AI & Дронд суурилсан
        </h1>

        <p className="mt-3 max-w-3xl text-gray-700 leading-relaxed">
          AI анализ, дроны хяналт, нөхцөл байдлын илрүүлэлт, эрсдэлийн дохиолол зэрэг
          шийдлүүдийг хэрэгцээнд тань тохируулан төлөвлөж, хэрэгжүүлнэ.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { k: "AI анализ", v: "Сэжигтэй хөдөлгөөн, хэвийн бус зан төлөв илрүүлэлт" },
            { k: "Дрон хяналт", v: "Талбай, периметрийн хяналтыг өргөтгөнө" },
            { k: "Интеграц", v: "Камер/системүүдтэй нэгтгэнэ" },
          ].map((x) => (
            <div key={x.k} className="rounded-2xl border border-black/5 bg-white p-4">
              <div className="text-xs font-semibold text-gray-500">{x.k}</div>
              <div className="mt-1 font-semibold text-gray-900">{x.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
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