import type { CSSProperties } from "react";
import { Instagram, Youtube, Linkedin, FileText } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Media() {
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
      icon: Instagram,
      stats: "15k+ Followers"
    },
    {
      platform: "YouTube",
      handle: "@lana_yaps",
      link: "https://youtube.com/@lana_yaps",
      icon: Youtube,
      stats: "50k+ Views"
    },

    {
      platform: "LinkedIn",
      handle: "@lanayepifanova",
      link: "https://www.linkedin.com/in/lana-yepifanova/",
      icon: Linkedin,
      stats: "Connect"
    }
  ];

  const partnerships = [
    {
      title: "kalshi x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/gM0jUvcudKM?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
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
      title: "VTSP x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/HDjuasybi_c?rel=0&modestbranding=1&controls=0&playsinline=1"
    },
    {
      title: "hinoter x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/a8ODBCXsSaQ?rel=0&modestbranding=1&controls=0&playsinline=1"
    }
  ];

  const pianoVideos = [
    "https://www.youtube.com/embed/jxJ8cFxw4qI", // Chopin Fantasie
    "https://www.youtube.com/embed/_DiAbZRqQZg", // Nino Rota
    "https://www.youtube.com/embed/9fDRZKqb4Uo", // Sarasate
    "https://www.youtube.com/embed/a_EnF8O21MM",
    "https://www.youtube.com/embed/0j8_bvgiJjA",
    "https://www.youtube.com/embed/IvDVrmW9zbM",
    "https://www.youtube.com/embed/PGjPOv8XLU8",
    "https://www.youtube.com/embed/DBjDQb_Dxt4",
    "https://www.youtube.com/embed/u9M29JFT3eo"
  ];

  const danceVideos = [
    "https://www.youtube.com/embed/Qs3Z8Mcl5hM",
    "https://www.youtube.com/embed/BZAXumqsj1k",
    "https://www.youtube.com/embed/TbtVj_JWPRE",
    "https://www.youtube.com/embed/l3sHxv4NzfA"
  ];

  const roboticsVideos = [
    "https://www.youtube.com/embed/gG5wDGNnfJo",
    "https://www.youtube.com/embed/9ZQ2MUSyQdg",
    "https://www.youtube.com/embed/9aW_UDvRUWc",
    "https://www.youtube.com/embed/W6Dn8IOq9uU"
  ];

  return (
    <div className="page-stagger space-y-20 animate-in fade-in duration-700 max-w-4xl mx-auto pt-8 pb-24 px-4">
      
      <header className="border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-sans font-medium text-black tracking-tight">Media</h2>
      </header>

      {/* Social Profiles */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {socials.map((social) => (
          <a 
            key={social.platform} 
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-200 p-6 flex flex-col items-center justify-center gap-3 hover:border-black transition-colors duration-300"
          >
            <social.icon className="h-6 w-6 text-gray-400 group-hover:text-black transition-colors" />
            <div className="text-center">
              <div className="font-serif text-lg text-black group-hover:underline decoration-1 underline-offset-4 mb-1">
                {social.handle}
              </div>
              <div className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">
                {social.platform}
              </div>
            </div>
          </a>
        ))}
      </section>

      {/* Brand Partnerships */}
      <section className="space-y-12 border-b border-gray-100 pb-20">
        <div className="border-b border-gray-100 pb-2 flex justify-between items-end">
          <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
            Selected Partnerships
          </h2>
          <a
            href="/media-kit/"
            className="text-xs font-mono text-gray-400 hover:text-black transition-colors uppercase tracking-wider flex items-center gap-1"
          >
            <FileText className="h-3 w-3" />
            Media kit
          </a>
        </div>
        
        <div className="gallery-track">
          <div
            className="gallery-marquee"
            style={
              { ["--marquee-duration" as string]: "36s" } as CSSProperties
            }
          >
            {[0, 1].map((duplicate) => (
              <div
                key={`partnerships-${duplicate}`}
                className="flex gap-6 pr-6"
                aria-hidden={duplicate === 1}
              >
                {partnerships.map((partner, index) => (
                  <div key={`${partner.title}-${index}`} className="flex flex-col gap-3 w-40 sm:w-44 md:w-48 shrink-0 group">
                    <div className="aspect-[9/16] w-full bg-gray-100 overflow-hidden border border-gray-200 rounded-sm relative">
                      <iframe
                        width="100%"
                        height="100%"
                        src={partner.videoUrl}
                        title={partner.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full transition-all duration-500"
                      ></iframe>
                    </div>
                    <h3 className="text-xs font-serif italic text-black text-center group-hover:underline decoration-1 underline-offset-4">
                      {partner.title}
                    </h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piano Channel */}
      <section className="space-y-12 border-b border-gray-100 pb-20">
        <div className="border-b border-gray-100 pb-2 flex justify-between items-end">
          <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
            Piano
          </h2>
          <a 
            href="https://www.youtube.com/@LanaYepifanova"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-gray-400 hover:text-black transition-colors uppercase tracking-wider flex items-center gap-1"
          >
            <Youtube className="h-3 w-3" />
            @LanaYepifanova
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pianoVideos.map((url, index) => (
            <div key={index} className="aspect-video w-full bg-gray-100 overflow-hidden border border-gray-200 rounded-sm relative">
              <iframe 
                width="100%" 
                height="100%" 
                src={url} 
                title={`Piano Performance ${index + 1}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Dance */}
      <section className="space-y-12 border-b border-gray-100 pb-20">
        <div className="border-b border-gray-100 pb-2 flex flex-wrap justify-between items-end gap-3">
          <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
            Dance
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400 uppercase tracking-wider">
            <a
              href="https://www.instagram.com/basyk.rice/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              @basyk.rice
            </a>
            <span className="text-gray-300">/</span>
            <a
              href="https://www.harvardaadt.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              harvardaadt.org
            </a>
          </div>
        </div>

        <div className="gallery-track">
          <div
            className="gallery-marquee"
            style={
              { ["--marquee-duration" as string]: "28s" } as CSSProperties
            }
          >
            {[0, 1].map((duplicate) => (
              <div
                key={`dance-${duplicate}`}
                className="flex gap-6 pr-6"
                aria-hidden={duplicate === 1}
              >
                {danceVideos.map((url, index) => (
                  <div key={`dance-${index}`} className="w-64 sm:w-72 shrink-0">
                    <div className="aspect-video w-full bg-gray-100 overflow-hidden border border-gray-200 rounded-sm relative">
                      <iframe
                        width="100%"
                        height="100%"
                        src={url}
                        title={`Dance Performance ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST Robotics */}
      <section className="space-y-12 border-b border-gray-100 pb-20">
        <div className="border-b border-gray-100 pb-2 flex flex-wrap justify-between items-end gap-3">
          <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
            FIRST Robotics: Steel Hawks 2601
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400 uppercase tracking-wider">
            <a
              href="https://www.steelhawks.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              steelhawks.net
            </a>
            <span className="text-gray-300">/</span>
            <a
              href="https://www.instagram.com/steelhawks2601/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              @steelhawks2601
            </a>
          </div>
        </div>

        <div className="gallery-track">
          <div
            className="gallery-marquee reverse"
            style={
              { ["--marquee-duration" as string]: "30s" } as CSSProperties
            }
          >
            {[0, 1].map((duplicate) => (
              <div
                key={`robotics-${duplicate}`}
                className="flex gap-6 pr-6"
                aria-hidden={duplicate === 1}
              >
                {roboticsVideos.map((url, index) => (
                  <div key={`robotics-${index}`} className="w-64 sm:w-72 shrink-0">
                    <div className="aspect-video w-full bg-gray-100 overflow-hidden border border-gray-200 rounded-sm relative">
                      <iframe
                        width="100%"
                        height="100%"
                        src={url}
                        title={`FIRST Robotics ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
