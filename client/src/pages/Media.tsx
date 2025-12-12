import { Instagram, Youtube, Linkedin } from "lucide-react";

export default function Media() {
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
      videoUrl: "https://www.youtube.com/embed/gM0jUvcudKM"
    },
    {
      title: "kimi.ai x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/hFdhKgM0giM"
    },
    {
      title: "lilys.ai x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/Hy2PwiCcorg"
    },
    {
      title: "manus.ai x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/yDI3W79e3sQ"
    },
    {
      title: "runable.ai x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/2EGOU1YG4gk"
    },
    {
      title: "VTSP x @lana_yaps",
      videoUrl: "https://www.youtube.com/embed/HDjuasybi_c"
    }
  ];

  const pianoVideos = [
    "https://www.youtube.com/embed/jxJ8cFxw4qI",
    "https://www.youtube.com/embed/_DiAbZRqQZg",
    "https://www.youtube.com/embed/9fDRZKqb4Uo",
    "https://www.youtube.com/embed/ghJWdeuf3YE",
    "https://www.youtube.com/embed/evRwTdbUobI",
    "https://www.youtube.com/embed/0j8_bvgiJjA",
    "https://www.youtube.com/embed/zAqA5kXQoWk",
    "https://www.youtube.com/embed/DBjDQb_Dxt4",
    "https://www.youtube.com/embed/dN9tfNfY1nI",
    "https://www.youtube.com/embed/NkjYG9Ynxb4",
    "https://www.youtube.com/embed/fa5MnbYxudo",
    "https://www.youtube.com/embed/u9M29JFT3eo",
    "https://www.youtube.com/embed/j640cu_XAOM",
    "https://www.youtube.com/embed/d24gHZXd1xk",
    "https://www.youtube.com/embed/oINIiGuD-bc",
    "https://www.youtube.com/embed/IvDVrmW9zbM",
    "https://www.youtube.com/embed/PGjPOv8XLU8",
    "https://www.youtube.com/embed/HckykdFiDoc",
    "https://www.youtube.com/embed/WS9GGS7x4KU",
    "https://www.youtube.com/embed/a_EnF8O21MM"
  ];

  return (
    <div className="space-y-20 animate-in fade-in duration-700 max-w-4xl mx-auto pt-8 pb-24 px-4">
      
      <header className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-serif italic text-black">Media</h1>
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
        <h2 className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 max-w-2xl mx-auto">
          Selected Partnerships
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-6 md:gap-x-6 md:gap-y-8">
          {partnerships.map((partner, index) => (
            <div key={index} className="space-y-3 group">
              <div className="aspect-[9/16] w-full bg-gray-100 overflow-hidden border border-gray-200 rounded-sm relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={partner.videoUrl} 
                  title={partner.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full transition-all duration-500"
                ></iframe>
              </div>
              <h3 className="text-sm font-serif italic text-black text-center group-hover:underline decoration-1 underline-offset-4">
                {partner.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Piano Channel */}
      <section className="space-y-12 border-b border-gray-100 pb-20">
        <div className="border-b border-gray-100 pb-2 max-w-2xl mx-auto flex justify-between items-end">
          <h2 className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">
            Piano
          </h2>
          <a 
            href="https://www.youtube.com/@LanaYepifanova"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-gray-400 hover:text-black transition-colors uppercase tracking-wider flex items-center gap-1"
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

    </div>
  );
}
