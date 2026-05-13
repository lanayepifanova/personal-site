import { createPortal } from "react-dom";
import { useEffect, useState, type CSSProperties, type UIEvent, type WheelEvent } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";

const youtubeTitleCache = new Map<string, string>();
const youtubeTitleRequests = new Map<string, Promise<string>>();

function getNormalizedYoutubeWatchUrl(url: string) {
  const embedMatch = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) {
    return `https://www.youtube.com/watch?v=${embedMatch[1]}`;
  }

  const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) {
    return `https://www.youtube.com/watch?v=${shortsMatch[1]}`;
  }

  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/watch?v=${watchMatch[1]}`;
  }

  return url;
}

function getYoutubeTitle(url: string) {
  const normalizedUrl = getNormalizedYoutubeWatchUrl(url);

  if (youtubeTitleCache.has(normalizedUrl)) {
    return Promise.resolve(youtubeTitleCache.get(normalizedUrl) ?? "");
  }

  if (youtubeTitleRequests.has(normalizedUrl)) {
    return youtubeTitleRequests.get(normalizedUrl) ?? Promise.resolve("");
  }

  const request = fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(normalizedUrl)}&format=json`)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Failed to load YouTube title");
      }

      const data = (await response.json()) as { title?: string };
      const title = data.title ?? "";
      youtubeTitleCache.set(normalizedUrl, title);
      youtubeTitleRequests.delete(normalizedUrl);
      return title;
    })
    .catch(() => {
      youtubeTitleRequests.delete(normalizedUrl);
      return "";
    });

  youtubeTitleRequests.set(normalizedUrl, request);
  return request;
}

function formatYouTubeTitle(url: string, title: string) {
  const normalizedUrl = getNormalizedYoutubeWatchUrl(url);
  const cleanedTitle = title
    .replace(/\s*\((?:[^)]*piano cover[^)]*|piano cover \+ sheet music)\)\s*/gi, " ")
    .replace(/#[^\s#]+/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  if (normalizedUrl.includes("v=ij4a8EmkP3Y")) {
    return "Themes from Attack on Titan";
  }

  if (normalizedUrl.includes("v=-62X6l-FxLQ")) {
    return "Themes from Demon Slayer";
  }

  return cleanedTitle;
}

