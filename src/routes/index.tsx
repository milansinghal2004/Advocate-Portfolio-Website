import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";

import { About } from "@/components/about";
import { PracticeAreas } from "@/components/practice-areas";
import { Timeline } from "@/components/timeline";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adv. Divya Modi | Top Lawyers in Jaipur & Legal Consultant" },
      {
        name: "description",
        content:
          "Adv. Divya Modi is among the best lawyers in Jaipur, offering premium legal consulting. Strategic representation in high court litigation, supreme court matters, arbitration, and corporate advisory.",
      },
      {
        property: "og:title",
        content: "Adv. Divya Modi | Top Lawyers in Jaipur & Legal Consultant",
      },
      {
        property: "og:description",
        content:
          "Strategic legal representation for elite private clients and corporate entities by Adv. Divya Modi, one of the premier lawyers in Jaipur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      {
        name: "keywords",
        content:
          "Divya Modi, Adv. Divya Modi, lawyers in jaipur, legal consultant jaipur, advocate in jaipur, best lawyers in jaipur",
      },
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

      <About />
      <PracticeAreas />
      <Timeline />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  );
}
