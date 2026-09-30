import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
// import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"


export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        {/* <Stats /> */}
        <Features />
        <HowItWorks />
        <About />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
