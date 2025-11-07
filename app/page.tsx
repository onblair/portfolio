"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Check, ExternalLink, Copy } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { WorkSection } from "@/components/work-section"
import { RecommendationsSection } from "@/components/recommendations-section"
import { useState } from "react"
import Image from "next/image"

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("onblair@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }
  return (
    <div className="relative">
      <main className="max-w-[1024px] mx-auto p-2 sm:p-6 min-w-[340px]">
        <div className="flex w-full justify-between">
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <Image
              src="/images/owen-blair-profile.png"
              alt="Owen Blair"
              width={40}
              height={40}
              className="w-10 h-10 sm:w-13 sm:h-13 rounded-full object-cover"
            />

            <div className="w-full">
              <h1 className="text-xl font-semibold">Owen Blair</h1>
              <p className="">Making a global impact through design.</p>

              <div className="flex items-center mt-3 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <p className="text-sm">Park City, Utah</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                  <p className="text-sm">Busy, but lets chat!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <ModeToggle />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:ml-[64px]">
          <Button
            size="sm"
            onClick={copyEmail}
            className="group w-full sm:w-auto sm:min-w-[130px]"
          >
            {emailCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {emailCopied ? "Copied!" : "Copy Email"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            asChild
            className="w-full sm:w-auto"
          >
            <a
              href="https://www.linkedin.com/in/onblair"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>

        <div className="mt-12">
          <WorkSection />
        </div>

        <div className="mt-12">
          <RecommendationsSection />
        </div>
      </main>
    </div>
  )
}
