import { Linkedin, Github, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© 2024 Jiya Chachan. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com/in/jiyachachan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/JiyaChachan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
