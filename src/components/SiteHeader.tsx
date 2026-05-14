import DesktopHeader from './desktop/SiteHeader'
import MobileHeader from './mobile/SiteHeader'

export default function SiteHeader() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </>
  )
}
