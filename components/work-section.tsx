"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SlideData {
  id: string
  title: string
  description: string
  imageUrl?: string
  ctaText?: string
  ctaLink?: string
}

const projectSlides: SlideData[] = [
  {
    id: "figuretwo",
    title: "FigureTwo",
    description:
      "Platform that revolutionizes scientific communication by helping authors create engaging, transparent, and understandable figures.",
    imageUrl: "/images/figuretwo-full.png",
    ctaText: "Explore",
    ctaLink: "/figuretwo",
  },
  {
    id: "curie",
    title: "Curie",
    description:
      "An AI-powered writing assistant designed for academic and technical writing.",
    imageUrl: "/images/curie-full.png",
    ctaText: "Explore",
    ctaLink: "/curie",
  },
  {
    id: "research-square",
    title: "Research Square",
    description:
      "Collaborative platform for early-stage research dissemination, enabling researchers to share findings before formal peer review.",
    imageUrl: "/images/researchsquare-full.png",
    ctaText: "Explore",
    ctaLink: "/research-square",
  },
  {
    id: "open-review",
    title: "Open.Review",
    description:
      "Innovative peer review system for scientific research that brings transparency and collaboration to the review process.",
    imageUrl: "/images/openreview-full.png",
    ctaText: "Explore",
    ctaLink: "/open-review",
  },
]

export function WorkSection() {
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
          <h2 className="text-xl font-semibold">Work</h2>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              {projectSlides.map((_, index) => (
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
          <div className="flex gap-6">
            {projectSlides.map((slide, index) => (
              <div
                key={slide.id}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_75%] lg:flex-[0_0_700px]"
              >
                <div
                  className={`transition-all duration-500 ${
                    index === selectedIndex
                      ? "opacity-100 scale-100"
                      : "opacity-50 scale-90"
                  }`}
                >
                  <div className="mb-4">
                    <div className="bg-muted/70 rounded-lg p-4 sm:p-8 flex items-center justify-center">
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="max-w-full h-auto rounded shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 max-w-[500px]">
                    <div>
                      <h3 className="font-medium mb-2">{slide.title}</h3>
                      <p className="text-sm">{slide.description}</p>
                    </div>
                    {slide.ctaText && slide.ctaLink && (
                      <Button size="sm" asChild>
                        <a href={slide.ctaLink}>
                          {slide.ctaText}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
