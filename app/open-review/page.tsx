"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

export default function OpenReview() {
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
          <h1 className="text-3xl font-semibold mb-4">Open.Review</h1>

          <div className="mb-8">
            <div className="bg-muted/70 rounded-lg p-4 sm:p-8 flex items-center justify-center">
              <img
                src="/images/openreview-full.png"
                alt="Open.Review"
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
                Open.Review&apos;s mission was to advance the transparency, accessibility, and collaborative nature of scientific research through open peer review and community engagement. We offered a new system for communal peer review where comments, feedback, and reviews are grouped by a structured rubric based on study type. Open.Review drastically reduced the time needed for community members to evaluate, critique, and referee new research. The process was more inclusive, drawing in varied perspectives, and increased the amount, quality, and speed of feedback for the author.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Role
              </h3>
              <div className="mb-3">
                <p className="font-medium">Co-Founder, Product</p>
                <p className="text-sm text-muted-foreground">
                  Dec 2017 - Aug 2018 (9 mos)
                </p>
              </div>
              <p className="text-sm">
                Led design and development. I prepared and delivered comprehensive design assets, prototypes, and guidelines to developers to ensure consistency and quality in implementation and monitored the implementation process, making adjustments to improve usability based on engineering feedback and limitations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}