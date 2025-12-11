import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links?: {
    demo?: string;
    github?: string;
  };
  type?: "engineering" | "content" | "startup";
}

export default function ProjectCard({ title, description, tags, image, links, type = "engineering" }: ProjectCardProps) {
  const typeColors = {
    engineering: "text-primary border-primary/50",
    content: "text-accent border-accent/50",
    startup: "text-destructive border-destructive/50",
  };

  return (
    <Card className={`retro-card h-full flex flex-col ${typeColors[type]} bg-card/50 backdrop-blur-sm`}>
      {image && (
        <div className="aspect-video w-full overflow-hidden border-b border-border mb-4 relative group">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-all" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      )}
      
      <CardHeader className="p-0 mb-4">
        <div className="flex justify-between items-start">
          <CardTitle className="font-pixel text-2xl tracking-wide">{title}</CardTitle>
          {type === "startup" && <Badge variant="destructive" className="font-mono text-[10px]">STARTUP</Badge>}
        </div>
        <CardDescription className="font-mono text-xs mt-2 line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-0 flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono text-[10px] rounded-none border-muted-foreground/30 text-muted-foreground">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-0 mt-6 flex gap-3">
        {links?.demo && (
          <Button size="sm" variant="outline" className="w-full font-bold text-xs" asChild>
            <a href={links.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-3 w-3" /> DEMO
            </a>
          </Button>
        )}
        {links?.github && (
          <Button size="sm" variant="ghost" className="w-full font-bold text-xs" asChild>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-3 w-3" /> CODE
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
