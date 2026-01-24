import { useState, type CSSProperties, type UIEvent, type WheelEvent } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, Instagram, Linkedin, Mail, Music, Twitter, Youtube } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Media() {
  const [activeTab, setActiveTab] = useState<"portfolio" | "piano">("portfolio");
  const [activeLightboxUrl, setActiveLightboxUrl] = useState<string | null>(null);

  usePageMeta({
    title: "Lana Yepifanova | Media, Partnerships, and Piano",
    description:
      "Media portfolio for Lana Yepifanova — brand partnerships, YouTube and Instagram highlights, and piano performance videos.",
    canonicalPath: "/media",
  });

  const socials = [
    {
      platform: "Instagram",
      handle: "@lana_yaps",
      link: "https://instagram.com/lana_yaps",
      icon: Instagram
    },
    {
      platform: "YouTube",
      handle: "@lana_yaps",
      link: "https://youtube.com/@lana_yaps",
      icon: Youtube
    },

    {
      platform: "LinkedIn",
      handle: "@lanayepifanova",
      link: "https://www.linkedin.com/in/lana-yepifanova/",
      icon: Linkedin
    },
    {
      platform: "Twitter",
      handle: "@lana_yaps",
      link: "https://x.com/lana_yaps",
      icon: Twitter
    },
    {
      platform: "TikTok",
      handle: "@lana_yaps",
      link: "https://www.tiktok.com/@lana_yaps",
      icon: Music
    }
  ];

  const partnerships = [
    {
      title: "kimi.ai x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/hFdhKgM0giM?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "lilys.ai x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/Hy2PwiCcorg?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "manus.ai x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/yDI3W79e3sQ?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "manus 1.6 x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/wX-L8WQkXoY?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "runable.ai x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/2EGOU1YG4gk?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "readdy.ai x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/Ru0vxQ7Kmhg?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "VTSP x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/HDjuasybi_c?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "hinoter x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/a8ODBCXsSaQ?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "genspark x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/DC4PmnGcf1Y?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "zo computer x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/PWAoOsb6j2A?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "zo computer x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/W5pP0GSnGnY?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "verdent.ai x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/p3WNprXmc74?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "zo computer x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/ApH8CUpF3Vs?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "pippit x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/U2TG45-NfgE?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "zo computer x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/bPftR_iiVx0?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "kalshi x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/FhLcm04UtTM?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "kalshi x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/gM0jUvcudKM?rel=0&modestbranding=1&controls=0&playsinline=1"
    }
  ];

  const pianoShorts = [
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

  const pianoLongFormVideos = [
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
    "https://www.youtube.com/embed/ACmF4cCZjkY",
    "https://www.youtube.com/embed/EKwhxSqqpTE"
  ];

  const audienceStats = [
    { label: "Gender Split", value: "79% Male", subtext: "21% Female" },
    { label: "Primary Geo", value: "75% US", subtext: "High Purchasing Power" },
    { label: "Career Stage", value: "Early", subtext: "Students, Grads, Founders" }
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
      author: "Nicholas Hull",
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
    "Moonshot AI",
    "Readdy AI",
    "Genspark",
    "kalshi",
    "Runable",
    "Lilys AI",
    "Mitra App",
    "StudyX",
    "PrepAI",
    "Cluely",
    "Jobright",
    "Moment App"
  ];

  const pianoGallery = {
    title: "Music",
    duration: "34s",
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

  const getYoutubeId = (url: string) => {
    const match = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
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
    <div className="page-stagger space-y-12 animate-in fade-in duration-700 pt-8 pb-24 px-4">
      <header className="pb-1">
        <div className="flex flex-col md:flex-row md:items-stretch md:flex-nowrap gap-4">
          <div className="flex flex-col gap-9">
            <div
              role="tablist"
              aria-label="Media sections"
              className="relative inline-grid grid-cols-3 border border-gray-200 p-0.5"
            >
              <div
                className="absolute inset-y-0.5 left-0.5 bg-black transition-transform duration-300"
                style={{
                  width: "calc((100% - 4px) / 3)",
                  transform: activeTab === "piano" ? "translateX(100%)" : "translateX(0%)",
                }}
                aria-hidden="true"
              />
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "portfolio"}
                className={`relative z-10 px-4.5 py-2.5 text-sm font-mono uppercase tracking-wider transition-colors ${
                  activeTab === "portfolio" ? "text-white" : "text-gray-500 hover:text-black"
                }`}
                onClick={() => setActiveTab("portfolio")}
              >
                Content Portfolio
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "piano"}
                className={`relative z-10 px-4.5 py-2.5 text-sm font-mono uppercase tracking-wider transition-colors ${
                  activeTab === "piano" ? "text-white" : "text-gray-500 hover:text-black"
                }`}
                onClick={() => setActiveTab("piano")}
              >
                Piano Channel
              </button>
            <button
              type="button"
              role="tab"
              aria-selected={false}
              aria-disabled="true"
              className="group relative z-10 px-4.5 py-2.5 text-sm font-mono uppercase tracking-wider text-gray-300 cursor-default"
              onClick={(event) => event.preventDefault()}
            >
              Design Portfolio
              <span className="pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gray-200 bg-white px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-gray-400 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                coming soon!
              </span>
            </button>
            </div>
            {activeTab === "portfolio" ? (
              <div className="flex flex-wrap gap-4 pl-2">
                {socials.map((social) => (
                  <a 
                    key={social.platform} 
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
                  >
                    <social.icon className="h-4 w-4" />
                    <span>
                      {social.platform === "Twitter"
                        ? "twitter/x"
                        : social.platform.toLowerCase()}
                    </span>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          {activeTab === "portfolio" ? (
            <a
              href="https://instagram.com/lana_yaps"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 p-4 w-full md:w-auto md:ml-auto self-stretch flex flex-col justify-center transition-colors hover:border-black"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                Instagram Audience
              </div>
              <div className="text-2xl font-serif text-black mt-1">20k+</div>
              <div className="text-xs text-gray-500 mt-1">followers</div>
            </a>
          ) : null}
        </div>
      </header>

      {activeTab === "portfolio" ? (
        <>
          {/* Brand Partnerships */}
          <section className="space-y-12 border-b border-gray-100 pb-20 -mt-4">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {partnerships.map((partner, index) => (
                <div key={`${partner.title}-${index}`} className="flex flex-col gap-3 group">
                  <button
                    type="button"
                    onClick={() => setActiveLightboxUrl(partner.videoUrl)}
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
                    {partner.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-12 border-b border-gray-100 pb-20">
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-2">
                <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
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
                <div key={stat.label} className="border border-gray-200 p-5 space-y-2">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  <div className="text-2xl font-serif text-black">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.subtext}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {audienceTags.map((tag) => (
                <span key={tag} className="border border-gray-200 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-12 border-b border-gray-100 pb-20">
            <div className="border-b border-gray-100 pb-2">
              <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
                What Partners Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div key={`${testimonial.author}-${testimonial.role}`} className="border border-gray-200 p-6 space-y-4">
                  <p className="text-sm font-serif text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="text-sm font-serif text-black">{testimonial.author}</div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-12 border-b border-gray-100 pb-20">
            <div className="border-b border-gray-100 pb-2">
              <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
                Trusted Partners
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-sm font-serif text-gray-600">
                  Repeat partnerships signal low execution risk. From early-stage startups to established AI platforms,
                  I deliver technical audiences that convert.
                </p>
                <div className="border border-gray-200 p-5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Featured Partner</div>
                  <div className="text-2xl font-serif text-black mt-2">Manus AI</div>
                  <div className="text-xs text-gray-500 mt-1">3 Successful Campaigns</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs font-mono uppercase tracking-wider text-gray-500">
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
              <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
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
        </>
      ) : (
        <section className="space-y-10 -mt-4">
          {pianoShorts.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">Shorts</h3>
                <a 
                  href="https://www.youtube.com/@LanaYepifanova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
                >
                  <Youtube className="h-4 w-4" />
                  piano youtube channel link
                </a>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {pianoShorts.map((url, index) => (
                  <button
                    key={`short-${index}`}
                    type="button"
                    onClick={() => setActiveLightboxUrl(url)}
                    className="group text-left"
                  >
                    <div className="aspect-[9/16] w-full bg-gray-100 overflow-hidden border border-gray-200 rounded-sm relative">
                      <img
                        src={getYoutubeThumbnail(url)}
                        alt={`Piano Short ${index + 1}`}
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
                ))}
              </div>
            </div>
          )}

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">Long form</h3>
                <a 
                  href="https://www.youtube.com/@LanaYepifanova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
                >
                  <Youtube className="h-4 w-4" />
                  piano youtube channel link
                </a>
              </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {pianoLongFormVideos.map((url, index) => (
                <button
                  key={`long-${index}`}
                  type="button"
                  onClick={() => setActiveLightboxUrl(url)}
                  className="group text-left"
                >
                  <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden rounded-xl shadow-sm border border-gray-100 relative">
                    <img
                      src={getYoutubeThumbnail(url)}
                      alt={`Piano Performance ${index + 1}`}
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
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">Music Gallery</h3>
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
          </div>
        </section>
      )}

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
