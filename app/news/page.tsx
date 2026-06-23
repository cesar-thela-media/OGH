import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import Link from 'next/link';

const posts = [
  {
    date: 'June 2026',
    tag: 'New Listings',
    title: 'Three New Homes Now Available in Rockport',
    body: 'Ocean Glory Homes is proud to announce three new custom homes available in the Rockport area — including two in the Forest Hills community and one on Tradewinds. Each home features four bedrooms, coastal-grade materials, and open-concept living spaces designed for the Texas Gulf Coast lifestyle.',
    href: '/for-sale',
    cta: 'View Listings',
  },
  {
    date: 'May 2026',
    tag: 'Community',
    title: 'Now Building in Portland, Texas',
    body: 'We have expanded our service area to Portland, Texas, bringing our design-build approach to the Portland community. Our first Portland project at 10 Westpointe Drive is currently underway. If you own land in Portland or the surrounding area, we would love to talk.',
    href: '/contact',
    cta: 'Get in Touch',
  },
  {
    date: 'April 2026',
    tag: 'Recognition',
    title: 'Ocean Glory Maintains A+ BBB Rating for 10th Consecutive Year',
    body: 'For the tenth consecutive year, Ocean Glory Homes has maintained an A+ rating with the Better Business Bureau. This recognition reflects our commitment to transparency, quality craftsmanship, and standing behind every home we build — long after the keys are handed over.',
    href: '/about',
    cta: 'Learn About Us',
  },
  {
    date: 'March 2026',
    tag: 'Coastal Building',
    title: 'Why Coastal Home Materials Matter More Than You Think',
    body: 'Building on the Texas Gulf Coast presents unique challenges: salt air corrosion, hurricane-force winds, and flood zone regulations. In this post, we share the materials and techniques Ocean Glory uses on every build to ensure homes that last for decades — not just until the next storm.',
    href: '/about',
    cta: 'Our Process',
  },
  {
    date: 'February 2026',
    tag: 'Community',
    title: '2026 Coastal Bend Builders Association Conference Recap',
    body: 'Our team attended the annual Coastal Bend Builders Association conference in Corpus Christi, where we participated in panels on wind-resistant construction and Texas windstorm certification. Staying current on codes and best practices is a core part of how we protect every homeowner we work with.',
    href: '/contact',
    cta: 'Contact Us',
  },
  {
    date: 'January 2026',
    tag: 'Portfolio',
    title: '103 St Andrews — Completed and Closing',
    body: 'Our flagship project at 103 St Andrews is complete and heading to closing. This four-bedroom, four-bath custom home features a grand foyer, butler\'s pantry, chef\'s kitchen, and a stunning master suite with a custom bath. Photos are now live in our portfolio.',
    href: '/portfolio',
    cta: 'View Portfolio',
  },
];

export default function BuilderNewsPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '100vh' }}>

        {/* Header */}
        <section style={{ backgroundColor: COLORS.navy, padding: '52px 32px 60px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 10px' }}>
              Ocean Glory Homes
            </p>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: COLORS.white, margin: '0 0 12px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Builder News
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 14, color: 'rgba(255,255,255,0.50)', margin: 0 }}>
              Updates from Ocean Glory Homes &mdash; new projects, community news, and coastal building insights.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section style={{ maxWidth: 860, margin: '0 auto', padding: '56px 24px 80px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {posts.map((post, i) => (
              <article
                key={i}
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 18,
                  padding: '32px 36px',
                  boxShadow: '0 2px 16px rgba(13,43,82,0.06)',
                  border: '1px solid rgba(13,43,82,0.05)',
                }}
              >
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.10em' }}>
                    {post.tag}
                  </span>
                  <span style={{ color: COLORS.grayText, fontSize: 11 }}>&middot;</span>
                  <span style={{ fontFamily: FONTS.body, fontSize: 11, color: COLORS.grayText }}>{post.date}</span>
                </div>
                <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 14px', letterSpacing: '-0.01em' }}>
                  {post.title}
                </h2>
                <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, lineHeight: 1.75, margin: '0 0 20px' }}>
                  {post.body}
                </p>
                <Link
                  href={post.href}
                  style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 600, color: COLORS.navy, textDecoration: 'none' }}
                >
                  {post.cta} →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: COLORS.navy, padding: '64px 32px 72px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: COLORS.white, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Stay Connected
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.55)', margin: '0 0 28px' }}>
            Have questions about a project or want to learn more? We&apos;re one call away.
          </p>
          <a
            href={CONTACT.phoneHref}
            style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '14px 36px', borderRadius: 999, textDecoration: 'none' }}
          >
            {CONTACT.phone}
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
