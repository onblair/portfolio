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

const productHighlights: HighlightData[] = [
  {
    id: "product-1",
    title: "Adapting to changing perceptions of AI",
    description: "",
    bulletPoints: [
      "Led initiatives to reshape user understanding of AI through transparent design practices and educational content.",
      "One initiative was to better communicate how their data was being used and the security of their documents.",
    ],
    askMeAbout:
      "Designing AI-driven products that scale globally while maintaining high usability across diverse user groups.",
    imageUrl: "/images/curie-ai-improvement.png",
  },
  {
    id: "product-2",
    title: "Creating a visual brand",
    description: "",
    bulletPoints: [
      "Collaborated with marketing on brand strategy, creating logos, colors, typography, and spot illustrations.",
      "The brand and illustrations earned awards and were integrated into the design system.",
    ],
    askMeAbout:
      "Building award-winning visual identity systems that scale across products.",
    imageUrl: "/images/curie-brand.png",
  },
  {
    id: "product-3",
    title: "Following emerging UX patterns in AI",
    description: "",
    bulletPoints: [
      "Continuously tested AI-driven features with real users to refine their accuracy and usability. We added folders and document type to better link subsequent runs and inform our models.",
      "Proactively tracked and used emerging UX patterns around AI to help usability and understanding.",
    ],
    askMeAbout:
      "Creating educational content that helped users understand how to maximize the benefits of AI tools like Curie.",
    imageUrl: "/images/curie-emerging-ux.png",
    imagePosition: "top-right",
  },
  {
    id: "product-4",
    title: "Managing multiple modalities",
    description: "",
    bulletPoints: [
      "Maintained consistency in functionality and messaging across web app and Microsoft Word add-in.",
      "Used organized design system and documentation to ensure seamless user experience.",
    ],
    askMeAbout:
      "Designing consistent experiences across different platforms and tools.",
    imageUrl: "/images/curie-modalities.png",
    imagePosition: "top-right",
  },
  {
    id: "product-5",
    title: "Optimizing pricing model",
    description: "",
    bulletPoints: [
      "Migrated to a subscription-based AI pricing model.",
      "Growing weekly active users by 150% in 3 months with dynamic, scalable pricing options.",
    ],
    askMeAbout:
      "Designing pricing strategies that balance user value with business growth.",
    imageUrl: "/images/curie-pricing.png",
  },
]

const processHighlights: HighlightData[] = [
  {
    id: "process-1",
    title: "Validating through comprehensive testing",
    description: "",
    bulletPoints: [
      "Employed comprehensive testing methodologies at various stages of product development to validate and ensure the product met high standards of usability.",
      "These included card sorting, tree testing, surveys, concept testing, user interviews, usability testing, A/B testing, analytics reviews, and heuristic evaluations.",
    ],
    askMeAbout:
      "How we integrated insights from user research into our product discovery.",
    imageUrl: "/images/curie-testing.png",
  },
  {
    id: "process-2",
    title: "Building a design system",
    description: "",
    bulletPoints: [
      "Created comprehensive Figma component library ensuring consistent design patterns.",
      "Used Chakra UI as a starting point and matched frontend components for seamless implementation.",
    ],
    askMeAbout:
      "Scaling design consistency through systematic component libraries.",
    imageUrl: "/images/curie-design-system.png",
    imagePosition: "top-left",
  },
  {
    id: "process-3",
    title: "Organizing continuous feedback",
    description: "",
    bulletPoints: [
      "Established continuous feedback workflows through in-app surveys and user interviews.",
      "Tracked perceived ease-of-use and usefulness of core features over time to ensure ongoing improvement.",
    ],
    askMeAbout:
      "Creating feedback systems that drive continuous product improvement.",
    imageUrl: "/images/curie-feedback.png",
  },
  {
    id: "process-4",
    title: "Mapping complex user stories",
    description: "",
    bulletPoints: [
      "Used detailed user story mapping to foster team communication and alignment.",
      "Kept users at the core of engineering tasks throughout development.",
    ],
    askMeAbout:
      "Using story mapping to align cross-functional teams around user needs.",
    imageUrl: "/images/curie-user-stories.png",
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
                      <ul className="space-y-2 mb-4">
                        {highlight.bulletPoints.map((point, idx) => (
                          <li key={idx} className="text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="text-xs">
                          Ask me about
                        </Badge>
                        <p className="text-sm">{highlight.askMeAbout}</p>
                      </div>
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

export default function Curie() {
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
          <h1 className="text-3xl font-semibold mb-4">Curie</h1>

          <div className="mb-8">
            <div className="bg-muted/70 rounded-lg p-4 sm:p-8 flex items-center justify-center">
              <img
                src="/images/curie-full.png"
                alt="Curie"
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
                Curie was an AI-powered writing assistant specifically designed
                for academic and scholarly writing. The product was developed
                for Springer Nature, offering both B2C and B2B offerings, with a
                focus on addressing the unique challenges faced by authors and
                publishers in academic writing.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Role
              </h3>
              <div className="mb-3">
                <p className="font-medium">Product Design Lead</p>
                <p className="text-sm text-muted-foreground">
                  Jan 2023 - Jun 2024 (1 yr 6 mos)
                </p>
              </div>
              <p className="text-sm">
                I led design through the ideation, development, launch, and
                continuous improvement of the Curie platform. My role involved a
                combination of strategic planning, hands-on design work, and
                cross-functional collaboration to ensure the product met user
                needs and business goals.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            <HighlightsCarousel highlights={productHighlights} title="Product Highlights" />
            <HighlightsCarousel highlights={processHighlights} title="Process Highlights" />
          </div>
        </div>
      </main>
    </div>
  )
}
