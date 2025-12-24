import type { CSSProperties } from "react";
import { Heart, ExternalLink, Newspaper, Instagram } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Communities() {
  usePageMeta({
    title: "Lana Yepifanova | Communities at Rice University",
    description:
      "Clubs and communities Lana Yepifanova is part of at Rice University: Rice Residency founder, Harvard St Commons, The Residency, The Collective, plus campus life highlights across athletics, arts, and service.",
    canonicalPath: "/communities",
  });
  const campusGalleries = [
    {
      title: "Sports",
      duration: "26s",
      items: [
        {
          title: "Co-Ed Varsity Wrestling",
          image: "/images/wrestling.jpg",
          objectPosition: "50% 55%",
        },
        { title: "Rice Club Sailing Team", image: "/images/sailing.png" },
        { title: "Basketball", image: "/images/basketball.JPG" },
        { title: "Swimming", image: "/images/swimming.JPG" },
      ],
    },
    {
      title: "Robotics",
      duration: "30s",
      items: [
        { title: "Robotics", image: "/images/robotics1.JPG" },
        { title: "Robotics", image: "/images/plane.JPG" },
        { title: "Robotics", image: "/images/plane2.JPG" },
        { title: "Robotics", image: "/images/plane3.JPG" },
      ],
    },
    {
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
    },
    {
      title: "Dance",
      duration: "28s",
      items: [
        { title: "Basyk Dance Team", image: "/images/basyk.JPG" },
        { title: "Festival of Nations", image: "/images/festivalofnations.JPG" },
        { title: "Dance", image: "/images/harvard1.JPG" },
        { title: "Dance", image: "/images/harvard2.JPG" },
      ],
    },
    {
      title: "Volunteer",
      duration: "32s",
      items: [
        { title: "Alternative Spring Break", image: "/images/alternativespringbreak.JPG" },
        { title: "Volunteer", image: "/images/volunteer1.JPG" },
        { title: "Volunteer", image: "/images/volunteer2.JPG" },
        { title: "Volunteer", image: "/images/volunteer3.JPG" },
        { title: "Volunteer", image: "/images/volunteer4.JPG" },
      ],
    },
  ];

  return (
    <div className="page-stagger space-y-20 animate-in fade-in duration-700 max-w-4xl mx-auto pt-8 pb-24 px-4">
      
      <header className="border-b border-gray-200 pb-4 flex justify-between items-end">
        <h2 className="text-3xl font-sans font-medium text-black tracking-tight">Communities</h2>
        <Heart className="h-4 w-4 text-gray-300 animate-pulse" />
      </header>

      {/* Rice Residency Section */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-baseline">
            <h2 className="text-lg font-serif text-black">Rice Residency</h2>
            <span className="font-mono text-[10px] text-gray-500 border border-gray-300 px-1.5 py-0.5 rounded uppercase tracking-wider">Founder</span>
          </div>
          <p className="text-gray-600 font-serif text-sm leading-relaxed max-w-xl">
            I started a hacker house at Rice University. We host weekly dinners, co-working sessions, and socials to foster innovation and community among student founders, builders, and creators. This is my passion project. I love everyone in this house dearly.
          </p>
          
          <div className="flex gap-4 text-xs font-sans">
            <a 
              href="https://riceresidency.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
            >
              <ExternalLink className="h-3 w-3" />
              Visit RiceResidency.com
            </a>
            <a 
              href="https://www.ricethresher.org/article/rice-residency-hacker-house-opens-application-for-first-cohort-20251119" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
            >
              <Newspaper className="h-3 w-3" />
              Featured in The Thresher
            </a>
          </div>
        </div>

        <div className="aspect-video w-full bg-gray-100 overflow-hidden border border-gray-200 rounded-sm relative">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/U-tJ9IUpr9A" 
            title="Rice Residency"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        

      </section>

      {/* Harvard St Commons Section */}
      <section className="space-y-8 border-t border-gray-100 pt-12">
        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <h2 className="text-lg font-serif text-black">Harvard St Commons</h2>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Member</span>
          </div>
          <p className="text-gray-600 font-serif text-sm leading-relaxed max-w-xl">
            I took a gap semester from Rice University to live at the hacker house for Harvard and MIT. This experience changed my life. I consider this place my second home.
          </p>
          
          <div className="flex gap-4 text-xs font-sans">
            <a 
              href="https://harvardst.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
            >
              <ExternalLink className="h-3 w-3" />
              Visit HarvardSt.co
            </a>
            <a 
              href="https://www.instagram.com/harvardstcommons/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
            >
              <Instagram className="h-3 w-3" />
              See Cohort Pictures
            </a>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-sm border border-gray-200">
          <img 
            src="/images/harvard-st-commons.jpeg" 
            alt="Harvard St Commons Community"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

      </section>

      {/* The Residency + The Collective Section */}
      <section className="space-y-8 border-t border-gray-100 pt-12">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h2 className="text-lg font-serif text-black">The Residency</h2>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Member</span>
              </div>

              <div className="flex gap-4 text-xs font-sans">
                <a 
                  href="https://www.livetheresidency.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
                >
                  <ExternalLink className="h-3 w-3" />
                  Visit The Residency
                </a>
                <a 
                  href="https://homebrew.nyc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
                >
                  <ExternalLink className="h-3 w-3" />
                  Homebrew Homies
                </a>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-sm border border-gray-200">
              <img 
                src="/images/the-residency.jpeg" 
                alt="The Residency Community"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h2 className="text-lg font-serif text-black">The Collective</h2>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Member</span>
              </div>

              <div className="flex gap-4 text-xs font-sans">
                <a 
                  href="https://www.thecollectiveny.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
                >
                  <ExternalLink className="h-3 w-3" />
                  Visit The Collective
                </a>
                <a 
                  href="https://www.linkedin.com/company/thecollectiveny/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
                >
                  <ExternalLink className="h-3 w-3" />
                  See Us Here
                </a>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-sm border border-gray-200">
              <img 
                src="/images/the-collective.jpeg" 
                alt="The Collective Community"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </section>

      {/* The 21st Section */}
      <section className="space-y-8 border-t border-gray-100 pt-12">
        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <h2 className="text-lg font-serif text-black">The 21st</h2>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Member</span>
          </div>
          <p className="text-gray-600 font-serif text-sm leading-relaxed max-w-xl">
            Selected group of founders, builders, and creators from 65+ schools, partnered with a16z and Anthropic.
          </p>

          <div className="flex gap-4 text-xs font-sans">
            <a 
              href="https://21st.social" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
            >
              <ExternalLink className="h-3 w-3" />
              Visit 21st.social
            </a>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-sm border border-gray-200">
          <img
            src="/images/sf.jpg"
            alt="The 21st community"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="space-y-8 border-t border-gray-100 pt-12">
        <div className="space-y-2"></div>

        <div className="space-y-10">
          {campusGalleries.map((gallery, index) => {
            const marqueeStyle = {
              ["--marquee-duration" as string]: gallery.duration ?? "32s",
            } as CSSProperties;
            const marqueeClass = index % 2 === 0 ? "gallery-marquee" : "gallery-marquee reverse";

            return (
              <div key={gallery.title} className="space-y-4">
                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider">{gallery.title}</h3>
                <div className="gallery-track">
                  <div className={marqueeClass} style={marqueeStyle}>
                    {[0, 1].map((duplicate) => (
                      <div
                        key={`${gallery.title}-${duplicate}`}
                        className="gallery-row"
                        aria-hidden={duplicate === 1}
                      >
                        {gallery.items.map((item) => (
                          <figure key={`${gallery.title}-${item.title}-${duplicate}`} className="gallery-item">
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
            );
          })}
        </div>

      </section>


    </div>
  );
}
