// All hardcoded content data for Ocean Glory Homes

export const site = {
  name: "Ocean Glory Homes",
  phone: "(361) 123-4567",
  email: "hello@oceangloryhomes.com",
  address: "Corpus Christi, TX",
  founded: 2015,
};

// ─── Available Homes ────────────────────────────
export const availableHomes = [
  {
    slug: "coastal-dune-residence",
    title: "Coastal Dune Residence",
    location: "North Padre Island",
    price: "$725,000",
    beds: 4,
    baths: 3,
    sqft: 2850,
    status: "Move-In Ready",
    statusType: "success" as const,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
    summary: "This stunning coastal dune residence sits on North Padre Island with Gulf views from every room. Open-concept living, premium finishes, and a screened-in porch make this the perfect island retreat.",
    features: ["Impact Windows & Doors", "Standing Seam Metal Roof", "Custom Kitchen with Quartz Countertops", "LVP Flooring Throughout", "Tankless Water Heater", "Pre-Wired for Solar"],
    community: "North Padre Island is a premier coastal community with easy beach access, local dining, and a relaxed island lifestyle.",
  },
  {
    slug: "canyon-creek-estate",
    title: "Canyon Creek Estate",
    location: "Corpus Christi",
    price: "$649,000",
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    status: "Under Construction",
    statusType: "warning" as const,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    summary: "A modern coastal home in the established Canyon Creek neighborhood. Open floor plan with a chef's kitchen, private study, and covered patio overlooking green space.",
    features: ["Engineered Wood Floors", "Smart Home System", "Gas Fireplace", "Custom Cabinetry", "Covered Patio with Outdoor Kitchen"],
    community: "Canyon Creek offers tree-lined streets, community pools, and proximity to top-rated schools and shopping.",
  },
  {
    slug: "laguna-vista-cottage",
    title: "Laguna Vista Cottage",
    location: "Port Aransas",
    price: "$545,000",
    beds: 3,
    baths: 2,
    sqft: 1850,
    status: "Just Listed",
    statusType: "active" as const,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
    summary: "Charming coastal cottage just minutes from the beach. Thoughtfully designed with coastal living in mind — elevated structure, wrap-around porch, and low-maintenance landscaping.",
    features: ["Elevated Foundation (Flood Zone X)", "Wrap-Around Covered Porch", "Ship Lap Accent Walls", "Bamboo Flooring", "Rainwater Collection System"],
    community: "Port Aransas is a charming beach town with a vibrant fishing community, great restaurants, and miles of pristine Gulf beaches.",
  },
];

// ─── Lots & Land ────────────────────────────
export const lotsLand = [
  {
    slug: "padre-island-lot-42",
    title: "Padre Island Lot 42",
    location: "North Padre Island",
    acreage: "0.35 Acres",
    status: "Available",
    waterfront: false,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    ],
    description: "A beautiful corner lot in a quiet North Padre Island neighborhood. Close to beach access, walking trails, and community amenities. Ideal for a single-family coastal home.",
    whyThisMatters: "Corner lots offer additional yard space, better natural light, and more flexible house placement options.",
    buildNotes: "Lot is zoned for single-family residential. No HOA restrictions on architectural style. Elevation certificate available.",
    community: "North Padre Island",
  },
  {
    slug: "salt-creek-estates-8",
    title: "Salt Creek Estates Lot 8",
    location: "Portland, TX",
    acreage: "0.52 Acres",
    status: "Featured",
    waterfront: true,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    ],
    description: "Premium waterfront lot overlooking Salt Creek with direct water access. Build your dream coastal home on this rare oversized lot with mature oak trees.",
    whyThisMatters: "Waterfront lots offer premium views and direct water access, significantly increasing property value and lifestyle quality.",
    buildNotes: "Elevation required. Bulkhead in excellent condition. Septic and utility connections available at lot line.",
    community: "Salt Creek Estates",
  },
  {
    slug: "mustang-island-bluff",
    title: "Mustang Island Bluff Lot",
    location: "Mustang Island",
    acreage: "0.28 Acres",
    status: "Available",
    waterfront: true,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    ],
    description: "Gulf-view bluff lot on Mustang Island with panoramic ocean views. One of the last remaining lots on the bluff. Steps from the beach.",
    whyThisMatters: "Bluff lots are rare and prized for their unobstructed views, privacy, and premium positioning on the island.",
    buildNotes: "Architectural review required. Elevated design strongly recommended for maximum view enjoyment. Soil study available.",
    community: "Mustang Island",
  },
];

