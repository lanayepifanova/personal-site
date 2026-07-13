import { useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { atlasLocations, slugifyTravelCity } from "@/data/travelLocations";
import "maplibre-gl/dist/maplibre-gl.css";

type Essay = {
  title: string;
  href?: string;
};

const hasHref = (essay: Essay): essay is Essay & { href: string } =>
  typeof essay.href === "string";

const essays: Essay[] = [
  {
    title: "Great Responsibilities",
    href: "/essays/great-responsibilities",
  },
  {
    title: "Age of Enlightenment",
  },
  {
    title: "Iron Law of Oligarchy",
  },
  {
    title: "Keynesian Economics",
  },
  {
    title: "The US Tax System",
  },
  {
    title: "Free Market Capitalism",
  },
  {
    title: "Welfare Programs",
  },
  {
    title: "Lacrosse Segway Pipeline",
  },
  {
    title: "Having Immigrant Parents",
  },
  {
    title: "High Agency Individuals",
  },
];

export default function Writing() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [, setLocation] = useLocation();

  usePageMeta({
    title: "Lana Yepifanova | Writing",
    canonicalPath: "/writing",
  });

  useEffect(() => {
    if (!mapContainerRef.current) return;

    let isMounted = true;
    let cleanup = () => {};

    import("maplibre-gl").then(({ default: maplibregl }) => {
      if (!isMounted || !mapContainerRef.current) return;

      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: "https://demotiles.maplibre.org/style.json",
        center: [12, 28],
        zoom: 0.75,
        attributionControl: false,
        scrollZoom: false,
      });

      map.dragRotate.disable();
      map.touchZoomRotate.disableRotation();
      map.doubleClickZoom.enable();
      map.boxZoom.enable();
      map.addControl(
        new maplibregl.NavigationControl({
          showCompass: false,
          showZoom: true,
          visualizePitch: false,
        }),
        "top-right",
      );
      map.addControl(
        new maplibregl.AttributionControl({
          compact: true,
          customAttribution: "MapLibre / OpenStreetMap",
        }),
        "bottom-right",
      );

      const bounds = new maplibregl.LngLatBounds();
      const markers = atlasLocations.map((location) => {
        const markerElement = document.createElement("button");
        markerElement.type = "button";
        markerElement.setAttribute("aria-label", `${location.city}, ${location.country}`);
        markerElement.className =
          "group relative block h-7 w-7 cursor-pointer border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
        markerElement.innerHTML = `
          <span class="absolute left-1/2 top-0 block h-5 w-5 -translate-x-1/2 rounded-full border border-red-900 bg-red-600 shadow-[0_1px_4px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(220,38,38,0.14),0_8px_18px_rgba(0,0,0,0.28)] group-hover:bg-red-500 group-focus-visible:scale-110 group-focus-visible:shadow-[0_0_0_6px_rgba(220,38,38,0.14),0_8px_18px_rgba(0,0,0,0.28)] group-focus-visible:bg-red-500"></span>
          <span class="absolute left-1/2 top-3.5 block h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r border-red-900 bg-red-600 transition-all duration-200 ease-out group-hover:scale-110 group-hover:bg-red-500 group-focus-visible:scale-110 group-focus-visible:bg-red-500"></span>
          <span class="absolute left-1/2 top-1.5 block h-2 w-2 -translate-x-1/2 rounded-full bg-white transition-all duration-200 ease-out group-hover:scale-125 group-focus-visible:scale-125"></span>
        `;
        const citySlug = slugifyTravelCity(location.city);
        markerElement.addEventListener("click", () => {
          setLocation(`/writing/travel/${citySlug}`);
        });

        const marker = new maplibregl.Marker({
          element: markerElement,
          anchor: "center",
        })
          .setLngLat([location.lon, location.lat])
          .addTo(map);

        bounds.extend([location.lon, location.lat]);
        return marker;
      });

      map.on("load", () => {
        map.fitBounds(bounds, {
          padding: 38,
          duration: 0,
          maxZoom: 1.35,
        });
      });

      cleanup = () => {
        markers.forEach((marker) => marker.remove());
        map.remove();
      };
    });

    return () => {
      isMounted = false;
      cleanup();
    };
  }, []);

  return (
    <div className="page-stagger animate-in fade-in duration-700 px-4 pb-32 pt-8 sm:pb-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(230px,0.46fr)_minmax(0,1.14fr)] lg:gap-10 lg:items-start">
        <section className="space-y-6 lg:max-w-md lg:justify-self-start min-w-0">
          <div className="space-y-1">
            <div className="flex justify-between items-end">
              <h2 className="text-2xl sm:text-3xl font-sans font-medium text-black tracking-tight">
                My Notebook
              </h2>
            </div>
            <div className="flex justify-between items-baseline">
              <div className="text-base sm:text-lg font-serif text-black">Amateur Writer</div>
            </div>
          </div>

          <p className="text-gray-600 font-serif text-sm leading-relaxed max-w-[16rem]">
            This is a digital garden of unfinished thoughts and unpolished collections. I am not a good writer, in order to improve, I have to try.
          </p>

          <div className="space-y-2">
            {essays.map((essay) => (
              <article key={essay.title}>
                {hasHref(essay) ? (
                  <Link
                    href={essay.href}
                    className="font-serif text-base leading-snug text-black underline decoration-gray-300 decoration-1 underline-offset-4 hover:decoration-black"
                  >
                    {essay.title}
                  </Link>
                ) : (
                  <div className="font-serif text-base leading-snug text-black">
                    {essay.title}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 min-w-0 lg:ml-auto lg:w-full lg:max-w-[760px]">
          <div className="space-y-1">
            <div className="flex justify-between items-end">
              <h2 className="text-2xl sm:text-3xl font-sans font-medium text-black tracking-tight">
                Travel Documentation
              </h2>
            </div>
            <div className="flex justify-between items-baseline">
              <div className="text-base sm:text-lg font-serif text-black">Solo Traveling Adventures</div>
            </div>
          </div>

          <p className="text-gray-600 font-serif text-sm leading-relaxed max-w-2xl">
            This map tracks the places I&apos;ve lived in, studied in, and passed through, turning travel into a visual record of where different parts of my life have happened. Each pin marks a city that shaped my perspective in some way, whether through school, work, family, or time spent exploring. Hover over the pins and click them to see my thoughts.
          </p>

          <div
            ref={mapContainerRef}
            className="relative aspect-[16/10] min-h-[300px] w-full min-w-0 overflow-hidden border border-gray-200 bg-gray-50 sm:min-h-[360px] lg:min-h-0"
          />
        </section>
      </div>
    </div>
  );
}