function YouTubeTitle({ url, fallback }: { url: string; fallback?: string }) {
  const normalizedUrl = getNormalizedYoutubeWatchUrl(url);
  const [title, setTitle] = useState(() =>
    formatYouTubeTitle(url, youtubeTitleCache.get(normalizedUrl) ?? fallback ?? "")
  );

  useEffect(() => {
    let isMounted = true;

    getYoutubeTitle(url).then((nextTitle) => {
      if (!isMounted || !nextTitle) {
        return;
      }

      setTitle(formatYouTubeTitle(url, nextTitle));
    });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return (
    <div className="pt-2 whitespace-pre-line text-xs font-sans leading-snug text-black">
      {title || formatYouTubeTitle(url, fallback || "YouTube video")}
    </div>
  );
}

export default function Music() {
  const [activeLightboxUrl, setActiveLightboxUrl] = useState<string | null>(null);

  usePageMeta({
    title: "Lana Yepifanova | Music",
    description:
      "Piano performances, shorts, music gallery, and featured performances by Lana Yepifanova.",
    canonicalPath: "/music",
  });

  const pianoShorts = [
    "https://youtube.com/shorts/CQx9n07sxpc?feature=share",
    "https://youtube.com/shorts/LGTKlTz5OrQ?feature=share",
    "https://youtube.com/shorts/BCr-gcpEWho?feature=share",
    "https://youtube.com/shorts/iYhBcFqq56A?feature=share",
    "https://youtube.com/shorts/ONU2QyAzqBU?feature=share",
    "https://www.youtube.com/embed/MA44NkrRnPU",
    "https://www.youtube.com/embed/HurHh3najDA",
    "https://www.youtube.com/embed/xicvXsp_sZ0",
    "https://www.youtube.com/embed/_XhEL9qbuq0",
    "https://www.youtube.com/embed/rCsVjlikmfM",
    "https://www.youtube.com/embed/NyWwzsOPOJo",
    "https://www.youtube.com/embed/ffKchWe1sQA",
    "https://www.youtube.com/embed/Bf7JPNwWYPI",
    "https://www.youtube.com/embed/yWF8CwPONAo",
    "https://www.youtube.com/embed/de0_bC6mo1M",
    "https://www.youtube.com/embed/fs6kyobuN3I",
    "https://www.youtube.com/embed/dVCA50BT0GQ",
    "https://www.youtube.com/embed/Sl3L3pOPGuA",
    "https://www.youtube.com/embed/wJpgIXSOv50",
    "https://www.youtube.com/embed/qCr6Npf9QAQ",
    "https://www.youtube.com/embed/GdGL5UjnJW0",
    "https://www.youtube.com/embed/_9pwm1eknJY",
    "https://www.youtube.com/embed/STVxGq5cIuE",
    "https://www.youtube.com/embed/cdDqom7byzI",
    "https://www.youtube.com/embed/8t0S56k67NM",
    "https://www.youtube.com/embed/wykxIF0WT_s",
    "https://www.youtube.com/embed/GNG8Zd0ojfQ",
    "https://www.youtube.com/embed/4s--U7h9-Uw",
    "https://www.youtube.com/embed/zHQuJCSPBbA",
    "https://www.youtube.com/embed/pVjROafIKNA",
    "https://www.youtube.com/embed/0pYcg9JRUeo",
    "https://www.youtube.com/embed/C27TsS4IVfc",
    "https://www.youtube.com/embed/5PcDZK9lZ-8",
    "https://www.youtube.com/embed/wNZLNTtB-b4",
    "https://www.youtube.com/embed/bZohw5nHA50",
    "https://www.youtube.com/embed/Ax9ALNVh2_0",
    "https://www.youtube.com/embed/_CS39zBwITM",
    "https://www.youtube.com/embed/HwKqzYltlj0",
    "https://www.youtube.com/embed/OyAzXnlEl6Q",
    "https://www.youtube.com/embed/a8Q47mqxgeM",
    "https://www.youtube.com/embed/JXxHDZZ0ak8"
  ];

  const pianoShortRows = [
    pianoShorts.slice(0, Math.ceil(pianoShorts.length / 2)),
    pianoShorts.slice(Math.ceil(pianoShorts.length / 2)),
  ];

  const pianoLongFormVideos = [
    "https://www.youtube.com/embed/-QUi0LcYvXo",
    "https://www.youtube.com/embed/UU44y5_G6ds",
    "https://www.youtube.com/embed/2FuQFFNT8CY",
    "https://www.youtube.com/embed/svbAyKMe1V4",
    "https://www.youtube.com/embed/a_EnF8O21MM",
    "https://www.youtube.com/embed/WS9GGS7x4KU",
    "https://www.youtube.com/embed/HckykdFiDoc",
    "https://www.youtube.com/embed/PGjPOv8XLU8",
    "https://www.youtube.com/embed/IvDVrmW9zbM",
    "https://www.youtube.com/embed/oINIiGuD-bc",
    "https://www.youtube.com/embed/d24gHZXd1xk",
    "https://www.youtube.com/embed/j640cu_XAOM",
    "https://www.youtube.com/embed/u9M29JFT3eo",
    "https://www.youtube.com/embed/fa5MnbYxudo",
    "https://www.youtube.com/embed/NkjYG9Ynxb4",
    "https://www.youtube.com/embed/dN9tfNfY1nI",
    "https://www.youtube.com/embed/DBjDQb_Dxt4",
    "https://www.youtube.com/embed/zAqA5kXQoWk",
    "https://www.youtube.com/embed/0j8_bvgiJjA",
    "https://www.youtube.com/embed/evRwTdbUobI",
    "https://www.youtube.com/embed/ghJWdeuf3YE",
    "https://www.youtube.com/embed/9fDRZKqb4Uo",
    "https://www.youtube.com/embed/_DiAbZRqQZg",
    "https://www.youtube.com/embed/jxJ8cFxw4qI",
    "https://www.youtube.com/embed/ACmF4cCZjkY"
  ];

  const pianoLongFormRows = [
    pianoLongFormVideos.slice(0, Math.ceil(pianoLongFormVideos.length / 2)),
    pianoLongFormVideos.slice(Math.ceil(pianoLongFormVideos.length / 2)),
  ];

  const pianoGallery = {
    title: "Music",
    duration: "48s",
    items: [
      {
        title: "Chamber Music at Lincoln Center",
        image: "/images/lincolncenter.JPG",
        objectPosition: "50% 70%",
      },
      { title: "Music", image: "/images/music2.JPG" },
      { title: "Music", image: "/images/music3.JPG" },
      { title: "Music", image: "/images/music10.JPG" },
      { title: "Music", image: "/images/music11.JPG" },
      { title: "Music", image: "/images/music12.JPG" },
      { title: "Music", image: "/images/music13.JPG" },
    ],
  };

  const pianoFourhandVideos = [
    {
      title: "Themes from Attack on Titan",
      url: "https://www.youtube.com/watch?v=ij4a8EmkP3Y",
    },
    {
      title: "Piano Duet - Demon Slayer",
      url: "https://www.youtube.com/watch?v=-62X6l-FxLQ",
    },
  ];

  const getYoutubeId = (url: string) => {
    const embedMatch = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
    if (embedMatch) {
      return embedMatch[1];
    }

    const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
    if (shortsMatch) {
      return shortsMatch[1];
    }

    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch) {
      return watchMatch[1];
    }

    return null;
  };

  const getYoutubeEmbedUrl = (url: string) => {
    if (url.includes("/embed/")) {
      return url;
    }

    const id = getYoutubeId(url);
    if (!id) {
      return url;
    }

    return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
  };

  const getYoutubeThumbnail = (url: string) => {
    const id = getYoutubeId(url);
    if (!id) {
      return "";
    }
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  };

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
    <div className="page-stagger space-y-10 animate-in fade-in duration-700 pt-2 sm:pt-4 pb-24 px-4">
      <header className="space-y-5">
        <div className="space-y-2">
          <h1 className="text-3xl font-sans font-semibold tracking-tight text-black">Music</h1>
        </div>
      </header>

      <section className="space-y-4 -mt-4">
        <div className="gallery-track" onWheel={handleGalleryWheel} onScroll={handleGalleryScroll}>
          <div
            className="gallery-marquee"
            style={
              { ["--marquee-duration" as string]: pianoGallery.duration } as CSSProperties
            }
          >
            {[0, 1].map((duplicate) => (
              <div
                key={`piano-gallery-${duplicate}`}
                className="gallery-row"
                aria-hidden={duplicate === 1}
              >
                {pianoGallery.items.map((item) => (
                  <figure key={`${item.image}-${duplicate}`} className="gallery-item">
                    <div className="gallery-card">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="gallery-image"
                        style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                        loading="lazy"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xs font-mono text-gray-400">Piano Channel Youtube Shorts</h3>
        {pianoShortRows.map((row, rowIndex) => (
          <div
            key={`piano-shorts-row-${rowIndex}`}
            className="gallery-track"
            onWheel={handleGalleryWheel}
            onScroll={handleGalleryScroll}
          >
            <div
              className={`gallery-marquee${rowIndex === 1 ? " reverse" : ""}`}
              style={{ ["--marquee-duration" as string]: "48s" } as CSSProperties}
            >
              {[0, 1].map((duplicate) => (
                <div
                  key={`piano-shorts-${rowIndex}-${duplicate}`}
                  className="flex gap-4 pr-4"
                  aria-hidden={duplicate === 1}
                >
                  {row.map((url, index) => (
                    <div
                      key={`short-${rowIndex}-${index}-${duplicate}`}
                      className="w-28 sm:w-32 md:w-36 shrink-0"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveLightboxUrl(getYoutubeEmbedUrl(url))}
                        className="group w-full text-left"
                      >
                        <div className="aspect-[9/16] w-full bg-gray-100 overflow-hidden border border-gray-200 rounded-sm relative">
                          <img
                            src={getYoutubeThumbnail(url)}
                            alt={`Piano Short ${rowIndex * Math.ceil(pianoShorts.length / 2) + index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/35">
                            <div className="h-9 w-9 rounded-full bg-white/90 flex items-center justify-center">
                              <div className="ml-0.5 h-0 w-0 border-y-[5px] border-y-transparent border-l-[9px] border-l-black"></div>
                            </div>
                          </div>
                        </div>
                      </button>
                      <YouTubeTitle url={url} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h3 className="text-xs font-mono text-gray-400">Piano Channel Youtube Videos</h3>
        {pianoLongFormRows.map((row, rowIndex) => (
          <div
            key={`piano-longform-row-${rowIndex}`}
            className="gallery-track"
            onWheel={handleGalleryWheel}
            onScroll={handleGalleryScroll}
          >
            <div
              className={`gallery-marquee${rowIndex === 1 ? " reverse" : ""}`}
              style={{ ["--marquee-duration" as string]: "54s" } as CSSProperties}
            >
              {[0, 1].map((duplicate) => (
                <div
                  key={`piano-longform-${rowIndex}-${duplicate}`}
                  className="flex gap-6 pr-6"
                  aria-hidden={duplicate === 1}
                >
                  {row.map((url, index) => (
                    <div
                      key={`long-${rowIndex}-${index}-${duplicate}`}
                      className="w-60 sm:w-72 md:w-80 shrink-0"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveLightboxUrl(getYoutubeEmbedUrl(url))}
                        className="group w-full text-left"
                      >
                        <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden rounded-xl shadow-sm border border-gray-100 relative">
                          <img
                            src={getYoutubeThumbnail(url)}
                            alt={`Piano Performance ${rowIndex * Math.ceil(pianoLongFormVideos.length / 2) + index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/35">
                            <div className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center">
                              <div className="ml-0.5 h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-black"></div>
                            </div>
                          </div>
                        </div>
                      </button>
                      <YouTubeTitle url={url} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h3 className="text-xs font-mono text-gray-400">Piano Fourhand</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pianoFourhandVideos.map((video) => (
            <div
              key={video.url}
              className="text-left"
            >
              <button
                type="button"
                onClick={() => setActiveLightboxUrl(getYoutubeEmbedUrl(video.url))}
                className="group w-full text-left"
              >
                <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden rounded-xl shadow-sm border border-gray-100 relative">
                  <img
                    src={getYoutubeThumbnail(video.url)}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/35">
                    <div className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center">
                      <div className="ml-0.5 h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-black"></div>
                    </div>
                  </div>
                </div>
              </button>
              <YouTubeTitle url={video.url} fallback={video.title} />
            </div>
          ))}
        </div>
      </section>

      {activeLightboxUrl &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            onClick={() => setActiveLightboxUrl(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-black"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveLightboxUrl(null)}
                className="absolute -top-10 right-0 text-white text-sm tracking-widest uppercase"
              >
                close
              </button>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${activeLightboxUrl}${activeLightboxUrl.includes("?") ? "&" : "?"}autoplay=1`}
                  title="Piano performance"
                  frameBorder="0"
                  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
