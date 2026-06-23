export interface Listing {
  id: string;
  address: string;
  zip: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  landSqft?: number;
  price: string;
  stage: 'For Sale' | 'Under Contract' | 'Sold' | 'Under Construction';
  description?: string;
}

export const listings: Listing[] = [
  {
    id: '1511-cape-velero',
    address: '1511 Cape Velero',
    zip: '78382',
    location: 'Rockport, TX',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3.5, sqft: 3126, landSqft: 9375,
    price: '$1,875,000', stage: 'For Sale',
    description: 'Stunning custom coastal home featuring an open-concept great room with soaring ceilings, gourmet kitchen with waterfall island, and a private master suite with spa bath. Built to withstand the Texas coast with impact-rated windows, elevated slab, and wind-resistant framing.',
  },
  {
    id: '116-forest-hills',
    address: '116 Forest Hills Dr',
    zip: '78382',
    location: 'Rockport, TX',
    image: 'https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3, sqft: 2800, landSqft: 8200,
    price: '$1,250,000', stage: 'For Sale',
    description: 'Beautiful four-bedroom home nestled in the sought-after Forest Hills community. Generous living areas, chef\'s kitchen, and oversized outdoor entertaining space perfect for coastal living.',
  },
  {
    id: '117-forest-hills',
    address: '117 Forest Hills Dr',
    zip: '78382',
    location: 'Rockport, TX',
    image: 'https://images.unsplash.com/photo-1715944171009-67c19539c2b8?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3, sqft: 2750, landSqft: 8000,
    price: '$1,225,000', stage: 'For Sale',
    description: 'Light-filled custom home with an elegant open floor plan. The kitchen flows seamlessly to the living area and covered patio — ideal for entertaining. Premium finishes throughout.',
  },
  {
    id: '118-forest-hills',
    address: '118 Forest Hills Dr',
    zip: '78382',
    location: 'Rockport, TX',
    image: 'https://images.unsplash.com/photo-1778166166368-774d09ca24e2?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3, sqft: 2900, landSqft: 8500,
    price: '$1,300,000', stage: 'For Sale',
    description: 'Modern coastal architecture with a dramatic entry, open living spaces, and a stunning master suite. Located in one of Rockport\'s most desirable neighborhoods with easy access to the bay.',
  },
  {
    id: '427-augusta',
    address: '427 Augusta',
    zip: '78382',
    location: 'Rockport, TX',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 5, baths: 3.5, sqft: 3400, landSqft: 11000,
    price: '$1,675,000', stage: 'For Sale',
    description: 'Expansive five-bedroom home on a generous lot with a three-car garage. Thoughtfully designed with a dedicated home office, media room, and resort-style outdoor living area.',
  },
  {
    id: '10-westpointe',
    address: '10 Westpointe Dr',
    zip: '78374',
    location: 'Portland, TX',
    image: 'https://images.unsplash.com/photo-1599409637219-d04e9a2db432?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3.5, sqft: 3100, landSqft: 9800,
    price: '$1,550,000', stage: 'For Sale',
    description: 'Elegant custom home in Portland\'s premier Westpointe subdivision. Grand entry, formal and informal living spaces, gourmet kitchen, and a covered outdoor kitchen overlooking a beautifully landscaped yard.',
  },
  {
    id: '15-tradewinds',
    address: '15 Tradewinds',
    zip: '78382',
    location: 'Rockport, TX',
    image: 'https://images.unsplash.com/photo-1605352081428-500953badc02?auto=format&fit=crop&w=600&h=400&q=80',
    beds: 4, baths: 3.5, sqft: 3200, landSqft: 9200,
    price: '$1,425,000', stage: 'Under Contract',
    description: 'Under contract — this beautiful Tradewinds home features an exceptional open floor plan with high ceilings, gourmet kitchen, and a private master retreat. Designed for the discerning coastal homeowner.',
  },
  {
    id: '24-tradewinds',
    address: '24 Tradewinds',
    zip: '78382',
    location: 'Rockport, TX',
    image: 'https://images.unsplash.com/photo-1715944171009-67c19539c2b8?auto=format&fit=crop&w=700&h=467&q=80',
    beds: 6, baths: 3.5, sqft: 4200, landSqft: 12500,
    price: '$2,100,000', stage: 'Under Contract',
    description: 'Under contract — our largest Tradewinds offering. Six bedrooms, three and a half baths, four-car garage, and a spectacular outdoor living pavilion. Built for large families or those who love to entertain.',
  },
];
