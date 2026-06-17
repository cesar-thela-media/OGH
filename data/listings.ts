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

export const listings: Listing[] = [
  {
    id: 'cape-velero',
    address: '1511 Cape Velero',
    image: '/images/listing-1511-cape-velero.jpg',
    beds: 4, baths: 3.5, sqft: 3126,
    price: '$1,875,000',
    stage: 'Framing',
  },
  {
    id: 'laguna-vista',
    address: '1802 Laguna Vista',
    image: '/images/listing-1802-laguna-vista.jpg',
    beds: 4, baths: 4.5, sqft: 3840,
    price: '$2,295,000',
    stage: 'Permitting',
  },
  {
    id: 'harbor-key',
    address: '2324 Harbor Key',
    image: '/images/listing-2324-harbor-key.jpg',
    beds: 3, baths: 3.5, sqft: 2654,
    price: '$1,495,000',
    stage: 'Foundation',
  },
];
