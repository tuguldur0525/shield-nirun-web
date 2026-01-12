import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/content";

export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-3xl border p-8">
        <h1 className="text-3xl font-bold">{service.title}</h1>
        <p className="mt-2 text-lg text-gray-600">{service.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {service.highlights?.map((h) => (
            <span
              key={h}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-10">
        {service.sections?.map((sec) => (
          <section key={sec.heading} className="rounded-3xl border p-8">
            <h2 className="text-xl font-semibold">{sec.heading}</h2>

            {sec.body ? <p className="mt-3 text-gray-700">{sec.body}</p> : null}

            {sec.bullets?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                {sec.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      {service.faq?.length ? (
        <section className="mt-10 rounded-3xl border p-8">
          <h2 className="text-xl font-semibold">Түгээмэл асуулт</h2>

          <div className="mt-5 space-y-4">
            {service.faq.map((f) => (
              <div key={f.q} className="rounded-2xl bg-gray-50 p-4">
                <div className="font-medium">{f.q}</div>
                <div className="mt-1 text-gray-700">{f.a}</div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-10 flex gap-3">
        <a
          href="/contact"
          className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          Үнийн санал авах
        </a>
        <a
          href="/services"
          className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
        >
          Буцах
        </a>
      </div>
    </main>
  );
}