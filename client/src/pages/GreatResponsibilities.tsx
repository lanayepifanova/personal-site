import { usePageMeta } from "@/hooks/usePageMeta";

export default function GreatResponsibilities() {
  usePageMeta({
    title: "Great Responsibilities | Lana Yepifanova",
    canonicalPath: "/essays/great-responsibilities",
  });

  return (
    <div className="animate-in fade-in duration-700 pt-8 pb-32 px-4 max-w-2xl mx-auto">
      <header className="space-y-3 mb-12">
        <h1 className="text-2xl sm:text-3xl font-serif font-medium text-black leading-snug">
          Great Responsibilities
        </h1>
      </header>

      <div className="font-serif text-[15px] leading-relaxed text-gray-800 space-y-6">
        <p>
          I want to become the kind of person who earns the responsibility to solve consequential problems.
        </p>

      </div>
    </div>
  );
}
