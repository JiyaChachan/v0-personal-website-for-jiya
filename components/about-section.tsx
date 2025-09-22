import { Card } from "@/components/ui/card"
import { Coffee, Camera, Plane, Code, BarChart3, GraduationCap } from "lucide-react"

const interests = [
  { icon: Coffee, label: "Coffee" },
  { icon: Camera, label: "Photography" },
  { icon: Plane, label: "Travel" },
  { icon: Code, label: "Coding" },
  { icon: BarChart3, label: "Data Visualization" },
  { icon: GraduationCap, label: "Teaching & Mentoring" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="p-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm pursuing a B.S. in Information Sciences with a Data Science focus and a Minor in Computer Science at
                the University of Illinois at Urbana-Champaign (UIUC), maintaining a perfect 4.0 GPA.
              </p>
              <p>
                As a James Scholar and member of the Phi Eta Sigma Honor Society, I'm passionate about leveraging data
                science and backend engineering to solve real-world problems through research and innovative solutions.
              </p>
              <p>
                My work spans from developing multimodal deep learning models for healthcare applications to building
                scalable backend systems and leading educational initiatives in data science.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Personal Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <interest.icon className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{interest.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
