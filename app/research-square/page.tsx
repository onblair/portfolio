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
    title: "Optimizing for scientific communication",
    description: "",
    bulletPoints: [
      "Designed and built our preprint for clarity, readability, and accessibility across all devices, with 300K preprints read by 16M users in 243 countries.",
      "Prioritized article elements based on industry standards and emerging needs in preprinting, supported by historical usage and extensive user testing.",
    ],
    askMeAbout:
      "Our challenges in indicating articles were preprints and how we advised readers on these limitations during the pandemic.",
    imageUrl: "/images/researchsquare-communication.png",
  },
  {
    id: "product-2",
    title: "Designing the In Review program",
    description: "",
    bulletPoints: [
      "Research Square was the first platform to display status of submissions during peer review alongside open access content.",
      "Our In Review status and timeline was prioritized as key information while reading, evaluating early-stage research.",
    ],
    askMeAbout:
      "How events were gathered from 3rd party journal submission systems, cleansed, and communicated to users.",
    imageUrl: "/images/researchsquare-timeline.png",
  },
  {
    id: "product-3",
    title: "Building for responsiveness",
    description: "",
    bulletPoints: [
      "80% of our readers were on mobile and our preprint was always designed mobile first and was iteratively improved for increased readability, understanding, interaction, and engagement for all devices.",
    ],
    askMeAbout:
      "How we approached authors concern with keeping their content independent from additional context.",
    imageUrl: "/images/researchsquare-mobile.png",
  },
  {
    id: "product-4",
    title: "Designing opt-in flows",
    description: "",
    bulletPoints: [
      "Coordinated user journeys for integrations with three journal submission systems, used by 2000+ journals.",
      "Worked closely with our partners to both promote preprinting and avoid blind consent in a already long submission process.",
    ],
    askMeAbout:
      "How we addressed cases of blind consent and authors unknowingly posting their work, and our UX updates to minimize this.",
    imageUrl: "/images/researchsquare-opt-in.png",
  },
  {
    id: "product-5",
    title: "Communicating a new technology",
    description: "",
    bulletPoints: [
      "Enhanced our UX writing to educate users about preprints during the pandemic.",
      "Worked with other industry leaders to understand how to avoid fraud, combat misinformation, and effectively communicate rejections, takedowns, and withdrawals.",
    ],
    askMeAbout:
      "Why preprints are an important innovation in the scientific publication and communication process.",
    imageUrl: "/images/researchsquare-new-technology.png",
  },
  {
    id: "product-6",
    title: "Bringing transparency to peer review",
    description: "",
    bulletPoints: [
      "Designed and implemented an author workspace for journal submission tracking.",
      "Brought transparency to 2M+ authors.",
      "Provided detail not yet available in journal submission systems.",
    ],
    askMeAbout:
      "How we changed our user's experience as they progressed through different stages of publication.",
    imageUrl: "/images/researchsquare-peer-review.png",
  },
  {
    id: "product-7",
    title: "Adding tools for readers",
    description: "",
    bulletPoints: [
      "Managed and organized growing sources of constructive feedback.",
      "Made feedback sections more integrated and easier to use while reading.",
      "Leveraged experience with Open.Review to integrate open peer review.",
    ],
    askMeAbout:
      "How my experience with Open.Review helped in integrating open peer review into preprints.",
    imageUrl: "/images/researchsquare-metrics.png",
  },
  {
    id: "product-8",
    title: "Building a submission process",
    description: "",
    bulletPoints: [
      "Designed and built a process for users to upload and post preprints directly through the site.",
    ],
    askMeAbout:
      "How preprints were reviewed prior to posting and how that process was communicated to users.",
    imageUrl: "/images/researchsquare-submission.png",
  },
]

const processHighlights: HighlightData[] = [
  {
    id: "process-1",
    title: "Uncovering user needs",
    description: "",
    bulletPoints: [
      "Utilized the Jobs to be Done (JTBD) framework and clustering analysis to identify and understand distinct user needs and personas.",
      "Used these personas throughout our design process for building empathy, informing design decisions, guiding user research, maintaining focus, and creating more user-centered, effective products.",
      "Continuously monitored behavioral data, and collaborated with data scientists to uncover unmet needs and drive design iteration.",
    ],
    askMeAbout:
      "How our personas were used on product, engineering, and marketing teams to keep everyone focused on the user.",
    imageUrl: "/images/researchsquare-user-needs.png",
    imagePosition: "top-left",
  },
  {
    id: "process-2",
    title: "Leading frontend development",
    description: "",
    bulletPoints: [
      "Owned the user-facing frontend code and used React/TypeScript/Tailwind CSS to deliver a responsive UI (with over 1000 commits). Additionally, implemented backend integrations and data handling using SQL and PHP.",
      "Helped hire and mentor new frontend engineers, and collaborated on frontend improvements.",
    ],
    askMeAbout:
      "How my knowledge of frontend development helps efficiently design within technical constraints, and facilitates collaboration and handoff with engineers.",
    imageUrl: "/images/researchsquare-development.png",
    imagePosition: "center",
  },
  {
    id: "process-3",
    title: "Building our design team",
    description: "",
    bulletPoints: [
      "Established a design team and collaborative design culture by hiring 5 designers.",
      "Created replicable, documented design processes for the team.",
      "Used skills assessments and career development planning collaboratively.",
    ],
    askMeAbout:
      "How we found the balance between high agency, low bureaucracy, while getting valuable critique and feedback from other designers and growing as a team.",
    imageUrl: "/images/researchsquare-team.png",
  },
]

function HighlightsCarousel({
  highlights,
  title,
}: {
  highlights: HighlightData[]
  title: string
}) {
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

export default function ResearchSquare() {
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
          <h1 className="text-3xl font-semibold mb-4">Research Square</h1>

          <div className="mb-8">
            <div className="bg-muted/70 rounded-lg p-4 sm:p-8 flex items-center justify-center">
              <img
                src="/images/researchsquare-full.png"
                alt="Research Square"
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
                Research Square was a leading preprint platform dedicated to
                rapid dissemination and open sharing of early-stage research. We
                scaled from 1 preprint/week to 1000+ preprints/week in 3 years,
                becoming the largest interdisciplinary preprint platform
                globally. We received Fast Company's "Brands that Matter" for
                accelerating scientific communication during the pandemic.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Role
              </h3>
              <div className="mb-3">
                <p className="font-medium">Founding Designer</p>
                <p className="text-sm text-muted-foreground">
                  Sep 2018 - Aug 2023 (5 yrs)
                </p>
              </div>
              <p className="text-sm">
                Led design from initial launch through continuous iteration, and
                implemented designs as the frontend engineer.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            <HighlightsCarousel
              highlights={productHighlights}
              title="Product Highlights"
            />
            <HighlightsCarousel
              highlights={processHighlights}
              title="Process Highlights"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
