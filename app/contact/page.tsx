"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // ЭНД өөрийн имэйлээ солиорой
  const toEmail = "tokut243@gmail.com";

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Үнийн санал / Холбоо барих хүсэлт");
    const body = encodeURIComponent(
      `Нэр: ${name}\nУтас: ${phone}\n\nМессеж:\n${message}\n`
    );
    return `mailto:${toEmail}?subject=${subject}&body=${body}`;
  }, [name, phone, message, toEmail]);

  // Recruitment mailto
  const jobMailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Ажилд орох хүсэлт / CV илгээх");
    const body = encodeURIComponent(
      `Сайн байна уу?\n\nБи Shield Nirun / Shield Service-д ажил горилох хүсэлтэй байна.\n\nНэр:\nУтас:\nИ-мэйл:\nГорилж буй албан тушаал:\nТуршлага (товч):\n\nCV (attachment) хавсарган илгээнэ.\n`
    );
    return `mailto:${toEmail}?subject=${subject}&body=${body}`;
  }, [toEmail]);

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

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white/80 shadow-sm">
          <div className="relative h-[260px] md:h-[300px]">
            <Image
              src="/Service/nirunCover.jpg"
              alt="Contact cover"
              fill
              priority
              className="object-cover"
              onError={() => {}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/10" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />

            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/18 backdrop-blur">
                  Холбоо барих
                </div>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Бидэнтэй холбогдоорой
                </h1>
                <p className="mt-2 max-w-2xl text-white/90">
                  Доорх мэдээллээр шууд залгах эсвэл хүсэлтээ имэйлээр илгээнэ үү.
                  Энэ форм нь мэдээллийг хадгалахгүй.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+97690000000"
                    className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-800"
                  >
                    Одоо залгах
                  </a>
                  <a
                    href={`mailto:${toEmail}`}
                    className="rounded-full border border-white/25 bg-white/12 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18"
                  >
                    Имэйл бичих
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick strip */}
          <div className="grid gap-3 border-t border-black/5 bg-white/80 p-6 md:grid-cols-3">
            <div className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3">
              <div className="text-xs text-gray-500">Утас</div>
              <a
                className="mt-1 inline-block font-semibold text-gray-900 hover:text-sky-700"
                href="tel:+97690000000"
              >
                +976 9000-0000
              </a>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3">
              <div className="text-xs text-gray-500">Имэйл</div>
              <a
                className="mt-1 inline-block font-semibold text-gray-900 hover:text-sky-700"
                href={`mailto:${toEmail}`}
              >
                {toEmail}
              </a>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3">
              <div className="text-xs text-gray-500">Байршил</div>
              <a
                className="mt-1 inline-block font-semibold text-gray-900 hover:text-sky-700"
                href="https://maps.google.com/?q=Ulaanbaatar"
                target="_blank"
                rel="noreferrer"
              >
                Газрын зураг нээх →
              </a>
            </div>
          </div>
        </section>

