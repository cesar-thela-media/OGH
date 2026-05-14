import DesktopHero from './desktop/HeroSection'
import MobileHero from './mobile/HeroSection'

export default function HeroSection() {
  return (
    <>
      {/* Desktop: shown on lg+ screens */}
      <div className="hidden lg:block">
        <DesktopHero />
      </div>
      {/* Mobile/tablet: shown below lg breakpoint */}
      <div className="lg:hidden">
        <MobileHero />
      </div>
    </>
  )
}
