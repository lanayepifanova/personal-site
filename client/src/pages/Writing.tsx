import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";

const essays = [
  {
    title: "Voice AI Wearables",
    href: "/essays/voice-ai-wearables",
  },
  {
    title: "AI Slop in a Technopoly",
    href: "/essays/ai-slop-advertising",
  },
];

const personalWriting = [
  "How to be happy (make things)",
  "Finance Bro or Tech Bro?",
  "Mistakes I made with Rice Residency",
  "Minimalism and Hoarding",
  "Why are we firing software engineers?",
  "The concept of coffee chats",
  "Should you pursue civil engineering?",
  "Crawling out of depression",
  "Cities and Ambition",
  "Tech at a FAANG vs a bank",
  "How can you write with a voice?",
  "Having Immigrant Parents",
  "Money laundering schemes",
  "Should you take a gap semester?",
  "Being a Ballet Dancer",
  "How to ask for what you want",
  "Startups vs Corporate",
  "Dealing with people's traumas",
  "Taxes and the Wealth Gap",
  "Lacrosse Segway Pipeline",
  "How to be a good writer",
  "Houston is not a walkable city",
  "Company culture is everything",
  "Should you do investment banking?",
  "Pulling yourself out of boredom",
  "Should you pursue software engineering?",
  "Growing up in the Soviet Union",
  "Comparing yourself to your peers",
];

const travelDocumentation = [
  "New York, New York",
  "Boston, Massachusetts",
  "Los Angeles, California",
  "San Francisco, California",
  "Houston, Texas",
  "Austin, Texas",
  "Miami, Florida",
  "Chicago, Illinois",
  "New Orleans, Louisiana",
  "Atlanta, Georgia",
  "Portland, Oregon",
  "Gifu, Japan",
  "Novosibirsk, Russia",
  "Kyiv, Ukraine",
  "Reykjavik, Iceland",
  "Mexico City, Mexico",
  "Athens, Greece",
  "Warsaw, Poland",
  "Punta Cana, Dominican Republic",
  "Rome, Italy",
  "Bari, Italy",
  "Venice, Italy",
  "Geneva, Switzerland",
];

export default function Writing() {
  usePageMeta({
    title: "Lana Yepifanova | Writing",
    canonicalPath: "/writing",
  });

  return (
    <div className="page-stagger animate-in fade-in duration-700 px-4 pb-24 pt-8">
      <div className="grid gap-12 md:grid-cols-3 md:gap-12">
        <section>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-gray-400">
            Personal Writing
          </h3>
          <div className="space-y-2">
            {personalWriting.map((title) => (
              <div key={title} className="font-serif text-base leading-snug text-black">
                {title}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-gray-400">
            Travel Documentation
          </h3>
          <div className="space-y-2">
            {travelDocumentation.map((title) => (
              <div key={title} className="font-serif text-base leading-snug text-black">
                {title}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-gray-400">
            Essay Writing
          </h3>
          <div className="space-y-2">
            {essays.map((essay) => (
              <article key={essay.href}>
                <Link
                  href={essay.href}
                  className="font-serif text-base leading-snug text-black underline decoration-gray-300 decoration-1 underline-offset-4 hover:decoration-black"
                >
                  {essay.title}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
