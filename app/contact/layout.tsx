import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Ocean Glory Homes. Call (361) 765-8888 or send a message to discuss your custom home in Rockport, Corpus Christi, or Portland, TX.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
