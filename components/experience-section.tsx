import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Head Course Assistant",
    organization: "STAT 207, UIUC",
    period: "2024 - Present",
    location: "Urbana-Champaign, IL",
    highlights: [
      "Leading 20+ Course Assistants in supporting 450+ students",
      "Improving grading workflows and educational processes",
      "Mentoring students in statistical concepts and data analysis",
    ],
    tags: ["Leadership", "Education", "Statistics"],
  },
  {
    role: "Python Backend Engineer Intern",
    organization: "VVDN Technologies",
    period: "Summer 2024",
    location: "Remote",
    highlights: [
      "Built robust APIs and implemented CRUD database operations",
      "Developed automation scripts to streamline development processes",
      "Integrated RabbitMQ and Kafka for efficient message queuing",
    ],
    tags: ["Python", "Backend", "APIs", "RabbitMQ", "Kafka"],
  },
  {
    role: "Undergraduate Research Assistant",
    organization: "EHR Prediction Project, UIUC",
    period: "2023 - 2024",
    location: "Urbana-Champaign, IL",
    highlights: [
      "Developed multimodal deep learning models using time-series and clinical notes",
      "Boosted mortality prediction performance through advanced ML techniques",
      "Collaborated with healthcare professionals on real-world applications",
    ],
    tags: ["Deep Learning", "Healthcare", "Research", "NLP"],
  },
  {
    role: "Education Director",
    organization: "Illinois Data Science Club",
    period: "2023 - 2024",
    location: "Urbana-Champaign, IL",
    highlights: [
      "Organized 12+ workshops connecting 300+ members",
      "Led weekly educational sessions on data science topics",
      "Built community around data science learning and collaboration",
    ],
    tags: ["Leadership", "Community", "Data Science", "Education"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-xl text-primary font-medium">{exp.organization}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
