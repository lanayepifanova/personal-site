import { usePageMeta } from "@/hooks/usePageMeta";

const reels = [
  {
    id: "DZXbULchiiD",
    url: "https://www.instagram.com/reel/DZXbULchiiD/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    id: "DZC6SRaOH0W",
    url: "https://www.instagram.com/reel/DZC6SRaOH0W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DZhuaYohTYX",
    url: "https://www.instagram.com/reel/DZhuaYohTYX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DZpc0pdhI6-",
    url: "https://www.instagram.com/reel/DZpc0pdhI6-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

export default function Media() {
  usePageMeta({
    title: "Lana Yepifanova | Media",
    canonicalPath: "/media",
  });

  return (
    <div className="page-stagger pb-24 pt-2 sm:pt-8">
      <h2 className="mb-8 font-sans text-2xl font-semibold tracking-tight text-black">
        Ultimate Ivy League Guide
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {reels.map((reel) => (
          <div key={reel.id} className="mx-auto w-full max-w-[540px]">
            <iframe
              src={`https://www.instagram.com/reel/${reel.id}/embed/`}
              title={`Instagram reel ${reel.id}`}
              className="h-[760px] w-full rounded-xl border border-gray-200 bg-white"
              allowFullScreen
              loading="lazy"
            >
              <a href={reel.url} target="_blank" rel="noopener noreferrer">
                View this reel on Instagram
              </a>
            </iframe>
          </div>
        ))}
      </div>
      <section className="mt-16">
        <h2 className="mb-8 font-sans text-2xl font-semibold tracking-tight text-black">
          Leading Owls Podcast
        </h2>
        <iframe
          src="https://embed.podcasts.apple.com/us/podcast/leading-owls-podcast/id1775472900"
          title="Leading Owls Podcast"
          className="h-[450px] w-full rounded-xl border border-gray-200 bg-white"
          loading="lazy"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        >
          <a
            href="https://podcasts.apple.com/us/podcast/leading-owls-podcast/id1775472900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Leading Owls Podcast
          </a>
        </iframe>
      </section>
      <div className="mt-16 w-full">
        <h2 className="mb-8 font-sans text-2xl font-semibold tracking-tight text-black">
          Lana Yepifanova (@lana_yaps)
        </h2>
        <iframe
          src="https://www.instagram.com/lana_yaps/embed/"
          title="Lana Yepifanova on Instagram"
          className="h-[760px] w-full rounded-xl border border-gray-200 bg-white"
          allowFullScreen
          loading="lazy"
        >
          <a
            href="https://www.instagram.com/lana_yaps/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            View @lana_yaps on Instagram
          </a>
        </iframe>
      </div>
    </div>
  );
}