// ─── Journal Articles ────────────────────────────
export const journalArticles = [
  {
    slug: "coastal-home-design-tips",
    title: "5 Essential Design Tips for Your Coastal Home",
    excerpt: "From choosing the right materials to maximizing natural light, discover the key principles of coastal home design that stand the test of time.",
    category: "Design",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    content: `Building a coastal home comes with unique opportunities and challenges. Here are five essential design tips to ensure your home is beautiful, functional, and built to last on the Texas Coast.

1. Choose Durable Materials
Coastal environments demand materials that can withstand salt, wind, and humidity. Consider standing seam metal roofs, fiber cement siding, and impact-resistant windows. These materials last longer and require less maintenance in coastal conditions.

2. Maximize Natural Light
Orientation is everything. Position your home to capture southern light for warmth and northern light for consistent, glare-free illumination throughout the day. Large windows and sliding glass doors blur the line between indoors and out.

3. Embrace Indoor-Outdoor Living
Covered porches, screened-in patios, and outdoor kitchens extend your living space. Design covered outdoor areas that can be used year-round, protected from both sun and coastal breezes.

4. Plan for Storm Resilience
Elevated foundations, properly rated windows and doors, and continuous load paths aren't just code requirements — they're peace of mind. Work with a builder who understands coastal construction standards inside and out.

5. Keep It Simple
Let the coastal setting be the star. Clean lines, neutral palettes with natural textures, and thoughtful restraint create a timeless home that feels connected to its surroundings.`,
  },
  {
    slug: "port-aransas-building-guide",
    title: "The Complete Guide to Building in Port Aransas",
    excerpt: "Everything you need to know about building a custom home in Port Aransas, from permitting to finding the perfect lot.",
    category: "Building Guide",
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    content: `Building in Port Aransas is a rewarding experience, but it comes with specific requirements and considerations. This guide walks you through everything you need to know.

Understanding Local Regulations
Port Aransas has specific building codes designed for coastal resilience. Flood zone requirements, wind load ratings, and elevation standards all factor into your home's design. Working with a local builder who knows these requirements inside out is essential.

Finding the Right Lot
Lot selection is the most important decision you'll make. Consider proximity to the beach, elevation, utility access, and neighborhood character. We always recommend visiting potential lots at different times of day to understand sun exposure and traffic patterns.

The Permitting Process
Expect 4-8 weeks for permit approval in Port Aransas. Your builder should handle all permit submissions and coordinate with city inspectors. Key permits include building, electrical, plumbing, mechanical, and coastal zone permits.

Building Timeline
A typical custom home in Port Aransas takes 10-14 months from groundbreaking to move-in. This timeline accounts for foundation work, framing, MEP rough-in, insulation, drywall, finishes, and final inspections.

Choosing Your Builder
Not all builders are created equal when it comes to coastal construction. Look for experience with coastal building codes, strong trade partnerships, and a portfolio of completed coastal homes in the area.`,
  },
  {
    slug: "custom-vs-production-homes",
    title: "Custom vs. Production Homes: Making the Right Choice",
    excerpt: "Understand the key differences between custom and production home building to make the best decision for your coastal dream home.",
    category: "Advice",
    date: "January 20, 2025",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    content: `When building a home on the Texas Coast, one of the first decisions you'll face is whether to go custom or choose a production builder. Both have their merits. Here's what you need to know.

Custom Home Pros
- Complete design flexibility: every room, finish, and detail is your choice
- Lot can be anywhere you choose, not limited to a developer's neighborhood
- Higher quality materials and craftsmanship
- Better long-term value and resale potential
- Home is designed for your lifestyle, not a generic plan

Production Home Pros
- Lower upfront cost per square foot
- Faster construction timeline
- Less decision fatigue (fewer choices to make)
- Established floor plans with proven layouts
- Often includes community amenities (pools, parks)

For coastal living specifically, custom homes offer significant advantages. You can design for the specific lot, incorporate coastal resilience features, and create a home that truly captures the coastal lifestyle.

The bottom line: if you have the budget and timeline for a custom home, it's almost always the better choice — especially for a coastal property where location and orientation matter so much.`,
  },
  {
    slug: "texas-coast-lot-selection",
    title: "How to Choose the Perfect Lot on the Texas Coast",
    excerpt: "Location, elevation, orientation — learn what to look for when selecting a lot for your custom coastal home.",
    category: "Land",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    content: `Choosing the right lot is the foundation (literally) of your custom home. On the Texas Coast, certain factors are especially important.

Elevation Matters
Flood zone designation affects everything from your insurance costs to your foundation design. Higher elevation lots are always preferable. Ask for an elevation certificate before making an offer.

Orientation
Consider how the sun moves across the lot throughout the day. Homes oriented to capture southern light are more energy-efficient. Also consider prevailing winds for natural ventilation.

Utilities and Access
Confirm that water, sewer, electricity, and internet are available at the lot line. Some remote coastal lots may require wells or septic systems, which add significant cost.

Neighborhood Character
Visit at different times of day and different days of the week. Is the neighborhood quiet or active? Are there rental properties nearby? Does the neighborhood association have restrictions that matter to you?

Proximity to Amenities
How far is the nearest grocery store? Hospital? School? Restaurant? These practical considerations matter for daily life, even in a vacation home.`,
  },
];

