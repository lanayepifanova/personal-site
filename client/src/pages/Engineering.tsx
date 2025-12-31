import type { KeyboardEvent } from "react";
import { ArrowUpRight, Youtube, Github, Database, Gamepad2, Twitter, Newspaper } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Engineering() {
  usePageMeta({
    title: "Lana Yepifanova | Engineering Portfolio",
    description:
      "I'm a software engineer, content creator, and community builder studying applied mathematics at Rice University. I enjoy playing piano and watching anime.",
    canonicalPath: "/",
  });

  const corporate = [
    {
      company: "Macquarie Group",
      role: "Incoming Commodities Trading Intern",
      period: "2026",
      description: "Power and gas desk. Supporting trading and structuring activities, modeling risk scenarios.",
      image: "/images/macquarie1.JPG",
      link: "https://www.macquarie.com"
    },
    {
      company: "Unitbot",
      role: "Property Management Platform",
      period: "2025",
      description: "Automated maintenance requests and rent reminders for NYC landlords. Acquired by early beta user.",
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
      description: "Hydraulic modeling and infrastructure mapping of stormwater systems.",
      image: "/images/nyc-dep-cad-final.png",
      link: "https://www.nyc.gov/site/dep/water/drinking-water.page"
    }
  ];

  return (
    <div className="page-stagger space-y-20 animate-in fade-in duration-700 max-w-4xl mx-auto pt-8 pb-24 px-4">
      
      {/* Header */}
      <header className="mb-12">
        <h2 className="text-3xl font-sans font-medium text-black tracking-tight">Engineering</h2>
      </header>

      {/* Links */}
      <div className="mb-12 -mt-6 flex flex-wrap gap-6">

        <a 
          href="https://github.com/lanayepifanova" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
        >
          <Github className="h-4 w-4" />
          github
        </a>
        <a 
          href="https://www.kaggle.com/lanayepifanovakaggle" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
        >
          <Database className="h-4 w-4" />
          kaggle
        </a>
        <a 
          href="https://lanayepifanova.itch.io" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
        >
          <Gamepad2 className="h-4 w-4" />
          itch.io
        </a>
        <a 
          href="https://x.com/lana_yaps" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
        >
          <Twitter className="h-4 w-4" />
          twitter
        </a>
        <a 
          href="https://substack.com/@lanayepifanova/posts" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
        >
          <Newspaper className="h-4 w-4" />
          substack
        </a>
      </div>

      {/* Experience Section */}
      <section className="space-y-6">
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

    </div>
  );
}
