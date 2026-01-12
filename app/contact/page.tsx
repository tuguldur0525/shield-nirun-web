"use client";

import { useMemo, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // ЭНД өөрийн имэйлээ солиорой
  const toEmail = "info@shieldnirun.mn";

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Үнийн санал / Холбоо барих хүсэлт");
    const body = encodeURIComponent(
      `Нэр: ${name}\nУтас: ${phone}\n\nМессеж:\n${message}\n`
    );
    return `mailto:${toEmail}?subject=${subject}&body=${body}`;
  }, [name, phone, message]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold">Холбоо барих</h1>
      <p className="mt-2 text-gray-600">
        Доорх мэдээллээр холбогдоорой, эсвэл хүсэлт илгээнэ үү.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Contact info */}
        <section className="rounded-3xl border p-8">
          <h2 className="text-xl font-semibold">Мэдээлэл</h2>

          <div className="mt-6 space-y-4 text-gray-700">
            <div>
              <div className="text-sm text-gray-500">Утас</div>
              <a className="font-medium hover:underline" href="tel:+97690000000">
                +976 9000-0000
              </a>
            </div>

            <div>
              <div className="text-sm text-gray-500">Имэйл</div>
              <a className="font-medium hover:underline" href={`mailto:${toEmail}`}>
                {toEmail}
              </a>
            </div>

            <div>
              <div className="text-sm text-gray-500">Хаяг</div>
              <div className="font-medium">Улаанбаатар хот, (хаягаа энд бичнэ)</div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Ulaanbaatar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Газрын зураг нээх →
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-gray-50 p-6">
            <div className="font-medium">Ажлын цаг</div>
            <div className="mt-2 text-gray-700">
              Даваа–Баасан: 09:00–18:00 <br />
              Бямба: 10:00–16:00 <br />
              Ням: Амарна
            </div>
          </div>
        </section>

        {/* Simple mailto form */}
        <section className="rounded-3xl border p-8">
          <h2 className="text-xl font-semibold">Хүсэлт илгээх</h2>
          <p className="mt-2 text-gray-600">
            Энэ форм нь мэдээллийг хадгалахгүй. “Имэйлээр илгээх” дээр дархад таны mail app нээгдэнэ.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-gray-600">Нэр</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
                placeholder="Таны нэр"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Утас</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
                placeholder="+976 ..."
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Мессеж</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 min-h-[140px] w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
                placeholder="Юу хэрэгтэй байгаа тухайгаа бичээрэй..."
              />
            </div>

            <a
              href={mailtoHref}
              className="inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Имэйлээр илгээх
            </a>

            <div className="text-xs text-gray-500">
              * Хэрвээ таны төхөөрөмж дээр mail програм тохируулаагүй бол илгээх боломжгүй байж болно.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}