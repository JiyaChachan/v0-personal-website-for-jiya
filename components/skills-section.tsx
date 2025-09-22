import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "R", "SQL", "Java", "C++", "HTML"],
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    title: "Data Science & ML",
    skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "NLP", "Word2Vec", "BERT", "CNN", "RNN", "GRU/LSTM"],
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    title: "Visualization & Analytics",
    skills: ["Tableau", "Power BI", "Looker Studio", "Seaborn", "Matplotlib", "Streamlit", "Altair"],
    color: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "GCP", "Azure", "Snowflake", "Git"],
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    title: "Certifications",
    skills: ["Power BI", "Tableau", "Cloud Basics"],
    color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill}
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
