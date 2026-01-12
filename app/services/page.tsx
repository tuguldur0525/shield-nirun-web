import Link from "next/link";
import { getServices } from "@/lib/content";

export default function ServicesPage() {
  const services = getServices();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold">Үйлчилгээ</h1>
      <p className="mt-2 text-gray-600">
        Shield Nirun болон Shield Service үйлчилгээний дэлгэрэнгүй мэдээлэл.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="rounded-2xl border p-6 hover:shadow-sm"
          >
            <div className="text-xl font-semibold">{s.title}</div>
            <div className="mt-2 text-gray-600">{s.subtitle}</div>

            <div className="mt-4 flex flex-wrap gap-2">
              {s.highlights?.map((h) => (
                <span
                  key={h}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="mt-6 text-sm font-medium">
              Дэлгэрэнгүй →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}