import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { MetricsBar } from "@/components/metrics-bar";
import { About } from "@/components/about";
import { PracticeAreas } from "@/components/practice-areas";
import { Timeline } from "@/components/timeline";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adv. Divya Modi — Advocate & Legal Consultant" },
      {
        name: "description",
        content:
          "Adv. Divya Modi is a premium advocate and legal consultant. Strategic representation in high court litigation, supreme court matters, arbitration, and corporate advisory.",
      },
      { property: "og:title", content: "Adv. Divya Modi — Advocate & Legal Consultant" },
      {
        property: "og:description",
        content:
          "Strategic legal representation for elite private clients and corporate entities by Adv. Divya Modi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <SiteNav />
      <Hero />
      <MetricsBar />
      <About />
      <PracticeAreas />
      <Timeline />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  );
}
