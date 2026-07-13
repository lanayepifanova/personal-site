import { useLocation } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getTravelLocationBySlug } from "@/data/travelLocations";

export default function TravelDestination() {
  const [location] = useLocation();
  const citySlug = location.split("/").pop() ?? "";
  const travelLocation = getTravelLocationBySlug(citySlug);
  const title = travelLocation ? `${travelLocation.city}, ${travelLocation.country}` : citySlug;

  usePageMeta({
    title: `${title} | Lana Yepifanova`,
    canonicalPath: location,
  });

  return (
    <div className="animate-in fade-in duration-700 pt-8 pb-32 px-4 max-w-2xl mx-auto">
      <header className="space-y-3 mb-12">
        <h1 className="text-2xl sm:text-3xl font-serif font-medium text-black leading-snug">
          {title}
        </h1>
      </header>

      <div className="font-serif text-[15px] leading-relaxed text-gray-800">
        <p>Coming Soon</p>
      </div>
    </div>
  );
}
