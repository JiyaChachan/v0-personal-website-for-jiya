import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI Career Coach for Data Science",
    description:
      "GenAI tool using Gemini API for skill extraction and personalized project recommendations. Deployed on Hugging Face with interactive interface for career guidance.",
    image: "/ai-career-coaching-dashboard-interface.jpg",
    tags: ["GenAI", "Gemini API", "Hugging Face", "Career Development"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Career Tracker Database System",
    description:
      "Comprehensive SQL database system with normalized schema (14 entities), query optimization, and analytics for job application tracking and career management.",
    image: "/database-schema-visualization-dashboard.jpg",
    tags: ["SQL", "Database Design", "Analytics", "Query Optimization"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard showcasing complex data insights with modern visualization techniques, built with advanced charting libraries and real-time data processing.",
    image: "/modern-data-visualization-dashboard-with-charts.jpg",
    tags: ["Data Viz", "Dashboard", "Interactive Charts", "Real-time Data"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Machine Learning Showcase",
    description:
      "Collection of ML models demonstrating various algorithms and techniques, from predictive analytics to deep learning applications with comprehensive documentation.",
    image: "/machine-learning-model-visualization-interface.jpg",
    tags: ["Machine Learning", "Deep Learning", "Predictive Analytics", "Model Deployment"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
