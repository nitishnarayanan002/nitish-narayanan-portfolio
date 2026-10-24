import { createFileRoute } from "@tanstack/react-router";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import ClaudeStudio from "@/components/ClaudeStudio";
import AiPortfolio from "@/components/AiPortfolio";
import Capabilities from "@/components/Capabilities";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nitish Narayanan · Solution Engineering Leader" },
      {
        name: "description",
        content:
          "Nitish Narayanan — Solution Engineering Chapter Lead at Infobip. 10+ years across CPaaS, CCaaS and agentic AI, turning communication technology into measurable customer outcomes.",
      },
      { property: "og:title", content: "Nitish Narayanan · Solution Engineering Leader" },
      {
        property: "og:description",
        content:
          "Solution Engineering Chapter Lead at Infobip — CPaaS, CCaaS and agentic AI for enterprise customer engagement across healthcare, retail and automotive.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nitish Narayanan · Solution Engineering Leader" },
      {
        name: "twitter:description",
        content:
          "Solution Engineering Chapter Lead at Infobip — CPaaS, CCaaS and agentic AI for enterprise customer engagement.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <CaseStudies />
      <ClaudeStudio />
      <AiPortfolio />
      <Capabilities />
      <Education />
      <Contact />
    </main>
  );
}
