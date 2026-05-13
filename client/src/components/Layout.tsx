import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Code, FileText, Github, Instagram, Linkedin, Music, Users, Video } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/engineering", label: "Engineering", icon: Code },
    { href: "/media", label: "Media", icon: Video },
    { href: "/music", label: "Music", icon: Music },
    { href: "/writing", label: "Writing", icon: FileText },
    { href: "/communities", label: "Communities", icon: Users },
  ];

  const isActive = (href: string) => {
    if (href === "/engineering") {
      return location === "/" || location === "/engineering";
    }

    return location === href;
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-mono selection:bg-gray-200 selection:text-black bg-white text-black">
      
      {/* Top Bar (Minimal Header) */}
      <header className="z-40 border-b sticky top-0 transition-colors duration-300 border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container grid h-20 grid-cols-[1fr_auto] items-center max-w-6xl mx-auto px-4 md:grid-cols-[auto_1fr_auto]">
          <div className="flex flex-col pl-4">
            <h1 className="font-sans text-2xl text-black font-semibold tracking-tight">Lana Yepifanova</h1>
            <p className="font-sans text-xs text-gray-500 tracking-wide">Rice University 2023-2027</p>
          </div>
          <nav className="hidden md:flex items-center justify-self-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href} 
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-base font-semibold tracking-wide transition-colors font-sans",
                  isActive(item.href) ? "text-black underline decoration-1 underline-offset-4" : "text-gray-400 hover:text-black"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center justify-end gap-4 pr-4">
            <a
              href="https://www.linkedin.com/in/lana-yepifanova/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition-colors hover:text-black"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/lanayepifanova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition-colors hover:text-black"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/lana_yaps/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 transition-colors hover:text-black"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Nav (Bottom) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t p-2 flex justify-around overflow-x-auto border-gray-200 bg-white">
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded-md transition-colors min-w-[60px]",
              isActive(item.href) ? "text-black bg-gray-50" : "text-gray-400"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span className="text-sm font-semibold tracking-wide font-sans">{item.label}</span>
          </Link>
        ))}

      </nav>

      {/* Main Content */}
      <main className="flex-1 container relative z-10 py-8 pb-24 md:pb-12 px-4 max-w-6xl mx-auto">
        {children}
      </main>

    </div>
  );
}
