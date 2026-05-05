import Link from "next/link";

interface ReviewCard {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const featured: ReviewCard = {
  name: "Sarah & Tom Mitchell",
  location: "North Padre Island",
  text: "From our first conversation to the day we got our keys, Ocean Glory Homes made the entire process feel seamless. They listened to what we wanted, offered thoughtful suggestions based on coastal living experience, and delivered a home that exceeded every expectation. The quality of craftsmanship is outstanding — every detail was considered. We've been in our home for a year and couldn't be happier.",
  rating: 5,
};

const reviews: ReviewCard[] = [
  {
    name: "David Chen",
    location: "Port Aransas",
    text: "Building a coastal home from out of state seemed daunting, but Ocean Glory handled everything. Regular video updates, clear communication, and a beautiful result.",
    rating: 5,
  },
  {
    name: "Maria & Joe Rodriguez",
    location: "Corpus Christi",
    text: "We looked at production builders first, but custom was the right choice. Ocean Glory helped us find the perfect lot and designed a home that fits our family perfectly.",
    rating: 5,
  },
  {
    name: "Linda Parker",
    location: "Rockport",
    text: "The attention to wind mitigation and coastal construction standards gave us real peace of mind. This home will last. Couldn't recommend them more highly.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < rating ? "#B88945" : "#D8D7D2"}
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewSpotlight() {
  return (
    <div className="container-content">
      <div className="bg-white rounded-[18px] p-8 md:p-12 mb-8">
        <StarRating rating={featured.rating} />
        <p className="text-h3 text-ocean-ink mt-4 mb-6 leading-relaxed italic">
          &ldquo;{featured.text}&rdquo;
        </p>
        <div>
          <p className="text-body font-semibold text-ocean-ink">{featured.name}</p>
          <p className="text-body-sm text-driftwood">{featured.location}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-white rounded-[18px] p-6 card-hover"
          >
            <StarRating rating={review.rating} />
            <p className="text-body-sm text-slate mt-4 mb-4 leading-relaxed">
              &ldquo;{review.text}&rdquo;
            </p>
            <div>
              <p className="text-body-sm font-semibold text-ocean-ink">{review.name}</p>
              <p className="text-[13px] text-driftwood">{review.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewSpotlight;
