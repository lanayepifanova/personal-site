import { usePageMeta } from "@/hooks/usePageMeta";

export default function AISlopAdvertising() {
  usePageMeta({
    title: "AI Slop and Advertising Structures in a Technopoly | Lana Yepifanova",
    description:
      "AI slop is not a temporary trend. It is the logical outcome of technopoly and advertising-driven media systems. As production of media becomes infinitely scalable, communication shifts from producing meaning to optimizing for attention.",
    canonicalPath: "/essays/ai-slop-advertising",
  });

  return (
    <div className="animate-in fade-in duration-700 pt-8 pb-32 px-4 max-w-2xl mx-auto">
      <header className="space-y-3 mb-12">
        <div className="text-xs font-mono uppercase tracking-wider text-gray-400">Essay</div>
        <h1 className="text-2xl sm:text-3xl font-serif font-medium text-black leading-snug">
          AI Slop and Advertising Structures in a Technopoly
        </h1>
        <div className="text-xs font-mono text-gray-400">03/15/2026</div>
      </header>

      <div className="font-serif text-[15px] leading-relaxed text-gray-800 space-y-6">
        <p>
          With the public release of text-to-video models in 2023, and high-fidelity, photorealistic models in 2024 and 2025, the internet has been increasingly flooded with AI-generated media, also known as "AI slop". As of 2026, AI slop increasingly dominates social media. Roughly 71% of social media images are now AI-generated (Forbes), and over 80% of creators now use AI in some part of their workflow (Wondercraft). More than 50% of new technical articles and personal blogs, which used to be the go-to source of information in the early internet era, are completely automated and run through a formulaic AI workflow process that is SEO-optimized (Graphite).
        </p>

        <p>
          This is not a temporary glitch. AI Slop is not an accidental byproduct of new exciting tools, or simply a hyped up trend, but rather the logical and predictable outcome of two structural forces: technopoly and advertising-driven media systems. As production of media becomes infinitely scalable, communication shifts from producing meaning to optimizing for attention. Online spaces meant for sharing ideas, information, and stories are now turned into junkyards full of straight "noise" that is rigorously A/B tested for monetization.
        </p>

        <p>
          Technopoly describes a society in which technology becomes the dominant source of authority, taking priority over human judgement, cultural values, and traditions (Postman). This is seen as institutions, education systems, and social structures are reorganized on efficiency, data, and measurable outputs. Everything starts to have a benchmark, a statistical metric, and a quantitative framework. Technology no longer solves human problems; it defines what problems are worth solving. These systems are no longer tools built to serve people, but rather the basis on which decisions are made and justified.
        </p>

        <p>
          A central feature of technopoly is that innovation is inherently beneficial and should be pursued simply because it is possible. There are no questions on whether a technology should exist or what consequences it produces. Rather, discussion is on implementation, optimization, and scaling. In the case of AI generated media, the question "Should we produce infinite content?" is never asked. The AI systems are justified because they can increase engagement, scale content production, and maximize profits and efficiency, even if it takes humans completely out of the equation. The technopoly logic is that if a technology exists that allows infinite production of content, the system will inevitably deploy it.
        </p>

        <p>
          Historically, symbolic production was limited. Writing required skill, photography required equipment, and film required production teams. Previously, a small number of institutions controlled all publishing infrastructure, and therefore acted as gatekeepers that filtered what content reached audiences. With the introduction of the internet, these constraints and scarcities were completely eliminated (Shirky). Digital communication drastically reduced the cost of producing and distributing information. Now instead of editors and institutions filtering content before publication, filtering now occurs after publication through algorithms, recommendation systems, and social sharing. The result was a dramatic expansion of content produced at scales that were previously impossible. And now, this dynamic is becoming more pronounced with the development of large language models and generative AI systems.
        </p>

        <p>
          Research on machine learning scaling laws, particularly the paper <em>Scaling Laws for Neural Language Models</em> by Jared Kaplan and colleagues at OpenAI (2020), demonstrates that model performance improves in three ways: model size, dataset size, and computational power. This means that by making models larger and training them on larger datasets, this will reliably improve performance without requiring fundamentally new architectures. The training and AI development process requires an enormous amount of text, images and video and depends on accumulation and consumption of digital media. At the same time, generative models can now produce new content at virtually zero marginal cost, creating a feedback loop in which large datasets enable more powerful models, and those models generate even more synthetic media.
        </p>

        <p>
          Modern large language models are built on the transformer architecture introduced in the paper <em>Attention Is All You Need</em> by Ashish Vaswani and colleagues in 2017. In this framework, language generation is treated as a probabilistic prediction problem: the model calculates the likelihood of the next token in a sequence using the tokens before it, and statistical patterns learned during training. Large language models therefore inherently generate text not through understanding or intentional meaning, but by predicting the most statistically probable continuation of a sequence. The same thing applies to images and videos. According to the paper <em>Denoising Diffusion Probabilistic Models</em> by Jonathan Ho, diffusion models generate images by starting with random noise, and iteratively transforming noise into structured images. The output can appear meaningful, but are generated through probabilistic pattern completion.
        </p>

        <p>
          The result here is a communication system where technological systems both generate symbolic material and regulate its distribution. These technical properties have broader cultural implications for communication systems. Marshall McLuhan has famously argued that "the medium is the message". Within a technopoly, the crucial shift is not only the increase in quantity but the transfer of authority from human judgement to technological systems. Instead of human producers deciding what content should exist, algorithmic systems generate media outputs by statistically recombining patterns from training datasets. The volume of symbolic production expands because generation is no longer tied to human labor, human editorial processes, or human production costs. The cultural judgement is displaced by optimization processes designed to maximize engagement, efficiency, and scale.
        </p>

        <p>
          The displacement of human editorial judgement does not occur in isolation. It is tied to the economic structure of contemporary media which has been reorganized around capturing and holding attention. Under this model, visibility itself becomes a form of capital. This reflects what economist Georg Franck described as the emergence of an "attention economy". Platforms compete not only for users, but for the limited cognitive bandwidth those users can allocate to content. Instead of asking "What information should be communicated?" we ask "what content keeps people watching longer?". This usually means brainrot, ragebait, and content that requires low effort to consume, and sparks strong emotions by being controversial. A recent trend has been Italian brainrot characters, which are viral AI generated memes featuring surreal object animal hybrids with pseudo Italian names, often narrated by ElevenLabs "Adam" voice. Popular characters include Tung Tung Tung Sahur, Bombardino Crocodilo, and Ballerina Cappuccina, with these videos specifically being targeted towards children aged 5–15 and adults aged 40–60. These are populations most vulnerable to highly curated brainrot media.
        </p>

        <p>
          In these systems, user attention (the time spent watching, scrolling, and interacting on these platforms) is converted into revenue primarily through advertising. Modern social media platforms (Snapchat, Pinterest, Reddit, TikTok) generate the overwhelming majority of their revenue from advertising, and their platforms are designed primarily as behavior-modification systems (Jaron Lanier). The engineers on these teams use machine learning models trained on watch time, replay behavior and engagement signals to maximize viewing duration. Digital platforms do not merely sell attention but extract behavioral data in order to predict and shape future actions (Shoshana Zuboff). User interactions like search queries, clicks, scrolling patterns, and location data, are transformed into behavioral surplus that can be used to construct predictive models. These predictions are then sold to advertisers seeking to influence behavior, and this process works through continuous feedback loops.
        </p>

        <p>
          Dallas Smythe's "audience commodity" theory argued that commercial media does not primarily sell content to audiences. Rather, it sells audiences to advertisers. Historically, around 75–80% of Alphabet's revenue (Google, YouTube) comes from advertising. Search advertising is especially powerful economically, because it monetizes explicit intent. When users search for something, advertisers bid to appear in that moment of attention. Messaging platforms, the most pure form of communication, have also bought in. Telegram is introducing sponsored messages in public channels, and X monetizes feeds through promoted tweets and branded content. Twitch, owned by Amazon, also relies on advertising, sponsorships, and viewer engagement metrics such as watch time and concurrent viewers.
        </p>

        <p>
          The most recent and curious case comes from OpenAI. The CEO Sam Altman has a commonly cited quote from 2024: "Ads plus AI is sort of uniquely unsettling to me. I kind of think of ads as a last resort for us for a business model." Fast forward to 2026, and OpenAI has introduced advertising to its chatbots. There are many structural concerns about how incentives change when a highly persuasive system is funded by advertising. Modern AI systems can personalize persuasion at an extremely granular level. Instead of just broad target demographics, a conversation AI has access to a user's language patterns, questions, interests, anxieties and goals. This produces a much richer behavioral dataset than search queries or social media activity alone, entering into the grey zone of being borderline "behavioral manipulation" rather than general marketing.
        </p>

        <p>
          The AI interface also occupies a position of authority. People tend to treat conversational systems as neutral information providers or assistants rather than media channels. Advertising used to be simply a component of media. In television, newspapers, and social media, the boundary between content and advertising is usually visible. And now, media exists to support advertising infrastructure. An advertisement can be embedded within what appears to be advice or factual explanation. This is very often contrasting to the welfare of its users, a recent phenomenon in social media being the promotion of peptides and plastic surgery (for "looksmaxxing") and the promotion of gambling apps and day trading courses (for "get rich quick" schemes).
        </p>

        <p>
          This incentive structure shapes the kind of content that proliferates online. We are currently witnessing an incredibly degenerate trend, specifically surrounding "AI influencers" and "AI UGC". AI generated influencers are an incredible metaphor for the interpersonal dissociation and false authenticity we are tipping into. These AI generated influencers are fully computer generated virtual personas acting as brand ambassadors and social media personalities (some popular examples including Lil' Miquela, Aitana Lopez, and Mia Zelu) who have millions of followers and take over a significant share of online real estate.
        </p>

        <p>
          There is this irony in creating content designed to look genuine, with human expression and authenticity, but instead completely automated and algorithmically produced with fake AI influencers and AI generated scripts. In earlier forms of representation, there were attempts to at least imitate or depict something that already existed. For example, a photograph to represent a real object, or a map to represent something that already existed. In contemporary media systems, representations increasingly become simulations (Jean Baudrillard). These are simulations that do not refer back to any original reality and are generated through endless recombination of existing images, styles and narratives. This process produces hyperreality, a condition in which simulations become more influential, visible, and convincing than reality itself (Jean Baudrillard).
        </p>

        <p>
          In the past year or so, especially following the rise of consumer apps "Cluely" and "TurboAI", there has been a rise in structured "UGC campaigns" on social media, that exist for the sole purpose of flooding social media algorithms with media. The purpose of these campaigns is to maximize conversions under a tight budget, with the marketing trend of "user-generated content". This is content optimized for virality, that is trying to push the advertising of a certain product, usually that product being a consumer tech app. Since many of these campaigns are run by teenagers and immature companies with no money, they overemploy middle schoolers and high schoolers, paying $1 per 2k views or even lower, who follow very specific rules around communication and talking styles, often just repeating the same scripts over and over again until the algorithm catches onto it.
        </p>

        <p>
          In this case study of UGC campaigns, this dynamic resembles Mumford's "megamachine", a term to describe a large-scale social system in which human beings are organized and coordinated like parts of a machine. Individuals function as standardized components whose actions are tightly controlled through technical coordination and abstract rules. Workers serve as interchangeable parts, all coordinated together to serve a larger capitalistic project, prioritizing scale, control, predictability, and productivity over the creativity, judgement and autonomy of these smaller content creators.
        </p>

        <p>
          These UGC videos originally became powerful because audiences trusted ordinary people more than corporate messaging. This makes sense. This is why people search up reviews on YouTube, and look specifically for videos that are unsponsored and from creators with lower followings. Gradually, as sponsorships and brand deals came in, early internet culture had the rise of "influencer culture", in which brands increasingly relied on influencers and UGC content because of the authenticity and trustworthiness of a "normal" human being (Crystal Abidin). In this environment, authenticity itself is a commercial asset. Influencers strategically perform authenticity by sharing personal details, casual language, and behind-the-scenes content, creating the appearance of transparency and intimacy (Alice Marwick).
        </p>

        <p>
          Introducing AI content creation into the equation completely separates the human component of these videos, even though the primary audience of these media environments consist of human users. So this really is the final stage of technopoly. With n8n and automation systems, there is little to no human oversight or approval in this whole process. Amplified by AI, the system can now A/B test millions of variations of ads, and choose the most shocking, emotional, addictive, and low meaning but high stimulation content. And when symbolic environments become saturated with AI noise, there is a dilution in "meaning", an instability around what is "real vs synthetic" and the rise of cultural fragmentation.
        </p>

        <p>
          Communication systems shape culture, knowledge, politics and social trust. The dominant way in which people communicate strongly shapes how civilization organizes power, knowledge, and institutions. These channels are not neutral in transmitting information; they always favor a certain form of organization and certain types of power. Our current environment of AI generated automated production of media is an extreme version of space-based media: lightweight and easy to distribute, rapid transmission of information, focused on trade and power rather than long term continuity. (Harold Innis)
        </p>

        <p>
          AI slop is not a temporary trend. It is the logical outcome of technopoly and advertising driven media systems. Technopoly ensures that technological capability is adopted without cultural restraint, and advertising systems ensure that content is optimized for attention rather than meaning. Put those together, along with the powerful force of AI and its acceleration of these forces, and we enter an era where communication systems produce infinite symbolic output with decreasing semantic value.
        </p>

        <p>
          The challenge moving forward is not just in regulating AI tools but confronting the structure of technopoly itself and the attention economy that governs modern media. Without changes to those underlying incentives, each new communication technology will simply intensify the same pattern of more content, faster circulation, and progressively weaker connections to meaning or truth. It is not a matter of "how to stop AI generated content" or "how to ban AI". Rather, how can we redesign our media systems so that communication is valued for understanding, rather than for its capacity to capture attention?
        </p>

        <footer className="mt-16 pt-8 border-t border-gray-100 space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-4">Works Cited</h2>
          <p className="text-xs text-gray-500 leading-relaxed">Abidin, Crystal. <em>Internet Celebrity: Understanding Fame Online</em>. Emerald Publishing, 2018.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Baudrillard, Jean. <em>Simulacra and Simulation</em>. University of Michigan Press, 1994.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Forbes. "15 Mind-Blowing AI Statistics Everyone Must Know About Now." <em>Forbes</em>, 10 Mar. 2025. https://www.forbes.com/sites/bernardmarr/2025/03/10/15-mind-blowing-ai-statistics-everyone-must-know-about-now/</p>
          <p className="text-xs text-gray-500 leading-relaxed">Franck, Georg. "The Economy of Attention." <em>Journal of Sociology</em>, vol. 37, no. 3, 2001, pp. 27–42.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Graphite. "More Articles Are Now Created by AI Than Humans." <em>Five Percent</em>, Graphite, https://graphite.io/five-percent/more-articles-are-now-created-by-ai-than-humans</p>
          <p className="text-xs text-gray-500 leading-relaxed">Ho, Jonathan, Ajay Jain, and Pieter Abbeel. "Denoising Diffusion Probabilistic Models." <em>Advances in Neural Information Processing Systems</em>, 2020.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Innis, Harold A. <em>Empire and Communications</em>. Clarendon Press, 1950.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Kaplan, Jared, et al. "Scaling Laws for Neural Language Models." <em>arXiv preprint</em>, 2020. https://arxiv.org/abs/2001.08361</p>
          <p className="text-xs text-gray-500 leading-relaxed">Lanier, Jaron. <em>You Are Not a Gadget: A Manifesto</em>. Vintage Books, 2010.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Marwick, Alice E. <em>Status Update: Celebrity, Publicity, and Branding in the Social Media Age</em>. Yale University Press, 2013.</p>
          <p className="text-xs text-gray-500 leading-relaxed">McLuhan, Marshall. <em>Understanding Media: The Extensions of Man</em>. McGraw-Hill, 1964.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Mumford, Lewis. <em>The Myth of the Machine: Technics and Human Development</em>. Harcourt Brace Jovanovich, 1967.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Postman, Neil. <em>Technopoly: The Surrender of Culture to Technology</em>. Vintage Books, 1993.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Shirky, Clay. <em>Here Comes Everybody: The Power of Organizing Without Organizations</em>. Penguin Press, 2008.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Smythe, Dallas W. "Communications: Blindspot of Western Marxism." <em>Canadian Journal of Political and Social Theory</em>, vol. 1, no. 3, 1977.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Vaswani, Ashish, et al. "Attention Is All You Need." <em>Advances in Neural Information Processing Systems</em>, 2017.</p>
          <p className="text-xs text-gray-500 leading-relaxed">Wondercraft. <em>AI Content Creation Report 2025</em>. Wondercraft, 2025. https://www.wondercraft.ai/ai-content-creation-report-2025</p>
          <p className="text-xs text-gray-500 leading-relaxed">Zuboff, Shoshana. <em>The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power</em>. PublicAffairs, 2019.</p>
        </footer>
      </div>
    </div>
  );
}