{/* CONTENT */}
<section className="mt-10 space-y-8">
  {/* 2-column area (unchanged positions) */}
  <section className="grid gap-8 lg:grid-cols-2">
    {/* Left column */}
    <div className="space-y-6">
      {/* Contact info */}
      <section className="rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm pb-20">
        <h2 className="text-xl font-bold text-gray-900">Мэдээлэл</h2>
        <p className="mt-2 text-gray-600">Ажлын цагаар холбогдвол хурдан хариу өгнө.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white/70 p-5">
            <div className="text-xs font-semibold text-gray-500">Утас</div>
            <a
              className="mt-2 inline-block font-semibold text-gray-900 hover:text-sky-700"
              href="tel:+97690000000"
            >
              +976 9000-0000
            </a>
            <div className="mt-2 text-sm text-gray-600">
              Шууд залгахад автоматаар утас нээгдэнэ.
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white/70 p-5">
            <div className="text-xs font-semibold text-gray-500">Имэйл</div>
            <a
              className="mt-2 inline-block font-semibold text-gray-900 hover:text-sky-700"
              href={`mailto:${toEmail}`}
            >
              {toEmail}
            </a>
            <div className="mt-2 text-sm text-gray-600">
              Үнийн санал/хүсэлт илгээхэд тохиромжтой.
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white/70 p-5 sm:col-span-2">
            <div className="text-xs font-semibold text-gray-500">Хаяг</div>
            <div className="mt-2 font-semibold text-gray-900">
              Улаанбаатар хот, (хаягаа энд бичнэ)
            </div>
            <div className="mt-3">
              <a
                href="https://maps.google.com/?q=Ulaanbaatar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Газрын зураг нээх →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work hours */}
      <section className="rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm pb-20">
        <h3 className="text-lg font-bold text-gray-900">Ажлын цаг</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { k: "Даваа–Баасан", v: "09:00–18:00" },
            { k: "Бямба", v: "10:00–16:00" },
            { k: "Ням", v: "Амарна" },
            { k: "Онцгой үед", v: "Урьдчилан тохиролцоно" },
          ].map((x) => (
            <div
              key={x.k}
              className="rounded-2xl border border-black/5 bg-white/70 p-4"
            >
              <div className="text-xs font-semibold text-gray-500">{x.k}</div>
              <div className="mt-1 font-semibold text-gray-900">{x.v}</div>
            </div>
          ))}
        </div>
      </section>
    </div>

    {/* Right column: Form */}
    <section className="rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Хүсэлт илгээх</h2>
          <p className="mt-2 text-gray-600">
            “Имэйлээр илгээх” дээр дархад таны mail app нээгдэнэ (өгөгдөл хадгалахгүй).
          </p>
        </div>

        <div className="hidden rounded-2xl border border-sky-200 bg-white/80 px-3 py-2 text-xs font-semibold text-sky-800 shadow-sm md:block">
          Secure • Simple
        </div>
      </div>

      <div className="mt-7 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Нэр</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-gray-900 outline-none ring-0 transition focus:border-sky-300 focus:ring-4 focus:ring-sky-200/40"
            placeholder="Таны нэр"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Утас</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-gray-900 outline-none ring-0 transition focus:border-sky-300 focus:ring-4 focus:ring-sky-200/40"
            placeholder="+976 ..."
            inputMode="tel"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Мессеж</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 min-h-[160px] w-full resize-none rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-gray-900 outline-none ring-0 transition focus:border-sky-300 focus:ring-4 focus:ring-sky-200/40"
            placeholder="Юу хэрэгтэй байгаа тухайгаа бичээрэй..."
          />
        </div>

        <div className="rounded-2xl border border-black/5 bg-white/70 p-4 text-sm text-gray-700">
          <div className="font-semibold text-gray-900">Жишээ:</div>
          <div className="mt-1">
            “Оффисын тогтмол цэвэрлэгээ (7 хоногт 2 удаа)” эсвэл “Камер суурилуулалт + мониторинг”
            гэх мэтээр товч бичээрэй.
          </div>
        </div>

        <a
          href={mailtoHref}
          className="inline-flex w-full items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-800"
        >
          Имэйлээр илгээх
        </a>

        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+97690000000"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-sky-200 bg-white/80 px-5 py-3 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
          >
            Залгах
          </a>
          <Link
            href="/services"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-sky-200 bg-white/80 px-5 py-3 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
          >
            Үйлчилгээнүүд
          </Link>
        </div>

        <div className="text-xs text-gray-500">
          * Хэрвээ таны төхөөрөмж дээр mail програм тохируулаагүй бол илгээх боломжгүй байж болно.
        </div>
      </div>
    </section>
  </section>

  {/* ✅ Recruitment section (FULL WIDTH at bottom) */}
  <section className="rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-sm">
    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm">
          Ажил горилогч
        </div>
        <h3 className="mt-3 text-2xl font-bold text-gray-900">
          Бид таныг ажилд урьж байна
        </h3>
        <p className="mt-2 text-gray-700">
          Shield Nirun / Shield Service багт нэгдэхийг хүсвэл CV-гээ илгээгээрэй.
          Тохирох боломж гармагц бид тантай холбогдоно.
        </p>
      </div>

      <div className="rounded-2xl border border-black/5 bg-white/70 px-5 py-4">
        <div className="text-xs text-gray-500">CV илгээх</div>
        <a href={`mailto:${toEmail}`} className="mt-1 inline-block font-semibold text-sky-700 hover:underline">
          {toEmail}
        </a>
        <div className="mt-2 text-xs text-gray-500">PDF хэлбэрээр хавсаргахыг зөвлөе.</div>
      </div>
    </div>

    <div className="mt-6 grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-black/5 bg-white/70 p-5">
        <div className="text-xs font-semibold text-gray-500">Жишээ албан тушаалууд</div>
        <ul className="mt-2 space-y-1 text-sm text-gray-700">
          <li>• Харуул хамгаалалтын ажилтан</li>
          <li>• Ээлжийн ахлагч / зохион байгуулагч</li>
          <li>• Цэвэрлэгээний ажилтан</li>
          <li>• Нүүлгэлтийн багийн гишүүн</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-black/5 bg-white/70 p-5">
        <div className="text-xs font-semibold text-gray-500">Илгээхдээ</div>
        <ul className="mt-2 space-y-1 text-sm text-gray-700">
          <li>• Горилж буй албан тушаал</li>
          <li>• Холбоо барих дугаар, и-мэйл</li>
          <li>• Боломжтой ажиллах цаг/ээлж</li>
          <li>• Туршлага (товч)</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-black/5 bg-white/70 p-5">
        <div className="text-xs font-semibold text-gray-500">Хурдан холбогдох</div>
        <div className="mt-2 text-sm text-gray-700">
          Асууж тодруулах бол шууд залгаарай.
        </div>
        <a
          href="tel:+97690000000"
          className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-sky-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
        >
          Залгах
        </a>
      </div>
    </div>

    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={jobMailtoHref}
        className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-800"
      >
        CV илгээх →
      </a>
      <Link
        href="/services"
        className="rounded-full border border-sky-200 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
      >
        Үйлчилгээнүүд үзэх
      </Link>
    </div>
  </section>
</section>
        
      </div>
    </main>
  );
}