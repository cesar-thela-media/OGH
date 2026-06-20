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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3, sqft: 2800,
    price: '$1,250,000', stage: 'For Sale',
  },
  {
    id: '117-forest-hills',
    address: '117 Forest Hills',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3, sqft: 2750,
    price: '$1,225,000', stage: 'For Sale',
  },
  {
    id: '118-forest-hills',
    address: '118 Forest Hills',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3, sqft: 2900,
    price: '$1,300,000', stage: 'For Sale',
  },
  {
    id: '427-augusta',
    address: '427 Augusta',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18f6b0050?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 5, baths: 3.5, sqft: 3400,
    price: '$1,675,000', stage: 'For Sale',
  },
  {
    id: '10-westpointe',
    address: '10 Westpointe',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3.5, sqft: 3100,
    price: '$1,550,000', stage: 'For Sale',
  },
  {
    id: '15-tradewinds',
    address: '15 Tradewinds',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3.5, sqft: 3200,
    price: '$1,425,000', stage: 'Under Contract',
  },
  {
    id: '24-tradewinds',
    address: '24 Tradewinds',
    image: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 6, baths: 3.5, sqft: 4200,
    price: '$2,100,000', stage: 'Under Contract',
  },
];
