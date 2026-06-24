import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    "Browse Ocean Glory Homes' custom home portfolio — exteriors, kitchens, bathrooms, living spaces, and more. Real photos from real builds in coastal Texas.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
