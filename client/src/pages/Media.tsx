import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import instaPreview from "../../../insta.png";
import videosPreview from "../../../videos.png";

export default function Media() {
  const [activeLightboxUrl, setActiveLightboxUrl] = useState<string | null>(null);

  usePageMeta({
    title: "Lana Yepifanova | Media and Partnerships",
    description:
      "Paid partnerships portfolio for Lana Yepifanova — sponsored videos, audience snapshot, and brand collaborations.",
    canonicalPath: "/media",
  });

  const partnerships = [
    {
      title: "chatly",
      videoUrl: "https://www.youtube.com/embed/A0D93I5R_ds?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "verdent",
      videoUrl: "https://www.youtube.com/embed/ut0fX-qcpjo?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "bubble lab",
      videoUrl: "https://www.youtube.com/embed/oD4xNH2MwME?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "kimi.ai",
      videoUrl: "https://www.youtube.com/embed/hFdhKgM0giM?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "lilys.ai",
      videoUrl: "https://www.youtube.com/embed/Hy2PwiCcorg?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "manus.ai",
      videoUrl: "https://www.youtube.com/embed/yDI3W79e3sQ?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "manus 1.6",
      videoUrl: "https://www.youtube.com/embed/wX-L8WQkXoY?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "runable.ai",
      videoUrl: "https://www.youtube.com/embed/2EGOU1YG4gk?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "readdy.ai",
      videoUrl: "https://www.youtube.com/embed/Ru0vxQ7Kmhg?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "VTSP",
      videoUrl: "https://www.youtube.com/embed/HDjuasybi_c?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "hinoter",
      videoUrl: "https://www.youtube.com/embed/a8ODBCXsSaQ?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "genspark",
      videoUrl: "https://www.youtube.com/embed/DC4PmnGcf1Y?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "zo computer",
      videoUrl: "https://www.youtube.com/embed/PWAoOsb6j2A?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "zo computer",
      videoUrl: "https://www.youtube.com/embed/W5pP0GSnGnY?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "verdent.ai",
      videoUrl: "https://www.youtube.com/embed/p3WNprXmc74?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "zo computer",
      videoUrl: "https://www.youtube.com/embed/ApH8CUpF3Vs?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "pippit",
      videoUrl: "https://www.youtube.com/embed/U2TG45-NfgE?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "zo computer",
      videoUrl: "https://www.youtube.com/embed/bPftR_iiVx0?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "zo computer",
      videoUrl: "https://youtube.com/shorts/5ojU_x3-4g8?feature=share"
    },
    {
      title: "lovart",
      videoUrl: "https://youtube.com/shorts/8hpAHUCtQW8?feature=share"
    },
    {
      title: "onepage.ai",
      videoUrl: "https://www.youtube.com/embed/pyj7hNZOGPw?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "vivora.ai",
      videoUrl: "https://www.youtube.com/embed/t3AzvrMm3Ro?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "kalshi",
      videoUrl: "https://www.youtube.com/embed/gM0jUvcudKM?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "kalshi",
      videoUrl: "https://www.youtube.com/embed/7y7AtS7SsYc?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "cursor",
      videoUrl: "https://youtube.com/shorts/a21hI-NmqR0?feature=share"
    },
    {
      title: "cursor",
      videoUrl: "https://youtube.com/shorts/6-8nQqCXGys?feature=share"
    },
    {
      title: "makeugc",
      videoUrl: "https://www.youtube.com/embed/trME4lYjX8k?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "predis.ai",
      videoUrl: "https://youtube.com/shorts/xc7ddIXUDBc?feature=share"
    },
    {
      title: "sticker ai",
      videoUrl: "https://youtube.com/shorts/ZX9VYEaeMYM?feature=share"
    },
    {
      title: "sticker ai",
      videoUrl: "https://youtube.com/shorts/qK9TZUOdUUU?feature=share"
    },
    {
      title: "sticker ai",
      videoUrl: "https://youtube.com/shorts/LoQ72cn7rFg?feature=share"
    },
    {
      title: "makeugc",
      videoUrl: "https://youtube.com/shorts/CXg0Wv5TB5w?feature=share"
    },
    {
      title: "emergent ai",
      videoUrl: "https://youtube.com/shorts/oobvnm27hqE?feature=share"
    },
    {
      title: "design.com",
      videoUrl: "https://youtube.com/shorts/minkayz_Sxw?feature=share"
    },
    {
      title: "printify",
      videoUrl: "https://youtube.com/shorts/MM_6wOqC0do?feature=share"
    },
    {
      title: "virale",
      videoUrl: "https://youtube.com/shorts/eNfedIpdD-k?feature=share"
    },
    {
      title: "immersive ai",
      videoUrl: "https://youtube.com/shorts/XxwBGIbOOVI?feature=share"
    },
    {
      title: "emergent ai",
      videoUrl: "https://youtube.com/shorts/vDxcXCR2Jrk?feature=share"
    },
    {
      title: "genspark",
      videoUrl: "https://youtube.com/shorts/CnLeHk-vOkY?feature=share"
    }
  ];

  const shuffledPartnerships = useMemo(() => {
    const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5);
    const cursorPartnerships = partnerships.filter((partner) => partner.title === "cursor");
    const otherPartnerships = partnerships.filter((partner) => partner.title !== "cursor");

    return [...shuffle(cursorPartnerships), ...shuffle(otherPartnerships)];
  }, []);

  const audienceStats = [
    {
      label: "Gender Split",
      value: "58% Male",
      subtext: "41% Female",
      image: "/images/gender.jpg",
      alt: "Audience gender split chart"
    },
    {
      label: "Primary Geo",
      value: "72% US",
      subtext: "High Purchasing Power",
      image: "/images/country.jpg",
      alt: "Audience country distribution chart"
    },
    {
      label: "Career Stage",
      value: "Early",
      subtext: "Students, Grads, Founders",
      image: "/images/ages.jpg",
      alt: "Audience age distribution chart"
    }
  ];

  const audienceTags = ["AI Tools", "SaaS", "EdTech", "Productivity", "Fintech", "Dev Tools", "Startups"];

  const testimonials = [
    {
      quote:
        "Lana is awesome. We've run 3 separate campaigns because the conversion quality is consistently top-tier. She also uses our platform regularly and I appreciated how much she tested it out before making the video.",
      author: "Alice",
      role: "Manus AI"
    },
    {
      quote:
        "Lana was really creative with the video ideation, and stuck to our campaign timeline. She got us the video in <24 hours, which most of the creators we work with, aren't able to do.",
      author: "Kathy + Aspen",
      role: "Growth Staff, Moonshot AI / Kimi AI"
    },
    {
      quote:
        "She is very professional and fast when it comes to the video and campaign timelines. We wanted a very specific type of script and tone for the video, which she was flexible with, as we did many back and forth edits of the video.",
      author: "Cassandra",
      role: "Readdy AI"
    },
    {
      quote:
        "I reached out to Lana to create a short video about Kalshi and asked if she could create it as soon as possible. She got it done within 6 hours, with great response times. I would 100% encourage you to work with her.",
      author: "Nicholas Hull + Salman Sohani",
      role: "kalshi"
    },
    {
      quote:
        "The campaign drove awareness and high-quality leads for our platform. She has a pretty good audience of students and people interested in software and AI tools.",
      author: "Ocean",
      role: "Genspark"
    },
    {
      quote:
        "Worked with Lana on a longer term campaign for 7 different videos. The Runable team was impressed by the depth of engagement from her community, especially from the Discord server. We had a lot of interest.",
      author: "Eshaan Pawan + Navya Choudhari",
      role: "Runable Team"
    },
    {
      quote:
        "I worked with Lana for 2 separate videos. She always responded super quick, and I loved Lana's ability to explain complex AI concepts to a broad audience. Highly recommended.",
      author: "Hyunjeong Shin",
      role: "LilysAi"
    },
    {
      quote:
        "Strategic, professional, and impactful. Our collaboration with Lana exceeded all expectations. We asked for another take and a couple edits, and she redid the whole video for us. Great customer service.",
      author: "VTSP Team",
      role: "Venture & Tech Summer Program"
    }
  ];

  const trustedPartners = [
    "Cursor",
    "Moonshot AI",
    "Readdy AI",
    "Genspark",
    "Kalshi",
    "Runable",
    "Lilys AI",
    "Mitra App",
    "Zo Computer",
    "Verdent AI",
    "Onepage AI",
    "Pippit AI",
    "Hinoter",
    "Bubble Lab",
    "StudyX",
    "PrepAI",
    "Cluely",
    "Jobright",
    "MakeUGC",
    "Moment App"
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

  return (
    <div className="page-stagger space-y-12 animate-in fade-in duration-700 pt-2 sm:pt-4 pb-24 px-4">
      <header className="space-y-2">
        <h1 className="text-3xl font-sans font-semibold tracking-tight text-black">Media</h1>
      </header>

      <section className="space-y-12 border-b border-gray-100 pb-20">
        <div className="space-y-4">
          <div className="border-b border-gray-100 pb-2">
            <h2 className="text-sm font-sans font-bold text-gray-400">
              Content Creation
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://www.instagram.com/lana_yaps/"
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition-colors hover:border-black hover:bg-white"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
              <img
                src={instaPreview}
                alt="Instagram profile preview"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
                  Instagram Profile
                </div>
                <div className="truncate text-sm font-serif text-black">
                  @lana_yaps
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-black" />
            </div>
          </a>

          <a
            href="https://www.instagram.com/lana_yaps/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition-colors hover:border-black hover:bg-white"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
              <img
                src={videosPreview}
                alt="Instagram reels preview"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
                  Instagram Reels
                </div>
                <div className="truncate text-sm font-serif text-black">
                  @lana_yaps
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-black" />
            </div>
          </a>
        </div>
      </section>

      <section className="space-y-12 border-b border-gray-100 pb-20 -mt-4">
        <div className="space-y-4">
          <div className="border-b border-gray-100 pb-2">
            <h2 className="text-sm font-sans font-bold text-gray-400">
              Paid Partnerships
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-4">
          {shuffledPartnerships.map((partner, index) => (
            <div key={`${partner.title}-${index}`} className="flex flex-col gap-3 group">
              <button
                type="button"
                onClick={() => setActiveLightboxUrl(getYoutubeEmbedUrl(partner.videoUrl))}
                className="text-left"
              >
                <div className="aspect-[9/16] w-full bg-gray-100 overflow-hidden border border-gray-200 rounded-sm relative">
                  <img
                    src={getYoutubeThumbnail(partner.videoUrl)}
                    alt={partner.title}
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
              <h3 className="text-xs font-serif italic text-black text-center group-hover:underline decoration-1 underline-offset-4">
                {partner.title} x @lana_yaps
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-12 border-b border-gray-100 pb-20">
        <div className="space-y-4">
          <div className="border-b border-gray-100 pb-2">
            <h2 className="text-sm font-sans font-bold text-gray-400">
              Audience Snapshot
            </h2>
          </div>
          <p className="text-sm font-serif text-gray-600 max-w-2xl">
            Creator reaching ambitious STEM students, founders, and early-career professionals.
            <span className="block font-medium text-gray-800">Your shortcut to technical early adopters.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audienceStats.map((stat) => (
            <div key={stat.label} className="border border-gray-200 p-5 space-y-4">
              <div className="aspect-[4/3] w-full overflow-hidden border border-gray-100 bg-gray-50">
                <img
                  src={stat.image}
                  alt={stat.alt}
                  className="h-full w-full object-contain p-2"
                  loading="lazy"
                />
              </div>
              <div className="text-xs font-mono text-gray-400">{stat.label}</div>
              <div className="text-2xl font-serif text-black">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.subtext}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {audienceTags.map((tag) => (
            <span key={tag} className="border border-gray-200 px-3 py-1 text-[10px] font-mono text-gray-500">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-12 border-b border-gray-100 pb-20">
        <div className="border-b border-gray-100 pb-2">
          <h2 className="text-sm font-sans font-bold text-gray-400">
            What Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={`${testimonial.author}-${testimonial.role}`} className="border border-gray-200 p-6 space-y-4">
              <p className="text-sm font-serif text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="text-sm font-serif text-black">{testimonial.author}</div>
                <div className="text-[10px] font-mono text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-12 border-b border-gray-100 pb-20">
        <div className="border-b border-gray-100 pb-2">
          <h2 className="text-sm font-sans font-bold text-gray-400">
            Trusted Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p className="text-sm font-serif text-gray-600">
              Repeat partnerships signal low execution risk. From early-stage startups to established AI platforms,
              I deliver technical audiences that convert.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="border border-gray-200 p-4">
                <div className="text-[10px] font-mono text-gray-400">Featured Partner</div>
                <div className="text-xl font-serif text-black mt-2">Manus AI</div>
                <div className="text-[11px] text-gray-500 mt-1">3 Successful Campaigns</div>
              </div>
              <div className="border border-gray-200 p-4">
                <div className="text-[10px] font-mono text-gray-400">Featured Partner</div>
                <div className="text-xl font-serif text-black mt-2">Kalshi</div>
                <div className="text-[11px] text-gray-500 mt-1">11 Successful Campaigns</div>
              </div>
              <div className="border border-gray-200 p-4">
                <div className="text-[10px] font-mono text-gray-400">Featured Partner</div>
                <div className="text-xl font-serif text-black mt-2">Cursor</div>
                <div className="text-[11px] text-gray-500 mt-1">2 Successful Campaigns</div>
              </div>
              <div className="border border-gray-200 p-4">
                <div className="text-[10px] font-mono text-gray-400">Featured Partner</div>
                <div className="text-xl font-serif text-black mt-2">Zo Computer</div>
                <div className="text-[11px] text-gray-500 mt-1">3 Successful Campaigns</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs font-mono text-gray-500">
            {trustedPartners.map((partner) => (
              <div key={partner} className="border-b border-gray-100 pb-2">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="border-b border-gray-100 pb-2">
          <h2 className="text-sm font-sans font-bold text-gray-400">
            Contact
          </h2>
        </div>

        <div className="border border-gray-200 bg-gray-50 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-4">
            <div className="text-2xl font-serif text-black">Ready to ship?</div>
            <div className="text-sm text-gray-500">For product launches and long-term collaborations.</div>
            <a 
              href="mailto:yepifanova.lana@gmail.com"
              className="flex items-center gap-3 text-xs sm:text-sm font-mono text-gray-700 hover:text-black transition-colors"
            >
              <span className="w-10 h-10 bg-white flex items-center justify-center">
                <Mail size={18} />
              </span>
              <span className="whitespace-nowrap">yepifanova.lana@gmail.com</span>
            </a>
          </div>
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
                  title="Partnership video"
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
