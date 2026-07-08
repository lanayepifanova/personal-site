import { type CSSProperties, type UIEvent, type WheelEvent } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";

const reels = [
  {
    id: "DZXbULchiiD",
    url: "https://www.instagram.com/reel/DZXbULchiiD/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    id: "DZC6SRaOH0W",
    url: "https://www.instagram.com/reel/DZC6SRaOH0W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DZhuaYohTYX",
    url: "https://www.instagram.com/reel/DZhuaYohTYX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DZpc0pdhI6-",
    url: "https://www.instagram.com/reel/DZpc0pdhI6-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DZydoCkhFAB",
    url: "https://www.instagram.com/reel/DZydoCkhFAB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DZ45p9tBWSY",
    url: "https://www.instagram.com/reel/DZ45p9tBWSY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DaAoBpth0zw",
    url: "https://www.instagram.com/reel/DaAoBpth0zw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DaIWYh2hM1F",
    url: "https://www.instagram.com/reel/DaIWYh2hM1F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DaQEytkhsxW",
    url: "https://www.instagram.com/reel/DaQEytkhsxW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DaXzNHZh09g",
    url: "https://www.instagram.com/reel/DaXzNHZh09g/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DafhgE1hDsn",
    url: "https://www.instagram.com/reel/DafhgE1hDsn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

export default function Media() {
  usePageMeta({
    title: "Lana Yepifanova | Media",
    canonicalPath: "/media",
  });

  const enableManualGallery = (target: HTMLDivElement) => {
    if (!target.classList.contains("is-manual")) {
      target.classList.add("is-manual");
    }
  };

  const handleGalleryScroll = (event: UIEvent<HTMLDivElement>) => {
    enableManualGallery(event.currentTarget);
  };

  const handleGalleryWheel = (event: WheelEvent<HTMLDivElement>) => {
    const { deltaX, deltaY } = event;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return;
    }

    const target = event.currentTarget;
    enableManualGallery(target);
    const maxScrollLeft = target.scrollWidth - target.clientWidth;
    if (maxScrollLeft <= 0) {
      return;
    }

    const nextScrollLeft = target.scrollLeft + deltaY;
    const clampedScrollLeft = Math.max(0, Math.min(maxScrollLeft, nextScrollLeft));

    if (clampedScrollLeft === target.scrollLeft) {
      return;
    }

    event.preventDefault();
    target.scrollLeft = clampedScrollLeft;
  };

  return (
    <div className="page-stagger px-4 pb-24 pt-2 sm:pt-8">
      <h2 className="mb-8 font-sans text-2xl font-semibold tracking-tight text-black">
        Ultimate Ivy League Guide
      </h2>
      <div className="gallery-track" onWheel={handleGalleryWheel} onScroll={handleGalleryScroll}>
        <div
          className="gallery-marquee"
          style={{ ["--marquee-duration" as string]: "42s" } as CSSProperties}
        >
          {[0, 1].map((duplicate) => (
            <div
              key={`ivy-guide-${duplicate}`}
              className="flex gap-6 pr-6"
              aria-hidden={duplicate === 1}
            >
              {reels.map((reel) => (
                <div
                  key={`${reel.id}-${duplicate}`}
                  className="h-[680px] w-[320px] shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white sm:w-[380px]"
                >
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                    title={`Instagram reel ${reel.id}`}
                    className="h-full w-full border-0 bg-white"
                    allowFullScreen
                    loading="lazy"
                  >
                    <a href={reel.url} target="_blank" rel="noopener noreferrer">
                      View this reel on Instagram
                    </a>
                  </iframe>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <noscript>
        <div className="grid gap-8 md:grid-cols-2">
          {reels.map((reel) => (
          <div
            key={reel.id}
            className="mx-auto h-[760px] w-full max-w-[540px] overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            <iframe
              src={`https://www.instagram.com/reel/${reel.id}/embed/`}
              title={`Instagram reel ${reel.id}`}
              className="h-full w-full border-0 bg-white"
              allowFullScreen
              loading="lazy"
            >
              <a href={reel.url} target="_blank" rel="noopener noreferrer">
                View this reel on Instagram
              </a>
            </iframe>
          </div>
          ))}
        </div>
      </noscript>
      <section className="mt-16">
        <h2 className="mb-8 font-sans text-2xl font-semibold tracking-tight text-black">
          Leading Owls Podcast
        </h2>
        <iframe
          src="https://embed.podcasts.apple.com/us/podcast/leading-owls-podcast/id1775472900"
          title="Leading Owls Podcast"
          className="h-[450px] w-full rounded-xl border border-gray-200 bg-white"
          loading="lazy"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        >
          <a
            href="https://podcasts.apple.com/us/podcast/leading-owls-podcast/id1775472900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Leading Owls Podcast
          </a>
        </iframe>
      </section>
      <div className="mt-16 w-full">
        <h2 className="mb-8 font-sans text-2xl font-semibold tracking-tight text-black">
          Lana Yepifanova (@lana_yaps)
        </h2>
        <iframe
          src="https://www.instagram.com/lana_yaps/embed/"
          title="Lana Yepifanova on Instagram"
          className="h-[760px] w-full rounded-xl border border-gray-200 bg-white"
          allowFullScreen
          loading="lazy"
        >
          <a
            href="https://www.instagram.com/lana_yaps/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            View @lana_yaps on Instagram
          </a>
        </iframe>
      </div>
    </div>
  );
}
