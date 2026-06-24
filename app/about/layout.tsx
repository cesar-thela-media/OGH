import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Ocean Glory Homes is a family-owned design-build custom home builder in Rockport and Corpus Christi, TX. Over a decade of coastal construction experience.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
