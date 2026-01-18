import type { CSSProperties, UIEvent, WheelEvent } from "react";
import { useState } from "react";
import { ArrowUpRight, Github, Sigma, Box, Code, Lightbulb, Trophy } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import HandGestureControl from "@/components/HandGestureControl";

export default function Engineering() {
  usePageMeta({
    title: "Lana Yepifanova | Engineering Portfolio",
    description:
      "I am an engineer, content creator, and community builder. I enjoy playing piano and watching anime.",
    canonicalPath: "/",
  });

  const corporate = [
    /*
    {
      company: "Macquarie Group",
      role: "Incoming Commodities Trading Intern",
      period: "2026",
      description: "Power and gas desk. Supporting trading and structuring activities, modeling risk scenarios.",
      image: "/images/macquarie1.JPG",
      link: "https://www.macquarie.com"
    },
    */
    {
      company: "Unitbot",
      role: "Property Management Platform",
      period: "2025",
      description:
        "Solo Founder. Automated maintenance requests and rent reminders for NYC landlords. Acquired by early beta user.",
      image: "/images/unitbot-zoomed.png",
      link: null
    },
    {
      company: "JLL",
      role: "Software Engineering Intern",
      period: "2025",
      description: (
        <>
          Developed data ingestion pipelines to aggregate leasing analytics. Proptech research for <a href="https://spark.jllt.com/portfolio/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>JLL Spark</a> venture fund.
        </>
      ),
      image: "/images/jll_cad.png",
      link: "https://www.jll.com"
    },
    {
      company: "Oshman Engineering Design Kitchen",
      role: "PTeam Engineering Design",
      period: "2024",
      description: (
        <>
          Prototyped <a href="https://drive.google.com/file/d/17fsBsH7Nt-mXkGrkUw4udXAdj7qYPc7b/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>physical therapy device</a> for ACL <a href="https://drive.google.com/file/d/1b9m1CscqHZlpnkWmerCBImh4eDdtn26J/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>rehabilitation</a> program, advised by Dr. Andi Gobin.
        </>
      ),
      image: "/images/oedk-assembly.png",
      link: "https://oedk.rice.edu"
    },
    {
      company: "Mixo Ads AI",
      role: "Software Engineering Intern",
      period: "2024",
      description: (
        <>
          Ad automation platform. Worked 1-1 with founder in <a href="https://www.antler.co/residency" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>Antler Residency</a> on full stack dev and sales.
        </>
      ),
      image: "/images/mixoads2.webp",
      link: "https://mixoads.com"
    },
    {
      company: "Rudin",
      role: "Civil Engineering Intern",
      period: "2024",
      description: (
        <>
          Construction projects across $5B+ real estate portfolio. IoT sensors and machine learning at <a href="https://www.nantum.ai" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>Nantum AI</a> capstone project.
        </>
      ),
      image: "/images/rudin-cad-massive.png",
      link: "https://www.rudin.com"
    },
    {
      company: "SL Green Realty Corp.",
      role: "Civil Engineering Intern",
      period: "2023",
      description: (
        <>
          Real estate <a href="https://1madisonnyc.com" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>development projects</a> across $4B+ Manhattan office portfolio. Auto CAD and Bluebeam.
        </>
      ),
      image: "/images/slgreen_cad.png",
      link: "https://www.slgreen.com"
    },
    {
      company: "NYC Dept of Environmental Protection",
      role: "Civil Engineering Intern",
      period: "2022",
      description:
        "Hydraulic modeling and infrastructure mapping of stormwater systems using InfoWorks, maintaining databases.",
      image: "/images/nyc-dep-cad-final.png",
      link: "https://www.nyc.gov/site/dep/water/drinking-water.page"
    },
    {
      company: "NY Conservation League of Voters",
      role: "Software Engineering",
      period: "2022",
      description:
        "Built interactive maps using ArcGIS and Google Earth Engine displaying district-level environmental voting records.",
      image: "/images/nyclv.png.jpeg",
      link: null
    }
  ];

  const roboticsPhotos = [
    { title: "Robotics", image: "/images/robotics1.JPG" },
    { title: "Robotics", image: "/images/plane.JPG" },
    { title: "Robotics", image: "/images/plane2.JPG" },
    { title: "Robotics", image: "/images/plane3.JPG" }
  ];

  const riceEclipseVideo = {
    title: "Rice Eclipse",
    url: "https://www.youtube.com/embed/i4Ec6bv0YlM?modestbranding=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/i4Ec6bv0YlM/hqdefault.jpg"
  };

  const roboticsVideos = [
    "https://www.youtube.com/embed/gG5wDGNnfJo",
    "https://www.youtube.com/embed/9ZQ2MUSyQdg",
    "https://www.youtube.com/embed/9aW_UDvRUWc",
    "https://www.youtube.com/embed/W6Dn8IOq9uU"
  ];

  const [activeLightboxUrl, setActiveLightboxUrl] = useState<string | null>(null);

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
    <div className="page-stagger space-y-20 animate-in fade-in duration-700 pt-8 pb-24 px-4">
      
      <section className="-mt-2">
        <div className="flex items-start justify-between gap-6 mb-6">
          <div className="space-y-1">
            <div className="text-3xl font-sans font-medium text-black tracking-tight">
              BS Electrical and Computer Engineering
            </div>
            <div className="text-lg font-serif text-black">Rice University 2023-2028</div>
          </div>
          <div className="pt-1">
            <HandGestureControl variant="inline" />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6">
          <a
            href="https://github.com/lanayepifanova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
          >
            <Github className="h-4 w-4" />
            github
          </a>
          <span
            className="inline-flex items-center gap-2 text-sm text-gray-400 border-b border-gray-200 pb-0.5 cursor-default"
            aria-disabled="true"
          >
            <Sigma className="h-4 w-4" />
            matlab
          </span>
          <span
            className="inline-flex items-center gap-2 text-sm text-gray-400 border-b border-gray-200 pb-0.5 cursor-default"
            aria-disabled="true"
          >
            <Box className="h-4 w-4" />
            grabcad
          </span>
          <span
            className="inline-flex items-center gap-2 text-sm text-gray-400 border-b border-gray-200 pb-0.5 cursor-default"
            aria-disabled="true"
          >
            <Code className="h-4 w-4" />
            leetcode
          </span>
          <span
            className="inline-flex items-center gap-2 text-sm text-gray-400 border-b border-gray-200 pb-0.5 cursor-default"
            aria-disabled="true"
          >
            <Trophy className="h-4 w-4" />
            codeforces
          </span>
        </div>

        {/* Experience Section */}
        <section className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {corporate.map((job) => {
              const card = (
                <>
                  <div className="aspect-[16/9] overflow-hidden rounded-xl mb-4 bg-gray-100 shadow-sm border border-gray-100 relative">
                    <img
                      src={job.image}
                      alt={job.company}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {job.link && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                        <ArrowUpRight className="h-3 w-3 text-black" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-base font-sans font-semibold text-black group-hover:underline decoration-1 underline-offset-4 transition-all">
                      {job.company}
                    </h3>
                    <span className="font-sans text-sm text-gray-400">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-gray-500 font-sans text-sm leading-relaxed">
                    {job.description}
                  </div>
                </>
              );

              if (job.link) {
                return (
                  <a
                    key={`${job.company}-${job.period}`}
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col cursor-pointer"
                  >
                    {card}
                  </a>
                );
              }

              return (
                <div
                  key={`${job.company}-${job.period}`}
                  className="group flex flex-col"
                >
                  {card}
                </div>
              );
            })}
          </div>
        </section>
      </section>

      {/* Engineering Teams */}
      <section className="space-y-6 pb-20">
        <header className="border-b border-gray-200 pb-3">
          <h2 className="text-2xl font-sans font-medium text-black tracking-tight">Engineering Teams</h2>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <button
            type="button"
            onClick={() => setActiveLightboxUrl(riceEclipseVideo.url)}
            className="group text-left w-full"
          >
            <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden rounded-xl shadow-sm border border-gray-100 relative">
              <img
                src={riceEclipseVideo.thumbnail}
                alt={riceEclipseVideo.title}
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
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-sans font-semibold text-black">
              Rice Eclipse
            </h3>
          </div>
          <p className="text-gray-500 font-sans text-sm leading-relaxed">
            Rocketry team that designs, builds, and launches high-powered rockets for national competitions and research.
            Working across propulsion, avionics, structures, and recovery systems. Learn more at{" "}
            <a
              href="http://eclipse.rice.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800"
            >
              eclipse.rice.edu
            </a>
            .
          </p>
        </div>

        <div className="space-y-6">
          <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-100">
            <img
              src="/images/wind%20energy.jpg"
              alt="Rice Wind Energy"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-sans font-semibold text-black">
              Rice Wind Energy
            </h3>
          </div>
          <p className="text-gray-500 font-sans text-sm leading-relaxed">
            Wind energy team advancing small-scale turbine design through hands-on experimentation.
            Working across aerodynamics, electrical systems and structural design. Learn more at{" "}
            <a
              href="https://ricewindenergy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800"
            >
              ricewindenergy.com
            </a>
            .
          </p>
        </div>
        </div>
      </section>

      {activeLightboxUrl && (
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
                title="Rice Eclipse Video"
                frameBorder="0"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Robotics Media */}
      <section className="space-y-8 pb-20 -mt-8">
        <div className="border-b border-gray-100 pb-2 flex flex-wrap justify-between items-end gap-3">
          <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
            steel hawks 2601
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
        <div className="gallery-track" onWheel={handleGalleryWheel} onScroll={handleGalleryScroll}>
          <div
            className="gallery-marquee reverse"
            style={
              { ["--marquee-duration" as string]: "30s" } as CSSProperties
            }
          >
            {[0, 1].map((duplicate) => (
              <div
                key={`robotics-videos-${duplicate}`}
                className="flex gap-6 pr-6"
                aria-hidden={duplicate === 1}
              >
                {roboticsVideos.map((url, index) => (
                  <div key={`robotics-video-${index}`} className="w-64 sm:w-72 shrink-0">
                    <div className="aspect-video w-full bg-gray-100 overflow-hidden border border-gray-200 rounded-sm relative">
                      <iframe
                        width="100%"
                        height="100%"
                        src={url}
                        title={`Steel Hawks Video ${index + 1}`}
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

        <div className="gallery-track" onWheel={handleGalleryWheel} onScroll={handleGalleryScroll}>
          <div
            className="gallery-marquee"
            style={
              { ["--marquee-duration" as string]: "30s" } as CSSProperties
            }
          >
            {[0, 1].map((duplicate) => (
              <div
                key={`robotics-photos-${duplicate}`}
                className="gallery-row"
                aria-hidden={duplicate === 1}
              >
                {roboticsPhotos.map((item) => (
                  <figure key={`${item.image}-${duplicate}`} className="gallery-item">
                    <div className="gallery-card">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="gallery-image"
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

    </div>
  );
}
