import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Code, Video, Users } from "lucide-react";
import HandGestureControl from "@/components/HandGestureControl";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "ENGINEERING", icon: Code },
    { href: "/media", label: "MEDIA", icon: Video },
    { href: "/communities", label: "COMMUNITIES", icon: Users },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-mono selection:bg-gray-200 selection:text-black bg-white text-black">
      
      {/* Top Bar (Minimal Header) */}
      <header className="z-40 border-b sticky top-0 transition-colors duration-300 border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between max-w-4xl mx-auto px-4">
          <div className="flex flex-col">
            <h1 className="font-serif italic text-lg text-black font-medium">Lana Yepifanova</h1>
            <span className="font-sans text-[10px] text-gray-400 uppercase tracking-widest">Rice University • Applied Math</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-[10px] font-bold tracking-widest transition-colors uppercase",
                  location === item.href ? "text-black underline decoration-1 underline-offset-4" : "text-gray-400 hover:text-black"
                )}
              >
                {item.label}
              </Link>
            ))}

          </nav>
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
              location === item.href ? "text-black bg-gray-50" : "text-gray-400"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span className="text-[9px] font-bold tracking-widest">{item.label}</span>
          </Link>
        ))}

      </nav>

      {/* Main Content */}
      <main className="flex-1 container relative z-10 py-8 pb-24 md:pb-12 px-4">
        {children}
      </main>

      <HandGestureControl />
    </div>
  );
}