// ─── Portfolio Projects ────────────────────────────
export const portfolioProjects = [
  {
    slug: "coastal-modern-retreat",
    title: "Coastal Modern Retreat",
    location: "North Padre Island",
    style: "Modern Coastal",
    waterfront: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    specs: { beds: 4, baths: 3.5, sqft: 3200, year: 2024 },
    story: "This North Padre Island retreat was designed for a family seeking a modern coastal escape. Every decision was guided by the Gulf views and the desire for indoor-outdoor living. The home features a dramatic great room with 12-foot ceilings, floor-to-ceiling impact glass windows, and a seamless connection to the screened-in pool deck.",
  },
  {
    slug: "gulf-shores-estate",
    title: "Gulf Shores Estate",
    location: "Port Aransas",
    style: "Traditional Coastal",
    waterfront: true,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    specs: { beds: 5, baths: 4, sqft: 4100, year: 2023 },
    story: "A generational estate on the Port Aransas shoreline, this home blends traditional coastal architecture with modern amenities. The wrap-around porch, standing seam metal roof, and native landscaping create a timeless coastal presence. Inside, wide plank white oak floors, shiplap walls, and a chef's kitchen make this home as comfortable as it is beautiful.",
  },
  {
    slug: "laguna-shores-bungalow",
    title: "Laguna Shores Bungalow",
    location: "Corpus Christi",
    style: "Craftsman Coastal",
    waterfront: false,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    specs: { beds: 3, baths: 2, sqft: 2100, year: 2024 },
    story: "A charming Craftsman-inspired bungalow in Corpus Christi's Laguna Shores neighborhood. This home was designed for a young family looking for character, functionality, and coastal charm. The covered front porch, gabled rooflines, and custom millwork give it a timeless appeal that fits perfectly in this established coastal community.",
  },
  {
    slug: "oak-haven-residence",
    title: "Oak Haven Residence",
    location: "Rockport",
    style: "Modern Coastal",
    waterfront: false,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    specs: { beds: 4, baths: 3, sqft: 2900, year: 2025 },
    story: "Nestled among mature live oaks in Rockport, this modern coastal home balances clean lines with natural warmth. The open floor plan is anchored by a central courtyard that brings natural light deep into the home. Sustainable materials and energy-efficient systems make this home as responsible as it is beautiful.",
  },
];

// ─── Reviews ────────────────────────────
export const allReviews = [
  {
    name: "Sarah & Tom Mitchell",
    location: "North Padre Island",
    rating: 5,
    text: "From our first conversation to the day we got our keys, Ocean Glory Homes made the entire process feel seamless. They listened to what we wanted, offered thoughtful suggestions based on coastal living experience, and delivered a home that exceeded every expectation. The quality of craftsmanship is outstanding — every detail was considered.",
  },
  {
    name: "David Chen",
    location: "Port Aransas",
    rating: 5,
    text: "Building a coastal home from out of state seemed daunting, but Ocean Glory handled everything. Regular video updates, clear communication, and a beautiful result.",
  },
  {
    name: "Maria & Joe Rodriguez",
    location: "Corpus Christi",
    rating: 5,
    text: "We looked at production builders first, but custom was the right choice. Ocean Glory helped us find the perfect lot and designed a home that fits our family perfectly.",
  },
  {
    name: "Linda Parker",
    location: "Rockport",
    rating: 5,
    text: "The attention to wind mitigation and coastal construction standards gave us real peace of mind. This home will last. Couldn't recommend them more highly.",
  },
  {
    name: "Robert & Karen Mitchell",
    location: "North Padre Island",
    rating: 5,
    text: "Ocean Glory exceeded our expectations at every turn. Our project manager kept us informed weekly with photos and progress updates. The final product is stunning.",
  },
  {
    name: "Jessica Tran",
    location: "Portland",
    rating: 5,
    text: "As a first-time home builder, I was nervous. The team walked me through every step, explained all my options, and helped me make decisions I feel great about.",
  },
];
