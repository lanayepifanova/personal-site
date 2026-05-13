import { usePageMeta } from "@/hooks/usePageMeta";

export default function Writing() {
  usePageMeta({
    title: "Lana Yepifanova | Writing",
    description:
      "Essays, notes, and ongoing writing by Lana Yepifanova on technology, media, and culture.",
    canonicalPath: "/writing",
  });

  const essays = [
    { title: "How Voice AI Wearables Will Rewire Hyperconnectivity", date: "04/15/2026", href: "/essays/voice-ai-wearables" },
    { title: "AI Slop and Advertising Structures in a Technopoly", date: "03/15/2026", href: "/essays/ai-slop-advertising" },
  ] as { title: string; date: string; href?: string }[];

  const notes = [] as { title: string; date: string; href?: string }[];

  return (
    <div className="page-stagger space-y-12 animate-in fade-in duration-700 pt-8 pb-24 px-4">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-gray-400">Notes</h3>
              {notes.length === 0 ? (
                <div className="py-4 text-2xl text-black" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  notes coming soon.
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {notes.map((note) => (
                    note.href ? (
                      <a
                        key={note.title}
                        href={note.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-baseline justify-between gap-4 py-2.5 hover:text-black transition-colors"
                      >
                        <span className="text-sm text-black group-hover:underline underline-offset-4 decoration-1">{note.title}</span>
                        <span className="text-xs text-gray-400 font-mono shrink-0">{note.date}</span>
                      </a>
                    ) : (
                      <div key={note.title} className="flex items-baseline justify-between gap-4 py-2.5">
                        <span className="text-sm text-black">{note.title}</span>
                        <span className="text-xs text-gray-400 font-mono shrink-0">{note.date}</span>
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-gray-400">Essays</h3>
              {essays.length === 0 ? (
                <div className="py-4 text-sm text-gray-400 font-mono">
                  Essays coming soon.
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {essays.map((essay) => (
                    essay.href ? (
                      <a
                        key={essay.title}
                        href={essay.href}
                        className="group flex items-baseline justify-between gap-3 py-2.5 hover:text-black transition-colors"
                      >
                        <span className="flex-1 min-w-0 text-sm text-black group-hover:underline underline-offset-4 decoration-1">{essay.title}</span>
                        <span className="text-xs text-gray-400 font-mono shrink-0">{essay.date}</span>
                      </a>
                    ) : (
                      <div key={essay.title} className="flex items-baseline justify-between gap-3 py-2.5">
                        <span className="flex-1 min-w-0 text-sm text-black">{essay.title}</span>
                        <span className="text-xs text-gray-400 font-mono shrink-0">{essay.date}</span>
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
