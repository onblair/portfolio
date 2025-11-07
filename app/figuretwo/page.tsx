"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

interface HighlightData {
  id: string
  title: string
  description: string
  bulletPoints: string[]
  askMeAbout: string
  imageUrl?: string
  imagePosition?: "center" | "top-left" | "top-right"
}

const disseminationHighlights: HighlightData[] = [
  {
    id: "dissemination-1",
    title: "Interactive",
    description: "Every figure is interactive and enables readers to dive deeper into each chart or image.",
    bulletPoints: [],
    askMeAbout: "",
    imageUrl: "/images/figuretwo-interactive.png",
    imagePosition: "top-left",
  },
  {
    id: "dissemination-2",
    title: "Explorable data",
    description: "Each data point can be explored directly in the browser.",
    bulletPoints: [],
    askMeAbout: "",
    imageUrl: "/images/figuretwo-view-data.png",
  },
  {
    id: "dissemination-3",
    title: "Machine readable",
    description: "Data points connect directly to its underlying dataset directly in the browser, making validation and reuse effortless.",
    bulletPoints: [],
    askMeAbout: "",
    imageUrl: "/images/figuretwo-explorable.png",
    imagePosition: "top-left",
  },
  {
    id: "dissemination-4",
    title: "Clear and readable for everyone",
    description: "Figures are designed for accessibility and include features like visual modes automatically.",
    bulletPoints: [],
    askMeAbout: "",
    imageUrl: "/images/figuretwo-accessibility.png",
  },
  {
    id: "dissemination-5",
    title: "Persistent and citable",
    description: "Public versions are preserved, citable, and fit naturally into the scholarly record.",
    bulletPoints: [],
    askMeAbout: "",
    imageUrl: "/images/figuretwo-doi.png",
  },
]

const creationHighlights: HighlightData[] = [
  {
    id: "creation-1",
    title: "Connected data",
    description: "The workspace maintains connected data sources so that support data flows through all of a researcher's figures instantly.",
    bulletPoints: [],
    askMeAbout: "",
    imageUrl: "/images/figuretwo-data.png",
    imagePosition: "top-left",
  },
  {
    id: "creation-2",
    title: "AI for speed",
    description: "AI tools to help reduce the tedious work without affecting the original data",
    bulletPoints: [],
    askMeAbout: "",
    imageUrl: "/images/figuretwo-ai.png",
  },
  {
    id: "creation-3",
    title: "Templates to meet guidelines",
    description: "Each figure has access to templates for beautiful premade styles that match complicated journal guidelines.",
    bulletPoints: [],
    askMeAbout: "",
    imageUrl: "/images/figuretwo-templates.png",
    imagePosition: "top-right",
  },
  {
    id: "creation-4",
    title: "Compliance built-in",
    description: "Figures always meet accessibility and compliance standards with automated checks and quick fixes.",
    bulletPoints: [],
    askMeAbout: "",
    imageUrl: "/images/figuretwo-checks.png",
    imagePosition: "top-right",
  },
  {
    id: "creation-5",
    title: "Share faster",
    description: "Researchers can collaborate through private links and preserve and post with a DOI when ready.",
    bulletPoints: [],
    askMeAbout: "",
    imageUrl: "/images/figuretwo-share.png",
  },
]

function HighlightsCarousel({ highlights, title }: { highlights: HighlightData[], title: string }) {
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
          <h2 className="text-xl font-semibold">{title}</h2>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              {highlights.map((_, index) => (
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
          <div className="flex gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className={`flex-[0_0_100%] min-w-0 sm:flex-[0_0_55%] lg:flex-[0_0_450px] ${
                  index === highlights.length - 1 ? "lg:mr-[450px]" : ""
                }`}
              >
                <div
                  className={`transition-all duration-500 ${
                    index === selectedIndex 
                      ? "opacity-100 scale-100" 
                      : "opacity-50 scale-90"
                  }`}
                >
                  <div className="mb-4">
                    <div className="rounded-lg overflow-hidden border border-border">
                      {highlight.imageUrl ? (
                        <img
                          src={highlight.imageUrl}
                          alt={highlight.title}
                          className={`w-full h-64 object-cover ${
                            highlight.imagePosition === "top-left" 
                              ? "object-left-top" 
                              : highlight.imagePosition === "top-right"
                              ? "object-right-top"
                              : "object-center"
                          }`}
                        />
                      ) : (
                        <div className="w-full h-64 bg-muted/50 rounded border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">
                            Placeholder Image
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 max-w-[500px]">
                    <div>
                      <h3 className="font-medium mb-3">{highlight.title}</h3>
                      {highlight.description && (
                        <p className="text-sm mb-4">{highlight.description}</p>
                      )}
                      {highlight.bulletPoints.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {highlight.bulletPoints.map((point, idx) => (
                            <li key={idx} className="text-sm flex items-start">
                              <span className="mr-2">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {highlight.askMeAbout && (
                        <div className="space-y-2">
                          <Badge variant="secondary" className="text-xs">
                            Ask me about
                          </Badge>
                          <p className="text-sm">{highlight.askMeAbout}</p>
                        </div>
                      )}
                    </div>
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

export default function FigureTwo() {
  return (
    <div className="relative">
      <main className="max-w-[1024px] mx-auto p-2 sm:p-6 min-w-[340px]">
        <div className="flex w-full justify-between">
          <div>
            <Button size="sm" variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to portfolio
              </Link>
            </Button>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-semibold mb-4">FigureTwo</h1>

          <div className="mb-8">
            <div className="bg-muted/70 rounded-lg p-4 sm:p-8 flex items-center justify-center">
              <img
                src="/images/figuretwo-full.png"
                alt="FigureTwo"
                className="max-w-full h-auto rounded shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-6 max-w-[600px]">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground mb-2">
                About
              </h2>
              <p className="text-sm mb-4">
                FigureTwo revolutionizes scientific communication by helping authors create engaging, transparent, and understandable figures. Our AI-powered platform produces web-native visualizations that are data-connected, mobile-ready, accessible, and FAIR-compliant. These better figures enable all audiences—from peer reviewers to policymakers—to explore underlying data, validate results, and gain deeper insights. With 35 million figures published annually, we can greatly reduce the time spent creating publication-ready figures and ensure authors, institutions, and publishers meet growing accessibility and open science mandates.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Role
              </h3>
              <div className="mb-3">
                <p className="font-medium">Co-Founder, Product</p>
                <p className="text-sm text-muted-foreground">
                  Mar 2025 - Present (9 mos)
                </p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leading product vision, design, and early development for a platform transforming how researchers create and share scholarly figures.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Conducting user interviews with researchers, publishers, and institutions to validate product-market fit and refine value propositions.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Defined core user workflows and product roadmap to enable interactive, data-linked, and FAIR-compliant figures for open science.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Built initial design system and accessibility standards ensuring WCAG 2.1 compliance for scientific data transparency.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            <div className="bg-muted/70 rounded-lg p-4 sm:p-8 flex items-center justify-center">
              <img
                src="/images/figuretwo-full-2.png"
                alt="FigureTwo Additional Details"
                className="max-w-full h-auto rounded shadow-lg"
              />
            </div>
            <HighlightsCarousel highlights={disseminationHighlights} title="Dissemination" />
            <HighlightsCarousel highlights={creationHighlights} title="Creation" />
          </div>
        </div>
      </main>
    </div>
  )
}