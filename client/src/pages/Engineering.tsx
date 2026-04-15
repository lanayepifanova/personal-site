import type { CSSProperties, UIEvent, WheelEvent } from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Github, Box, Code, Linkedin } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Engineering() {
  usePageMeta({
    title: "Lana Yepifanova | Engineering Portfolio",
    description:
      "I am an engineer, content creator, and community builder. In my free time, I enjoy playing piano, reading dystopian novels, and tinkering in makerspaces.",
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
      image: "/images/unitbot_true.png",
      imagePosition: "0% center",
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

  const workshopLinks = [
    {
      title: "CS Girlies Hackathon: How to Sell Your App",
      href: "https://www.csgirlies.com/hackathon-schedule?ref=devpost"
    },
    {
      title: "Harvard Hacker House: How to Get Your Dream Job?",
      href: "https://www.youtube.com/watch?v=_a4pVwbSWVM"
    },
    {
      title: "Humanities Symposium: King Lear and HBO's Succession",
      href: "https://thhsclassic.com/19036/news/ninth-annual-humanities-symposium-features-presenters-audience-members-from-across-queens/"
    }
  ];

  const [activeLightboxUrl, setActiveLightboxUrl] = useState<string | null>(null);
  const [activeJob, setActiveJob] = useState<(typeof corporate)[number] | null>(null);
  const [activeTab, setActiveTab] = useState<"work" | "projects">(() =>
    window.location.hash === "#projects" ? "projects" : "work"
  );

  useEffect(() => {
    window.location.hash = activeTab === "projects" ? "projects" : "";
  }, [activeTab]);

  const writings = [
    // projects go here
  ] as { title: string; date: string; description: string; href?: string }[];

  const essays = [
    { title: "How Voice AI Wearables Will Rewire Hyperconnectivity", date: "04/15/2026", href: "/essays/voice-ai-wearables" },
    { title: "AI Slop and Advertising Structures in a Technopoly", date: "03/15/2026", href: "/essays/ai-slop-advertising" },
  ] as { title: string; date: string; href?: string }[];

  const notes = [
    // { title: "Example Note", date: "2025" }
  ] as { title: string; date: string; href?: string }[];

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
        <header className="pb-1">
          <div className="flex flex-col md:flex-row md:items-stretch md:flex-nowrap gap-4">
            <div className="flex flex-col gap-6">
              <div
                role="tablist"
                aria-label="Engineering sections"
                className="relative grid w-full grid-cols-2 border border-gray-200 p-0.5"
              >
                <div
                  className="absolute inset-y-0.5 left-0.5 bg-black transition-transform duration-300"
                  style={{
                    width: "calc((100% - 4px) / 2)",
                    transform: activeTab === "work" ? "translateX(0%)" : "translateX(100%)",
                  }}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "work"}
                  className={`relative z-10 px-9 py-2.5 text-sm font-mono uppercase tracking-wider transition-colors duration-300 ${activeTab === "work" ? "text-white" : "text-gray-500 hover:text-black"}`}
                  onClick={() => setActiveTab("work")}
                >
                  Work Experience
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "projects"}
                  className={`relative z-10 px-9 py-2.5 text-sm font-mono uppercase tracking-wider transition-colors duration-300 ${activeTab === "projects" ? "text-white" : "text-gray-500 hover:text-black"}`}
                  onClick={() => setActiveTab("projects")}
                >
                  Passion Projects
                </button>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex items-center gap-3 overflow-x-auto py-1 md:overflow-visible md:py-0 md:flex md:flex-wrap md:gap-4">
                    <a
                      href="https://github.com/lanayepifanova"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 whitespace-nowrap text-xs sm:text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <a
                      href="https://grabcad.com/lana.yepifanova-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 whitespace-nowrap text-xs sm:text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
                    >
                      <Box className="h-4 w-4" />
                      GrabCAD
                    </a>
                    <a
                      href="https://devpost.com/yepifanova-lana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 whitespace-nowrap text-xs sm:text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
                    >
                      <Code className="h-4 w-4" />
                      Devpost
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lana-yepifanova/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 whitespace-nowrap text-xs sm:text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                  <div className="md:hidden inline-flex items-center gap-2 whitespace-nowrap border border-gray-200 px-3 py-1.5 text-[11px] font-mono text-gray-500 transition-colors hover:border-black hover:text-black">
                    <span className="text-gray-400">Education</span>
                    <span className="font-sans text-black">Rice University</span>
                    <span className="text-gray-400">2023-2027</span>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://www.rice.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex border border-gray-200 px-4 py-2.5 w-full md:w-auto md:min-w-[240px] md:ml-auto flex-col items-start justify-center gap-0.5 transition-colors hover:border-black"
            >
              <div className="text-[10px] font-mono text-gray-400 whitespace-nowrap">
                Education
              </div>
              <div className="text-2xl font-serif text-black whitespace-nowrap">Rice University</div>
              <div className="text-xs text-gray-500 whitespace-nowrap">2023-2027</div>
            </a>
          </div>
        </header>

        {activeTab === "work" && (
          <section className="space-y-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {corporate.map((job) => (
                <button
                  key={`${job.company}-${job.period}`}
                  type="button"
                  className="group flex flex-col text-left cursor-pointer"
                  onClick={() => setActiveJob(job)}
                >
                  <div className="aspect-[16/9] overflow-hidden rounded-xl mb-4 bg-gray-100 shadow-sm border border-gray-100 relative">
                    <img
                      src={job.image}
                      alt={job.company}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={job.imagePosition ? { objectPosition: job.imagePosition } : undefined}
                    />
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
                </button>
              ))}
            </div>
          </section>
        )}

        {activeTab === "projects" && (
          <section className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left: projects */}
              <div className="space-y-10">
                {writings.length === 0 ? (
                  <div className="w-full overflow-hidden rounded-sm border border-gray-200">
                    <img
                      src="/images/projects-placeholder.jpeg"
                      alt="Projects coming soon"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="space-y-0 divide-y divide-gray-100">
                    {writings.map((item) => (
                      <div key={item.title} className="py-5">
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start justify-between gap-4"
                          >
                            <div className="space-y-1">
                              <div className="text-sm font-sans font-medium text-black group-hover:underline underline-offset-4 decoration-1">
                                {item.title}
                              </div>
                              {item.description && (
                                <div className="text-sm text-gray-500 leading-relaxed">{item.description}</div>
                              )}
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-xs text-gray-400 font-mono">{item.date}</span>
                              <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-black transition-colors" />
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                              <div className="text-sm font-sans font-medium text-black">{item.title}</div>
                              {item.description && (
                                <div className="text-sm text-gray-500 leading-relaxed">{item.description}</div>
                              )}
                            </div>
                            <span className="text-xs text-gray-400 font-mono shrink-0">{item.date}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: essays + notes */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xs font-mono text-gray-400">Essays</h3>
                  {essays.length === 0 ? (
                    <div className="py-4 text-sm text-gray-400 font-mono">
                      Essays coming soon.
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100">
                      {essays.map((essay) => (
                        essay.href ? (
                          <a
                            key={essay.title}
                            href={essay.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-baseline justify-between gap-4 py-2.5 hover:text-black transition-colors"
                          >
                            <span className="text-sm text-black group-hover:underline underline-offset-4 decoration-1">{essay.title}</span>
                            <span className="text-xs text-gray-400 font-mono shrink-0">{essay.date}</span>
                          </a>
                        ) : (
                          <div key={essay.title} className="flex items-baseline justify-between gap-4 py-2.5">
                            <span className="text-sm text-black">{essay.title}</span>
                            <span className="text-xs text-gray-400 font-mono shrink-0">{essay.date}</span>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-mono text-gray-400">Notes</h3>
                  {notes.length === 0 ? (
                    <div className="py-4 text-2xl text-black" style={{ fontFamily: "'Dancing Script', cursive" }}>
                      notes coming soon.
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100">
                      {notes.map((note) => (
                        note.href ? (
                          <a
                            key={note.title}
                            href={note.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-baseline justify-between gap-4 py-2.5 hover:text-black transition-colors"
                          >
                            <span className="text-sm text-black group-hover:underline underline-offset-4 decoration-1">{note.title}</span>
                            <span className="text-xs text-gray-400 font-mono shrink-0">{note.date}</span>
                          </a>
                        ) : (
                          <div key={note.title} className="flex items-baseline justify-between gap-4 py-2.5">
                            <span className="text-sm text-black">{note.title}</span>
                            <span className="text-xs text-gray-400 font-mono shrink-0">{note.date}</span>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </section>

      {activeJob &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            onClick={() => setActiveJob(null)}
            onMouseDown={() => setActiveJob(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-white border border-gray-200 shadow-lg"
              onClick={(event) => event.stopPropagation()}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveJob(null)}
                className="absolute -top-10 right-0 text-white text-sm tracking-widest uppercase"
              >
                close
              </button>
              <div className="p-6 space-y-5">
                <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 border border-gray-100">
                  <img
                    src={activeJob.image}
                    alt={activeJob.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-xl font-sans font-semibold text-black">{activeJob.company}</div>
                  <div className="text-sm font-sans text-gray-400">{activeJob.period}</div>
                </div>
                <div className="text-sm font-sans text-gray-600">{activeJob.role}</div>
                <div className="text-sm font-sans text-gray-500 leading-relaxed">
                  {activeJob.description}
                </div>
                {activeJob.link && (
                  <a
                    href={activeJob.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
                  >
                    Visit site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}

      {activeTab === "work" && <section className="space-y-6 pb-20">
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
      </section>}

      {activeTab === "work" && activeLightboxUrl &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-black/70 grid place-items-center px-4 py-8"
            onClick={() => setActiveLightboxUrl(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-black mx-auto"
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
          </div>,
          document.body
        )}

      {/* Robotics Media */}
      {activeTab === "work" && <section className="space-y-8 pb-20 -mt-8">
        <div className="border-b border-gray-100 pb-2 flex flex-wrap justify-between items-end gap-3">
          <h2 className="text-sm font-sans font-bold text-gray-400">
            Steel Hawks 2601
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400">
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
      </section>}

      {activeTab === "work" && (
        <section className="-mt-12 pb-20">
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-gray-400">Workshops</h3>
            {workshopLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-gray-100 py-2.5 text-black transition-colors last:border-b-0"
              >
                <div className="min-w-0">
                  <div className="text-sm sm:text-[15px] text-black leading-snug">{link.title}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
              </a>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
