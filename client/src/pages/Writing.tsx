import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import "maplibre-gl/dist/maplibre-gl.css";

type Essay = {
  title: string;
  href?: string;
};

const hasHref = (essay: Essay): essay is Essay & { href: string } =>
  typeof essay.href === "string";

const essays: Essay[] = [
  {
    title: "Voice AI Wearables",
    href: "/essays/voice-ai-wearables",
  },
  {
    title: "AI Slop in a Technopoly",
    href: "/essays/ai-slop-advertising",
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
    title: "Lacrosse Segway Pipelin",
  },
  {
    title: "Having Immigrant Parents",
  },
  {
    title: "High Agency Individuals",
  },
];

const atlasLocations = [
  {
    city: "New York",
    country: "United States",
    lat: 40.7128,
    lon: -74.006,
    offsetX: "4px",
    offsetY: "-5px",
  },
  {
    city: "Boston",
    country: "United States",
    lat: 42.3601,
    lon: -71.0589,
    offsetX: "7px",
    offsetY: "-10px",
  },
  {
    city: "Los Angeles",
    country: "United States",
    lat: 34.0522,
    lon: -118.2437,
    offsetX: "-5px",
    offsetY: "3px",
  },
  {
    city: "San Francisco",
    country: "United States",
    lat: 37.7749,
    lon: -122.4194,
    offsetX: "-8px",
    offsetY: "-4px",
  },
  {
    city: "Houston",
    country: "United States",
    lat: 29.7604,
    lon: -95.3698,
    offsetX: "0px",
    offsetY: "8px",
  },
  {
    city: "Austin",
    country: "United States",
    lat: 30.2672,
    lon: -97.7431,
    offsetX: "-5px",
    offsetY: "-3px",
  },
  {
    city: "Miami",
    country: "United States",
    lat: 25.7617,
    lon: -80.1918,
    offsetX: "4px",
    offsetY: "6px",
  },
  {
    city: "Chicago",
    country: "United States",
    lat: 41.8781,
    lon: -87.6298,
  },
  {
    city: "New Orleans",
    country: "United States",
    lat: 29.9511,
    lon: -90.0715,
    offsetX: "5px",
    offsetY: "2px",
  },
  {
    city: "Atlanta",
    country: "United States",
    lat: 33.749,
    lon: -84.388,
    offsetX: "2px",
    offsetY: "-5px",
  },
  {
    city: "Portland",
    country: "United States",
    lat: 45.5152,
    lon: -122.6784,
    offsetX: "-10px",
    offsetY: "-8px",
  },
  {
    city: "Gifu",
    country: "Japan",
    lat: 35.4233,
    lon: 136.7607,
    offsetX: "-5px",
    offsetY: "4px",
  },
  {
    city: "Novosibirsk",
    country: "Russia",
    lat: 55.0084,
    lon: 82.9357,
  },
  {
    city: "Kyiv",
    country: "Ukraine",
    lat: 50.4501,
    lon: 30.5234,
    offsetX: "7px",
    offsetY: "-4px",
  },
  {
    city: "Reykjavik",
    country: "Iceland",
    lat: 64.1466,
    lon: -21.9426,
  },
  {
    city: "Mexico City",
    country: "Mexico",
    lat: 19.4326,
    lon: -99.1332,
  },
  {
    city: "Athens",
    country: "Greece",
    lat: 37.9838,
    lon: 23.7275,
    offsetX: "6px",
    offsetY: "8px",
  },
  {
    city: "Warsaw",
    country: "Poland",
    lat: 52.2297,
    lon: 21.0122,
    offsetX: "-3px",
    offsetY: "-9px",
  },
  {
    city: "Punta Cana",
    country: "Dominican Republic",
    lat: 18.5601,
    lon: -68.3725,
  },
  {
    city: "Rome",
    country: "Italy",
    lat: 41.9028,
    lon: 12.4964,
    offsetX: "-6px",
    offsetY: "-8px",
  },
  {
    city: "Bari",
    country: "Italy",
    lat: 41.1171,
    lon: 16.8719,
    offsetX: "4px",
    offsetY: "2px",
  },
  {
    city: "Venice",
    country: "Italy",
    lat: 45.4408,
    lon: 12.3155,
    offsetX: "5px",
    offsetY: "-13px",
  },
  {
    city: "Geneva",
    country: "Switzerland",
    lat: 46.2044,
    lon: 6.1432,
    offsetX: "-9px",
    offsetY: "-4px",
  },
];

export default function Writing() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

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
        markerElement.title = `${location.city}, ${location.country}`;
        markerElement.setAttribute("aria-label", `${location.city}, ${location.country}`);
        markerElement.className =
          "group relative block h-7 w-7 border-0 bg-transparent p-0 outline-none";
        markerElement.innerHTML = `
          <span class="absolute left-1/2 top-0 block h-5 w-5 -translate-x-1/2 rounded-full border border-red-900 bg-red-600 shadow-[0_1px_4px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-125"></span>
          <span class="absolute left-1/2 top-3.5 block h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r border-red-900 bg-red-600 transition-transform group-hover:scale-125"></span>
          <span class="absolute left-1/2 top-1.5 block h-2 w-2 -translate-x-1/2 rounded-full bg-white"></span>
        `;

        const popup = new maplibregl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 18,
        }).setHTML(`
          <div style="font-family: Inter, sans-serif; font-size: 12px; line-height: 1.25;">
            <div style="font-family: Space Mono, monospace; font-size: 10px; color: #6b7280; letter-spacing: 0.08em; text-transform: uppercase;">${location.country}</div>
            <div style="font-family: Crimson Pro, serif; font-size: 18px; color: #000;">${location.city}</div>
          </div>
        `);

        const showPopup = () => {
          popup.setLngLat([location.lon, location.lat]).addTo(map);
        };

        markerElement.addEventListener("mouseenter", showPopup);
        markerElement.addEventListener("mouseenter", () => {
          markerElement.style.zIndex = "20";
        });
        markerElement.addEventListener("mouseleave", () => popup.remove());
        markerElement.addEventListener("mouseleave", () => {
          markerElement.style.zIndex = "";
        });
        markerElement.addEventListener("focus", showPopup);
        markerElement.addEventListener("focus", () => {
          markerElement.style.zIndex = "20";
        });
        markerElement.addEventListener("blur", () => popup.remove());
        markerElement.addEventListener("blur", () => {
          markerElement.style.zIndex = "";
        });

        const marker = new maplibregl.Marker({
          element: markerElement,
          anchor: "center",
        })
          .setLngLat([location.lon, location.lat])
          .setPopup(popup)
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
    <div className="page-stagger animate-in fade-in duration-700 px-4 pb-24 pt-8">
      <div className="grid gap-12 md:grid-cols-[minmax(220px,0.55fr)_minmax(0,1.85fr)] md:gap-12">
        <section>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-gray-400">
            Essay Writing
          </h3>
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

        <section>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-gray-400">
            Travel Documentation
          </h3>
          <div
            ref={mapContainerRef}
            className="relative aspect-[16/10] min-h-[420px] overflow-hidden border border-gray-200 bg-gray-50"
          />
        </section>
      </div>
    </div>
  );
}
