import { Heart, ExternalLink, Newspaper, Instagram } from "lucide-react";

export default function Communities() {


  return (
    <div className="space-y-20 animate-in fade-in duration-700 max-w-4xl mx-auto pt-8 pb-24 px-4">
      
      <header className="border-b border-gray-200 pb-4 flex justify-between items-end">
        <h1 className="text-3xl font-sans font-medium text-black tracking-tight">Communities</h1>
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
            A curated community for ambitious builders and creators at Rice University. 
            We host weekly dinners, co-working sessions, and demo days to foster 
            innovation and deep connection among student founders.
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
            A co-living experiment centered on intentionality and shared growth. 
            Home to a diverse group of researchers, artists, and engineers.
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

      {/* The Residency Section */}
      <section className="space-y-8 border-t border-gray-100 pt-12">
        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <h2 className="text-lg font-serif text-black">The Residency</h2>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Member</span>
          </div>
          <p className="text-gray-600 font-serif text-sm leading-relaxed max-w-xl">
            A hacker house and community for young builders, fostering deep work and meaningful connections.
          </p>
          
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
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

      </section>

      {/* The Collective Section */}
      <section className="space-y-8 border-t border-gray-100 pt-12">
        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <h2 className="text-lg font-serif text-black">The Collective</h2>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Member</span>
          </div>
          <p className="text-gray-600 font-serif text-sm leading-relaxed max-w-xl">
            A tight-knit group of friends and creators, sharing ideas, meals, and late-night board game sessions.
          </p>
          
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
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

      </section>



    </div>
  );
}
