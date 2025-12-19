import { AudienceCharts } from "@/components/AnalyticsCharts";
import { DataCard, Section, SectionHeader, TechBadge } from "@/components/ui/custom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Check, Mail, Download } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation (Minimal) */}
      <nav className="fixed top-0 right-0 p-8 z-40 mix-blend-difference text-white hidden md:block">
        <ul className="flex gap-8 font-mono text-sm">
          <li><a href="#audience" className="hover:underline">Audience</a></li>
          <li><a href="#metrics" className="hover:underline">Metrics</a></li>
          <li><a href="#work" className="hover:underline">Work</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <Section className="min-h-screen relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-primary block"></span>
              <span className="font-mono text-primary font-bold tracking-widest uppercase">@lana_yaps</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              DISTRIBUTION<br />
              CHANNEL FOR<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                BUILDERS.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed border-l-4 border-primary pl-6 mb-8">
              Creator reaching ambitious STEM students, founders, and early-career professionals.
              <br/><span className="text-foreground font-bold mt-2 block">Your shortcut to technical early adopters.</span>
            </p>

            <a 
              href="/media-kit.pdf" 
              download="Lana_Yepifanova_Media_Kit.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors ml-6"
            >
              <Download size={20} />
              Download Media Kit
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative z-10">
              <div className="absolute inset-0 border border-primary translate-x-4 translate-y-4 z-0"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/headshot.jpg`} 
                alt="Lana Yepifanova headshot" 
                className="w-full h-full object-cover transition-all duration-700 z-10 relative block"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Audience Section */}
      <Section id="audience" className="bg-muted/30">
        <SectionHeader 
          title="The Money Slide" 
          subtitle="Audience Snapshot"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <DataCard label="Gender Split" value="79% Male" subtext="21% Female" />
          <DataCard label="Primary Geo" value="75% US" subtext="High Purchasing Power" highlight />
          <DataCard label="Career Stage" value="Early" subtext="Students, Grads, Founders" />
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {["AI Tools", "SaaS", "EdTech", "Productivity", "Fintech", "Dev Tools", "Startups"].map((tag) => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}
        </div>

        <AudienceCharts />
      </Section>

      {/* Metrics Section */}
      <Section id="metrics">
        <SectionHeader 
          title="High Signal. Low Noise." 
          subtitle="Platform Metrics"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-border">
          {/* Instagram */}
          <div className="border-r border-b border-border p-10 hover:bg-muted/20 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-primary"></div>
              <h3 className="font-bold text-2xl">Instagram</h3>
            </div>
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-black mb-1">17.5K</div>
                <div className="font-mono text-sm text-muted-foreground uppercase">Followers</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-1 text-primary">20K+</div>
                <div className="font-mono text-sm text-muted-foreground uppercase">Avg Views / Reel</div>
              </div>
              <div className="text-sm text-muted-foreground border-l-2 border-border pl-3">
                Top Viral: 1.9M, 576K, 316K
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="border-r border-b border-border p-10 hover:bg-muted/20 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-primary"></div>
              <h3 className="font-bold text-2xl">LinkedIn</h3>
            </div>
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-black mb-1">5.5K</div>
                <div className="font-mono text-sm text-muted-foreground uppercase">Followers</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-1 text-primary">50K</div>
                <div className="font-mono text-sm text-muted-foreground uppercase">Avg Impressions</div>
              </div>
              <div className="text-sm text-muted-foreground border-l-2 border-border pl-3">
                High leverage professional reach.
              </div>
            </div>
          </div>

          {/* Discord */}
          <div className="border-r border-b border-border p-10 hover:bg-muted/20 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-primary"></div>
              <h3 className="font-bold text-2xl">Discord</h3>
            </div>
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-black mb-1">150+</div>
                <div className="font-mono text-sm text-muted-foreground uppercase">Vetted Members</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-1 text-primary">100%</div>
                <div className="font-mono text-sm text-muted-foreground uppercase">High Intent</div>
              </div>
              <div className="text-sm text-muted-foreground border-l-2 border-border pl-3">
                Founders, Devs, Builders only.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" className="bg-muted/30">
        <SectionHeader 
          title="What Partners Say" 
          subtitle="Trusted Feedback"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: "Lana is awesome. We've run 3 separate campaigns because the conversion quality is consistently top-tier. She also uses our platform regularly and I appreciated how much she tested it out before making the video.",
              author: "Alice",
              role: "Manus AI",
              highlight: true
            },
            {
              quote: "Lana was really creative with the video ideation, and stuck to our campaign timeline. She got us the video in <24 hours, which most of the creators we work with, aren't able to do.",
              author: "Kathy + Aspen",
              role: "Growth Staff, Moonshot AI / Kimi AI"
            },
            {
              quote: "She is very professional and fast when it comes to the video and campaign timelines. We wanted a very specific type of script and tone for the video, which she was flexible with, as we did many back and forth edits of the video.",
              author: "Cassandra",
              role: "Readdy AI"
            },
            {
              quote: "I reached out to Lana to create a short video about Kalshi and asked if she could create it as soon as possible. She got it done within 6 hours, with great response times. I would 100% encourage you to work with her.",
              author: "Nicholas Hull",
              role: "kalshi"
            },
            {
              quote: "The campaign drove awareness and high-quality leads for our platform. She has a pretty good audience of students and people interested in software and AI tools.",
              author: "Ocean",
              role: "Genspark"
            },
            {
              quote: "Worked with Lana on a longer term campaign for 7 different videos. The Runable team was impressed by the depth of engagement from her community, especially from the Discord server. We had a lot of interest.",
              author: "Eshaan Pawan + Navya Choudhari",
              role: "Runable Team"
            },
            {
              quote: "I worked with Lana for 2 separate videos. She always responded super quick, and I loved Lana's ability to explain complex AI concepts to a broad audience. Highly recommended.",
              author: "Hyunjeong Shin",
              role: "LilysAi"
            },
            {
              quote: "Strategic, professional, and impactful. Our collaboration with Lana exceeded all expectations. We asked for another take and a couple edits, and she redid the whole video for us. Great customer service.",
              author: "VTSP Team",
              role: "Venture & Tech Summer Program"
            }
          ].map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, borderColor: "var(--primary)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="p-8 bg-secondary/30 border border-border/50 transition-colors duration-300"
            >
              <div className="mb-6">
                <div className="text-primary text-4xl font-serif leading-none mb-4">"</div>
                <p className="text-lg md:text-xl font-light leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center font-bold text-muted-foreground">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground font-mono">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Work Section */}
      <Section id="work" className="bg-black text-white">
        <SectionHeader 
          title="Trusted Partners" 
          subtitle="Proof of Conversion"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl font-light leading-relaxed text-gray-300 mb-8">
              Repeat partnerships signal <span className="text-primary font-bold">low execution risk</span>. 
              From early-stage startups to established AI platforms, I deliver technical audiences that convert.
            </p>
            <div className="p-6 border border-gray-800 bg-gray-900/50">
              <div className="text-primary font-mono text-sm mb-2">FEATURED PARTNER</div>
              <div className="text-3xl font-bold mb-1">Manus AI</div>
              <div className="text-gray-400">3 Successful Campaigns</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-lg">
            {[
              "Moonshot AI", "Readdy AI", "Genspark", "kalshi", 
              "Runable", "Lilys AI", "Mitra App", "StudyX", 
              "PrepAI", "Cluely", "Jobright", "Moment App"
            ].map((brand) => (
              <div key={brand} className="flex items-center gap-3 border-b border-gray-800 pb-4">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Packages & Contact */}
      <Section id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeader title="Packages" subtitle="Partnership Options" />
            <div className="space-y-0 border-t border-border">
              {[
                { name: "IG Reel", price: "$450", desc: "Dedicated video content" },
                { name: "IG Reel + Story", price: "$550", desc: "Video + 24h Story Link" },
                { name: "Discord Promo", price: "$75", desc: "Ping to vetted community" },
                { name: "Monthly", price: "Custom", desc: "Long-term strategy" },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-center py-6 border-b border-border group hover:bg-muted/30 px-4 transition-colors">
                  <div>
                    <div className="font-bold text-xl">{item.name}</div>
                    <div className="text-muted-foreground text-sm">{item.desc}</div>
                  </div>
                  <div className="font-mono text-xl font-bold text-primary">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 p-10 border border-border flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-3xl font-black mb-2">Ready to ship?</h3>
              <p className="text-muted-foreground">For product launches & long-term collaborations.</p>
            </div>
            
            <a 
              href="mailto:yepifanova.lana@gmail.com" 
              className="group flex flex-col md:flex-row items-start md:items-center gap-4 text-xl md:text-3xl font-bold hover:text-primary transition-colors break-all"
            >
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-none group-hover:scale-110 transition-transform shrink-0">
                <Mail size={24} />
              </div>
              <span className="break-all">yepifanova.lana@gmail.com</span>
            </a>

            <div className="mt-12 pt-8 border-t border-border flex gap-8 text-sm font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-primary" />
                Response: 24-48h
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight size={16} className="text-primary" />
                @lana_yaps
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <footer className="py-8 text-center text-xs font-mono text-muted-foreground border-t border-border">
        © 2025 @lana_yaps. All rights reserved.
      </footer>
    </div>
  );
}
