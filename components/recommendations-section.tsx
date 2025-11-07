"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface RecommendationData {
  id: string
  quote: string
  author: string
  role: string
  company?: string
}

const recommendations: RecommendationData[] = [
  {
    id: "rec-1",
    quote:
      "Owen's ability to empathize with users, combined with his analytical mindset, ensures that his designs are both intuitive and impactful.",
    author: "VP of Marketing",
    role: "",
    company: "Curie",
  },
  {
    id: "rec-2",
    quote:
      "He'd regularly raise critical questions from a single wireframe section that would spark solutions taking designs from good to great.",
    author: "UX Researcher",
    role: "",
    company: "Research Square",
  },
  {
    id: "rec-3",
    quote:
      "Owen's impact on the platform was profound; he led the charge in revamping the article page, crafting a visually stunning UI.",
    author: "Software Engineer",
    role: "",
    company: "Research Square",
  },
  {
    id: "rec-4",
    quote:
      "He always took time to walk engineers through designs, ensuring the product provided the best user experience.",
    author: "Frontend Developer",
    role: "",
    company: "Curie",
  },
  {
    id: "rec-5",
    quote:
      "Due to his engineering mindset, he consistently executed seamless design handoffs and provided client review to developers.",
    author: "Technical Project Manager",
    role: "",
    company: "Curie",
  },
  {
    id: "rec-6",
    quote:
      "His meticulous attention to detail and commitment to excellence shine through in every pixel-perfect design.",
    author: "Software Engineer",
    role: "",
    company: "Research Square",
  },
  {
    id: "rec-7",
    quote:
      "Owen is a phenomenal product designer whose technical skills, creativity, and emotional intelligence make him a standout.",
    author: "Director of UX",
    role: "",
    company: "Curie",
  },
  {
    id: "rec-8",
    quote:
      "His versatility and clear-sightedness allowed us to move quickly and carefully through complexity.",
    author: "Project Manager",
    role: "",
    company: "Curie",
  },
]

export function RecommendationsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  })

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="bg-transparent">
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recs</h2>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              {recommendations.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>

            <div
              role="group"
              data-slot="button-group"
              className="flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                aria-label="Previous"
                className="h-8 w-8"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                aria-label="Next"
                className="h-8 w-8"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div
          className="overflow-hidden sm:overflow-visible cursor-grab active:cursor-grabbing select-none"
          ref={emblaRef}
        >
          <div className="flex gap-3">
            {recommendations.map((rec, index) => (
              <div
                key={rec.id}
                className={`min-w-0 flex-[0_0_300px] ${
                  index === recommendations.length - 1 ? "lg:mr-[450px]" : ""
                }`}
              >
                <div
                  className={`transition-all duration-500 ${
                    index === selectedIndex 
                      ? "opacity-100 scale-100" 
                      : "opacity-50 scale-90"
                  }`}
                >
                  <Card className="p-5 max-w-[300px]">
                    <div className="space-y-6">
                      <blockquote>
                        <p className="">{rec.quote}</p>
                      </blockquote>

                      <div>
                        <div className="font-medium text-sm">{rec.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {rec.company}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-start">
          <Button size="sm" asChild>
            <a
              href="https://linkedin.com/in/onblair/details/recommendations"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              View all
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
