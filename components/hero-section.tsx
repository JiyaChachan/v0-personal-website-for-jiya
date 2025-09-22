"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Jiya Chachan
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Data Science & Computer Science Student
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              I explore data, build intelligent systems, and create solutions at the intersection of technology and
              real-world impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => scrollToSection("#projects")}>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("#contact")}>
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src="/professional-headshot-of-a-data-science-student.jpg"
                  alt="Jiya Chachan"
                  className="w-72 h-72 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
