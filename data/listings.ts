export interface Listing {
  id: string;
  address: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
  stage: 'Permitting' | 'Foundation' | 'Framing' | 'Finishes' | 'Walkthrough' | 'Available' | 'Under Contract';
}

// REPLACE: update each `image` path with a real exterior photograph of the property
// Recommended: square crop ~300×300px, exterior/waterfront shot
export const listings: Listing[] = [
  {
    id: 'cape-velero',
    address: '1511 Cape Velero',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&h=300&q=80', // REPLACE with real photo
    beds: 4, baths: 3.5, sqft: 3126,
    price: '$1,875,000',
    stage: 'Framing',
  },
  {
    id: 'laguna-vista',
    address: '1802 Laguna Vista',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&h=300&q=80', // REPLACE with real photo
    beds: 4, baths: 4.5, sqft: 3840,
    price: '$2,295,000',
    stage: 'Permitting',
  },
  {
    id: 'harbor-key',
    address: '2324 Harbor Key',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=300&h=300&q=80', // REPLACE with real photo
    beds: 3, baths: 3.5, sqft: 2654,
    price: '$1,495,000',
    stage: 'Foundation',
  },
];
