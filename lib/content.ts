import services from "@/content/services.json";

export type ServiceSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  subtitle?: string;
  highlights?: string[];
  sections?: ServiceSection[];
  faq?: FAQ[];
};

export function getServices(): Service[] {
  return services as Service[];
}

export function getServiceBySlug(slug: string): Service | undefined {
  return (services as Service[]).find((s) => s.slug === slug);
}