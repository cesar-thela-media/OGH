export interface Listing {
  id: string;
  address: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
  stage: 'For Sale' | 'Under Contract' | 'Sold' | 'Under Construction';
}

// Live listings from OceanGloryHomes.com — images via Unsplash placeholders
export const listings: Listing[] = [
  {
    id: '1511-cape-velero',
    address: '1511 Cape Velero',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3.5, sqft: 3126,
    price: '$1,875,000', stage: 'For Sale',
  },
  {
    id: '116-forest-hills',
    address: '116 Forest Hills',
    image: 'https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3, sqft: 2800,
    price: '$1,250,000', stage: 'For Sale',
  },
  {
    id: '117-forest-hills',
    address: '117 Forest Hills',
    image: 'https://images.unsplash.com/photo-1715944171009-67c19539c2b8?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3, sqft: 2750,
    price: '$1,225,000', stage: 'For Sale',
  },
  {
    id: '118-forest-hills',
    address: '118 Forest Hills',
    image: 'https://images.unsplash.com/photo-1778166166368-774d09ca24e2?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3, sqft: 2900,
    price: '$1,300,000', stage: 'For Sale',
  },
  {
    id: '427-augusta',
    address: '427 Augusta',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 5, baths: 3.5, sqft: 3400,
    price: '$1,675,000', stage: 'For Sale',
  },
  {
    id: '10-westpointe',
    address: '10 Westpointe',
    image: 'https://images.unsplash.com/photo-1599409637219-d04e9a2db432?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3.5, sqft: 3100,
    price: '$1,550,000', stage: 'For Sale',
  },
  {
    id: '15-tradewinds',
    address: '15 Tradewinds',
    image: 'https://images.unsplash.com/photo-1605352081428-500953badc02?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3.5, sqft: 3200,
    price: '$1,425,000', stage: 'Under Contract',
  },
  {
    id: '24-tradewinds',
    address: '24 Tradewinds',
    image: 'https://images.unsplash.com/photo-1715944171009-67c19539c2b8?auto=format&fit=crop&w=700&h=467&q=80',
    beds: 6, baths: 3.5, sqft: 4200,
    price: '$2,100,000', stage: 'Under Contract',
  },
];
